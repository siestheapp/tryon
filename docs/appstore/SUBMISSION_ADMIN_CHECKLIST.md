## App Store submission — admin checklist (freestylefit)

This checklist is focused on **App Store Connect admin/metadata/policy items** (not engineering).

### Required URLs (blockers)
- **Privacy Policy URL**: publish `docs/appstore/privacy-policy.md` via GitHub Pages (recommended) or another public host.
- **Support URL**: publish `docs/appstore/support.md` via GitHub Pages (can be same GitHub Pages site).
- **Marketing URL (optional)**: publish later if you want.

### App Store Connect metadata (blockers)
- **App Name**: `freestylefit`
- **Subtitle (≤ 30 chars)**: pick one (see `APP_STORE_CONNECT_METADATA.md`)
- **Promotional Text (optional)**: draft in `APP_STORE_CONNECT_METADATA.md`
- **Description**: draft in `APP_STORE_CONNECT_METADATA.md`
- **Keywords (≤ 100 chars)**: draft in `APP_STORE_CONNECT_METADATA.md`
- **Primary category**: recommend **Lifestyle** (or Shopping)
- **Copyright**

### App Privacy (“nutrition label”) (blockers)
Fill in App Store Connect using `APP_PRIVACY_NUTRITION_LABEL.md`:
- **Data collected**: email address (account), user-generated fit logs (try-on notes, sizes, fit ratings)
- **Tracking**: **No** (no cross-app tracking/ads)

### Age rating questionnaire (blocker)
Use `AGE_RATING.md` as the “likely” answers for this app (final answers in App Store Connect).

### Export compliance (usually quick)
- **Encryption**: `ITSAppUsesNonExemptEncryption = false` (already set in `app.json`)

### Review preparation (highly recommended)
- **Review notes**: paste from `REVIEW_NOTES.md`
- **Test account**: if you prefer, create one and include credentials in review notes (optional if reviewers can self-sign-up)

### Assets (not “admin”, but required to ship)
- **App icon**: 1024×1024 PNG (no transparency)
- **Screenshots**: 6.7" required; others recommended


