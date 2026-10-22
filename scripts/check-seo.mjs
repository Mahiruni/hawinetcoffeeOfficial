import {readFileSync,existsSync} from "node:fs";
import assert from "node:assert/strict";
import {coffeeOrigins} from "../src/data/coffeeOrigins.js";
import {absoluteUrl,SITE_URL,INDEXING_ENABLED,makeMetadata,websiteSchema,organizationSchema,breadcrumbs} from "../src/lib/seo.js";
const read=p=>readFileSync(p,"utf8");
assert.equal(coffeeOrigins.length,11,"Expected the eleven owner-supplied origins");
assert.equal(new Set(coffeeOrigins.map(x=>x.slug)).size,11,"Each origin slug must be unique");
for(const o of coffeeOrigins){
 assert.ok(o.name&&o.focus&&o.overview&&o.character&&o.sourcing&&o.question,"Incomplete origin: "+o.slug);
}
for(const p of [
 "src/app/coffee-origins/page.jsx","src/app/coffee-origins/[slug]/page.jsx",
 "src/app/ethiopian-green-coffee/page.jsx",
 "src/app/buyers/saudi-arabia/page.jsx","src/app/buyers/united-states/page.jsx",
 "src/app/privacy/page.jsx","src/app/icon.svg","src/app/apple-icon.jsx",
 "src/app/opengraph-image.jsx","src/app/robots.js","src/app/sitemap.js","src/app/manifest.js"
])assert.ok(existsSync(p),"Missing route or asset: "+p);
const m=makeMetadata({title:"Test origin",description:"Test description",path:"/coffee-origins/guji/"});
assert.equal(m.alternates.canonical,absoluteUrl("/coffee-origins/guji/"));
assert.equal(m.openGraph.url,m.alternates.canonical);
assert.equal(m.openGraph.images[0].width,1200);
assert.equal(websiteSchema().name,"Hawinet Coffee Export");
assert.ok(organizationSchema().logo?.startsWith("https://"));
assert.equal(breadcrumbs([{name:"Home",path:"/"}]).itemListElement.length,1);
assert.match(read("src/app/layout.jsx"),/GOOGLE_SITE_VERIFICATION/);
assert.match(read("src/app/layout.jsx"),/INDEXING_ENABLED/);
assert.match(read("src/app/robots.js"),/INDEXING_ENABLED/);
assert.match(read("src/app/sitemap.js"),/coffeeOrigins/);
assert.match(read("src/app/page.jsx"),/websiteSchema\(\)/);
assert.match(read("src/app/page.jsx"),/organizationSchema\(\)/);
assert.match(read("src/app/[slug]/page.jsx"),/articleSchema/);
assert.match(read("src/components/AnalyticsConsent.jsx"),/analytics_consent/);
assert.equal(INDEXING_ENABLED,false,"CI must default to non-indexed until brand-domain launch");
assert.equal(SITE_URL,"https://hawinetcoffee.com","Default intended canonical should be official branded domain");
console.log("SEO checks passed: origin content, page routes, metadata, structured data, indexing safety and consent.");
