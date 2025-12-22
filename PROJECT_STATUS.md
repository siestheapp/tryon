# Freestyle Fit — Project Status

> Last updated: Dec 22, 2025

## 🎯 Current Goal
**Submit to iOS App Store within 10 days**

---

## ✅ What's Done

### App Foundation
- [x] Expo React Native app with expo-router
- [x] Supabase auth (sign in/sign up)
- [x] Dark theme UI with design tokens
- [x] Three tabs: Scan, History, Profile

### Core Features
- [x] **Scan tab** — paste product URL → lookup in database
- [x] **Confirm screen** — wizard flow: color → size → fit rating → save
- [x] **History tab** — view logged try-ons with pull-to-refresh
- [x] **Profile tab** — stats, sign out

### Database (Supabase)
- [x] 7 brands: J.Crew, Lululemon, Reiss, Theory, Lacoste, rag & bone, Uniqlo
- [x] 135 products, 575 variants, 3,643 images
- [x] RPC functions: `product_lookup`, `save_tryon`, `get_user_tryons`

### App Store Setup
- [x] Apple Developer account active
- [x] EAS CLI configured (`@daveys241/tryon`)
- [x] App created in App Store Connect: **freestylefit**
- [x] Bundle ID registered: `com.davey.freestylefit`
- [x] Distribution certificate (reused from v10-expo)
- [x] Provisioning profile generated

### App Store Admin Pack (Docs)
- [x] Added paste-ready App Store Connect metadata drafts in `docs/appstore/`
- [x] Added Privacy Policy + Support page templates in `docs/appstore/`
- [x] Added App Privacy (nutrition label) guidance in `docs/appstore/`
- [x] Added review notes template in `docs/appstore/`
- [x] Removed unused iOS Camera/Photo permission prompts from `app.json` (reduces review friction)

---

## 🔄 In Progress

### iOS Build
- [x] ~~First production build — failed on "Install pods"~~
- [x] Disabled New Architecture, rebuild succeeded ✅
- [ ] Submit to TestFlight
- [ ] Test on physical device

---

## 📋 Still To Do

### Before Submission
- [ ] Successful iOS build
- [ ] Test on physical device via TestFlight
- [ ] App icon (1024×1024)
- [ ] Screenshots for App Store (6.7" and 5.5")
- [ ] Privacy Policy URL
- [ ] App Store metadata (description, keywords, category)

### App Store Connect
- [ ] Upload screenshots
- [ ] Fill in app description
- [ ] Set age rating
- [ ] Fill in App Privacy (“nutrition label”) using `docs/appstore/APP_PRIVACY_NUTRITION_LABEL.md`
- [ ] Paste App Review notes using `docs/appstore/REVIEW_NOTES.md`
- [ ] Submit for review

---

## 🐛 Known Issues
- Build failed on CocoaPods install (trying with newArchEnabled: false)

---

## 📁 Key Files
| File | Purpose |
|------|---------|
| `app.json` | Expo config, bundle ID, app name |
| `eas.json` | EAS build profiles |
| `app/_layout.tsx` | Root layout with auth |
| `app/(tabs)/scan.tsx` | Main scan/lookup screen |
| `app/confirm.tsx` | Size/fit rating wizard |
| `lib/supabase.ts` | Database client & RPCs |
| `theme/tokens.ts` | Design system colors/spacing |

---

## 🔗 Quick Links
- [EAS Dashboard](https://expo.dev/accounts/daveys241/projects/tryon)
- [App Store Connect](https://appstoreconnect.apple.com)
- [Build Logs](https://expo.dev/accounts/daveys241/projects/tryon/builds)

---

## 📝 Session Notes

### Dec 17, 2025
- Fixed React version conflicts (19.1.0 to match react-native-renderer)
- Fixed white screen on load (added error handling, wrapped in dark View)
- Set up EAS, created freestylefit in App Store Connect
- First build attempt failed on pods — disabled New Architecture, retrying

### Dec 21, 2025
- Added v1 component library in `components/`:
  - **FitCard** — canonical fit object with outcome pill, body-part tags, "why you're seeing this" support
  - **PredictiveSizeChip** — confidence-aware size chip with predictive defaults
  - **FitSnapshotCard** — Fit Passport surface showing brand sizes and recent outcomes
  - **BodyPartChip** — multi-select chips for body-part fit feedback
- Components ready for integration into closet, confirm flow, and profile screens

