import wp from "../../data/wordpress.json";
export const pages=wp.pages;
export const posts=wp.posts.slice().sort((a,b)=>new Date(b.date)-new Date(a.date));
export const media=wp.media;
export const nav=[["Home","/"],["About Us","/about-us/"],["Products","/products/"],["Market Info","/market-info/"],["News & Events","/news-blogs/"],["Gallery","/gallery/"],["Contact","/contact-us/"]];
export const origins=["Sidamo","Yirgacheffe","Harrar","Limu","Arsi","Guji","Kafa","Nekemte","Wolayita","Djimma","Bonga"];
export const get=(slug)=>pages.find(x=>x.slug===slug)||posts.find(x=>x.slug===slug);
export const photo="https://hawinetcoffee.com/wp-content/uploads/2025/11/DSC07781-scaled.jpg";
export const logo="https://hawinetcoffee.com/wp-content/uploads/2025/09/logo-e1758659508473.jpg";
export function teaser(s,n=190){s=String(s||"").replace(/&#(\d+);/g,(_,code)=>String.fromCodePoint(Number(code))).replace(/&amp;/g,"&").replace(/&nbsp;/g," ").replace(/&rsquo;/g,"’").replace(/&quot;/g,'"').replace(/&[a-z]+;/gi," ").replace(/\s+/g," ").trim();return s.length>n?s.slice(0,n).trim()+"…":s}
