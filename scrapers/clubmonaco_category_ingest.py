#!/usr/bin/env python3
"""
Category-level ingester for Club Monaco.

Uses Playwright to render category pages (handles lazy loading),
discovers all product URLs, then pipes each to clubmonaco_full_ingest.
"""

from __future__ import annotations

import argparse
import sys
import time
from collections import OrderedDict
from dataclasses import dataclass
from pathlib import Path
from typing import List, Optional, Sequence
from urllib.parse import urlsplit, parse_qs

from bs4 import BeautifulSoup

PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    sync_playwright = None

import clubmonaco_full_ingest as full_ingest

DEFAULT_BRAND_NAME = "Club Monaco"
DEFAULT_BRAND_SLUG = "clubmonaco"
BASE_HOST = "https://www.clubmonaco.com"


@dataclass
class ProductCandidate:
    handle: str
    url: str


def render_with_playwright(url: str, scroll_count: int = 5, wait_ms: int = 2000) -> str:
    """Render page with Playwright, scrolling to load lazy content."""
    if not sync_playwright:
        raise RuntimeError(
            "Playwright is required. Install with: pip install playwright && playwright install chromium"
        )

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent=(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/122.0.0.0 Safari/537.36"
            ),
            locale="en-US",
            timezone_id="America/New_York",
        )
        page = context.new_page()

        print(f"Loading {url}")
        page.goto(url, wait_until="domcontentloaded", timeout=60000)
        page.wait_for_timeout(wait_ms)

        # Scroll to trigger lazy loading
        for i in range(scroll_count):
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            page.wait_for_timeout(1500)
            print(f"  Scroll {i + 1}/{scroll_count}")

        # Wait a bit more for final content
        page.wait_for_timeout(wait_ms)

        html = page.content()
        browser.close()

    return html


def extract_products_from_html(html: str) -> List[ProductCandidate]:
    """Extract product URLs from rendered HTML."""
    soup = BeautifulSoup(html, "html.parser")
    candidates: OrderedDict[str, ProductCandidate] = OrderedDict()

    # Find all product links
    for anchor in soup.find_all("a", href=True):
        href = anchor["href"]

        # Match Club Monaco product URLs
        if "/products/" not in href:
            continue

        # Parse the handle from URL
        parsed = urlsplit(href)
        path_parts = [p for p in parsed.path.split("/") if p]

        if "products" not in path_parts:
            continue

        idx = path_parts.index("products")
        if len(path_parts) <= idx + 1:
            continue

        handle = path_parts[idx + 1]

        # Skip if already seen
        if handle in candidates:
            continue

        # Build clean URL
        clean_url = f"{BASE_HOST}/products/{handle}"
        candidates[handle] = ProductCandidate(handle=handle, url=clean_url)

    return list(candidates.values())


def extract_products_from_json_ld(html: str) -> List[ProductCandidate]:
    """Extract products from JSON-LD structured data."""
    import json

    soup = BeautifulSoup(html, "html.parser")
    candidates: OrderedDict[str, ProductCandidate] = OrderedDict()

    for script in soup.find_all("script", {"type": "application/ld+json"}):
        try:
            data = json.loads(script.string or "")
        except json.JSONDecodeError:
            continue

        # Look for ItemList with products
        if data.get("@type") == "ItemList":
            for item in data.get("itemListElement", []):
                item_data = item.get("item", {})
                url = item_data.get("url", "")

                if "/products/" not in url:
                    continue

                parsed = urlsplit(url)
                path_parts = [p for p in parsed.path.split("/") if p]

                if "products" in path_parts:
                    idx = path_parts.index("products")
                    if len(path_parts) > idx + 1:
                        handle = path_parts[idx + 1]
                        if handle not in candidates:
                            clean_url = f"{BASE_HOST}/products/{handle}"
                            candidates[handle] = ProductCandidate(handle=handle, url=clean_url)

    return list(candidates.values())


def discover_products(url: str, scroll_count: int = 5, wait_ms: int = 2000) -> List[ProductCandidate]:
    """Discover all products on a category page."""
    html = render_with_playwright(url, scroll_count=scroll_count, wait_ms=wait_ms)

    # Try JSON-LD first (more reliable)
    candidates = extract_products_from_json_ld(html)

    # Fall back to HTML parsing if no JSON-LD
    if not candidates:
        candidates = extract_products_from_html(html)

    return candidates


def ingest_candidates(
    candidates: List[ProductCandidate],
    *,
    brand_name: str,
    brand_slug: str,
    dry_run: bool,
    limit: Optional[int] = None,
    force: bool = False,
) -> None:
    """Ingest discovered products."""
    if limit:
        candidates = candidates[:limit]

    total = len(candidates)
    print(f"\nDiscovered {total} products to ingest\n")

    if dry_run:
        for i, c in enumerate(candidates, 1):
            print(f"[{i}/{total}] {c.handle} -> {c.url}")
        return

    successes = 0
    failures: List[str] = []

    for i, candidate in enumerate(candidates, 1):
        print(f"\n[{i}/{total}] Ingesting {candidate.handle}")
        try:
            full_ingest.ingest_product(
                candidate.url,
                brand_name=brand_name,
                brand_slug=brand_slug,
                dry_run=False,
                force=force,
            )
            successes += 1
            # Rate limiting
            time.sleep(1)
        except Exception as exc:
            failures.append(f"{candidate.handle}: {exc}")
            print(f"❌ Failed: {exc}")

    print(f"\n{'='*50}")
    print(f"Summary: {successes}/{total} succeeded")
    if failures:
        print(f"\nFailures ({len(failures)}):")
        for f in failures:
            print(f"  - {f}")


def parse_args(argv: Optional[Sequence[str]] = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Bulk-ingest Club Monaco products from a category page."
    )
    parser.add_argument(
        "--url",
        required=True,
        help="Club Monaco category URL to scrape",
    )
    parser.add_argument(
        "--scroll-count",
        type=int,
        default=10,
        help="Number of times to scroll for lazy loading (default: 10)",
    )
    parser.add_argument(
        "--wait-ms",
        type=int,
        default=2000,
        help="Wait time in ms after page load and scrolls (default: 2000)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="List discovered products without ingesting",
    )
    parser.add_argument(
        "--limit",
        type=int,
        help="Limit number of products to ingest",
    )
    parser.add_argument(
        "--brand-name",
        default=DEFAULT_BRAND_NAME,
        help="Override brand name",
    )
    parser.add_argument(
        "--brand-slug",
        default=DEFAULT_BRAND_SLUG,
        help="Override brand slug",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Force re-ingest even if already ingested",
    )
    return parser.parse_args(argv)


def main(argv: Optional[Sequence[str]] = None) -> None:
    args = parse_args(argv)

    print(f"Club Monaco Category Ingester")
    print(f"URL: {args.url}")
    print(f"Scroll count: {args.scroll_count}")
    print()

    candidates = discover_products(
        args.url,
        scroll_count=args.scroll_count,
        wait_ms=args.wait_ms,
    )

    if not candidates:
        print("No products found. The page may require different parsing.")
        return

    ingest_candidates(
        candidates,
        brand_name=args.brand_name,
        brand_slug=args.brand_slug,
        dry_run=args.dry_run,
        limit=args.limit,
        force=args.force,
    )


if __name__ == "__main__":
    main()
