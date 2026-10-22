# Hawinet Coffee · Premium Design Migration (2026)

Repository: https://github.com/Mahiruni/hawinetcoffeeOfficial

## Changes

- Original, premium, FundingPips-*inspired* aesthetic (independent branding; no copied assets).
- Bold ivory, espresso and forest-green homepage, responsive mobile-first header and footer.
- Eleven Ethiopian coffee-origin explorer entries, interactive selection, search and contextual sample inquiry links.
- New products, news, gallery, contact, and article templates using owner-supplied published WordPress content.
- Gallery lightbox with escape and previous/next controls.
- Buyer inquiry form with origin, processing preference and quantity, plus original coffee tour/newsletter variants.
- SEO titles, canonical URLs, robots and sitemap preserved from the Next.js migration.
- Reduced-motion support, keyboard outlines, semantic landmarks and skip navigation.

## QA and integration gates

Run Node 22+, `npm install`, `npm run test:data`, `npm run build`.
The existing GitHub Actions workflow automatically verifies the build on push.

**Important: production WordPress is NOT modified by GitHub commits.** Exported media references still use the existing WordPress `/wp-content/uploads/` path because the uploaded WXR XML does not contain the image/video bytes.

To publish to WordPress directly: obtain WP admin and hosting access, implement approved styles in a compatible WordPress theme/child theme, stage and test, then activate after an approved backup.

To preview/deploy Next.js: connect this exact repo to an authorized Vercel project; previous account-level project creation was denied.

Contact, newsletter and sample submissions require `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` (plus provider verification), and should have server-side rate limiting, CAPTCHA and a proper newsletter consent/subscriber management workflow before launch. No messages are silently discarded as successful.

Export copy, origin descriptions, historical coffee-tour announcement and article dates were retained; do not advertise a past event as currently open.
