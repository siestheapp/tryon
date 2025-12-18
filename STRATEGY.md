# freestylefit - Product Strategy & AI Collaboration Guide

This document defines the vision, roadmap, and AI collaboration strategy for building freestylefit from MVP to millions of users.

---

## Vision

**The Problem:** Online shoppers waste time and money on clothes that don't fit. Every brand sizes differently. Returns are frustrating and expensive.

**The Solution:** freestylefit learns how clothes fit YOUR body across brands. Paste a URL, log your try-on, and never guess your size again.

**The Endgame:** A social platform where millions share fit data, creating the world's most accurate sizing intelligence. Think "Waze for clothing fit."

---

## Current State (December 2024)

### What Exists
- iOS app (Expo/React Native) with dark UI
- 3-tab interface: Scan → History → Profile
- Multi-step try-on wizard with body-part feedback
- Supabase backend with 7 brands, 135 products, 575 variants
- Python scrapers for J.Crew, Lululemon, Reiss, Theory, Uniqlo, rag & bone, Club Monaco
- Auth flow (email verification)
- Production build ready for TestFlight

### Immediate Blockers
1. TestFlight submission pending
2. No app icon or screenshots
3. No privacy policy URL
4. GitHub token needs regeneration
5. Database has 14 unindexed FKs (performance)

---

## Roadmap

### Phase 1: Launch MVP (Target: Jan 2025)
**Goal:** Get on App Store, acquire first 100 users

| Task | Priority | AI Strategy |
|------|----------|-------------|
| Submit to TestFlight | P0 | Direct work |
| Test on physical device | P0 | Direct work |
| Create app icon (1024x1024) | P0 | Use `/feature-dev` or Cursor for design |
| Generate screenshots | P0 | Direct work after testing |
| Write privacy policy | P1 | Claude can draft, you review |
| App Store metadata | P1 | Claude can draft copy |
| Fix database indexes | P1 | Use Supabase MCP to generate migrations |
| Submit for review | P0 | Direct work |

### Phase 2: Core Loop (Target: Feb-Mar 2025)
**Goal:** Validate product-market fit, reach 1,000 active users

| Feature | Description | AI Strategy |
|---------|-------------|-------------|
| Push notifications | Remind users to log try-ons | `/feature-dev` for architecture |
| Size recommendations | "Based on your history, try M at J.Crew" | Complex - use Plan mode first |
| More brands | Add 10+ brands to scrapers | Agents can help write scrapers |
| Onboarding flow | Better first-run experience | `/feature-dev` |
| Analytics | Track user behavior (Mixpanel/Amplitude) | Direct work with Claude assist |
| Crash reporting | Sentry integration | Direct work |

### Phase 3: Social Layer (Target: Q2 2025)
**Goal:** Create network effects, reach 50,000 users

| Feature | Description | AI Strategy |
|---------|-------------|-------------|
| User profiles | Public fit profiles | `/feature-dev` - multi-file feature |
| Follow system | Follow users with similar body type | Plan mode → architecture decision |
| Fit feed | "People like you rated this M" | Complex - design doc first |
| Comments/tips | "Runs small in shoulders" | `/feature-dev` |
| Share to social | Instagram/TikTok integration | Direct work |
| Referral system | Invite friends, earn badges | `/feature-dev` |

### Phase 4: Intelligence (Target: Q3 2025)
**Goal:** Become indispensable, reach 500,000 users

| Feature | Description | AI Strategy |
|---------|-------------|-------------|
| ML size prediction | Predict fit before buying | Research phase - Claude for architecture |
| Brand comparison | "Your J.Crew M = Theory S" | Data analysis - agents can help |
| Browser extension | One-click fit check while shopping | New codebase - `/feature-dev` |
| Retailer API | Let brands integrate our data | Design doc first |
| Photo try-on | AI virtual try-on (VTON) | Major R&D - phased approach |

### Phase 5: Scale (Target: 2026)
**Goal:** 1M+ users, revenue, potential acquisition

| Initiative | Description |
|------------|-------------|
| Android app | Expand platform |
| Monetization | Premium features, affiliate revenue, B2B API |
| International | EU sizing, more regions |
| Partnerships | Integrate with Shopify stores |
| Marketing | Influencer partnerships, content strategy |

---

## AI Collaboration Framework

### When to Use Each Tool

```
┌─────────────────────────────────────────────────────────────────┐
│                    TASK COMPLEXITY GUIDE                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SIMPLE                                                COMPLEX  │
│    │                                                      │     │
│    ▼                                                      ▼     │
│                                                                 │
│  Direct      Claude Code     Claude Code      Plan Mode +       │
│  Work        Terminal        Extension        /feature-dev      │
│                                                                 │
│  • Typo      • Quick fixes   • Feature work   • New systems     │
│  • Config    • Git ops       • Debugging      • Architecture    │
│  • Manual    • Scripting     • Multi-file     • Social layer    │
│    testing   • DB queries    • UI work        • ML features     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Decision Tree: How Should I Build This?

```
Is it a bug fix or <10 lines of code?
  YES → Just do it directly or ask Claude
  NO  ↓

Does it touch 1-2 files?
  YES → Claude Code (terminal or extension)
  NO  ↓

Does it require architecture decisions?
  YES → Use Plan Mode first (Shift+Tab twice)
  NO  ↓

