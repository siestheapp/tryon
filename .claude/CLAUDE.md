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

## Current Status

**Active Work:** App Store submission (5-day deadline)

**Last Updated:** 2024-12-18 by Claude Code (VS Code Extension)

---

## Session Log

Record significant changes here so any AI can catch up quickly.

### 2024-12-18

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
4. **Security:** GitHub token exposed - needs regeneration
5. **Security:** `pg_trgm` extension in public schema - move to extensions

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
