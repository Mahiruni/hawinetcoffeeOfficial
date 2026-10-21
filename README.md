# Hawinet Coffee Export — Official Website

This is the official Next.js 16 website migrated from the owner-supplied WordPress XML export dated 2026-10-21.

Repository: https://github.com/Mahiruni/hawinetcoffeeOfficial

## Development

Node 22+. Run npm install, npm run test:data, npm run dev, and npm run build.

## Pages

Home, About Us, Products, Market Info, News/Blogs, Gallery, Contact, Coming Soon, Ethiopian Event, plus 6 original article URLs. Static SEO sitemap and robots files.

## Media dependency before cutover

The XML export contained 105 media URLs, not the image and video binaries. Currently visual assets load from hawinetcoffee.com/wp-content/uploads. This is temporary: obtain a full WordPress uploads ZIP, place assets into public/wp-content/uploads, and verify all relative media references before switching DNS. Do not decommission WordPress yet.

## Inquiries

The website includes contact, sample, tour and newsletter inquiry forms. Email delivery requires Vercel environment variables RESEND_API_KEY, CONTACT_FROM_EMAIL (verified sender), CONTACT_TO_EMAIL. Without them, forms clearly return a service-unavailable message rather than claiming email was delivered. A production newsletter subscriber database or ESP, spam protection and more complete Elementor feature parity still require configuration.

## Production rules

Keep the legacy site online until media migration, complete visual QA, form end-to-end testing, URL parity, domain DNS readiness, and rollback plan are approved. Only deploy preview until cutover is approved.
