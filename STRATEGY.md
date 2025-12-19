# freestylefit - Complete Product Vision

> The definitive strategy document for building freestylefit from personal MVP to millions of users.

---

## 1. The Vision

**The Problem:** Online clothes shopping is guesswork. Every brand sizes differently. You order, hope it fits, and return half of it. It's frustrating, expensive, and anxiety-inducing.

**The Solution:** freestylefit learns what fits YOUR body across brands. You log try-ons, get smart recommendations, and eventually discover what people with matching sizes are wearing.

**The Endgame:** TikTok meets Stitch Fix. A social platform where millions share fit data, creating the world's most accurate sizing intelligence. Users scroll a For You Page of people who share their sizes, see what they're wearing, and buy with confidence.

**The Magic Moment:** "Emma123 wears S in 3 items you also wear S in. She loves this Aritzia dress." → You know it will probably fit → Confident purchase.

---

## 2. Where We Are Now

**Phase:** 1 - Personal MVP
**Priority:** App Store submission in 5 days
**Focus:** Pure personal utility (no social features yet)

### What Exists
- iOS app (Expo/React Native) with dark theme
- 3-tab interface: Scan → History → Profile
- Multi-step try-on wizard with body-part feedback
- Supabase backend with 7 brands, 135 products, 575 variants
- Python scrapers for J.Crew, Lululemon, Reiss, Theory, Uniqlo, rag & bone, Club Monaco
- Auth flow (email/password)
- Production build ready for TestFlight

### Immediate Blockers
1. Submit to TestFlight and test on device
2. Create app icon (1024×1024)
3. Generate App Store screenshots
4. Write privacy policy URL
5. Complete App Store metadata

---

## 3. The Journey (5 Phases)

### Phase 1: Launch MVP (NOW - Jan 2025)
**Goal:** Get on App Store, acquire first 100 users

| Task | Priority | Status |
|------|----------|--------|
| Submit to TestFlight | P0 | Pending |
| Test on physical device | P0 | Pending |
| App icon | P0 | Pending |
| Screenshots | P0 | Pending |
| Privacy policy | P1 | Pending |
| App Store metadata | P1 | Pending |
| Submit for review | P0 | Pending |

**V1 Positioning:** Personal fit tracker only. No hints about social features.

---

### Phase 2: Core Loop + Polling (Feb-Mar 2025)
**Goal:** Validate product-market fit, reach 1,000 users

| Feature | Description |
|---------|-------------|
| Size recommendations | "Based on your history, try M at J.Crew" |
| **Polling feature** | Side-by-side "which looks better?" with crowd voting |
| More brands | Scale scrapers from 7 → 50 brands |
| User URL submission | Paste any product URL → auto-scrape into database |
| Push notifications | Remind users to log try-ons |
| Analytics | Track user behavior (Mixpanel/Amplitude) |

**Why Polling Early:** Creates engagement before full social layer. Users get value from crowd feedback without needing follows/profiles.

---

### Phase 3: Social Layer (Q2 2025)
**Goal:** Create network effects, reach 50,000 users

| Feature | Description |
|---------|-------------|
| User profiles | Public fit profiles showing size history |
| FYP algorithm | Feed based on size matching (see Section 4) |
| Follow system | Follow "fit twins" - people who match your sizes |
| Content posting | Photos/videos with size + fit feedback |
| Messaging | DM users with similar fits |
| Share to social | Instagram/TikTok integration |

---

### Phase 4: Monetization (Q3 2025)
**Goal:** Generate revenue, reach 500,000 users

| Revenue Stream | Description |
|----------------|-------------|
| Affiliate links | Commission on purchases through app |
| Sponsored content | Brands pay to boost posts (still size-matched) |
| Premium features | TBD - advanced analytics, fit predictions |

---

### Phase 5: Scale & Company (2026)
**Goal:** 1M+ users, real company

| Initiative | Description |
|------------|-------------|
| Android app | Expand platform |
| International | EU sizing, more regions |
| First hires | Engineering, design, partnerships |
| Fundraising | If needed for growth |
| Partnerships | Shopify apps, brand integrations |
| Potential exit | Acquisition by fashion retailer or tech platform |

---

## 4. The Social Algorithm (How FYP Works)

### Core Concept: Size Matching
Users are matched based on shared sizing across products:

```
Match Score = Count of products where both users rated "just_right" for same size

Example:
- You: M in J.Crew Oxford, S in Lululemon Define Jacket, M in Theory Blazer
- Emma123: M in J.Crew Oxford, S in Lululemon Define Jacket, L in Uniqlo Sweater
- Match Score: 2 (J.Crew Oxford + Lululemon Define Jacket)
```

### Feed Priority
1. **Fit twins content** - Posts from users with high match scores
2. **Products likely to fit** - Based on your logged sizes
3. **Sponsored (Phase 4)** - Brand-boosted but still size-matched

### The Magic
Instead of "people who viewed this also viewed that" (behavior-based), we use "people who FIT this also FIT that" (body-based). More accurate, more personal.

---

## 5. Monetization Details

### Affiliate Revenue
- Every product link → affiliate URL → commission on purchase
- Partner with major affiliate networks (Rakuten, CJ, etc.)
- Track: clicks, conversions, revenue per user

