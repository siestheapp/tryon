"""
Uniqlo brand module wrapper.

Provides a thin import surface over `scripts.uniqlo_full_ingest` so other code
can trigger Uniqlo ingests without shelling out to the CLI.
"""

from __future__ import annotations

from pathlib import Path
from typing import Optional, Sequence

from scripts import uniqlo_full_ingest as _impl


def ingest_catalog(
    json_path: Path,
    *,
    brand_name: str = _impl.DEFAULT_BRAND_NAME,
    brand_slug: str = _impl.DEFAULT_BRAND_SLUG,
    dry_run: bool = False,
) -> None:
    """Programmatic equivalent of running `python scripts/uniqlo_full_ingest.py`."""

    argv = [
        "--json-path",
        str(json_path),
        "--brand-name",
        brand_name,
        "--brand-slug",
        brand_slug,
    ]
    if dry_run:
        argv.append("--dry-run")
    _impl.main(argv)


__all__ = ["ingest_catalog"]







