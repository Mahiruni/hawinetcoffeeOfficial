/**
 * Single source of truth for search metadata and canonical URLs.
 * While WordPress owns hawinetcoffee.com and this Next.js copy uses Vercel,
 * leave public indexing DISABLED. Switch on only after reviewed domain cutover.
 */
export const SITE_URL=(process.env.NEXT_PUBLIC_SITE_URL||"https://hawinetcoffee.com").replace(/\/+$/,"");
export const INDEXING_ENABLED=process.env.HAWINET_ENABLE_INDEXING==="true";
export const SITE_NAME="Hawinet Coffee Export";
export const SITE_DESCRIPTION="Discover Ethiopian Arabica green coffee with Hawinet Coffee Export. Explore authentic coffee origins and contact our team about samples and export sourcing.";
export const TAGLINE="Born in Ethiopia. Shared with the World.";
export const LOGO_URL="https://hawinetcoffee.com/wp-content/uploads/2025/09/logo-e1758659508473.jpg";
export const SITE_IMAGE="/opengraph-image";
export const ORG_ID=SITE_URL+"/#organization";
export function absoluteUrl(path="/"){return SITE_URL+(path.startsWith("/")?path:"/"+path)}
export function makeMetadata({title,description=SITE_DESCRIPTION,path="/",image=SITE_IMAGE,type="website",publishedTime}={}){
 const url=absoluteUrl(path),img=absoluteUrl(image);
 const meta={
  title:title||"Hawinet Coffee Export | Ethiopian Arabica Coffee Supplier",
  description,
  alternates:{canonical:url},
  openGraph:{title:title||SITE_NAME,description,url,siteName:SITE_NAME,type,locale:"en_US",images:[{url:img,width:1200,height:630,alt:"Hawinet Coffee Export — Born in Ethiopia. Shared with the World."}]},
  twitter:{card:"summary_large_image",title:title||SITE_NAME,description,images:[img]}
 };
 if(type==="article"&&publishedTime)meta.openGraph.publishedTime=publishedTime;
 return meta;
}
export function organizationSchema(){
 return {"@context":"https://schema.org","@type":"Organization","@id":ORG_ID,
 name:SITE_NAME,url:SITE_URL+"/",logo:LOGO_URL,
 description:"Ethiopian coffee export business connecting buyers with coffee origins and green coffee sourcing opportunities.",
 email:"info@hawinetcoffee.com",telephone:"+251911258161",
 address:[{"@type":"PostalAddress",streetAddress:"Adulala",addressLocality:"Adama",addressRegion:"Oromia",addressCountry:"ET"},
 {"@type":"PostalAddress",streetAddress:"Meskel Flower",addressLocality:"Addis Ababa",addressCountry:"ET"}],
 contactPoint:{"@type":"ContactPoint",contactType:"export inquiries",email:"info@hawinetcoffee.com",telephone:"+251911258161"},
 areaServed:[{"@type":"Country",name:"Ethiopia"}]
 };
}
export function websiteSchema(){
 return {"@context":"https://schema.org","@type":"WebSite","@id":SITE_URL+"/#website",
 name:SITE_NAME,alternateName:"Hawinet Coffee",url:SITE_URL+"/",
 description:SITE_DESCRIPTION,publisher:{"@id":ORG_ID},inLanguage:"en"};
}
export function breadcrumbs(items){
 return {"@context":"https://schema.org","@type":"BreadcrumbList",
 itemListElement:items.map((item,i)=>({"@type":"ListItem",position:i+1,name:item.name,item:absoluteUrl(item.path)}))};
}
export function articleSchema({title,description,slug,date,modified,image}){
 const url=absoluteUrl("/"+slug+"/");
 return {"@context":"https://schema.org","@type":"BlogPosting",
 "@id":url+"#article",headline:title,description,
 mainEntityOfPage:{"@type":"WebPage","@id":url},
 datePublished:date?new Date(date.replace(" ","T")+"Z").toISOString():undefined,
 dateModified:modified?new Date(modified.replace(" ","T")+"Z").toISOString():undefined,
 image:image||undefined,
 author:{"@type":"Organization",name:SITE_NAME,"@id":ORG_ID},
 publisher:{"@id":ORG_ID},inLanguage:"en"};
}
