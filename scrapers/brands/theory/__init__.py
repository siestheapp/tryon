"""
Theory brand module.

Encapsulates the Theory ingest helpers so that other code can call the ingest
pipeline without importing the CLI script directly.
"""

from __future__ import annotations

from typing import Optional

from scripts import theory_full_ingest as _impl

DEFAULT_BRAND_NAME = "Theory"
DEFAULT_BRAND_SLUG = "theory"


def ingest_catalog(
    url: Optional[str],
    pid: Optional[str] = None,
    color: Optional[str] = None,
    *,
    spotlight_enabled: bool = False,
    brand_name: str = DEFAULT_BRAND_NAME,
    brand_slug: str = DEFAULT_BRAND_SLUG,
    dry_run: bool = False,
    force: bool = False,
) -> None:
    """Proxy through to `theory_full_ingest.ingest_catalog`."""

    return _impl.ingest_catalog(
        url,
        pid,
        color,
        spotlight_enabled=spotlight_enabled,
        brand_name=brand_name,
        brand_slug=brand_slug,
        dry_run=dry_run,
        force=force,
    )


__all__ = [
    "DEFAULT_BRAND_NAME",
    "DEFAULT_BRAND_SLUG",
    "ingest_catalog",
]







