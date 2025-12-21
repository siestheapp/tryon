#!/usr/bin/env python3
"""
Club Monaco PDP ingester using Shopify's product JSON API.

This script:
  1. Fetches product data from /products/[handle].json
  2. Extracts variants (colors, sizes), images, and product details
  3. Normalizes and upserts into fs-core database
  4. Tracks ingest runs in ops.ingest_runs
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Optional, Sequence, Tuple
from urllib.parse import urlsplit

import psycopg2
from psycopg2.extras import Json
import requests

PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from db_config import DB_CONFIG  # noqa: E402
import ingest_checker  # noqa: E402

DEFAULT_BRAND_NAME = "Club Monaco"
DEFAULT_BRAND_SLUG = "clubmonaco"
BASE_HOST = "https://www.clubmonaco.com"

DEFAULT_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/122.0.0.0 Safari/537.36"
    ),
    "Accept": "application/json",
    "Accept-Language": "en-US,en;q=0.9",
}

SIZE_ORDER = {
    "XXXS": 0, "XXS": 5, "XS": 10, "S": 20, "M": 30,
    "L": 40, "XL": 50, "XXL": 60, "XXXL": 70, "XXXXL": 80,
}


@dataclass
class VariantRecord:
    sku: str
    color_name: str
    size_label: str
    variant_url: str
    price: Optional[float]
    compare_at_price: Optional[float]
    available: bool
    attrs: Dict[str, object]


@dataclass
class ProductData:
    handle: str
    title: str
    base_name: str
    description: str
    product_type: str
    vendor: str
    tags: List[str]
    images: List[str]
    variants: List[VariantRecord]
    raw: dict


def ensure_db_config() -> None:
    missing = [k for k, v in DB_CONFIG.items() if not v]
    if missing:
        raise SystemExit(
            f"Missing database configuration for: {', '.join(missing)}. "
            "Set DB_NAME/DB_USER/DB_PASSWORD/DB_HOST/DB_PORT in .env."
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


def slugify(value: str) -> str:
    cleaned = value.strip().lower()
    cleaned = re.sub(r"[^a-z0-9]+", "-", cleaned)
    return cleaned.strip("-") or "ungrouped"


def extract_brand_product_id(handle: str) -> Optional[str]:
    """Extract the 9-digit brand product ID from a Club Monaco handle.

    Club Monaco handles follow the pattern:
        {slug}-{9-digit-id}-{3-digit-color-code}
    Example:
        johnny-collar-polo-795806094-138 → 795806094

    Returns None if no 9-digit ID can be extracted.
    """
    # Match 9-digit number followed by optional 3-digit color suffix
    match = re.search(r'-(\d{9})(?:-\d{3})?$', handle)
    if match:
        return match.group(1)
    # Also try just finding the 9-digit number anywhere
    match = re.search(r'(\d{9})', handle)
    return match.group(1) if match else None


def size_sort_key(label: str, idx: int) -> int:
    normalized = label.strip().upper().replace(" ", "")
    return SIZE_ORDER.get(normalized, 200 + idx * 5)


def extract_handle_from_url(url: str) -> str:
    """Extract product handle from Club Monaco URL."""
    parsed = urlsplit(url)
    path_parts = [p for p in parsed.path.split("/") if p]

    if "products" in path_parts:
        idx = path_parts.index("products")
        if len(path_parts) > idx + 1:
            return path_parts[idx + 1]

    raise ValueError(f"Could not extract product handle from URL: {url}")


def fetch_product_json(handle: str, session: requests.Session) -> dict:
    """Fetch product data from Shopify JSON endpoint."""
    url = f"{BASE_HOST}/products/{handle}.json"
    resp = session.get(url, timeout=30)
    resp.raise_for_status()
    data = resp.json()
    return data.get("product", {})


def extract_color_from_variant(variant: dict, options: List[dict], handle: str = "") -> str:
    """Extract color name from variant options or handle."""
    color_option_idx = None
    for i, opt in enumerate(options):
        if opt.get("name", "").lower() in ("color", "colour"):
            color_option_idx = i
            break

    if color_option_idx is not None:
        option_key = f"option{color_option_idx + 1}"
        return variant.get(option_key, "Default")

    # No color option - Club Monaco encodes color in the handle
    # e.g., "johnny-collar-polo-shirt-795806094-138" - extract from product title instead
    # Return "Default" and we'll use the handle-based color later
    return "Default"


def extract_size_from_variant(variant: dict, options: List[dict]) -> str:
    """Extract size from variant options."""
    size_option_idx = None
    for i, opt in enumerate(options):
        if opt.get("name", "").lower() == "size":
            size_option_idx = i
            break

    if size_option_idx is not None:
        option_key = f"option{size_option_idx + 1}"
        return variant.get(option_key, "One Size")

    # If no size option, check option2 or default
    return variant.get("option2", "One Size")


def build_base_name(title: str) -> str:
    """Strip color suffix from title to get base product name."""
    # Club Monaco titles often end with color, e.g., "Johnny Collar Polo - Navy"
    if " - " in title:
        return title.rsplit(" - ", 1)[0]
    return title


def extract_color_from_tags(tags: List[str]) -> Optional[str]:
    """Extract color name from product tags.

    Club Monaco tags often include color names like 'Navy', 'White', 'Black', etc.
    They may also include compound names like 'Med Pewter', 'Lt Blue'.
    """
    # Common color keywords to look for in tags
    color_keywords = {
        'black', 'white', 'navy', 'blue', 'red', 'green', 'grey', 'gray',
        'brown', 'tan', 'beige', 'cream', 'ivory', 'pink', 'purple', 'orange',
        'yellow', 'khaki', 'olive', 'burgundy', 'charcoal', 'pewter', 'oatmeal',
        'stone', 'sand', 'camel', 'cognac', 'indigo', 'teal', 'coral', 'multi',
    }

    for tag in tags:
        tag_lower = tag.lower().strip()
        # Check if tag matches or contains a color keyword
        for color in color_keywords:
            if color in tag_lower:
                # Return the original tag (preserves casing like "Med Pewter")
                return tag.strip()

    return None


def parse_product_data(raw: dict) -> ProductData:
    """Parse Shopify product JSON into our data structure."""
    handle = raw.get("handle", "")
    title = raw.get("title", "Untitled")
    base_name = build_base_name(title)
    description = raw.get("body_html", "") or ""
    product_type = raw.get("product_type", "")
    vendor = raw.get("vendor", "Club Monaco")

    # Tags can be a comma-separated string or a list
    raw_tags = raw.get("tags", [])
    if isinstance(raw_tags, str):
        tags = [t.strip() for t in raw_tags.split(",") if t.strip()]
    else:
        tags = raw_tags

    # Extract images
    images = [img.get("src") for img in raw.get("images", []) if img.get("src")]

    # Extract variants
    options = raw.get("options", [])
    variants = []

    # Try to extract color from tags if no color option exists
    has_color_option = any(opt.get("name", "").lower() in ("color", "colour") for opt in options)
    fallback_color = None
    if not has_color_option:
        fallback_color = extract_color_from_tags(tags) or "Default"

    for var in raw.get("variants", []):
        color = extract_color_from_variant(var, options, handle)
        # Use fallback color if extraction returned Default
        if color == "Default" and fallback_color:
            color = fallback_color
        size = extract_size_from_variant(var, options)

        variant_record = VariantRecord(
            sku=var.get("sku", ""),
            color_name=color,
            size_label=size,
            variant_url=f"{BASE_HOST}/products/{handle}?variant={var.get('id', '')}",
            price=float(var.get("price", 0)) if var.get("price") else None,
            compare_at_price=float(var.get("compare_at_price", 0)) if var.get("compare_at_price") else None,
            available=var.get("available", False),
            attrs={
                "variant_id": var.get("id"),
                "sku": var.get("sku"),
                "barcode": var.get("barcode"),
                "weight": var.get("weight"),
                "inventory_quantity": var.get("inventory_quantity"),
            },
        )
        variants.append(variant_record)

    return ProductData(
        handle=handle,
        title=title,
        base_name=base_name,
        description=description,
        product_type=product_type,
        vendor=vendor,
        tags=tags,
        images=images,
        variants=variants,
        raw=raw,
    )


def ensure_brand(cur, slug: str, name: str) -> int:
    cur.execute("SELECT id FROM core.brands WHERE slug = %s", (slug,))
    row = cur.fetchone()
    if row:
        return row[0]
    cur.execute(
        "INSERT INTO core.brands (name, slug, aliases) VALUES (%s,%s,%s) RETURNING id",
        (name, slug, []),
    )
    return cur.fetchone()[0]


def find_or_create_canonical_product(
    cur,
    brand_id: int,
    brand_product_id: str,
    product_code: str,
    title: str,
    base_name: str,
    category: str,
    raw_payload: Dict[str, object],
    gender: str,
) -> int:
    """Find an existing canonical product by brand_product_id, or create a new one.

    This implements the one-product-per-style pattern. When ingesting a new color
    variant, we first check if a canonical product with the same brand_product_id
    exists. If so, we add variants to that product. If not, we create a new product.

    Args:
        cur: Database cursor
        brand_id: Brand ID
        brand_product_id: Brand's product identifier (e.g., 9-digit code for CM)
        product_code: Full product code (handle) - used if no existing product
        title: Product title
        base_name: Base product name (stripped of color suffix)
        category: Product category
        raw_payload: Raw API response
        gender: Gender targeting (male/female/unisex)

    Returns:
        Product ID (existing canonical or newly created)
    """
    if brand_product_id:
        # Check if a canonical product exists with this brand_product_id
        cur.execute(
            """
            SELECT id FROM core.products
             WHERE brand_id = %s
               AND brand_product_id = %s
               AND (is_canonical = true OR is_canonical IS NULL)
             LIMIT 1
            """,
            (brand_id, brand_product_id),
        )
        row = cur.fetchone()
        if row:
            # Found existing canonical product - we'll add variants to it
            product_id = row[0]
            # Update raw payload with latest data (keeps product info fresh)
            cur.execute(
                """
                UPDATE core.products
                   SET updated_at = now()
                 WHERE id = %s
                """,
                (product_id,),
            )
            return product_id

    # No existing canonical product - check if this exact product_code exists
    cur.execute(
        "SELECT id FROM core.products WHERE product_code = %s",
        (product_code,),
    )
    row = cur.fetchone()
    if row:
        product_id = row[0]
        # Update with brand_product_id if we have it
        cur.execute(
            """
            UPDATE core.products
               SET brand_id = %s,
                   title = %s,
                   base_name = %s,
                   category = %s,
                   raw = %s,
                   gender = %s,
                   brand_product_id = COALESCE(brand_product_id, %s),
                   updated_at = now()
             WHERE id = %s
            """,
            (brand_id, title, base_name, category, Json(raw_payload), gender, brand_product_id, product_id),
        )
        return product_id

    # Create new product
    cur.execute(
        """
        INSERT INTO core.products (brand_id, product_code, title, base_name, category, raw, gender, brand_product_id)
        VALUES (%s,%s,%s,%s,%s,%s,%s,%s)
        RETURNING id
        """,
        (brand_id, product_code, title, base_name, category, Json(raw_payload), gender, brand_product_id),
    )
    return cur.fetchone()[0]


def ensure_product(
    cur,
    brand_id: int,
    product_code: str,
    title: str,
    base_name: str,
    category: str,
    raw_payload: Dict[str, object],
    gender: str,
) -> int:
    """Legacy function - prefer find_or_create_canonical_product for new code."""
    cur.execute(
        "SELECT id FROM core.products WHERE product_code = %s",
        (product_code,),
    )
    row = cur.fetchone()
    if row:
        product_id = row[0]
        cur.execute(
            """
            UPDATE core.products
               SET brand_id = %s,
                   title = %s,
                   base_name = %s,
                   category = %s,
                   raw = %s,
                   gender = %s,
                   updated_at = now()
             WHERE id = %s
            """,
            (brand_id, title, base_name, category, Json(raw_payload), gender, product_id),
        )
        return product_id

    cur.execute(
        """
        INSERT INTO core.products (brand_id, product_code, title, base_name, category, raw, gender)
        VALUES (%s,%s,%s,%s,%s,%s,%s)
        RETURNING id
        """,
        (brand_id, product_code, title, base_name, category, Json(raw_payload), gender),
    )
    return cur.fetchone()[0]


def ensure_product_group(cur, brand_id: int, slug: str, display_name: str) -> int:
    cur.execute(
        "SELECT id FROM core.product_groups WHERE brand_id = %s AND slug = %s",
        (brand_id, slug),
    )
    row = cur.fetchone()
    if row:
        return row[0]
    cur.execute(
        """
        INSERT INTO core.product_groups (brand_id, slug, display_name)
        VALUES (%s,%s,%s)
        RETURNING id
        """,
        (brand_id, slug, display_name),
    )
    return cur.fetchone()[0]


def ensure_group_membership(cur, group_id: int, product_id: int) -> None:
    cur.execute(
        """
        INSERT INTO core.product_group_members (group_id, product_id)
        VALUES (%s,%s)
        ON CONFLICT DO NOTHING
        """,
        (group_id, product_id),
    )


def upsert_variant(cur, product_id: int, color_name: str, variant_url: str, attrs: dict) -> int:
    cur.execute(
        """
        SELECT id FROM core.product_variants
         WHERE product_id = %s AND COALESCE(color_name,'') = %s
        """,
        (product_id, color_name),
    )
    row = cur.fetchone()
    if row:
        variant_id = row[0]
        cur.execute(
            """
            UPDATE core.product_variants
               SET attrs = %s, variant_url = %s
             WHERE id = %s
            """,
            (Json(attrs), variant_url, variant_id),
        )
        return variant_id

    cur.execute(
        """
        INSERT INTO core.product_variants (product_id, color_name, variant_url, attrs)
        VALUES (%s,%s,%s,%s)
        RETURNING id
        """,
        (product_id, color_name, variant_url, Json(attrs)),
    )
    return cur.fetchone()[0]


def replace_variant_sizes(cur, variant_id: int, sizes: List[Tuple[str, int]]) -> None:
    cur.execute("DELETE FROM core.variant_sizes WHERE variant_id = %s", (variant_id,))
    for label, sort_key in sizes:
        cur.execute(
            """
            INSERT INTO core.variant_sizes (variant_id, size_label, sort_key)
            VALUES (%s,%s,%s)
            """,
            (variant_id, label, sort_key),
        )


def replace_variant_images(cur, variant_id: int, image_urls: List[str], is_primary: bool) -> None:
    cur.execute(
        "DELETE FROM core.product_images WHERE variant_id = %s",
        (variant_id,),
    )
    for idx, url in enumerate(image_urls):
        cur.execute(
            """
            INSERT INTO core.product_images (variant_id, url, position, is_primary, metadata)
            VALUES (%s,%s,%s,%s,%s)
            """,
            (variant_id, url, idx + 1, is_primary and idx == 0, Json({"kind": "hero"})),
        )


def upsert_product_url(cur, product_id: int, url: str, variant_id: Optional[int] = None) -> None:
    cur.execute(
        "SELECT id FROM core.product_urls WHERE product_id = %s AND url = %s",
        (product_id, url),
    )
    if cur.fetchone():
        return
    cur.execute(
        """
        INSERT INTO core.product_urls (product_id, variant_id, region, url, is_current)
        VALUES (%s,%s,%s,%s,true)
        """,
        (product_id, variant_id, "US", url),
    )


def create_ingest_run(source: str, input_url: str, content_hash: str) -> int:
    with connect() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                INSERT INTO ops.ingest_runs (source, input_url, content_hash, status)
                VALUES (%s,%s,%s,'pending')
                RETURNING id
                """,
                (source, input_url, content_hash),
            )
            run_id = cur.fetchone()[0]
        conn.commit()
    return run_id


