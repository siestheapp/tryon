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

**Active Work:** Database Schema Refactoring (Phase 3 of 7 complete)

**Last Updated:** 2025-12-21 by Claude Code (Terminal)

---

## Session Log

Record significant changes here so any AI can catch up quickly.

### 2025-12-21

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

---

## Known Issues / Tech Debt

<!-- Track things that need fixing -->

1. **Database:** 14 unindexed foreign keys (see Supabase advisor)
2. **Database:** Duplicate indexes to clean up
3. **Database:** RLS policies need `(select auth.uid())` optimization
4. **Security:** GitHub token exposed - needs regeneration (GitHub MCP removed for now)
5. **Security:** `pg_trgm` extension in public schema - move to extensions
6. **Scrapers:** Banana Republic scraper uses wrong schema (`public.products` instead of `core`) - needs architectural fix
7. **Scrapers:** rag & bone has no scraper (5 products added manually, no images)
8. **Scrapers:** Need to re-run Uniqlo scraper to populate images for existing 32 products
9. **Data quality:** Near-match product base_names need consolidation (e.g., "Johnny Collar Polo" vs "Johnny Collar Polo Shirt")

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
