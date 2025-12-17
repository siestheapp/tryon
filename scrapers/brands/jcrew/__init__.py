"""
J.Crew brand module.

Provides a small, import-friendly surface over `scripts/jcrew_full_ingest.py`
so that other tooling can call into J.Crew ingest helpers without needing to
manipulate sys.path or import the CLI entrypoint directly.
"""

from __future__ import annotations

from pathlib import Path
from typing import Optional, Sequence

from scripts import jcrew_full_ingest as _impl

DEFAULT_BRAND_NAME = _impl.DEFAULT_BRAND_NAME
DEFAULT_BRAND_SLUG = _impl.DEFAULT_BRAND_SLUG


def ingest_catalog(
    url: str,
    *,
    spotlight_enabled: bool = True,
    brand_name: str = DEFAULT_BRAND_NAME,
    brand_slug: str = DEFAULT_BRAND_SLUG,
    dry_run: bool = False,
) -> None:
    """
    Thin wrapper around `jcrew_full_ingest.ingest_catalog`.

    Parameters mirror the CLI flags but can be imported elsewhere without
    invoking argparse.
    """

    return _impl.ingest_catalog(
        url,
        spotlight_enabled=spotlight_enabled,
        brand_name=brand_name,
        brand_slug=brand_slug,
        dry_run=dry_run,
    )


__all__ = [
    "DEFAULT_BRAND_NAME",
    "DEFAULT_BRAND_SLUG",
    "ingest_catalog",
]