def mark_ingest_run_success(run_id: int, product_id: int, rows_inserted: int) -> None:
    with connect() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                UPDATE ops.ingest_runs
                   SET status = 'success',
                       finished_at = now(),
                       product_id = %s,
                       rows_inserted = %s
                 WHERE id = %s
                """,
                (product_id, rows_inserted, run_id),
            )
        conn.commit()


def mark_ingest_run_error(run_id: int, product_id: Optional[int], error_message: str) -> None:
    with connect() as conn:
        with conn.cursor() as cur:
            cur.execute(
                """
                UPDATE ops.ingest_runs
                   SET status = 'error',
                       finished_at = now(),
                       product_id = %s,
                       error_message = %s
                 WHERE id = %s
                """,
                (product_id, error_message, run_id),
            )
        conn.commit()


def ingest_product(
    url: str,
    *,
    brand_name: str = DEFAULT_BRAND_NAME,
    brand_slug: str = DEFAULT_BRAND_SLUG,
    dry_run: bool = False,
    force: bool = False,
) -> None:
    """Ingest a single Club Monaco product by URL or handle."""
    session = requests.Session()
    session.headers.update(DEFAULT_HEADERS)

    # Extract handle from URL if full URL provided
    if url.startswith("http"):
        handle = extract_handle_from_url(url)
    else:
        handle = url

    canonical_url = f"{BASE_HOST}/products/{handle}"

    print(f"Fetching product: {handle}")
    raw = fetch_product_json(handle, session)

    if not raw:
        raise RuntimeError(f"No product data returned for handle: {handle}")

    product = parse_product_data(raw)

    # Generate content hash for deduplication
    content_hash = hashlib.sha256(
        json.dumps(raw, sort_keys=True).encode("utf-8")
    ).hexdigest()

    # Use handle as product_code (matches URL structure)
    product_code = handle

    # Extract brand_product_id for consolidation
    brand_product_id = extract_brand_product_id(handle)

    if dry_run:
        print(json.dumps({
            "handle": product.handle,
            "title": product.title,
            "base_name": product.base_name,
            "brand_product_id": brand_product_id,
            "product_type": product.product_type,
            "variant_count": len(product.variants),
            "image_count": len(product.images),
            "url": canonical_url,
        }, indent=2))
        return

    run_id = create_ingest_run("clubmonaco_full_ingest", canonical_url, content_hash)
    product_id: Optional[int] = None

    try:
        with connect() as conn:
            with conn.cursor() as cur:
                brand_id = ensure_brand(cur, brand_slug, brand_name)

                # Determine gender from product_type or tags
                gender = "male"  # Default for men's clothing
                if any("women" in t.lower() for t in product.tags):
                    gender = "female"

                # Use find_or_create_canonical_product for one-product-per-style pattern
                product_id = find_or_create_canonical_product(
                    cur,
                    brand_id,
                    brand_product_id,
                    product_code,
                    product.title,
                    product.base_name,
                    product.product_type,
                    raw,
                    gender,
                )

                # Create product group
                group_slug = slugify(product.base_name)
                group_id = ensure_product_group(cur, brand_id, group_slug, product.base_name)
                ensure_group_membership(cur, group_id, product_id)

                # Group variants by color
                color_variants: Dict[str, List[VariantRecord]] = {}
                for v in product.variants:
                    color_variants.setdefault(v.color_name, []).append(v)

                # Process each color as a variant
                first_variant = True
                for color_name, variants in color_variants.items():
                    # Collect attrs from first variant of this color
                    attrs = variants[0].attrs if variants else {}
                    attrs["variants"] = [
                        {"size": v.size_label, "sku": v.sku, "available": v.available}
                        for v in variants
                    ]

                    # Get variant URL from first variant
                    variant_url = variants[0].variant_url if variants else canonical_url

                    variant_id = upsert_variant(cur, product_id, color_name, variant_url, attrs)

                    # Collect sizes for this color
                    sizes = list(set((v.size_label, size_sort_key(v.size_label, i))
                                     for i, v in enumerate(variants)))
                    sizes.sort(key=lambda x: x[1])
                    replace_variant_sizes(cur, variant_id, sizes)

                    # Add images (same for all colors in Shopify usually)
                    replace_variant_images(cur, variant_id, product.images, is_primary=first_variant)

                    # Add URL
                    upsert_product_url(cur, product_id, variants[0].variant_url, variant_id)

                    first_variant = False

                # Add canonical URL
                upsert_product_url(cur, product_id, canonical_url)

            conn.commit()

        mark_ingest_run_success(run_id, product_id, len(product.variants))

        # Run ingest checker
        check_result = ingest_checker.run_checks(product_code)
        if check_result.issues:
            print(f"⚠️  Ingest checker found issues: {'; '.join(check_result.issues)}")

        print(f"✅ Ingested {product.title} (brand_product_id={brand_product_id}, {len(product.variants)} variants)")

    except Exception as exc:
        mark_ingest_run_error(run_id, product_id, str(exc))
        raise


def parse_args(argv: Optional[Sequence[str]] = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Ingest a Club Monaco product into fs-core.")
    parser.add_argument(
        "url",
        help="Club Monaco product URL or handle",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Parse and print metadata without touching the database.",
    )
    parser.add_argument(
        "--brand-name",
        default=DEFAULT_BRAND_NAME,
        help="Override the brand name.",
    )
    parser.add_argument(
        "--brand-slug",
        default=DEFAULT_BRAND_SLUG,
        help="Override the brand slug.",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Force ingest even if content hash matches a previous success.",
    )
    return parser.parse_args(argv)


def main(argv: Optional[Sequence[str]] = None) -> None:
    args = parse_args(argv)
    ingest_product(
        args.url,
        brand_name=args.brand_name,
        brand_slug=args.brand_slug,
        dry_run=args.dry_run,
        force=args.force,
    )


if __name__ == "__main__":
    main()
