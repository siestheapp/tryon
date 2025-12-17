# TryOn

A clothing try-on logging app that helps you track what you've tried on and how it fits.

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment

Copy `.env.example` to `.env` and fill in your Supabase credentials:

```bash
cp .env.example .env
```

### 3. Run the app

```bash
npx expo start
```

Press `i` to open in iOS simulator.

---

## Project Structure

```
tryon/
├── app/                    # Expo Router screens
├── lib/                    # Supabase client, auth, utilities
├── theme/                  # Design tokens (colors, spacing)
├── assets/                 # App icons, images
├── backend/                # FastAPI backend (optional, for advanced features)
├── scrapers/               # Brand product scrapers
│   ├── brands/             # Brand-specific modules (jcrew, lululemon, etc.)
│   ├── pkg/                # Shared scraper infrastructure
│   └── *.py                # Top-level ingest scripts
├── data/
│   ├── scrapes/            # Scraped product data by brand
│   └── reference/          # Clean reference data
├── docs/
│   ├── brands/             # Brand-specific documentation
│   ├── database/           # Supabase schema docs
│   └── notes/              # Development notes
└── .specstory/             # AI conversation history
```

---

## Database (fs-core)

This app connects to the `fs-core` Supabase project.

### Key Tables

- `core.products` / `core.product_variants` / `core.variant_sizes` — Product catalog
- `core.user_garments` / `core.user_fit_feedback` — User try-on data
- `core.brands` / `core.categories` — Brand and category metadata

### Key RPC Functions

| Function | Description |
|----------|-------------|
| `product_lookup(input_url)` | Resolves a product URL to product data with sizes and colors |
| `save_tryon(...)` | Saves a try-on record with fit feedback |
| `get_user_tryons(...)` | Fetches user's try-on history |

See `docs/database/` for full schema documentation.

---

## Scrapers

Scrapers fetch product data from brand websites and ingest it into the database.

### Supported Brands

| Brand | Scraper | Status |
|-------|---------|--------|
| J.Crew | `precise_jcrew_html_scraper_v2.py`, `jcrew_full_ingest.py` | ✅ Mature |
| Lululemon | `lululemon_full_ingest.py`, `lululemon_pdp_playwright_fetch.py` | ✅ Working |
| Reiss | `reiss_full_ingest.py` | ✅ Working |
| Uniqlo | `uniqlo_full_ingest.py` | ✅ Working |
| Theory | `theory_full_ingest.py` | ✅ Working |

### Running a Scraper

```bash
cd scrapers
python jcrew_full_ingest.py --help
```

---

## Backend (Optional)

The FastAPI backend provides advanced features like dynamic product fetching.

```bash
cd backend
pip install -r requirements.txt
./start_server.sh
```

Runs on `http://localhost:8006`.

---

## Development

### MCP Integration

This project is designed to work with the Supabase MCP server for database troubleshooting directly in Cursor chat.

### AI Context

The `.specstory/history/` folder contains conversation history that helps AI understand the project context. Key files:

- `2025-12-09_*.md` — Initial app development session (database assessment, app architecture, RPC functions)

---

## Environment Variables

```
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

