import Link from "next/link";
import {notFound} from "next/navigation";
import {coffeeOrigins,getOrigin} from "../../../data/coffeeOrigins";
import {makeMetadata,breadcrumbs} from "../../../lib/seo";
import StructuredData from "../../../components/StructuredData";
import {Banner} from "../../../components/Theme";
export const dynamicParams=false;
export function generateStaticParams(){return coffeeOrigins.map(x=>({slug:x.slug}))}
export async function generateMetadata({params}){
 const {slug}=await params;const o=getOrigin(slug);if(!o)return {};
 return makeMetadata({title:o.name+" Ethiopian Coffee | Green Coffee Origin & Sourcing",description:o.focus+" Explore processing, samples and responsible buying questions for Ethiopian "+o.name+" Arabica.",path:"/coffee-origins/"+slug+"/"});
}
export default async function OriginPage({params}){
 const {slug}=await params;const origin=getOrigin(slug);if(!origin)notFound();
 const related=coffeeOrigins.filter(x=>x.slug!==slug).slice(0,3);
 return <main id="main">
  <StructuredData data={breadcrumbs([{name:"Home",path:"/"},{name:"Coffee origins",path:"/coffee-origins/"},{name:origin.name,path:"/coffee-origins/"+slug+"/"}])}/>
  <Banner title={origin.name+" Ethiopian coffee."} tag="ORIGIN REFERENCE · ETHIOPIAN ARABICA" description={origin.focus}/>
  <div className="wrap p-seo-section p-seo-two-col"><article>
    <p className="p-kicker">A CLOSER LOOK AT {origin.name.toUpperCase()}</p>
    <h2>Understanding the <em>origin.</em></h2><p className="p-seo-lead">{origin.overview}</p>
    <h3>How this coffee is commonly described</h3><p>{origin.character}</p>
    <h3>What an importer or roaster should confirm</h3><p>{origin.sourcing}</p>
    <div className="p-seo-quote"><span>AN IMPORTANT BUYER QUESTION</span><p>“{origin.question}”</p></div>
    <h3>Before you buy</h3>
    <p>Many factors—not just a geographic name—determine a coffee lot's final characteristics. Confirm the actual producing area, preparation, grading information, crop details, representative sample and terms of sale for any offered coffee.</p>
    <p>Hawinet's original product collection lists this origin; this page is educational and does not assert inventory, certification, prices or a particular cupping score.</p>
    <Link className="p-btn p-btn-ink" href={"/contact-us/?origin="+encodeURIComponent(origin.name)}>Ask about {origin.name} coffee ↗</Link>
  </article><aside className="p-seo-aside"><span className="p-kicker">AT A GLANCE</span><h3>{origin.name}</h3><p>{origin.region}</p><div className="p-seo-aside-line"><span>COUNTRY</span><strong>Ethiopia</strong></div><div className="p-seo-aside-line"><span>QUALITY / AVAILABILITY</span><strong>Confirm per lot</strong></div><div className="p-seo-aside-line"><span>PROCESS / GRADE</span><strong>Request details</strong></div><Link href="/coffee-origins/">← Explore all origins</Link></aside></div>
  <section className="wrap p-seo-section p-seo-related"><p className="p-kicker">CONTINUE DISCOVERING</p><h2>Explore another <em>origin.</em></h2><div className="p-seo-origin-grid">{related.map(o=><Link className="p-seo-origin-card" key={o.slug} href={"/coffee-origins/"+o.slug+"/"}><h3>{o.name}</h3><p>{o.focus}</p><span>EXPLORE ↗</span></Link>)}</div></section>
 </main>;
}
