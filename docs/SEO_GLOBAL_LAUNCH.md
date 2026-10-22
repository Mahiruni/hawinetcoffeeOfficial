# Hawinet Coffee Export — International SEO Launch Operations

## Deployment ownership and canonical-domain safeguard
The branded domain https://hawinetcoffee.com still serves the original WordPress content; the Next.js site currently deploys at https://hawinetcoffeexport.vercel.app from Mahiruni/hawinetcoffeeOfficial. Default site URL and structured data represent the intended branded domain.

HAWINET_ENABLE_INDEXING must remain false until the owner migrates the branded domain to this Next.js application or otherwise authorizes an audited canonical-domain strategy. This prevents duplicate copies appearing in search results. Turning indexing on before domain cutover may send inconsistent signals to Google.

Before migration: back up WordPress, verify all media, contact delivery and content parity, confirm 301 redirect mapping, verify Vercel SSL/domain ownership, then update search canonicals and submit the new sitemap. Do not alter DNS or WordPress without explicit authorization. Enable indexing after verifying that the configured NEXT_PUBLIC_SITE_URL actually hosts the site.

## Code delivered
- Global structured SEO metadata with site name, Open Graph, Twitter summary card and home-page Organization/WebSite schema.
- Breadcrumb structured data on sourcing, origins and imported blog articles; BlogPosting on imported articles.
- Discoverable pages for eleven owner-supplied coffee origins with lot-level verification guidance.
- Saudi Arabia and United States importers' informational buyer guides; Ethiopian green coffee sourcing pillar.
- Favicon SVG, Apple icon image route, 1200x630 branded social image route, web manifest.
- Contact form country field, successful lead event hook, conversion-friendly internal linking.
- Consent-gated GA4 interface and initial privacy disclosure page.
- Robots and sitemap switch to prevent Vercel/WordPress duplicate indexing.
- Scripted SEO checks alongside the existing GitHub build action.

**Brand icon caveat:** the favicon is a branded H monogram, NOT a direct rendering of the original Hawinet logo artwork. The original logo remains in the header/footer and schema reference. To create brand-faithful PNGs, please provide original transparent/logo image source bytes.

## Connections pending authorization
- Google Search Console ownership and verification: set GOOGLE_SITE_VERIFICATION with the string from the verified owner's account, and submit the canonical-domain sitemap after migration. This has not been done.
- Google Analytics 4: set NEXT_PUBLIC_GA4_ID to a real G- measurement ID; script loads only after site visitor approval. Reporting has not been verified.
- Google Business Profile: confirm staffed/eligible head office in Adulala, Adama and branch at Meskel Flower, Addis Ababa. Register or claim only legitimate profiles. Do not claim Saudi or US branches.
- Export inquiry delivery: RESEND_API_KEY and CONTACT_FROM_EMAIL are needed. Test actual provider acceptance before promising messages are delivered.
- Approved public social profile URLs: add sameAs only after confirming account ownership.

## SEO targeting matrix (validate demand and SERPs)
Homepage: Ethiopian coffee exporter brand/company.
Products: Ethiopian green Arabica portfolio and origin options.
Coffee origins index: comparison of Ethiopian origins.
Individual origin pages: regional research and sample inquiries.
Green coffee sourcing pillar: how to source Ethiopian green coffee; lot evaluation.
Saudi buyer guide: potential Saudi roaster/importer inquiries and regulatory pointers.
US buyer guide: potential American commercial roaster/importer inquiries and regulatory pointers.
Contact: qualified commercial lead requests.
No thin or fake-city landing pages; pages should be genuinely useful by geography.

## Social brand kit
Main tagline: Born in Ethiopia. Shared with the World.
Support: Exceptional Origins. Meaningful Connections.
Brand hashtags: #HawinetCoffee #HawinetCoffeeExport #BornInEthiopia
Origin posts: #EthiopianCoffee #EthiopianArabica #YirgacheffeCoffee #GujiCoffee #SidamoCoffee
B2B posts: #GreenCoffee #CoffeeSourcing #CoffeeImporters #CoffeeRoasters #CoffeeTrade
Geographic campaigns: #AddisAbaba #Adama #SaudiCoffee #USCoffeeRoasters
Choose only relevant hashtags per platform; hashtags do not provide Google ranking boosts.

## 90-day editorial plan
Days 1-30: record GSC baseline, audit branded-domain canonical strategy, review factual accuracy of company contacts, origin photos, optimize old indexed content, fix broken media URLs.
Days 31-60: publish expert-reviewed washed versus natural processing explainer, verified origin photo story, sample-request checklist, approved business directory profiles, Saudi buyer FAQs reviewed against SFDA/ZATCA.
Days 61-90: publish fact-checked US sourcing and quality content, expand real company case stories only with consent, analyze Search Console queries/CTR/coverage, optimize qualified inquiries.

Avoid invented grades, cupping scores, stock status, testimonials, awards, local offices, export quantities and delivery promises. Do not auto-publish unreviewed AI articles.

## Measurement and honest outcomes
Track GSC impressions, clicks, CTR, top query positions, indexing/canonicalization, Core Web Vitals and international visitors by Ethiopia/Saudi Arabia/United States.
Once GA4 is authorized and consent provided, track page views and successful inquiry generate_lead events. Never send personally identifiable form contents to analytics.
Google Trends is an interest research tool, not a guaranteed ranking or placement channel.
The Google Indexing API is NOT suitable for ordinary coffee product/news pages.

References:
https://developers.google.com/search/docs/appearance/site-names
https://developers.google.com/search/docs/appearance/structured-data/organization
https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
https://developers.google.com/search/apis/indexing-api/v3/using-api
https://www.ethiopiancoffeeassociation.org/ethiopian-coffee/
