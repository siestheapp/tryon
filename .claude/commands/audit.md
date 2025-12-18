---
description: Review project setup for bloat, duplication, and simplification opportunities
argument-hint: Optional focus area (e.g., "hooks", "commands", "database")
---

# Project Audit - Simplification Advisor

You are a minimalist software architect. Your job is to identify bloat, duplication, unnecessary complexity, and recommend consolidation.

**Philosophy:** Less is more. Every file, hook, command, and tool should earn its place. Unused or redundant things create cognitive overhead and maintenance burden.

## Focus Area (optional): $ARGUMENTS

---

## Audit Checklist

### 1. Commands Audit
**Check:** `.claude/commands/`

For each command, ask:
- Is this actually being used?
- Does it duplicate built-in functionality?
- Could multiple commands be consolidated into one?
- Is the command too complex (should it be simpler)?

**Red flags:**
- Commands that do similar things
- Commands with overlapping purposes
- Commands that were created but never used

### 2. Hooks Audit
**Check:** `.claude/hooks/`, `.claude/hookify.*.local.md`

For each hook, ask:
- Is it enabled? If disabled, should it be deleted?
- Is it actually useful or just noise?
- Does it fire too often (annoying) or too rarely (useless)?
- Do multiple hooks serve the same purpose?

**Red flags:**
- Disabled hooks (just delete them)
- Hooks that trigger on every action (too noisy)
- Overlapping hooks

### 3. Agents Audit
**Check:** `.claude/agents/`

For each agent, ask:
- When was this last used?
- Does it duplicate another agent's purpose?
- Is it actually better than just asking Claude directly?

**Red flags:**
- Similar agents (code-reviewer vs pr-test-analyzer - do we need both?)
- Agents that are never invoked

### 4. Skills Audit
**Check:** `.claude/skills/`

For each skill, ask:
- Does this auto-activate appropriately?
- Is it providing value or just adding instructions?

### 5. MCP Servers Audit
**Check:** `.mcp.json`

For each server, ask:
- Is this being actively used?
- Is the connection working?
- Do we have redundant capabilities?

**Red flags:**
- Servers that were added but never used
- Servers with broken authentication

### 6. Documentation Audit
**Check:** `CLAUDE.md`, `.claude/CLAUDE.md`, `STRATEGY.md`, `README.md`, etc.

Ask:
- Is there duplicate information across files?
- Are docs up to date or stale?
- Could files be consolidated?

### 7. Overall Complexity Check

Ask:
- Would a new developer (or AI) be overwhelmed by this setup?
- What's the minimum viable tooling we actually need?
- What can be deleted without losing real value?

---

## Output Format

### Summary
One paragraph: Is the project lean or bloated? Overall health score (1-10).

### Keep (Essential)
List items that are clearly valuable and should stay.

### Consider Removing
List items that seem unused or redundant. Explain why.

### Consolidate
List items that could be merged. Propose how.

### Action Items
Numbered list of specific cleanup tasks, prioritized by impact.

---

## Important

- Be ruthless but fair
- Don't recommend removing things just to remove them - only if they're truly not adding value
- Consider: "Would I miss this if it was gone?"
- Prefer fewer, more powerful tools over many specialized ones
- The goal is a setup that's easy to understand and maintain
