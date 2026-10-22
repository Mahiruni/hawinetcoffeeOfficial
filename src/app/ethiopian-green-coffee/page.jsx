import Link from "next/link";
import {Banner} from "../../components/Theme";
import StructuredData from "../../components/StructuredData";
import {makeMetadata,breadcrumbs} from "../../lib/seo";
import {coffeeOrigins} from "../../data/coffeeOrigins";
export const metadata=makeMetadata({
 title:"Ethiopian Green Coffee Exporter | Sourcing Guide for Importers",
 description:"A practical guide to sourcing Ethiopian green Arabica coffee: regions, natural versus washed processing, sample checks, grades, documents and export inquiries.",
 path:"/ethiopian-green-coffee/"
});
const stages=[
 {title:"Choose a coffee origin",text:"Begin with the flavor direction and style you want to explore. A region such as Sidamo, Yirgacheffe, Guji or Harrar is useful context, but not a substitute for a specific lot description."},
 {title:"Specify the required preparation",text:"Clarify washed or natural processing, green-bean grade and any relevant physical or sensory specifications. Processing descriptions should be verified for the offered lot."},
 {title:"Review a representative sample",text:"Request the sample identifier, preparation, grade documentation and relevant quality information. Make sure the received sample represents the quantity you may purchase."},
 {title:"Agree on commercial terms",text:"Confirm quantities, shipping terms, inspection responsibilities, documentation, payment method and estimated dispatch with the exporter. Requirements differ by destination and contract."}
];
export default function Sourcing(){
 return <main id="main">
  <StructuredData data={breadcrumbs([{name:"Home",path:"/"},{name:"Ethiopian green coffee sourcing",path:"/ethiopian-green-coffee/"}])}/>
  <Banner title="Ethiopian green coffee, clearly sourced." tag="A PRACTICAL GUIDE FOR INTERNATIONAL ROASTERS AND IMPORTERS" description="Discover the questions that matter when sourcing green Ethiopian Arabica. From the origin name to the actual sample, careful details help build confident purchasing decisions."/>
  <section className="wrap p-seo-section p-seo-two-col"><article>
   <p className="p-kicker">GREEN COFFEE SOURCING GUIDE</p><h2>Start with the origin. <em>Buy by the lot.</em></h2>
   <p className="p-seo-lead">Ethiopia offers a remarkable diversity of Arabica growing regions. For an importer, however, buying a regional name alone isn't enough: process, sample integrity, grading and trade documents determine whether a lot meets the intended commercial brief.</p>
   <h3>Washed and natural Ethiopian coffee</h3>
   <p><strong>Washed processing</strong> typically removes the fruit before drying the parchment coffee. Buyers often select these coffees when seeking particular clarity or aromatic qualities, subject to the actual sample.</p>
   <p><strong>Natural processing</strong> dries coffee cherries with the fruit intact before further preparation. Buyers may evaluate natural lots for different fruit expressions or body, depending on variety, handling and drying practice.</p>
   <p>Neither method automatically guarantees quality. The harvest, processing, storage, sample and grading remain important.</p>
   <h3>How to approach an export inquiry</h3>
   <div className="p-seo-stages">{stages.map((s,i)=><div key={s.title}><span>{String(i+1).padStart(2,"0")}</span><div><h4>{s.title}</h4><p>{s.text}</p></div></div>)}</div>
   <h3>What to request with a quote</h3>
   <p>A useful commercial conversation can include the origin and preparation, grade, lot identifier, packaging, proposed quantity, a valid sample, shipping and commercial terms, plus any destination-specific documentation requirements. Hawinet's export team can confirm which items apply to a particular offer.</p>
   <p>Hawinet's original company story describes local sourcing relationships, coffee cleaning and warehouse preparation. This guide does not imply every origin or grade is available at all times.</p>
   <Link className="p-btn p-btn-ink" href="/contact-us/">Start an export inquiry ↗</Link>
  </article><aside className="p-seo-aside"><p className="p-kicker">YOUR SOURCING ROUTES</p><h3>Explore the origins</h3>{coffeeOrigins.slice(0,7).map(x=><Link key={x.slug} href={"/coffee-origins/"+x.slug+"/"}>{x.name} <span>↗</span></Link>)}<h3>International buyers</h3><Link href="/buyers/saudi-arabia/">Saudi Arabia sourcing ↗</Link><Link href="/buyers/united-states/">United States sourcing ↗</Link></aside></section>
  <section className="p-seo-band"><div className="wrap p-seo-band-inner"><div><p className="p-kicker p-kicker-light">READY TO COMPARE SAMPLES?</p><h2>Find the right coffee for <em>your brief.</em></h2><p>Our export team can discuss specific origin preferences, preparation options and commercial inquiries.</p></div><Link className="p-btn p-btn-cream" href="/contact-us/">Contact Hawinet Coffee ↗</Link></div></section>
 </main>;
}
