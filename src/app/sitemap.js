import {pages,posts} from "../lib/site";
export default function sitemap(){const base="https://hawinetcoffee.com";return [{url:base,lastModified:new Date(),priority:1},...[...pages.filter(p=>p.slug!=="home"),...posts].map(e=>({url:base+"/"+e.slug+"/",lastModified:new Date(e.date.replace(" ","T")+"Z"),priority:e.type==="post"?0.6:0.8}))]}
