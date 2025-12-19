# Freestyle Fit — App Store Submission Roadmap

> Target: Submit within 10 days (by Dec 27, 2025)

---

## Phase 1: Build & TestFlight ✅ IN PROGRESS

| Task | Status | Command/Action |
|------|--------|----------------|
| EAS configured | ✅ Done | — |
| Apple credentials set up | ✅ Done | — |
| Bundle ID registered | ✅ Done | `com.davey.freestylefit` |
| Production build | ✅ Done | `npx eas-cli build --platform ios --profile production` |
| Submit to TestFlight | ⏳ Next | `npx eas-cli submit --platform ios --latest` |
| Install on iPhone | ⬜ | Download TestFlight app, install build |
| Test full flow | ⬜ | Sign up → Scan URL → Save try-on → View history |

---

## Phase 2: App Assets

| Task | Status | Notes |
|------|--------|-------|
| App Icon (1024×1024) | ⬜ | Required. PNG, no transparency, no rounded corners |
| Screenshots - 6.7" | ⬜ | iPhone 15 Pro Max (1290 × 2796px) — Required |
| Screenshots - 6.5" | ⬜ | iPhone 14 Plus (1284 × 2778px) — Required |
| Screenshots - 5.5" | ⬜ | iPhone 8 Plus (1242 × 2208px) — Optional but recommended |
| App Preview Video | ⬜ | Optional, 15-30 sec demo |

**Screenshot suggestions (4-6 screens):**
1. Scan screen — "Paste any product URL"
2. Product found — showing product card
3. Size selection — wizard step
4. Fit rating — emoji selection
5. History — logged try-ons
6. Profile — stats overview

---

## Phase 3: App Store Metadata

| Field | Status | Your Content |
|-------|--------|--------------|
| App Name | ✅ | `freestylefit` |
| Subtitle | ⬜ | _30 chars max, e.g. "Track what fits"_ |
| Description | ⬜ | _See draft below_ |
| Keywords | ⬜ | _100 chars max, comma-separated_ |
| Category | ⬜ | Lifestyle or Shopping |
| Privacy Policy URL | ⬜ | _Required — host on Notion/GitHub Pages_ |
| Support URL | ⬜ | _Required — can be same as privacy policy_ |
| Marketing URL | ⬜ | _Optional_ |

### Draft Description
```
Stop guessing your size. freestylefit helps you track what fits across brands.

• Paste any product URL to look it up
• Log the size you tried and how it fit
• Build your personal fit history
• Never forget what worked (or didn't)

Whether you're shopping online or trying on in-store, freestylefit remembers so you don't have to.
```

### Suggested Keywords
```
fit, sizing, try-on, clothing, fashion, wardrobe, size guide, shopping, closet, style
```

---

## Phase 4: App Review Prep

| Task | Status | Notes |
|------|--------|-------|
| Age Rating questionnaire | ⬜ | Answer in App Store Connect (likely 4+) |
| Export Compliance | ⬜ | Select "No" (uses HTTPS only, no custom encryption) |
| Content Rights | ⬜ | Confirm you own the content |
| Test account for reviewers | ⬜ | Create a test login Apple can use |

---

## Phase 5: Submit for Review

| Task | Status | Notes |
|------|--------|-------|
| All metadata complete | ⬜ | Green checkmarks in App Store Connect |
| Build selected | ⬜ | Choose TestFlight build |
| Click "Add for Review" | ⬜ | Final submission |
| Wait for review | ⬜ | Usually 24-48 hours |

---

## Quick Commands Reference

```bash
# Build for iOS
npx eas-cli build --platform ios --profile production

# Submit to TestFlight
npx eas-cli submit --platform ios --latest

# Check build status
npx eas-cli build:list

# View credentials
npx eas-cli credentials
```

---

## Links

- [EAS Dashboard](https://expo.dev/accounts/daveys241/projects/tryon)
- [App Store Connect](https://appstoreconnect.apple.com)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Screenshot Specs](https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications)

---

## Checklist Summary

```
[x] Build succeeded
[ ] Submitted to TestFlight
[ ] Tested on real device
[ ] App icon created
[ ] Screenshots captured
[ ] Privacy policy URL
[ ] App description written
[ ] Keywords set
[ ] Age rating completed
[ ] Submitted for review
[ ] APPROVED 🎉
```

