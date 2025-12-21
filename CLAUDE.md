# AI Context File

**Read these files to understand the project:**
- `.claude/CLAUDE.md` - Session history, current status, and agent harness rules
- `STRATEGY.md` - Product roadmap, AI collaboration guide, and decision frameworks
- `features.json` - Structured task list (NEVER remove items, only change status)

## Session Startup (MANDATORY)

**Run this at the start of EVERY session:**
```bash
./init.sh
```

This project uses the [Anthropic long-running agent harness pattern](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents).

**Key rules:**
1. ONE feature per session
2. NEVER mark "passing" without end-to-end testing
3. Commit after each feature completion
4. Run `/sync` before ending session

This project uses multiple AI tools. To stay in sync:
1. Run `./init.sh` first
2. Check `.claude/CLAUDE.md` for recent changes and current status
3. Read `STRATEGY.md` for the big picture and how to approach tasks
4. Update `features.json` status when completing features
5. Update the Session Log when you complete significant work
6. Note which tool you're using: `[Claude Code - Terminal]`, `[Claude Code - VS Code]`, `[Cursor Chat]`, etc.

## Quick Project Summary

- **App:** Expo/React Native virtual try-on app
- **Database:** Supabase (project: rybsqzlqywjcvoxsymsi)
- **Scrapers:** Python scripts in `/scrapers`

## Installed Tooling

Claude Code plugins in `.claude/`:
- `/feature-dev` - Guided feature development
- `/code-review` - PR review with parallel agents
- `/commit` - Smart commits
- `/commit-push-pr` - Commit + push + PR
- `/hookify` - Custom rule creation
- `/review-pr` - Deep PR analysis

MCP servers:
- Supabase (database access)
- GitHub (needs token regeneration)
