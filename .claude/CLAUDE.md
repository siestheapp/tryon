# Project Context

This file keeps all AI assistants in sync. Update it when you complete significant work.

---

## Big Picture

**30-Second Pitch:** freestylefit is TikTok meets Stitch Fix. Users log what fits → Get smart recommendations → Discover what people with matching sizes are wearing → Purchase with confidence.

**Where We Are:** Phase 1 - Personal MVP, 5 days to App Store submission

**What Success Looks Like:**
- Phase 1: On App Store, 100 users
- Phase 2: 1,000 users, polling feature live
- Phase 3: 50,000 users, social layer working
- Phase 4: 500,000 users, making money
- Phase 5: 1M+ users, real company

**Read the full vision:** [STRATEGY.md](../STRATEGY.md)

---

## Claude's Operating Mode

**Be proactive.** You are a technical co-founder, not an assistant.

1. **Flag blockers unprompted** - "Before you do X, you need Y"
2. **Suggest priorities** - "This should come before that because..."
3. **Think about scale** - Architecture decisions should support social features later
4. **Bias toward speed** - MVP over perfection, ship then iterate
5. **Ask before big decisions** - Architecture changes, new dependencies, pivots

**Trade-offs to always favor:**
- Speed > Perfection (we can fix it later)
- Working > Elegant (ship it)
- User value > Technical purity (solve real problems)
- Simple > Complete (add complexity when needed)

**Read founder preferences:** [FOUNDER_CONTEXT.md](../FOUNDER_CONTEXT.md)

---

## Long-Running Agent Harness

