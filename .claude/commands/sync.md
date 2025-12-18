---
description: Update CLAUDE.md with what was accomplished this session
---

# Sync Session to CLAUDE.md

Analyze this conversation and update the project context file.

## Instructions

1. **Read the current context file:**
   - Read `.claude/CLAUDE.md`

2. **Analyze this session:**
   - What files were created, modified, or deleted?
   - What features were implemented or bugs fixed?
   - What decisions were made?
   - What issues were discovered?
   - What's left to do?

3. **Determine the tool being used:**
   - If running in VS Code/Cursor extension: `[Claude Code - VS Code Extension]`
   - If running in terminal: `[Claude Code - Terminal]`
   - If unsure, ask the user

4. **Update `.claude/CLAUDE.md`:**
   - Add a new entry to the Session Log with today's date
   - Include the tool name in brackets
   - List key accomplishments as bullet points
   - Update "Current Status" and "Active Work" if needed
   - Add any new issues to "Known Issues / Tech Debt"
   - Update "Architecture Decisions" if any were made

5. **Keep entries concise** - future AIs need to scan quickly

6. **Show the user** what you added so they can verify

7. **Check if a commit is warranted:**
   - Run `git status` to see uncommitted changes
   - If there are meaningful changes, ask: "Want me to run `/commit` to save these changes?"
   - Good commit cadence: after completing a feature, fixing a bug, or finishing a logical unit of work
   - Don't commit mid-task or for trivial changes

8. **Periodic audit reminder:**
   - Check the Session Log - if there have been 5+ sessions since the last `/audit`, suggest: "It's been a while since we reviewed the project setup. Want me to run `/audit` to check for bloat?"
   - This keeps the tooling lean over time

## Example Entry

```markdown
### 2024-12-18

**[Claude Code - VS Code Extension]**
- Implemented user authentication flow
- Added JWT token refresh logic
- Decision: Using httpOnly cookies for token storage
- Issue found: Rate limiting not implemented yet
```
