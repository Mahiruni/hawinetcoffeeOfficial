import {pages,posts} from "../lib/site";
import {absoluteUrl,INDEXING_ENABLED} from "../lib/seo";
import {coffeeOrigins} from "../data/coffeeOrigins";
const landing=[
 {url:"/ethiopian-green-coffee/",priority:.9},
 {url:"/buyers/saudi-arabia/",priority:.7},
 {url:"/buyers/united-states/",priority:.7},
 {url:"/coffee-origins/",priority:.9},
 {url:"/privacy/",priority:.2}
];
function lastMod(date){
 const timestamp=typeof date==="string"?new Date(date.replace(" ","T")+"Z"):null;
 return timestamp&&!Number.isNaN(timestamp.valueOf())?timestamp:undefined;
}
export default function sitemap(){
 if(!INDEXING_ENABLED)return [];
 const regular=pages.filter(x=>!["home","coming-soon"].includes(x.slug))
 .map(p=>({url:"/"+p.slug+"/",priority:.7,lastModified:lastMod(p.date)}));
 const articles=posts.map(p=>({url:"/"+p.slug+"/",priority:.5,lastModified:lastMod(p.modified||p.date)}));
 const origins=coffeeOrigins.map(p=>({url:"/coffee-origins/"+p.slug+"/",priority:.6}));
 return [
  {url:absoluteUrl("/"),priority:1,changeFrequency:"weekly"},
  ...landing,...regular,...articles,...origins
 ].map(p=>({url:absoluteUrl(p.url||p.path),lastModified:p.lastModified,priority:p.priority,changeFrequency:p.changeFrequency||"monthly"}));
}
