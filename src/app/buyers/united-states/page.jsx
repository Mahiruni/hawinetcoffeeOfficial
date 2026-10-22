import Link from "next/link";
import {Banner} from "../../../components/Theme";
import StructuredData from "../../../components/StructuredData";
import {makeMetadata,breadcrumbs} from "../../../lib/seo";
export const metadata=makeMetadata({
 title:"Ethiopian Green Coffee Sourcing for United States Roasters",
 description:"A practical sourcing guide for American specialty roasters and importers interested in Ethiopian Arabica green coffee, origin samples and commercial inquiry details.",
 path:"/buyers/united-states/"
});
const questions=[
 {q:"Does Hawinet sell roasted coffee directly in US stores?",a:"This page focuses on Ethiopian green coffee sourcing inquiries for commercial buyers. It does not claim US retail operations or that consumer roasted-coffee products are available."},
 {q:"What should a US roaster include in a sample request?",a:"Share the roasting company's details, desired origins, processing preferences, estimated quantity, planned delivery market and sample or grade requirements."},
 {q:"Who verifies import requirements?",a:"US importers should confirm current requirements directly with their customs broker and applicable US authorities. Requirements differ by product and transaction."}
];
export default function USBuyers(){
 return <main id="main">
  <StructuredData data={breadcrumbs([{name:"Home",path:"/"},{name:"United States buyer information",path:"/buyers/united-states/"}])}/>
  <Banner title="Ethiopian coffee for US roasters." tag="COFFEE SOURCING · UNITED STATES" description="Origin information and practical export inquiry guidance for American specialty roasters, coffee importers and commercial sourcing teams."/>
  <section className="wrap p-seo-section p-seo-two-col"><article>
   <p className="p-kicker">ETHIOPIA TO THE UNITED STATES · BUYER INFORMATION</p><h2>Build a coffee program <em>with the right origin.</em></h2>
   <p className="p-seo-lead">US specialty roasters often compare Ethiopian coffees by regional identity, preparation, cup quality and traceability. Hawinet Coffee Export, headquartered in Ethiopia, provides an inquiry channel for businesses researching Ethiopian green Arabica.</p>
   <h3>Compare origins to match your roasting goals</h3>
   <p>Some buyers begin with Yirgacheffe for aromatic washed-style exploration, Guji or Sidamo for range and variety, or Harrar for a traditional eastern-origin comparison. These descriptions refer to regional reputation rather than any Hawinet lot's certified cup profile.</p>
   <p>Work from a representative sample and a written commercial specification. Ask whether the available origin and process suit your intended single-origin offering, filter program, espresso blend or wholesale supply requirements.</p>
   <div className="p-seo-linkchips"><Link href="/coffee-origins/yirgacheffe/">Yirgacheffe ↗</Link><Link href="/coffee-origins/guji/">Guji ↗</Link><Link href="/coffee-origins/limu/">Limu ↗</Link><Link href="/coffee-origins/kafa/">Kafa ↗</Link></div>
   <h3>What to request from an Ethiopian exporter</h3>
   <p>Consider requesting confirmed lot identification, offered grade, processing method, packaging details, representative sample, quantity, commercial terms and relevant export documentation. If different lots will be combined or purchased through a broker, clarify traceability expectations early.</p>
   <h3>United States import considerations</h3>
   <p>Food import requirements, customs classification, importer responsibilities and relevant agricultural checks should be verified with a qualified US customs broker and official government information. Do not assume a previous shipment's requirements apply to another product or entry.</p>
   <p>See official guidance from the <a href="https://www.fda.gov/food/importing-food-products-united-states/importing-food-products-united-states" target="_blank" rel="noopener noreferrer">US Food and Drug Administration ↗</a>, <a href="https://www.aphis.usda.gov/plant-imports" target="_blank" rel="noopener noreferrer">USDA APHIS ↗</a>, and <a href="https://www.cbp.gov/trade/basic-import-export" target="_blank" rel="noopener noreferrer">US Customs and Border Protection ↗</a>. This is educational information, not an offer of US customs clearance.</p>
   <h3>Common sourcing questions</h3><div className="p-seo-faq">{questions.map(x=><details key={x.q}><summary>{x.q}</summary><p>{x.a}</p></details>)}</div>
   <Link className="p-btn p-btn-ink" href="/contact-us/">Start a buyer inquiry ↗</Link>
  </article>
  <aside className="p-seo-aside"><p className="p-kicker">PREPARE YOUR INQUIRY</p><h3>US buyer essentials</h3><ul><li>Business name and location</li><li>Origin and process preferences</li><li>Estimated annual or trial quantity</li><li>Quality standards and sample plan</li><li>Requested packaging or shipment terms</li><li>Current import documentation requirements</li></ul><Link href="/ethiopian-green-coffee/">Read the sourcing guide ↗</Link><Link href="/buyers/saudi-arabia/">Saudi Arabia buyer information ↗</Link></aside></section>
 </main>;
}