Is it a new feature with multiple components?
  YES → Use /feature-dev command
  NO  ↓

Is it research/exploration?
  YES → Use Explore agent or ask Claude
  NO  → Just start building, refactor later
```

### AI Tools by Use Case

| Task | Best Tool | Why |
|------|-----------|-----|
| Fix a bug | Claude Code Extension | Quick, contextual |
| Write a new scraper | Claude Code Terminal | Can run/test immediately |
| Design a feature | `/feature-dev` | Structured 7-phase process |
| Review PR | `/code-review` | Parallel agents catch more |
| Understand codebase | "Explore" agent | Fast, thorough search |
| Database changes | Supabase MCP | Direct DB access + advisors |
| Marketing copy | Cursor Chat | Creative writing |
| Technical docs | Claude Code | Understands codebase |
| Refactor code | `/review-pr simplify` | Code simplifier agent |
| Plan complex work | Plan Mode | Research before building |

### Parallel Work Strategies

**Strategy 1: Git Worktrees**
Work on multiple features simultaneously:
```bash
git worktree add ../freestylefit-social -b feature/social
git worktree add ../freestylefit-notifications -b feature/push
# Now you have 3 independent directories with separate Claude sessions
```

**Strategy 2: Agent Swarms**
For large features, spawn multiple agents:
```
/feature-dev Add user following system
# This spawns code-explorer, code-architect, code-reviewer agents in parallel
```

**Strategy 3: Background Research**
While coding, have an agent research in background:
```
# In Claude Code:
"Research how Instagram handles follow suggestions - run in background"
# Continue working while it researches
```

---

## Key Metrics to Track

### Phase 1 (MVP)
- App Store approval: Yes/No
- Downloads: Target 500
- DAU: Target 50
- Try-ons logged: Target 200

### Phase 2 (Core Loop)
- 7-day retention: Target 30%
- Try-ons per user: Target 5+
- NPS: Target 40+
- Brands requested: Track demand

### Phase 3 (Social)
- Follows per user: Target 10+
- Social shares: Target 100/week
- Viral coefficient: Target 0.5+
- User-generated content: Track volume

### Phase 4+ (Scale)
- MAU: 100K → 500K → 1M
- Revenue: TBD
- API calls (B2B): TBD

---

## Marketing & Growth Ideas

### Pre-Launch
- [ ] Landing page with waitlist
- [ ] "Coming soon" social posts
- [ ] Reddit soft launch (r/malefashionadvice, r/femalefashionadvice)

### Launch
- [ ] Product Hunt launch
- [ ] Hacker News Show HN
- [ ] Fashion blogger outreach
- [ ] TikTok content (sizing fails → solution)

### Growth Loops
- **Content loop**: Users share fit data → Others discover app
- **Utility loop**: More data → Better recommendations → More users
- **Social loop**: Follow friends → See their fits → Log your own

### Potential Partnerships
- Shopify apps marketplace
- Fashion influencers (affiliate deals)
- Retail brands (white-label fit data)
- Returns reduction platforms

---

## Technical Debt & Improvements

### Database (from Supabase Advisor)
- [ ] Add indexes to 14 foreign keys
- [ ] Remove duplicate indexes
- [ ] Fix RLS `auth.uid()` → `(select auth.uid())`
- [ ] Move pg_trgm to extensions schema
- [ ] Enable leaked password protection

### App
- [ ] Add error boundaries
- [ ] Implement offline support
- [ ] Add loading skeletons
- [ ] Optimize image loading
- [ ] Add haptic feedback

### Scrapers
- [ ] Add retry logic
- [ ] Implement rate limiting
- [ ] Add monitoring/alerting
- [ ] Parallelize scraping

---

## Questions to Ask Claude

When starting any significant work, ask:

1. **"What's the best approach for [feature]?"**
   - Claude will consider your codebase patterns
   - May suggest using specific tools/agents

2. **"Should I use /feature-dev for this?"**
   - If multi-file or needs architecture decisions: Yes
   - If simple fix: No, just do it

3. **"What could go wrong with [approach]?"**
   - Claude will identify risks
   - May suggest alternatives

4. **"How would [company] solve this?"**
   - Learn from industry patterns
   - "How does Stitch Fix do size recommendations?"

5. **"What's the fastest path to validate [idea]?"**
   - MVP thinking
   - Avoid over-engineering

---

## Commands Quick Reference

```bash
# Development
/feature-dev [description]     # Guided feature development
/code-review                   # Review current changes
/commit                        # Smart commit
/commit-push-pr               # Full PR workflow

# Analysis
/review-pr tests,errors        # Deep PR analysis
/hookify [rule]               # Create behavior rules

# Project Management
/sync                         # Update CLAUDE.md with session work

# Database (via Supabase MCP)
"run the database advisor"     # Get performance/security issues
"show me the schema"          # List tables
"query [table]"               # Direct SQL
```

---

## Success Criteria

**You'll know freestylefit is working when:**

1. **Users return** - 30%+ weekly retention
2. **Users share** - Organic social posts
3. **Users request features** - Sign of engagement
4. **Brands notice** - Inbound partnership interest
5. **Revenue potential clear** - B2B or premium path visible

---

*Last updated: 2024-12-18 by Claude Code (VS Code Extension)*
*Run `/sync` to update CLAUDE.md when making progress on this roadmap*
