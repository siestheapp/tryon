# TryOn / Freestyle Fit – Product & Design Doctrine (v1)

This document consolidates all major design and product recommendations discussed to date and codifies the **chosen execution path** for v1.  
It is intended to be a **living reference** for product, design, and engineering decisions.

---

## 1. North Star (LOCKED)

**What we are building**
- A *fit-intelligence system* that learns how clothing fits a specific body over time.
- NOT a shopping app.
- NOT a generic social feed.
- NOT a fashion inspiration product.

**Core promise**
> "Stop guessing. Log fits fast. Build confidence in what will fit."

**Key differentiation**
- Body-based relevance, not taste-based relevance.
- "People who fit like you also fit this."
- Trust > entertainment > aesthetics.

✅ **Good Idea – Adopt**
- Treat fit data as *identity*, not metadata.
- Frame everything around confidence and trust.
- Build for calm, precise, slightly obsessive users.

❌ **Bad Idea – Reject**
- Competing with Zara, Shopbop, or TikTok on browsing.
- Fashion gloss, hype language, or trend-chasing UX.

---

## 2. The Three Original Recommendation Models (Evaluation)

### Model 1 – Systems / Strategy Thinker
**Summary**
- Strong conceptual framing (Fitprint, confidence, instrument panel).
- Correctly identifies differentiation and long-term arc.

✅ **Good Ideas**
- "Instrument panel, not marketplace"
- Fit intelligence as the wedge
- "Why you're seeing this" everywhere
- Confidence as the core metric

❌ **Bad / Risky**
- Too abstract to execute directly
- Easy to overbuild if treated as a checklist

**Use as:** Philosophical guidance only.

---

### Model 2 – Aesthetic Maximalist
**Summary**
- Heavy focus on typography, color systems, shimmer, sound, motion.

✅ **Good Ideas (Later)**
- Fit Card as a beautiful, ownable object
- Thoughtful typography
- Polished empty states

❌ **Bad Ideas (Now)**
- Expanded color palettes
- Shimmer animations
- Sound design
- Over-designed motion systems
- Design-for-Dribbble thinking

**Status:** Explicitly deferred until post-PMF.

---

### Model 3 – Product Operator (CHOSEN MODEL)
**Summary**
- Clear prioritization
- Speed and trust first
- Phase-safe execution

✅ **Good Ideas – Adopt Fully**
- Minimal v1 surface area
- Fit Cards as canonical object
- Predictive defaults (even heuristic)
- Fit Snapshot as day-one trust surface
- Social as earned, not forced

❌ **Bad Ideas**
- Shipping social before utility
- Feature creep before logging is effortless

**Status:** Primary operating model.

---

## 3. Chosen Path Forward (LOCKED)

### Core Principles
1. **Speed beats polish**
2. **Trust beats delight**
3. **Utility precedes social**
4. **Every surface must justify itself via fit intelligence**

---

## 4. v1 Product Surface (FINAL)

### Screens (Minimal & Shippable)

#### Onboarding (3 cards max)
- Promise: "Log fast → instant fit snapshot → predictions coming"
- Last card: single CTA to start scanning
- Skippable or extremely fast

✅ Good  
❌ Overlong onboarding narratives

---

#### Scan / Paste
- Single input field
- Auto-trim URLs
- Skeleton product card while resolving
- Quick chips for last 3 URLs

✅ Good  
❌ Manual cleanup, spinners without context

---

#### Confirm (Wizard)
Flow:
1. Color
2. Size (predictive default highlighted)
3. Fit rating + body-part chips
4. Save

Rules:
- One screen at a time
- Sticky back/next
- Big hit targets
- Haptics on selection

✅ Good  
❌ Modals, nested flows, micro-steps

---

#### Fit Snapshot (Profile Home)
Primary trust surface.

Shows:
- Top brands + likely sizes
- Recent outcomes (✓ / ~ / ✕)
- "Updated Xd ago"
- CTA: Log another / Scan product

✅ Good  
❌ Dashboards, graphs, gamified meters

---

#### Closet
- List of Fit Cards
- Filters: brand, category, perfect only
- Insight > inventory

✅ Good  
❌ Plain journal-style lists

---

#### Settings / Support
- Sign out
- Privacy
- Basic help

✅ Good  
❌ Feature creep

---

## 5. Canonical Components (LOCKED)

### Fit Card (Canonical Object)
Used in:
- Closet
- Snapshot
- Feed (later)
- Sharing (later)

Includes:
- Product image
- Brand + name
- Size chosen
- Fit outcome
- Body-part notes
- "Why you're seeing this" pill

✅ Good  
❌ Multiple competing card types

---

### Predictive Size Chip
- Preselects likely size
- Confidence-aware tone
- Soft language when confidence is low

Copy rules:
- High: "Likely best: M (based on 3 fits)"
- Medium: "Try M first"
- Low: "First guess: M"

✅ Good  
❌ Overconfident recommendations

---

### Body-Part Chips
- Multi-select
- Icon + text (no color-only meaning)
- Haptic feedback
- 44px+ hit targets

✅ Good  
❌ Emoji-only signaling

---

### Fit Snapshot Card
- Compact
- Calm
- Trust-building

✅ Good  
❌ Gamified progress bars

---

### "Why You're Seeing This" Label
- Reusable everywhere
- Stable API
- Expands later (twins, polls)

Examples:
- "You chose M 2x in J.Crew"
- "Most common size for you"
- "Recommended based on 3 fits"

✅ Non-negotiable  
❌ Black-box algorithms

---

## 6. Social & Engagement (Deferred by Design)

### Phase 2 – Polling
- Fit-first polls ("Which size looks right?")
- Results framed as confidence, not popularity

✅ Good (Later)  
❌ Outfit voting, clout mechanics

---

### Phase 3 – Fit Twins & Feed
- Card-based feed
- "Why you're seeing this" always visible
- Follow Fit Twins, not creators

✅ Good (Later)  
❌ Video-first TikTok clones

---

## 7. Accessibility & Inclusivity (NON-NEGOTIABLE)

✅ Required
- Dynamic Type
- VoiceOver labels include size + fit
- High contrast
- Reduced motion support
- 44px+ hit targets
- No gendered onboarding

❌ Not acceptable
- Color-only signaling
- Women-only or men-only framing

---

## 8. Explicitly Rejected / Deferred Ideas

❌ Heavy visual polish (v1)
❌ Shimmer animations
❌ Sound design
❌ Constellation visualizations
❌ Streaks / casino gamification
❌ Large color systems
❌ Fashion-hype copy

These may be revisited **only after PMF**.

---

## 9. Execution Rule (IMPORTANT)

When working with models or collaborators:

- **Ask mode** → strategy, evaluation, alignment
- **Build mode** → imperative commands ("Generate", "Implement")

The model will not execute unless explicitly instructed.

---

## 10. Final Guiding Sentence

> Build like a product operator, think like a systems designer, and delay aesthetics until users are hooked.

This doctrine is considered **authoritative for v1**.

