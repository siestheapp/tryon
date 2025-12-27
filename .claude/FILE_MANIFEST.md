# File Manifest

**Generated:** 2025-12-27
**Purpose:** Complete inventory of all files in the codebase (including untracked files)

---

## App Code (`app/`)

```
app/
├── _layout.tsx              # Root layout with auth/theme providers
├── index.tsx                # Entry point, redirects based on auth state
├── confirm.tsx              # Try-on confirmation wizard
├── (auth)/
│   ├── _layout.tsx          # Auth routes layout
│   ├── sign-in.tsx          # Sign in screen
│   └── sign-up.tsx          # Sign up screen
├── (onboarding)/
│   ├── _layout.tsx          # Onboarding routes layout
│   ├── welcome.tsx          # Screen 1: "Finally know what fits"
│   ├── promise.tsx          # Screen 2: "Log fits in seconds"
│   └── ready.tsx            # Screen 3: "Build your fit profile"
└── (tabs)/
    ├── _layout.tsx          # Tab bar layout
    ├── scan.tsx             # Scan/URL input tab (with QR scanner)
    ├── closet.tsx           # User's logged try-ons
    └── profile.tsx          # Settings, theme, account
```

## Components (`components/`)

```
components/
├── index.ts                 # Barrel export
├── BodyPartChip.tsx         # Body part selector chip
├── FitCard.tsx              # Try-on history card
├── FitSnapshotCard.tsx      # Compact fit display
├── MaskedText.tsx           # Animated text reveal
├── OnboardingScreen.tsx     # Reusable onboarding screen
├── PredictiveSizeChip.tsx   # Size recommendation chip
├── ProgressDots.tsx         # Onboarding progress indicator
└── QRScanner.tsx            # QR code scanner (expo-camera)
```

## Library (`lib/`)

```
lib/
├── auth.tsx                 # Auth context provider
└── supabase.ts              # Supabase client + helper functions
```

## Assets (`assets/`)

```
assets/
├── icon.png                 # App icon (2048x2048)
├── icon2.png                # Alternate icon
├── icon_backup.png          # Backup of original icon
├── splash-icon.png          # Splash screen icon
├── adaptive-icon.png        # Android adaptive icon
├── favicon.png              # Web favicon
├── animations/
│   ├── welcome.json         # Lottie: onboarding screen 1
│   ├── promise.json         # Lottie: onboarding screen 2
│   └── ready.json           # Lottie: onboarding screen 3
└── screenshots/
    ├── *.png                # Original iPhone 16 Plus screenshots
    ├── resized/*.png        # Resized for App Store (1284x2778)
    └── ipad/*.png           # iPad screenshots (unused, iPhone-only)
```

## Configuration (Root)

```
./
├── app.json                 # Expo config (name, permissions, plugins)
├── eas.json                 # EAS Build config (dev/preview/production)
├── package.json             # Dependencies
├── package-lock.json        # Lock file
├── tsconfig.json            # TypeScript config (if exists)
├── babel.config.js          # Babel config (for reanimated)
├── expo-env.d.ts            # Expo TypeScript declarations
├── features.json            # Feature tracking (pass/fail status)
├── init.sh                  # Session startup script
├── .env                     # Environment variables (NOT in git)
├── .env.example             # Example env vars
├── .gitignore               # Git ignore rules
├── .mcp.json                # MCP server config (Supabase)
└── .cursorindexingignore    # Cursor indexing ignore
```

## Documentation (Root)

```
./
├── README.md                # Project readme
├── CLAUDE.md                # Points to .claude/CLAUDE.md
├── STRATEGY.md              # Product roadmap (Phase 1-5)
├── FOUNDER_CONTEXT.md       # Founder preferences for AI
├── PRODUCT_NOTES.md         # Early product notes
└── APPSTORE_ROADMAP.md      # App Store submission checklist
```

## Claude Code Config (`.claude/`)

```
.claude/
├── CLAUDE.md                # Main context file (28KB, session log)
├── FILE_MANIFEST.md         # This file
├── settings.local.json      # Local Claude settings
├── commands/
│   ├── audit.md             # /audit - project cleanup advisor
│   ├── code-review.md       # /code-review - PR review
│   ├── commit.md            # /commit - git commits
│   ├── data-qa.md           # /data-qa - brand data analysis
│   ├── feature-dev.md       # /feature-dev - guided development
│   ├── plan.md              # /plan - strategy advisor
│   └── sync.md              # /sync - update CLAUDE.md
├── agents/
│   ├── code-architect.md    # Design feature architectures
│   ├── code-explorer.md     # Analyze codebase features
│   └── code-reviewer.md     # Review code for guidelines
├── hooks/
│   ├── stop.py              # Reminder to run /sync
│   └── session-end.py       # Save transcripts
├── skills/
│   └── frontend-design/
│       └── SKILL.md         # Frontend design skill
├── plans/                   # (empty after archiving)
└── archive/
    ├── database-refactoring-plan.md  # Completed Phase 1-7 plan
    └── transcripts/                   # Old session transcripts
        ├── 2025-12-21_*.jsonl
        └── 2025-12-21_*.md
```

## Scrapers (`scrapers/`)

