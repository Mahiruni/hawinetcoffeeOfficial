import Link from "next/link";
import {notFound} from "next/navigation";
import {Rich,Banner} from "../../components/Theme";
import {OriginExplorer,GalleryWall} from "../../components/Premium";
import Form from "../../components/Form";
import {get,pages,posts,teaser} from "../../lib/site";
export const dynamicParams=false;
export function generateStaticParams(){return [...pages.filter(x=>x.slug!=="home"),...posts].map(x=>({slug:x.slug}))}
export async function generateMetadata({params}){
 const {slug}=await params;const item=get(slug);if(!item)return {};
 return {title:item.title,description:teaser(item.excerpt,155)||"Explore premium Ethiopian coffee and the Hawinet Coffee story.",alternates:{canonical:"/"+slug+"/"},openGraph:{title:item.title,type:item.type==="post"?"article":"website"}};
}
function News(){
 return <main id="main"><Banner title="The Hawinet Journal." description="Original Hawinet Coffee news, export updates, events and perspectives from the birthplace of coffee." tag="THE JOURNAL · IDEAS & INSIGHTS"/>
  <section className="wrap p-section"><div className="p-archive-title"><p className="p-kicker">PERSPECTIVES FROM THE ORIGIN</p><h2>Latest <em>stories.</em></h2></div>
   <div className="p-news-grid p-archive-grid">{posts.map((post,i)=><Link href={"/"+post.slug+"/"} className="p-news-card" key={post.slug}><span className="p-news-n">{String(i+1).padStart(2,"0")}<span>↗</span></span><span className="p-mini-label">{post.date.slice(0,10)} · HAWINET JOURNAL</span><h3>{post.title}</h3><p>{teaser(post.excerpt,175)}</p><span className="p-read-link">READ ARTICLE ↗</span></Link>)}</div></section>
  <section className="wrap p-section p-simple-form"><div className="p-section-heading"><div><p className="p-kicker">KEEP IN TOUCH</p><h2>Stay close to <em>the origin.</em></h2></div></div><Form kind="newsletter"/></section></main>;
}
function Products({item}){
 return <main id="main"><Banner title="Coffee with character." description="Discover Ethiopia's remarkable coffee origins, and connect with Hawinet for sourcing, verified grades and samples." tag="OUR COLLECTION · ETHIOPIAN ARABICA"/>
 <section className="wrap p-section p-collection"><div className="p-section-heading"><div><p className="p-kicker">EXCEPTIONAL ORIGINS</p><h2>Eleven places.<br/><em>Endless possibility.</em></h2><p>Explore the eleven coffee regions named in Hawinet's original product collection.</p></div><Link className="p-editorial-link" href="/contact-us/">Ask about availability ↗</Link></div><OriginExplorer/></section>
 <section className="p-product-photoband"><img loading="lazy" decoding="async" src="https://hawinetcoffee.com/wp-content/uploads/2025/11/DSC07921-min-scaled.jpg" alt="Ethiopian coffee sourcing and preparation"/><div className="wrap"><p className="p-kicker p-kicker-light">THE QUALITY COMMITMENT</p><h2>From remarkable land to <em>remarkable coffee.</em></h2></div></section>
 <section className="wrap p-section"><div className="p-section-heading"><div><p className="p-kicker">THE FULL PRODUCT GUIDE</p><h2>Origin profiles & <em>grade information.</em></h2><p>Original product descriptions, grading information and processing notes, retained from Hawinet's WordPress website. Verify availability and specifications with the export team before purchasing.</p></div></div>
 <div className="p-product-original"><Rich html={item.html}/></div></section>
 <section className="wrap p-section p-simple-form"><div className="p-section-heading"><div><p className="p-kicker">INQUIRE WITH CONFIDENCE</p><h2>Find your next <em>great coffee.</em></h2></div></div><Form kind="sample"/></section>
 </main>;
}
function Gallery({item}){
 const images=[...new Set(item.images.filter(url=>/\.(jpg|jpeg|png|webp|avif)(\?|$)/i.test(url)&&!/-\d+x\d+/i.test(url)))];
 return <main id="main"><Banner title="Stories in every frame." description="A visual journey through Hawinet's Ethiopian coffee origins, people and places." tag="THE GALLERY · FROM THE ORIGIN"/>
 <section className="wrap p-section"><div className="p-section-heading"><div><p className="p-kicker">DISCOVER OUR WORLD</p><h2>Captured at <em>the source.</em></h2></div><p className="p-photo-count">{images.length} ORIGINAL PHOTOGRAPHS</p></div><GalleryWall images={images}/></section></main>;
}
function Contact({item,origin}){
 return <main id="main"><Banner title="Let's talk coffee." description="Interested in sourcing Ethiopian coffee? Our team would love to hear from you." tag="HAWINET · CONTACT OUR EXPORT TEAM"/>
 <section className="wrap p-section p-contact-grid"><div className="p-contact-info"><p className="p-kicker">START THE CONVERSATION</p><h2>Great partnerships begin <em>with a hello.</em></h2><p>Whether you're a roaster, distributor, importer or coffee enthusiast, our team welcomes your questions about Hawinet and Ethiopian coffee.</p>
 <div className="p-contact-row"><span>01 / EMAIL</span><a href="mailto:info@hawinetcoffee.com">info@hawinetcoffee.com ↗</a></div>
 <div className="p-contact-row"><span>02 / HEAD OFFICE</span><strong>Adulala, Adama, Ethiopia</strong><a href="tel:+251911258161">+251 911 258 161</a><a href="tel:+251911258163">+251 911 258 163</a></div>
 <div className="p-contact-row"><span>03 / ADDIS ABABA</span><strong>Meskel Flower, Addis Ababa</strong><a href="tel:+251907400000">+251 907 400 000</a></div>
 <p className="p-contact-foot">We're looking forward to hearing from you.</p>
 </div><Form kind={origin?"sample":"contact"} initialOrigin={origin}/></section></main>;
}
function Article({item}){
 const tour=item.slug==="early-bird-invitation-1st-edition";
 return <main id="main"><article><Banner title={item.title} description={teaser(item.excerpt,220)} tag={"HAWINET JOURNAL · "+item.date.slice(0,10)}/>
 <div className="wrap p-article-layout"><div><p className="p-kicker">HAWINET COFFEE EXPORT · ORIGINAL ARTICLE</p>{tour&&<p className="p-archive-warning">Archive notice: this invitation describes a past event. Contact the team for information about any future coffee tours.</p>}<Rich html={item.html}/><div className="p-article-back"><Link className="p-editorial-link" href="/news-blogs/">← Back to all stories</Link></div></div>
 <aside className="p-article-aside"><p className="p-kicker">COFFEE BEGINS HERE</p><h3>Discover Ethiopia with Hawinet.</h3><p>Ask our team about original coffee origins, samples and export partnerships.</p><Link className="p-btn p-btn-ink" href="/contact-us/">Let's talk coffee ↗</Link></aside></div>
 {tour&&<section className="wrap p-section p-simple-form"><div className="p-section-heading"><div><p className="p-kicker">FUTURE COFFEE EXPERIENCES</p><h2>Inquire about future <em>coffee tours.</em></h2></div></div><Form kind="tour"/></section>}
 </article></main>;
}
export default async function Page({params,searchParams}){
 const {slug}=await params;const item=get(slug);if(!item)notFound();
 if(item.type==="post")return <Article item={item}/>;
 if(slug==="news-blogs")return <News/>;
 if(slug==="products")return <Products item={item}/>;
 if(slug==="gallery")return <Gallery item={item}/>;
 if(slug==="contact-us"){const query=await searchParams;return <Contact item={item} origin={typeof query?.origin==="string"?query.origin.slice(0,100):""}/>;}
 if(slug==="coming-soon")return <main id="main"><Banner title="Coming soon." description="More from Hawinet Coffee Export is on its way."/><div className="wrap p-section"><Link className="p-btn p-btn-ink" href="/">Back home ↗</Link></div></main>;
 return <main id="main"><Banner title={slug==="about-us"?"Coffee is our heritage.":item.title} description={teaser(item.excerpt,245)} tag={slug==="about-us"?"OUR STORY · HAWINET COFFEE EXPORT":"HAWINET COFFEE EXPORT · ETHIOPIA"}/>
 <section className="wrap p-section p-interior-grid"><div><p className="p-kicker">DISCOVER HAWINET</p><Rich html={item.html}/></div><aside><p className="p-kicker">ROOTED IN ETHIOPIA</p><h3>Let's build a lasting partnership.</h3><p>Explore Ethiopian coffee origins with a dedicated export team.</p><Link className="p-btn p-btn-ink" href="/contact-us/">Get in touch ↗</Link></aside></section>
 </main>;
}
