## App Privacy (App Store Connect) — suggested answers for freestylefit

Use this as a guide to fill in **App Store Connect → App Privacy**. Final answers must match what the app actually does.

### Does your app collect data?
Suggested: **Yes**

### Data collection details (what we store to provide the service)
- **Contact Info → Email Address**
  - **Collected**: Yes (for account login)
  - **Linked to the user**: Yes
  - **Used for tracking**: No
  - **Purpose**: App functionality (account), Authentication

- **User Content → Other User Content**
  - **Collected**: Yes (try-on notes, fit ratings, sizes, product link you paste)
  - **Linked to the user**: Yes
  - **Used for tracking**: No
  - **Purpose**: App functionality (fit history)

### Data not collected (as of current codebase)
Suggested: **Not collected**
- Location
- Contacts
- Health & Fitness
- Financial info
- Purchases
- Browsing history
- Search history
- Identifiers for tracking/ads
- Diagnostics/Crash data (unless you add an SDK later)

### Tracking
Suggested: **No, we do not track users**
(No advertising, no cross-app tracking identifiers, no third-party ad networks.)


