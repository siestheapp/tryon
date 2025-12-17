#!/usr/bin/env python3
"""
Ingest a normalized Uniqlo PDP payload into core.products/core.product_variants/etc.

Typical flow:
    # 1. Save HTML
    python scripts/uniqlo_pdp_dump.py --html-path data/tmp/uniqlo/pdp/<date>/<file>.html

    # 2. Convert to normalized JSON (done automatically by the dumper)
    # 3. Ingest into Supabase core.*
    python scripts/uniqlo_full_ingest.py \
        --json-path data/tmp/uniqlo/pdp/<date>/<file>.json
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional, Sequence

import psycopg2
from psycopg2.extras import Json

PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from db_config import DB_CONFIG  # noqa: E402

DEFAULT_BRAND_NAME = "Uniqlo"
DEFAULT_BRAND_SLUG = "uniqlo"
DEFAULT_REGION = "US"

CATEGORY_MAP = {
    "t shirts": "shirts",
    "t-shirts": "shirts",
    "tops": "shirts",
    "supima cotton": "shirts",
    "shirts": "shirts",
    "outerwear": "outerwear",
    "coats": "outerwear",
    "jackets": "outerwear",
    "knitwear": "shirts",
    "trousers": "trousers",
    "pants": "trousers",
    "jeans": "jeans",
}


def parse_args(argv: Optional[Sequence[str]] = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Ingest a normalized Uniqlo PDP payload.")
    parser.add_argument(
        "--json-path",
        type=Path,
        required=True,
        help="Path to the normalized JSON produced by uniqlo_pdp_dump.py.",
    )
    parser.add_argument(
        "--brand-name",
        default=DEFAULT_BRAND_NAME,
        help="Override brand display name.",
    )
    parser.add_argument(
        "--brand-slug",
        default=DEFAULT_BRAND_SLUG,
        help="Override brand slug.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print what would happen without touching the database.",
    )
    return parser.parse_args(argv)


def ensure_db_config() -> None:
    missing = [k for k, v in DB_CONFIG.items() if not v]
    if missing:
        raise SystemExit(
            "Missing DB config values: "
            + ", ".join(missing)
            + ". Set DB_NAME/DB_USER/DB_PASSWORD/DB_HOST/DB_PORT."
        )


def connect():
    ensure_db_config()
    return psycopg2.connect(
        dbname=DB_CONFIG["database"],
        user=DB_CONFIG["user"],
        password=DB_CONFIG["password"],
        host=DB_CONFIG["host"],
        port=DB_CONFIG["port"],
    )


def normalize_token(value: Optional[str]) -> Optional[str]:
    if not value:
        return None
    token = re.sub(r"[^a-z0-9]+", " ", value.lower()).strip()
    return token or None


def infer_category(payload: Dict[str, Any]) -> str:
    breadcrumbs = payload.get("breadcrumbs") or {}
    candidates = [
        (breadcrumbs.get("category") or {}).get("name"),
        (breadcrumbs.get("class") or {}).get("name"),
        (breadcrumbs.get("subcategory") or {}).get("name"),
    ]
    for candidate in candidates:
        token = normalize_token(candidate)
        if token and token in CATEGORY_MAP:
            return CATEGORY_MAP[token]
    return "shirts"


def ensure_brand(cur, slug: str, name: str) -> int:
    cur.execute("SELECT id FROM core.brands WHERE slug = %s", (slug,))
    row = cur.fetchone()
    if row:
        return row[0]
    cur.execute(
        """
        INSERT INTO core.brands (name, slug, aliases, metadata)
        VALUES (%s, %s, %s, %s)
        RETURNING id
        """,
        (name, slug, [], Json({})),
    )
    return cur.fetchone()[0]


def upsert_product(cur, brand_id: int, payload: Dict[str, Any]) -> int:
    product_code = payload["product_id"]
    title = payload["name"]
    category = infer_category(payload)
    gender = normalize_gender(payload)
    cur.execute(
        """
        INSERT INTO core.products (brand_id, product_code, title, category, raw, base_name, gender)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        ON CONFLICT (brand_id, product_code)
        DO UPDATE SET
            title = EXCLUDED.title,
            category = EXCLUDED.category,
            raw = EXCLUDED.raw,
            base_name = EXCLUDED.base_name,
            gender = EXCLUDED.gender,
            updated_at = NOW()
        RETURNING id
        """,
        (
            brand_id,
            product_code,
            title,
            category,
            Json(payload),
            title,
            gender,
        ),
    )
    return cur.fetchone()[0]


def normalize_gender(payload: Dict[str, Any]) -> Optional[str]:
    def _map(value: Optional[str]) -> Optional[str]:
        if not value:
            return None
        token = value.strip().lower()
        mapping = {
            "men": "male",
            "male": "male",
            "women": "female",
            "female": "female",
            "unisex": "unisex",
        }
        return mapping.get(token, token or None)

    direct = _map(payload.get("gender"))
    if direct:
        return direct

    breadcrumbs = payload.get("breadcrumbs") or {}
    gender_node = breadcrumbs.get("gender") or {}
    return _map(gender_node.get("name"))


def determine_variant_context(payload: Dict[str, Any]) -> Dict[str, Any]:
    representative = payload.get("representative") or {}
    color_meta = representative.get("color")
    if not color_meta and payload.get("colors"):
        color_meta = payload["colors"][0]

    product_key = payload.get("product_key") or payload["product_id"]
    if "-" in product_key:
        base, suffix = product_key.rsplit("-", 1)
        variant_url = f"https://www.uniqlo.com/us/en/products/{base}/{suffix}"
    else:
        variant_url = f"https://www.uniqlo.com/us/en/products/{product_key}"

    variant_sku = representative.get("communicationCode") or product_key

    return {
        "color_meta": color_meta or {"name": "Unknown"},
        "variant_url": variant_url,
        "variant_sku": variant_sku,
    }


def upsert_variant(cur, product_id: int, payload: Dict[str, Any]) -> int:
    meta = determine_variant_context(payload)
    color_meta = meta["color_meta"]
    color_name = color_meta.get("name")
    variant_sku = meta["variant_sku"]
    variant_url = meta["variant_url"]

    cur.execute(
        "SELECT id FROM core.product_variants WHERE variant_sku = %s",
        (variant_sku,),
    )
    row = cur.fetchone()
    if row:
        variant_id = row[0]
        cur.execute(
            """
            UPDATE core.product_variants
               SET color_name = %s,
                   variant_url = %s,
                   attrs = %s,
                   product_id = %s
             WHERE id = %s
            """,
            (color_name, variant_url, Json({"source": "uniqlo", "color": color_meta}), product_id, variant_id),
        )
        return variant_id

    cur.execute(
        """
        INSERT INTO core.product_variants (
            product_id,
            color_name,
            fit_name,
            variant_sku,
            variant_url,
            attrs
        ) VALUES (%s, %s, %s, %s, %s, %s)
        RETURNING id
        """,
        (
            product_id,
            color_name,
            None,
            variant_sku,
            variant_url,
            Json({"source": "uniqlo", "color": color_meta}),
        ),
    )
    return cur.fetchone()[0]


def replace_variant_sizes(cur, variant_id: int, sizes: List[Dict[str, Any]]) -> None:
    cur.execute("DELETE FROM core.variant_sizes WHERE variant_id = %s", (variant_id,))
    values = [
        (variant_id, size.get("name") or size.get("display_code") or size.get("code"), (idx + 1) * 10)
        for idx, size in enumerate(sizes or [])
        if size
    ]
    if not values:
        return
    cur.executemany(
        "INSERT INTO core.variant_sizes (variant_id, size_label, sort_key) VALUES (%s, %s, %s)",
        values,
    )


def upsert_product_url(cur, product_id: int, variant_id: int, payload: Dict[str, Any]) -> None:
    meta = determine_variant_context(payload)
    variant_url = meta["variant_url"]
    cur.execute(
        """
        SELECT id FROM core.product_urls
         WHERE product_id = %s AND url = %s
        """,
        (product_id, variant_url),
    )
    existing = cur.fetchone()
    if existing:
        cur.execute(
            """
            UPDATE core.product_urls
               SET variant_id = %s,
                   region = %s,
                   is_current = TRUE
             WHERE id = %s
            """,
            (variant_id, DEFAULT_REGION, existing[0]),
        )
    else:
        cur.execute(
            """
            INSERT INTO core.product_urls (product_id, variant_id, region, url, is_current)
            VALUES (%s, %s, %s, %s, TRUE)
            """,
            (
                product_id,
                variant_id,
                DEFAULT_REGION,
                variant_url,
            ),
        )


def summarize(payload: Dict[str, Any], category: str, variant_url: str) -> str:
    return "\n".join(
        [
            f"Product: {payload.get('name')} ({payload.get('product_id')})",
            f"Category: {category} | Gender: {payload.get('gender')}",
            f"Colors: {len(payload.get('colors') or [])} | Sizes: {len(payload.get('sizes') or [])}",
            f"Variant URL: {variant_url}",
        ]
    )


def main(argv: Optional[Sequence[str]] = None) -> None:
    args = parse_args(argv)
    payload = json.loads(args.json_path.read_text(encoding="utf-8"))
    category = infer_category(payload)
    variant_meta = determine_variant_context(payload)

    if args.dry_run:
        print("DRY RUN – no database changes will be applied.\n")
        print(summarize(payload, category, variant_meta["variant_url"]))
        return

    with connect() as conn:
        with conn.cursor() as cur:
            brand_id = ensure_brand(cur, args.brand_slug, args.brand_name)
            product_id = upsert_product(cur, brand_id, payload)
            variant_id = upsert_variant(cur, product_id, payload)
            replace_variant_sizes(cur, variant_id, payload.get("sizes") or [])
            upsert_product_url(cur, product_id, variant_id, payload)
        conn.commit()

    print("✅ Ingested Uniqlo product successfully.\n")
    print(summarize(payload, category, variant_meta["variant_url"]))


if __name__ == "__main__":
    main()

