# Freestyle Product Notes

## 2024-12-17: Fit Feedback & Social Layer Strategy

### Decision: Smart Follow-up for Fit Feedback

**Context:** Discussed how to collect fit feedback for the social matching layer ("size twins" feature).

**Problem:** Current app only asks for overall fit (too_small / just_right / too_large). But two people who both say "too small" might have completely different issues (tight chest vs. short sleeves). This makes matching imprecise.

**Decision:** Implement "Smart Follow-up" pattern:

```
Step 1: Overall Fit
┌─────────────┬─────────────┬─────────────┐
│     Too     │   Perfect   │    Too      │
│    Small    │     ✓       │   Large     │
└─────────────┴─────────────┴─────────────┘

Step 2: (Only shown if NOT "Perfect")
"What felt off?" (multi-select)
[ ] Chest/Shoulders
[ ] Waist
[ ] Sleeves/Arms
[ ] Length
[ ] Overall cut
```

**Rationale:**
- Low friction for "just right" fits (most common, least interesting for matching)
- Rich signal for problem fits (where matching actually helps)
- Enables "tight in chest" users to find other "tight in chest" people
- Database already has columns: chest_fit, sleeve_fit, neck_fit, waist_fit

**Implementation:**
1. Update `confirm.tsx` to show follow-up step when fit != "just_right"
2. Update `save_tryon` RPC to accept body-part feedback
3. Update `user_size_fingerprints` to include body-part dimensions for matching

---

## 2024-12-17: Ship Now vs. Build Social Layer First

### The Question
Should we ship the current try-on logging app to the App Store first, then add the social layer later? Or wait until social features are ready?

### Strategic Recommendation: SHIP NOW

**TL;DR:** Ship the personal utility app now. Social layer comes in v2.

### Why Ship Now

**1. Data is the bottleneck, not code**
The social layer's value is: "See what sizes your twins wear at other brands."
But you can't compute twins without user data.
You can't get user data without users.
You can't get users without shipping.

Every day you wait to ship is a day you're NOT collecting the fit data you need.

**2. The personal utility stands alone**
Even without matching, "track what sizes fit me across brands" is useful. People screenshot size tags, keep notes in their phones, forget what they tried. This solves a real problem.

Think of it as:
- v1.0: "Your personal fit journal" (ship now)
- v2.0: "Your fit journal + size twin matching" (ship in 6-8 weeks)

**3. Learn before you build**
You'll learn from real users:
- What products do they actually log? (Mall brands? Luxury? Athleisure?)
- How do they describe fit? (Does "too small" mean different things?)
- Do they log in-store or post-purchase?
- What categories matter most? (Shirts? Pants? Shoes?)

This informs how to build matching. Building social features in a vacuum risks building the wrong thing.

**4. Retention hook**
When you launch social features, you can notify existing users: "Your size twins are here!" This re-engages users who may have churned, giving you two launch moments instead of one.

**5. The "embarrassment test"**
Paul Graham: "If you're not embarrassed by the first version, you shipped too late."

The current app is NOT embarrassing. It works. It's useful. Ship it.

### Risks of Waiting

| Risk | Impact |
|------|--------|
| Perfectionism paralysis | Never ship, never learn |
| Building wrong social features | Waste weeks on unused code |
| Competitor ships first | Lose first-mover advantage |
| Motivation decay | Solo founder burnout is real |

### Recommended Launch Plan

**Week 1-2: Ship v1.0 to App Store**
- Current app as-is (scan, log, history, profile)
- Add smart follow-up for fit feedback (quick win, better data)
- Basic onboarding explaining the vision ("Log fits now, get size predictions soon")

**Week 3-4: Monitor & Scrape**
- Watch how users log (analytics)
- Build Club Monaco scraper (more products = more matches possible)
- Start building social schema in background

**Week 5-8: Build Social Layer**
- Implement matching algorithm
- Add "Size Twins" tab
- Soft launch to power users (TestFlight)

**Week 9+: Ship v2.0**
- Full social features
- PR push: "The app that finds your size twins"

### The Counter-Argument (and why it's wrong)

"But the social layer IS the differentiation. Without it, we're just a notes app."

True, but:
1. A notes app with 1,000 users and fit data is more valuable than a social app with 0 users
2. The differentiation can come in v2 - first-mover advantage matters less than first-mover-with-data
3. Instagram launched as a photo filter app, not a social network. Twitter was a side project. Start simple.

### Final Take

**Ship the app. Collect the data. Build social on top of real usage patterns.**

The hardest part of a social product is the cold start. You solve cold start by having data before you need it. You get data by shipping something useful NOW.

---

## Next Steps (Prioritized)

1. [ ] Add smart follow-up to fit feedback (1-2 days)
2. [ ] App Store submission prep (screenshots, description, etc.)
3. [ ] Submit to App Store
4. [ ] Build Club Monaco scraper (parallel track)
5. [ ] Design social schema based on real user data patterns
6. [ ] Build matching algorithm
7. [ ] Ship v2.0 with social features

---

## Open Questions

- What's the minimum # of try-ons before showing twins? (3? 5?)
- Should matching be mutual (both consent) or one-way?
- How to handle privacy? (Show brand-level data but not exact items?)
- Gamification: badges for logging? Streaks?