```
scrapers/
├── db_config.py                    # Database connection config
├── ingest_checker.py               # Verify ingested data
├── clubmonaco_full_ingest.py       # Club Monaco scraper
├── clubmonaco_category_ingest.py   # Club Monaco categories
├── clubmonaco_color_scraper.py     # Club Monaco colors
├── jcrew_full_ingest.py            # J.Crew scraper
├── jcrew_category_ingest.py        # J.Crew categories
├── lululemon_full_ingest.py        # Lululemon scraper
├── lululemon_category_ingest.py    # Lululemon categories
├── lululemon_pdp_playwright_fetch.py # Lululemon Playwright scraper
├── reiss_full_ingest.py            # Reiss scraper
├── reiss_category_ingest.py        # Reiss categories
├── theory_full_ingest.py           # Theory scraper
├── uniqlo_full_ingest.py           # Uniqlo scraper
├── precise_jcrew_html_scraper_v2.py # Alternative J.Crew scraper
├── brands/                         # Brand-specific modules (mostly empty)
│   ├── __init__.py
│   ├── jcrew/__init__.py
│   ├── lululemon/__init__.py
│   ├── reiss/__init__.py
│   ├── theory/__init__.py
│   └── uniqlo/__init__.py
├── pkg/                            # Shared scraper package
│   ├── config/                     # Database/scraping config
│   ├── models/                     # Product data models
│   ├── scrapers/                   # Base scraper classes
│   ├── scripts/                    # Runner scripts
│   ├── tests/                      # Test files
│   ├── utils/                      # DB/scraping utilities
│   └── web_interface/              # Web dashboard (unused?)
├── venv/                           # Python virtual environment
│   └── ... (many files)
└── __pycache__/                    # Python cache
```

## Backend (`backend/`)

```
backend/
├── app.py                          # Flask app (unused?)
├── requirements.txt                # Python dependencies
├── start_server.sh                 # Server startup script
├── jcrew_fetcher.py                # J.Crew fetcher
├── jcrew_smart_fetcher.py          # J.Crew smart fetcher
├── jcrew_enhanced_fetcher.py       # J.Crew enhanced fetcher
├── jcrew_comprehensive_fetcher.py  # J.Crew comprehensive fetcher
└── jcrew_dynamic_fetcher.py        # J.Crew dynamic fetcher
```

## Data (`data/`)

```
data/
├── backups/
│   └── fs-core-backup-*.json       # MCP backup
├── reference/
│   ├── categories/                 # Category taxonomies
│   │   ├── mens/mens_category_tree.json
│   │   └── womens_category_tree.json
│   └── jcrew/                      # J.Crew reference data
│       ├── existing_jcrew_codes.json
│       ├── jcrew_products_clean.csv
│       ├── jcrew_products_full.csv
│       └── jcrew_products_full.json
└── scrapes/
    ├── jcrew/                      # J.Crew scrape results (30+ files)
    ├── lululemon/2025-11-30/       # Lululemon scrape (organized)
    │   ├── category/
    │   ├── category_cache/
    │   ├── chunks/
    │   ├── html/
    │   ├── inputs/
    │   ├── pdp/
    │   └── remotes/
    └── reiss/                      # Reiss scrape results
```

## Documentation (`docs/`)

```
docs/
├── index.html                      # GitHub Pages landing
├── index.md                        # Landing page source
├── _config.yml                     # Jekyll config
├── .nojekyll                       # Disable Jekyll
├── CNAME                           # Custom domain
├── error.md                        # Error page
├── PRODUCT_DESIGN_DOCTRINE.md      # Design principles
├── appstore/                       # App Store docs
│   ├── index.html
│   ├── index.md
│   ├── privacy-policy.html         # Live privacy policy
│   ├── privacy-policy.md
│   ├── PRIVACY_POLICY.md           # Source
│   ├── support.html                # Live support page
│   ├── SUPPORT.md                  # Source
│   ├── AGE_RATING.md
│   ├── APP_PRIVACY_NUTRITION_LABEL.md
│   ├── APP_STORE_CONNECT_METADATA.md
│   ├── REVIEW_NOTES.md
│   └── SUBMISSION_ADMIN_CHECKLIST.md
├── brands/                         # Brand integration docs
│   ├── BRAND_INTEGRATION_GUIDE.md
│   └── jcrew/                      # J.Crew specific (8 files)
├── database/                       # Database docs
│   ├── README.md
│   ├── CHANGELOG.md
│   ├── database_one_pager.md
│   ├── key_tables.md
│   ├── operations.md
│   ├── query_reference.md
│   ├── schema_overview.md
│   ├── schema_evolution.md
│   ├── migrations/
│   │   └── 20251007_product_lookup.sql
│   └── sql/scratch/               # SQL scratch files
└── notes/                          # Development notes
    ├── 2025-11-28/
    └── 2025-11-30/
```

## Build Output (`dist/`)

```
dist/
├── metadata.json
├── _expo/static/js/ios/entry-*.hbc  # Compiled JS
└── assets/                          # Bundled assets
```

## Specstory (`.specstory/`)

```
.specstory/
├── .gitignore
├── .project.json
└── history/                         # Cursor chat history (17 files)
    └── 2025-12-*-*.md
```

---

## Git Status

**Tracked:** Most files in app/, components/, lib/, docs/, scrapers/
**Untracked:** .env, node_modules/, dist/, .expo/, ios/, android/, scrapers/venv/

---

## File Counts by Category

| Category | File Count |
|----------|-----------|
| App code | 12 |
| Components | 9 |
| Assets | 30+ |
| Scrapers | 50+ |
| Data/scrapes | 150+ |
| Documentation | 40+ |
| Config | 15 |
| Claude tools | 15 |

**Total (excluding node_modules, venv):** ~400 files