### Sponsored Content
- Brands pay to boost posts in FYP
- **Key constraint:** Still respects size matching (no showing clothes that won't fit)
- Premium placement, not random ads

### Premium Features (TBD)
- Advanced fit analytics
- Fit predictions before buying
- Unlimited history
- Early access to features

---

## 6. Database Strategy

### Short-term: Scale Scrapers (7 → 50+ brands)
- Current: J.Crew, Lululemon, Reiss, Theory, Uniqlo, rag & bone, Club Monaco
- Priority additions: Aritzia, Banana Republic, Gap, Everlane, Reformation, Madewell
- Python scrapers in `/scrapers/`

### Medium-term: User URL Submission
- Any user can paste a product URL
- System auto-scrapes product into database
- No waiting for manual scraper development
- Architecture: Queue → Worker → Scrape → Insert

### Long-term: Data Partnerships
- Explore product feed partnerships with aggregators
- More reliable than scraping
- May require revenue share or licensing fees

---

## 7. Company Building

### Pre-Product-Market-Fit (Now - 10K users)
- Stay solo, move fast with AI tools
- Use Claude, Cursor, etc. as co-founders
- No employees, no fundraising
- Focus: Ship features, learn from users

### Early Traction (10K - 100K users)
- Consider part-time help (design, brand outreach)
- Contractors over employees
- Still bootstrapped

### Growth Phase (100K - 500K users)
- First full-time hire (engineering or growth)
- May need to formalize company structure
- Consider fundraising if growth capital needed

### Scale (500K+ users)
- Multiple employees
- Fundraise or bootstrap decision point
- Possible acquisition interest

---

## 8. Competitive Landscape

| Competitor | Model | Our Edge |
|------------|-------|----------|
| Stitch Fix | Personal styling, subscription | We're social, not algorithmic boxes |
| True Fit | B2B size recommendations | We're consumer-facing, social proof |
| Pinterest | Visual discovery | We add size intelligence |
| TikTok | Social video | We add shopping integration + fit matching |
| Instagram Shopping | Social commerce | We're fit-first, not just pretty photos |

**freestylefit unique positioning:** Size matching + social discovery + direct purchase. The only platform where you buy from people who share your body type.

---

## 9. AI Collaboration Rules

Claude (and other AI tools) should operate as a **proactive technical co-founder**:

### Be Proactive
- Flag blockers before asked ("Before you do X, you need Y")
- Suggest priorities ("This should come before that because...")
- Make recommendations on architecture with social features in mind

### Bias Toward Speed
- MVP over perfection
- Ship then iterate
- Simple over complete
- Working over elegant

### Ask Before Big Decisions
- Architecture changes
- New dependencies
- Pivots from the roadmap
- But don't wait to flag issues

### Think About Scale
- Database decisions should support millions of users
- Every feature should consider "how does this work in social phase?"
- Don't over-engineer, but don't paint into corners

---

## 10. Key Metrics

### Phase 1 (MVP)
- App Store approval: Yes/No
- Downloads: Target 500
- DAU: Target 50
- Try-ons logged: Target 200

### Phase 2 (Core Loop)
- 7-day retention: Target 30%
- Try-ons per user: Target 5+
- Polls created/voted: Track engagement
- Brands requested: Track demand

### Phase 3 (Social)
- Follows per user: Target 10+
- FYP engagement: Scroll depth, clicks
- Social shares: Target 100/week
- User-generated content: Track volume

### Phase 4+ (Scale)
- MAU: 100K → 500K → 1M
- Revenue per user
- Affiliate conversion rate
- Sponsored post CPM

---

## 11. Technical Debt & Improvements

### Database (from Supabase Advisor)
- [ ] Add indexes to 14 foreign keys
- [ ] Remove duplicate indexes
- [ ] Fix RLS `auth.uid()` → `(select auth.uid())`
- [ ] Move pg_trgm to extensions schema

### App
- [ ] Error boundaries
- [ ] Offline support
- [ ] Loading skeletons
- [ ] Image optimization
- [ ] Haptic feedback

### Scrapers
- [ ] Retry logic
- [ ] Rate limiting
- [ ] Monitoring/alerting
- [ ] Parallelize scraping

### Known Scraping Blockers (Dec 2024)
Sites that block headless browser / automated access:

| Site | Issue | Workaround |
|------|-------|------------|
| **Mr Porter** | Akamai bot protection, blocks all automated requests | Manual entry only |
| **Patagonia** | Waiting room / queue system blocks automated access | Manual entry only |
| **Lululemon** | HTTP/2 protocol errors with Playwright | WebFetch works |

**Working sites:**
- Banana Republic (Playwright works)
- Thursday Boots (Playwright works)
- NN07 (Playwright works)
- J.Crew, Theory, Uniqlo, Reiss, rag & bone (Python scrapers work)

**Data Validation:** Run `SELECT * FROM ops.validate_product_data() WHERE issue_count > 0;` after any ingestion to catch orphaned records, missing variants, etc.

---

## 12. Quick Reference

### Commands
```bash
/feature-dev [description]  # Guided feature development
/code-review               # Review current changes
/commit                    # Smart commit
/plan [task]              # Get AI strategy advice
/audit                    # Check for bloat
```

### Key Files
- `STRATEGY.md` - This document (vision)
- `.claude/CLAUDE.md` - Session context
- `FOUNDER_CONTEXT.md` - Personal context for AI
- `PROJECT_STATUS.md` - Current sprint status
- `APPSTORE_ROADMAP.md` - Submission checklist

---

*Last updated: 2024-12-18 by Claude Code (VS Code Extension)*
