import fs from "node:fs";
const site=JSON.parse(fs.readFileSync("data/wordpress.json","utf8"));
if(site.pages.length!==9||site.posts.length!==6||site.media.length!==105)throw new Error("Unexpected WordPress export counts");
if(new Set([...site.pages,...site.posts].map(x=>x.slug)).size!==15)throw new Error("Duplicate slug");
console.log("Content verified:",site.pages.length,"pages,",site.posts.length,"articles,",site.media.length,"media references");
