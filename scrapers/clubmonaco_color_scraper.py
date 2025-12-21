#!/usr/bin/env python3
"""
Club Monaco color scraper - extracts hex codes from product pages.

Uses Playwright to render pages and extract background-color from swatch elements.
Populates core.brand_colors table for use as swatch fallback.
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path
from typing import Dict, List, Optional, Tuple

import psycopg2
from psycopg2.extras import Json

PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from db_config import DB_CONFIG

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    sync_playwright = None

DEFAULT_BRAND_NAME = "Club Monaco"
DEFAULT_BRAND_SLUG = "clubmonaco"
BASE_HOST = "https://www.clubmonaco.com"


def connect():
    """Connect to the database."""
    return psycopg2.connect(
        dbname=DB_CONFIG["database"],
        user=DB_CONFIG["user"],
        password=DB_CONFIG["password"],
        host=DB_CONFIG["host"],
        port=DB_CONFIG["port"],
    )


def rgb_to_hex(rgb_str: str) -> Optional[str]:
    """Convert 'rgb(r, g, b)' to '#RRGGBB'."""
    match = re.match(r'rgb\((\d+),\s*(\d+),\s*(\d+)\)', rgb_str)
    if match:
        r, g, b = int(match.group(1)), int(match.group(2)), int(match.group(3))
        return f"#{r:02X}{g:02X}{b:02X}"
    return None


def extract_colors_from_page(page, url: str) -> List[Tuple[str, str]]:
    """Extract color name and hex from a Club Monaco PDP.

    Returns list of (color_name, hex_code) tuples.
    """
    colors = []

    print(f"  Loading {url}")
    page.goto(url, wait_until="domcontentloaded", timeout=30000)
    page.wait_for_timeout(2000)  # Wait for JS to render

    # Find color swatches - they're in a group with "Color :" label
    try:
        color_group = page.locator('fieldset:has-text("Color")')
        if color_group.count() == 0:
            # Try alternative selector
            color_group = page.locator('[class*="color"]').filter(has_text="Color")

        if color_group.count() > 0:
            # Get all swatch labels within the color group
            swatches = color_group.locator('label[title]')
            count = swatches.count()

            for i in range(count):
                swatch = swatches.nth(i)
                title = swatch.get_attribute('title')
                if title:
                    # Get computed background color
                    bg_color = swatch.evaluate('el => window.getComputedStyle(el).backgroundColor')
                    hex_code = rgb_to_hex(bg_color)
                    if hex_code:
                        colors.append((title, hex_code))
                        print(f"    Found: {title} -> {hex_code}")
    except Exception as e:
        print(f"  Error extracting colors: {e}")

    return colors


def get_brand_id(cur, slug: str) -> Optional[int]:
    """Get brand ID by slug."""
    cur.execute("SELECT id FROM core.brands WHERE slug = %s", (slug,))
    row = cur.fetchone()
    return row[0] if row else None


def upsert_brand_color(cur, brand_id: int, color_name: str, hex_code: str) -> None:
    """Insert or update a brand color entry."""
    # Check if exists
    cur.execute(
        """
        SELECT id FROM core.brand_colors
        WHERE brand_id = %s AND raw_name = %s
        """,
        (brand_id, color_name),
    )
    row = cur.fetchone()

    # Normalize color name to base color
    normalized = normalize_color_name(color_name)

    metadata = {"hex_code": hex_code, "color_groups": [normalized.title()]}

    if row:
        # Update existing
        cur.execute(
            """
            UPDATE core.brand_colors
            SET metadata = %s
            WHERE id = %s
            """,
            (Json(metadata), row[0]),
        )
    else:
        # Insert new
        cur.execute(
            """
            INSERT INTO core.brand_colors (brand_id, raw_name, normalized_name, metadata)
            VALUES (%s, %s, %s, %s)
            """,
            (brand_id, color_name, normalized, Json(metadata)),
        )


def normalize_color_name(name: str) -> str:
    """Normalize color name to base color category."""
    name_lower = name.lower()

    # Map common color variations to base colors
    color_map = {
        'navy': 'blue', 'dark navy': 'blue', 'medium blue': 'blue',
        'light blue': 'blue', 'indigo': 'blue', 'lagoon': 'blue',
        'eclipse': 'blue',
        'charcoal': 'grey', 'heather grey': 'grey', 'light grey': 'grey',
        'obsidian': 'grey',
        'khaki': 'beige', 'tan': 'beige', 'camel': 'beige', 'sand': 'beige',
        'khaki stone': 'beige', 'stone': 'beige', 'natural': 'beige',
        'oatmeal': 'beige',
        'cream': 'white', 'ivory': 'white', 'off white': 'white',
        'antique white': 'white',
        'dark blue': 'blue',
        'brown mix': 'brown', 'light tan mix': 'brown',
        'pink mix': 'pink',
        'multi': 'multi',
    }

    for key, value in color_map.items():
        if key in name_lower:
            return value

    # Check for basic colors
    basic_colors = ['black', 'white', 'blue', 'red', 'green', 'grey', 'gray',
                    'brown', 'pink', 'purple', 'orange', 'yellow', 'beige']
    for color in basic_colors:
        if color in name_lower:
            return color

    return name_lower


def get_product_urls_with_colors(cur, brand_id: int) -> List[str]:
    """Get product URLs that need color extraction."""
    # Get unique product URLs for Club Monaco
    cur.execute(
        """
        SELECT DISTINCT pu.url
        FROM core.product_urls pu
        JOIN core.products p ON p.id = pu.product_id
        WHERE p.brand_id = %s AND pu.is_current = true
        ORDER BY pu.url
        """,
        (brand_id,),
    )
    return [row[0] for row in cur.fetchall()]


def scrape_colors(
    urls: Optional[List[str]] = None,
    limit: Optional[int] = None,
    dry_run: bool = False,
) -> None:
    """Main function to scrape colors from Club Monaco."""
    if not sync_playwright:
        raise RuntimeError(
            "Playwright is required. Install with: pip install playwright && playwright install chromium"
        )

    with connect() as conn:
        with conn.cursor() as cur:
            brand_id = get_brand_id(cur, DEFAULT_BRAND_SLUG)
            if not brand_id:
                raise RuntimeError(f"Brand '{DEFAULT_BRAND_SLUG}' not found in database")

            # Get URLs to scrape
            if urls:
                product_urls = urls
            else:
                product_urls = get_product_urls_with_colors(cur, brand_id)

            if limit:
                product_urls = product_urls[:limit]

            print(f"Found {len(product_urls)} product URLs to scrape")

            if dry_run:
                for url in product_urls:
                    print(f"  Would scrape: {url}")
                return

            # Track unique colors found
            all_colors: Dict[str, str] = {}

            with sync_playwright() as p:
                browser = p.chromium.launch(headless=True)
                context = browser.new_context(
                    user_agent=(
                        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                        "AppleWebKit/537.36 (KHTML, like Gecko) "
                        "Chrome/122.0.0.0 Safari/537.36"
                    ),
                    locale="en-US",
                )
                page = context.new_page()

                for i, url in enumerate(product_urls, 1):
                    print(f"\n[{i}/{len(product_urls)}] Scraping colors from:")
                    try:
                        colors = extract_colors_from_page(page, url)
                        for color_name, hex_code in colors:
                            if color_name not in all_colors:
                                all_colors[color_name] = hex_code
                    except Exception as e:
                        print(f"  Error: {e}")

                browser.close()

            # Save colors to database
            print(f"\n{'='*50}")
            print(f"Found {len(all_colors)} unique colors")
            print(f"{'='*50}\n")

            for color_name, hex_code in sorted(all_colors.items()):
                print(f"Saving: {color_name} -> {hex_code}")
                upsert_brand_color(cur, brand_id, color_name, hex_code)

            conn.commit()
            print(f"\n✅ Saved {len(all_colors)} colors to brand_colors table")


def update_product_variants(dry_run: bool = False) -> None:
    """Update product_variants.color_name from brand_colors."""
    with connect() as conn:
        with conn.cursor() as cur:
            brand_id = get_brand_id(cur, DEFAULT_BRAND_SLUG)
            if not brand_id:
                raise RuntimeError(f"Brand '{DEFAULT_BRAND_SLUG}' not found")

            # Get all variants with 'Default' color name for this brand
            cur.execute(
                """
                SELECT pv.id, pv.color_name, p.title
                FROM core.product_variants pv
                JOIN core.products p ON p.id = pv.product_id
                WHERE p.brand_id = %s AND pv.color_name = 'Default'
                """,
                (brand_id,),
            )
            variants = cur.fetchall()

            print(f"Found {len(variants)} variants with 'Default' color")

            # For each, try to extract color from product title
            for variant_id, color_name, title in variants:
                # Try to extract color from title (e.g., "Shirt - Medium Blue" -> "Medium Blue")
                if " - " in title:
                    potential_color = title.rsplit(" - ", 1)[-1]

                    # Check if this color exists in brand_colors
                    cur.execute(
                        """
                        SELECT raw_name FROM core.brand_colors
                        WHERE brand_id = %s AND lower(raw_name) = lower(%s)
                        """,
                        (brand_id, potential_color),
                    )
                    row = cur.fetchone()
                    if row:
                        if dry_run:
                            print(f"  Would update variant {variant_id}: Default -> {row[0]}")
                        else:
                            cur.execute(
                                "UPDATE core.product_variants SET color_name = %s WHERE id = %s",
                                (row[0], variant_id),
                            )
                            print(f"  Updated variant {variant_id}: Default -> {row[0]}")

            if not dry_run:
                conn.commit()


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Scrape Club Monaco product colors into brand_colors table"
    )
    parser.add_argument(
        "--url",
        action="append",
        dest="urls",
        help="Specific URL(s) to scrape (can be repeated)",
    )
    parser.add_argument(
        "--limit",
        type=int,
        help="Limit number of products to scrape",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would be done without making changes",
    )
    parser.add_argument(
        "--update-variants",
        action="store_true",
        help="Update product_variants.color_name from extracted colors",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()

    print("Club Monaco Color Scraper")
    print("=" * 50)

    if args.update_variants:
        update_product_variants(dry_run=args.dry_run)
    else:
        scrape_colors(
            urls=args.urls,
            limit=args.limit,
            dry_run=args.dry_run,
        )


if __name__ == "__main__":
    main()
