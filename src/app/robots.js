import {SITE_URL,INDEXING_ENABLED} from "../lib/seo";
export default function robots(){
 return {
  rules:INDEXING_ENABLED?
   [{userAgent:"*",allow:"/",disallow:["/api/"]}]:
   [{userAgent:"*",disallow:"/"}],
  ...(INDEXING_ENABLED?{sitemap:SITE_URL+"/sitemap.xml"}:{})
 };
}
