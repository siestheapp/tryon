"""
Reiss brand module.

Wraps the legacy CLI script (`scripts/reiss_full_ingest.py`) so other Python
code can trigger Reiss ingests without touching argparse or sys.path.
"""

from __future__ import annotations

from scripts import reiss_full_ingest as _impl

DEFAULT_BRAND_NAME = _impl.DEFAULT_BRAND_NAME
DEFAULT_BRAND_SLUG = _impl.DEFAULT_BRAND_SLUG


def ingest_catalog(
    url: str,
    *,
    brand_name: str = DEFAULT_BRAND_NAME,
    brand_slug: str = DEFAULT_BRAND_SLUG,
    dry_run: bool = False,
) -> None:
    """Proxy through to `reiss_full_ingest.ingest_catalog`."""

    return _impl.ingest_catalog(
        url,
        brand_name=brand_name,
        brand_slug=brand_slug,
        dry_run=dry_run,
    )


__all__ = [
    "DEFAULT_BRAND_NAME",
    "DEFAULT_BRAND_SLUG",
    "ingest_catalog",
]