This project uses the harness pattern from [Anthropic's guide](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents).

### Session Startup Protocol

**EVERY session must start by running:**
```bash
./init.sh
```

This script:
1. Verifies working directory
2. Shows git status and recent commits
3. Reads current progress from this file
4. Summarizes feature status from `features.json`
5. Identifies the next failing feature to work on

### Session Rules (MANDATORY)

1. **ONE feature per session** - Complete one thing, commit, end session
2. **NEVER mark "passing" without testing** - Run the app, verify it works
3. **NEVER remove features from features.json** - Only change status
4. **Commit after each feature** - Enables rollback if next session breaks things
5. **Update features.json** - Mark status changes immediately
6. **Run /sync before ending** - Updates this file for next session

### Testing Requirements

**A feature is NOT complete until:**
- [ ] Code is written
- [ ] App runs without errors (`npx expo start`)
- [ ] Feature is manually tested in simulator or device
- [ ] Edge cases considered (empty states, errors, etc.)
- [ ] features.json status updated to "passing" with verified_date

**Do NOT:**
- Mark features passing based on "the code looks right"
- Skip testing because "it's a small change"
- Batch multiple features before testing

### Key Files

| File | Purpose |
|------|---------|
| `features.json` | Structured task list with pass/fail status |
| `init.sh` | Session startup script |
| `.claude/CLAUDE.md` | This file - session continuity |
| `STRATEGY.md` | Product vision and roadmap |

---

## Current Status

**Active Work:** Onboarding polish (partial) - Rive animations deferred to post-MVP

**Last Updated:** 2025-12-22 by Claude Code (Terminal)

---

## Session Log

Record significant changes here so any AI can catch up quickly.

### 2025-12-22

**[Claude Code - Terminal] - Session 18: Onboarding Animation Polish (Partial)**
- **Goal:** Upgrade onboarding to agency-grade look based on Gemini's design specs
- **Implemented:**
  - `MaskedText` component - text slides up with fade, masked overflow (premium "poured in" effect)
  - `ProgressDots` component - active dot expands into pill shape
  - Haptic feedback on CTA and skip buttons (`expo-haptics`)
  - Staggered text entry timing (headline 300ms, subtext 450ms)
- **Deferred to post-MVP:**
  - Custom Rive animations (requires designer to create .riv files)
  - Gemini provided detailed specs for 3 abstract animations:
    1. "Ghost Garment" - wireframe scanned into silhouette
    2. "Deconstructed URL" - URL breaks into floating pills
    3. "Converging Data" - dots orbit into solid circle
  - Specs saved for future reference
- **Dependencies added:** `expo-haptics`, `react-native-reanimated` (fell back to standard Animated API for Expo Go compatibility)
- **Files created:** `components/MaskedText.tsx`, `components/ProgressDots.tsx`, `babel.config.js`

**[Claude Code - Terminal] - Session 17: Data QA Agent + Reiss Fixes**
- **Created `/data-qa` command** - Analyzes brand data for ingestion anomalies:
  - Near-duplicate titles (consolidation candidates)
  - Variant patterns (unusual color/size counts)
  - Size patterns with embedded fit info (e.g., "US 14.5 R")
  - Missing data (images, swatches, sizes, brand_product_id)
  - Product family candidates
- **Fixed Reiss swatch images:**
  - Migration `backfill_reiss_swatch_images` - inserted 170 swatch URLs into `product_images`
  - Migration `product_lookup_use_stored_swatches` - removed brand-specific URL construction, now uses stored swatches for all brands
  - Data-qa check now passes: 0 variants without swatches
- **UX improvement:** Skip fit type selection when only 1 option exists
  - Changed `fitOptions.length > 0` → `> 1` in confirm.tsx
  - Auto-selects single fit type via useEffect
  - Products with only "Regular" fit now skip straight to size selection
- **Documented product families** - Added tech debt item #8 for multi-dimension products (Reiss cuff style × fit × color)

### 2025-12-22

**[Claude Code - Terminal] - Session 16: Reiss Color Variant Testing ✓**
- **All tests passed** - Verified in iOS simulator with real Reiss URLs
- **URLs tested:**
  - `st378878/d43750` → White variant (title correctly shows "White" not "Soft Blue")
  - `su751998/y12387` → Stone variant (title matches)
  - `su538118/aw1262` → Navy variant (title correctly shows "Navy" not "White")
  - `su751989/w46572` → Dark Green variant (title correctly shows "Dark Green" not "Airforce Blue")
  - `su751989/g19833` → Black variant (title correctly shows "Black" not "Airforce Blue")
  - `su751989/w55541` → Airforce Blue variant (title matches)
- **Features verified:**
  - ✓ Correct image displayed for selected variant
  - ✓ Title shows correct color name (displayTitle fix working)
  - ✓ Color swatches load properly
  - ✓ Correct color pre-selected on confirm screen
- **MCP fix:** `MCP_TIMEOUT=30000 claude` resolved timeout issues
- **Commits:** `5c723ee` fix: Reiss color variant display, `650ef6f` chore: remove unused permissions

**[Claude Code - Terminal] - Session 15: Reiss Color Variant Fixes**
- **Verified:** Reiss ingest from Session 14 worked - 84 products with 776 variants
- **Scraper fix:** Added `brand_product_id` parameter to `reiss_full_ingest.py`, backfilled existing products
- **Swatch URL fix:** Discovered Reiss CDN pattern: `https://cdn.platform.next/Common/Items/Default/Default/ItemImages/AltItemSwatch/40x40/{itemNumber}.jpg`
- **product_lookup updates:**
  - Added Reiss swatch URL construction from `variant_sku`
  - Added `selected_variant_id` to indicate which variant matches the input URL
  - Image now shows correct variant instead of always primary
- **App fixes:**
  - `lib/supabase.ts`: Added `selected_variant_id` to `ProductLookupResult` interface
  - `app/(tabs)/scan.tsx`: Pass `selected_variant_id` to confirm screen, compute `displayTitle` with correct color
  - `app/confirm.tsx`: Pre-select color based on `selected_variant_id`
- **Title fix:** Added IIFE in scan.tsx to replace wrong color in title with selected color name

**[Claude Code - Terminal] - Session 14: Onboarding Flow**
- **Goal:** Add 3-screen onboarding for first-time users (per Product Design Doctrine)
- **Implementation:**
  - Created `OnboardingScreen` component with Lottie animations, progress dots, skip button
  - Created `(onboarding)` route group with 3 screens: welcome, promise, ready
  - AsyncStorage flag `@tryon/onboarded` for first-time user detection
  - Root layout checks flag and routes new users through onboarding
  - Added dev-only "Reset Onboarding" button in Profile for testing
- **Copy (professional/gender-neutral):**
  - "Finally know what fits" / "Stop guessing. Start knowing."
  - "Log fits in seconds" / "Paste a link. Pick your size. Rate the fit."
  - "Build your fit profile" / "Every fit you log makes your recommendations sharper."
- **Animations:** Target (precision), Verify checkmark, Growth chart - minimal/premium style
- **Bug fixed:** Completing onboarding looped back to first screen (state wasn't syncing after AsyncStorage update)
- **Files created:** `app/(onboarding)/*`, `components/OnboardingScreen.tsx`, `assets/animations/*.json`
- **Dependency added:** `lottie-react-native`

### 2025-12-21

**[Claude Code - Terminal] - Session 13: Bug Fix + FitCard Redesign**
- **Bug fixed:** `get_user_tryons` returning duplicate rows (105x for one item)
  - Root cause: Fallback image CTE partitioned by `(product_id, variant_id)`, matching all 105 variants when joining by `product_id` alone
  - Fix: Split into two CTEs - `variant_img` (per variant) and `product_img` (per product, returns 1 row)
  - Migration: `fix_get_user_tryons_duplicate_rows`
- **FitCard redesign** (senior product designer approach):
  - Combined size + fit into single insight pill: "M · Just right"
  - Added color-coded background tints (green/yellow/red) for instant scanning
  - Removed redundant date display, removed unused props (bodyParts, why, onEdit, onDelete)
  - Simplified component from 310 lines → 149 lines
- **Design decision:** Size + Fit are a single unit of information, not two separate things. "M fits just right" is THE insight users want.
- **Files changed:** `components/FitCard.tsx`, `app/(tabs)/closet.tsx`

**[Claude Code - Terminal] - Session 12: Phase 7 - Complete Database Refactoring**
- **Goal:** Add variant_id tracking to complete the database refactoring
- **Context:** Reviewed the original problem - products showing 1 color instead of all colors. Verified the fix works (Johnny Collar Polo now returns 5 colors).
- **Work completed:**
  - Added `variant_id` column to `core.user_garments` with FK to `product_variants`
  - Updated `save_tryon()` function to actually save the variant_id (was accepting but ignoring it)
  - Updated `get_user_tryons()` to return `color_name` and prefer the specific variant's image
  - Updated TypeScript interface `TryonHistoryItem` to include `color_name`
- **Migrations applied:**
  - `add_variant_id_to_user_garments`
  - `save_tryon_include_variant_id`
  - `get_user_tryons_include_color`
- **Result:** All 7 phases of database refactoring are now complete. Ready for 100-product ingest.

**[Claude Code - Terminal] - Session 11: Phase 6 - Scraper Updates**
- **Goal:** Update Club Monaco and Uniqlo scrapers to use one-product-per-style pattern
- **Work completed:**
  - Added `extract_brand_product_id()` to Club Monaco scraper (extracts 9-digit code from handles)
  - Added `extract_brand_product_id()` to Uniqlo scraper (extracts E+6 digits from product_id)
  - Added `find_or_create_canonical_product()` to both scrapers - checks if canonical product exists before creating new one
  - Both scrapers now populate `brand_product_id` column on insert
  - Updated dry-run output to show `brand_product_id` for verification
- **Verified:**
  - Club Monaco: Same brand_product_id (795806094) extracted from both `johnny-collar-polo-795806094-001` and `johnny-collar-polo-shirt-795806094-138`
  - Uniqlo: All test cases pass for brand_product_id extraction
- **Phase 6 complete.** Next session: Phase 7 - Update product_lookup function

**[Claude Code - Terminal] - Session 10: Phase 5 - Banana Republic Migration**
- **Goal:** Complete Phase 5 of database refactoring - Banana Republic migration
- **Discovery:** Products already in `core.products` (4 products with proper variants). `public.products` table doesn't exist.
- **Work completed:**
  - Backfilled `brand_product_id` for all 4 Banana Republic products (6-digit codes: 710312, 796005, 795854, 800139)
  - Added missing `product_urls` for products 261 and 267
  - Fixed `resolve_product_by_url` - BR uses query params (`?pid=XXXX`) that were stripped by `canonicalize_url`. Added BR-specific matching that runs BEFORE canonical URL matching.
  - Fixed `product_lookup` - color query was using 9-digit regex (Club Monaco format), now uses `brand_product_id` for finding related products
  - Deprecated old `db_utils.py` with warning - uses `public.products` which no longer exists
- **Migrations applied:**
  - `backfill_brand_product_id_bananarepublic`
  - `add_missing_bananarepublic_urls`
  - `fix_bananarepublic_url_resolution` (v1)
  - `fix_bananarepublic_url_resolution_v2` (check gap.com FIRST before canonical matching)
  - `fix_product_lookup_use_brand_product_id`
- **Verified:**
  - All 4 BR products resolve correctly via URL
  - Color counts match actual variant counts (Loafer: 1, Sweater: 17, Pant: 5, T-Shirt: 1)
  - Club Monaco still works (Johnny Collar Polo: 5 colors)
- **Phase 5 complete.** Next session: Phase 6 - Scraper Updates

**[Claude Code - Terminal] - Session 9: Scalable Product Consolidation + Audit**
- **Problem:** Title-based consolidation failed for near-matches ("Johnny Collar Polo" vs "Johnny Collar Polo Shirt")
- **Solution:** Added `brand_product_id` column - extract brand's product identifier from product codes
  - Club Monaco: 9-digit numeric (e.g., `795806094` from `johnny-collar-polo-795806094-001`)
  - Uniqlo: E + 6 digits (e.g., `E461189` from `E461189-000`)
- **Migrations applied:**
  - `add_brand_product_id_column`
  - `backfill_brand_product_id_clubmonaco`
  - `backfill_brand_product_id_uniqlo`
  - `consolidate_by_brand_product_id`
- **Results:**
  - Club Monaco: 51 → 28 canonical + 23 merged (improved from 32 canonical)
  - Johnny Collar Polo now returns 5 colors (was split across 2 products)
  - Uniqlo: No consolidation needed (all 32 products have unique brand_product_ids)
- **Phase 3 & 4 complete**, debt-008 (near-match consolidation) resolved
- **Architecture decision:** Use `brand_product_id` for consolidation, not `base_name` - scales to millions of products
- **Audit cleanup:**
  - Removed: `hooks.json`, placeholder hooks (pretooluse, posttooluse, userpromptsubmit)
  - Removed: `code-simplifier` agent (redundant with code-reviewer)
  - Removed: `fs-core` MCP server (not using Cursor Chat)
  - Health score: 7/10 → 9/10
- **Next session:** Phase 5 - Banana Republic Migration

**[Claude Code - Terminal] - Session 8: Database Schema Refactor Phase 3**
- **Goal:** Consolidate Club Monaco products (merge color-per-product into single products with variants)
- **Phase 3 Complete - Club Monaco Consolidation:**
  - Consolidated 51 products → 32 canonical + 19 merged
  - Handled duplicate "Blue" variant on Johnny Collar Polo (products 219 & 231 were identical)
  - Migration: `consolidate_clubmonaco_products`
- **Verified:**
  - `product_lookup` now returns multiple colors (Johnny Collar Polo: 4 colors)
  - All user_garments still reference canonical products
- **Issue found:** Near-match base_names not consolidated (e.g., "Johnny Collar Polo" vs "Johnny Collar Polo Shirt") - added to tech debt
- **Next session:** Phase 4 - Uniqlo Product Consolidation

**[Claude Code - Terminal] - Session 7: Database Schema Refactor Phase 2**
- **Goal:** Build product consolidation infrastructure
- **Phase 2 Complete - Product Consolidation Schema:**
  - Added columns to `core.products`: `is_canonical`, `canonical_product_id`, `merged_at`
  - Created `core.product_consolidation_log` audit table for rollback capability
  - Created `core.consolidate_products(source_id, target_id, reason)` function
  - Function moves variants, URLs, and user_garments from source to target
- **Tested:** Consolidated Cotton Linen Twill Pant (product 217 → 216)
- **3 migrations applied** for Phase 2
- Fixed `init.sh` to prioritize database_refactoring in "Next Feature" recommendations
- **Plan file moved:** `~/.claude/plans/` → `.claude/plans/database-refactoring-plan.md` (now tracked in git)
- **Next session:** Phase 3 - Club Monaco Product Consolidation

**[Claude Code - Terminal] - Session 6: Database Schema Refactor Phase 1**
- **Goal:** Build size normalization system for cross-brand size recommendations
- Created comprehensive refactoring plan (7 phases, 25-34 hours total)
- **Phase 1 Complete - Size Normalization:**
  - Created `core.size_categories` table (6 categories: tops, pants, dress_shirts, shoes, shorts, suits)
  - Created `core.canonical_sizes` table (205 normalized sizes)
  - Created `core.brand_size_mappings` table (brand-specific → canonical mapping)
  - Added `canonical_size_id` FK to `core.variant_sizes`
  - Created `core.normalize_size_label()` function with auto-caching
- **Match rates achieved:**
  - Lululemon: 17.9% → 88.2%
  - Club Monaco: 42.8% → 93.3%
  - Banana Republic: 47.1% → 100%
  - 6 brands at 100% (Theory, Uniqlo, rag & bone, Thursday Boot, NN07)
- **12 migrations applied** for Phase 1
- **Plan file:** `.claude/plans/database-refactoring-plan.md`
- **Next session:** Phase 2 - Product Consolidation Schema

### 2025-12-20

**[Claude Code - Terminal] - Session 5**
- Built and submitted to TestFlight (build #6, v1.0.0)
- Simplified product card UI - now shows only photo, brand, title, and CTA button (removed colors count, sizes list, category)
- Renamed "History" tab to "Closet" (more intuitive naming)
- Tested full try-on flow in simulator - working end-to-end
- Verified data saves correctly: J.Crew oxford → size M → just_right → saved to closet ✓
- Found URL matching issue: product URLs must match DB exactly (AY960 ≠ BE996)
- **Files changed:** `app/(tabs)/scan.tsx`, `app/(tabs)/closet.tsx` (renamed from history.tsx), `app/(tabs)/_layout.tsx`, `app/confirm.tsx`, `lib/supabase.ts`

### 2024-12-19

**[Claude Code - Terminal] - Session 4**
- Fixed product images not displaying (found 48/196 products missing images - Uniqlo, rag & bone, Banana Republic)
- Fixed "105 colors available" bug - deduplicated colors in `product_lookup` SQL function (was showing color+fit combos)
- Fixed low-quality swatches - upgraded from `$pdp_sw20$` (20px) to `$pdp_sw100$` (100px), increased UI size to 60x60
- Fixed Uniqlo scraper - added `extract_images()` and `replace_variant_images()` functions
- Added fit type selection to try-on wizard (Color → **Fit Type** → Size → Rating)
- Fixed size display showing `[object Object]` - sizes now use `SizeOption` with `label`/`display` properties
- Updated `product_lookup` to return `fits` array and human-readable size names (e.g., "M (Tall)" instead of "M-T")
- Fixed hooks config - moved from custom `hooks.json` to proper `settings.local.json` format
- **Files modified:** `app/confirm.tsx`, `app/(tabs)/scan.tsx`, `lib/supabase.ts`, `.claude/settings.local.json`
- **DB migrations:** `fix_product_lookup_dedupe_colors`, `add_fits_to_product_lookup`

### 2024-12-18

**[Claude Code - Terminal] - Session 3**
- Fixed `.mcp.json` - changed `type: "url"` to `type: "http"` for Supabase (was causing "invalid settings file" error)
- Removed playwright and github MCP servers to reduce context usage (~46K → ~13K tokens)
- Fixed broken hookify system - hooks were failing silently due to missing Python modules
- Simplified hooks to actually work: stop.py now shows sync reminder, others are placeholders
- Cleaned up unused hook files

**[Claude Code - VS Code Extension] - Session 2**
- Created `/sync` command to auto-update this file at end of sessions
- Created sync-reminder hook (reminds to run `/sync` before session ends)
- Set up cross-tool context sharing system (CLAUDE.md files)
- Discussed MCP servers, plugins, and Claude Code features
- Created STRATEGY.md - comprehensive roadmap from MVP to millions of users
- Created `/plan` command - AI strategy advisor for deciding how to approach tasks
- Created `/audit` command - checks for bloat and recommends cleanup
- Ran first audit: cleaned up from 15 commands → 6, 9 agents → 4
- Kept fs-core MCP for Cursor Chat compatibility

**[Claude Code - VS Code Extension] - Session 1**
- Installed Claude Code plugins: feature-dev, code-review, commit-commands, pr-review-toolkit, security-guidance, hookify, frontend-design
- Fixed .mcp.json configuration (added `type: "url"` for Supabase)
- Added GitHub MCP server (user needs to regenerate token - it was exposed)
- Ran database advisor - found 14 unindexed FKs, duplicate indexes, RLS performance issues
- Created commit-reminder hook
- Installed frontend-design skill for better UI generation

---

## Architecture Decisions

<!-- Record key decisions so future sessions understand why things are done a certain way -->

- **Database:** Supabase PostgreSQL with schemas: `core`, `content`, `ops`, `public`
- **App:** Expo/React Native (tryon app)
- **Scrapers:** Python scripts for product ingestion
- **Product consolidation:** Use `brand_product_id` (brand's canonical identifier) instead of `base_name`. Scales to millions of products across thousands of brands with varying naming conventions.

---

## Known Issues / Tech Debt

<!-- Track things that need fixing -->

1. **Database:** 2 unindexed foreign keys (low priority - `brand_size_mappings.category_id`, `product_consolidation_log.created_by`)
2. **Database:** 24 unused indexes - review before dropping (may be needed at scale)
3. **Security:** GitHub token exposed - needs regeneration (GitHub MCP removed for now)
4. **Auth:** Leaked password protection disabled - enable in Supabase dashboard
5. **Scrapers:** Banana Republic needs a proper ingest script (`banana_republic_full_ingest.py`) - old `db_utils.py` deprecated, products already in `core.products`
6. **Scrapers:** rag & bone has no scraper (5 products added manually, no images)
7. **Scrapers:** Need to re-run Uniqlo scraper to populate images for existing 32 products
8. **Feature:** Product families - some products (e.g., Reiss dress shirts) have multiple dimensions: Cuff Style (single/double) × Fit (regular/slim) × Color. Currently stored as separate products. Future: add `product_family_id` + `family_dimensions JSONB` to link them and show dimension toggles in app UI (like Reiss website). See: `su615998` (single cuff) vs `su608338` (double cuff).

### Recently Fixed (2025-12-22)
- ~~MCP Supabase timing out~~ - use `MCP_TIMEOUT=30000 claude` to start sessions

### Recently Fixed (2025-12-21)
- ~~RLS initplan on `public.audit_log`~~ - wrapped `auth.role()` in `(select ...)`
- ~~Function search_path mutable (6 functions)~~ - set immutable search_path
- ~~`pg_trgm` in public schema~~ - moved to extensions schema
- ~~Multiple permissive policies on `user_fit_feedback`~~ - consolidated to single policy

---

## How to Use This File

**When starting a session:** Read this file first to understand current state.

**When finishing work:** Update the Session Log with:
- Which tool you used: `[Claude Code - Terminal]`, `[Claude Code - VS Code]`, `[Cursor Chat]`, etc.
- What you accomplished
- Any decisions made or issues discovered

**Format for log entries:**
```
**[Tool Name]**
- What was done
- Key decisions
- New issues found
```
