import Link from "next/link";
import {Banner} from "../../../components/Theme";
import StructuredData from "../../../components/StructuredData";
import {makeMetadata,breadcrumbs} from "../../../lib/seo";
export const metadata=makeMetadata({
 title:"Ethiopian Green Coffee Sourcing for Saudi Arabia Buyers",
 description:"Information for Saudi coffee roasters and importers sourcing Ethiopian Arabica. Compare origins, sample requirements and questions to clarify before an export inquiry.",
 path:"/buyers/saudi-arabia/"
});
const questions=[
 {q:"Can a Saudi coffee roaster request Ethiopian origin samples?",a:"You can contact Hawinet's Ethiopia-based export team with your origin preferences, processing method, requested grade and desired quantity. Sample dispatch, availability and fees must be confirmed for each inquiry."},
 {q:"Do you have a Hawinet office in Saudi Arabia?",a:"This page is for Saudi-based importers and roasters interested in Ethiopian coffee. It does not represent a Hawinet branch or warehouse in Saudi Arabia."},
 {q:"How can I confirm import requirements?",a:"Coordinate with the licensed Saudi importer and consult the current requirements of the Saudi Food and Drug Authority and ZATCA. Requirements can differ by product, consignment and time."}
];
export default function SaudiBuyers(){
 return <main id="main">
  <StructuredData data={breadcrumbs([{name:"Home",path:"/"},{name:"Saudi Arabia buyer information",path:"/buyers/saudi-arabia/"}])}/>
  <Banner title="Ethiopian coffee for Saudi buyers." tag="COFFEE SOURCING · SAUDI ARABIA" description="A dedicated starting point for roasters, distributors and importing businesses in Saudi Arabia exploring green Arabica from Ethiopia."/>
  <section className="wrap p-seo-section p-seo-two-col"><article>
   <p className="p-kicker">ETHIOPIA TO SAUDI ARABIA · BUYER INFORMATION</p>
   <h2>Source with clarity. <em>Import with confidence.</em></h2>
   <p className="p-seo-lead">For a Saudi specialty roaster, coffee buying begins before shipping: selecting a production region, understanding processing differences and evaluating a representative sample. Hawinet Coffee Export is based in Ethiopia and welcomes inquiries from prospective international buyers.</p>
   <h3>Which Ethiopian origins should you compare?</h3>
   <p>Yirgacheffe is widely associated with aromatic and floral potential, while Guji, Sidamo and Harrar also offer distinct regional reputations. These are general starting points for sample selection—not promises about any particular lot.</p>
   <p>For a Saudi café brand exploring different menu profiles, asking for both washed and natural samples can help assess whether a coffee suits espresso service, filter offerings or house blends.</p>
   <div className="p-seo-linkchips"><Link href="/coffee-origins/yirgacheffe/">Yirgacheffe ↗</Link><Link href="/coffee-origins/guji/">Guji ↗</Link><Link href="/coffee-origins/sidamo/">Sidamo ↗</Link><Link href="/coffee-origins/harrar/">Harrar ↗</Link></div>
   <h3>Prepare an effective Saudi Arabia sourcing inquiry</h3>
   <p>Include your company name, city, business email, desired origin, expected order quantity, processing preferences and any relevant green-bean specifications. Specify whether you are evaluating trial samples or planning a larger commercial conversation.</p>
   <h3>Documentation and import responsibilities</h3>
   <p>Import permits, food-safety rules, customs classification, labeling and freight requirements must be verified with the authorized Saudi importer and applicable government authorities. These requirements may depend on whether the product is green, roasted or otherwise processed.</p>
   <p>For current official information, consult the <a href="https://www.sfda.gov.sa/en" target="_blank" rel="noopener noreferrer">Saudi Food and Drug Authority ↗</a> and <a href="https://zatca.gov.sa/en/Pages/default.aspx" target="_blank" rel="noopener noreferrer">Saudi Zakat, Tax and Customs Authority ↗</a>. This page is not regulatory advice and does not assert Saudi registration or a local Hawinet office.</p>
   <h3>Common buyer questions</h3><div className="p-seo-faq">{questions.map(x=><details key={x.q}><summary>{x.q}</summary><p>{x.a}</p></details>)}</div>
   <Link className="p-btn p-btn-ink" href="/contact-us/">Ask Hawinet about sourcing ↗</Link>
  </article>
  <aside className="p-seo-aside"><p className="p-kicker">BUYER CHECKLIST</p><h3>What to share</h3><ul><li>Registered company and contact details</li><li>Origin(s) of interest</li><li>Washed or natural preference</li><li>Target quantity and sample needs</li><li>Import destination within Saudi Arabia</li><li>Required documentation and shipping terms</li></ul><Link href="/ethiopian-green-coffee/">Read the sourcing guide ↗</Link><Link href="/buyers/united-states/">US buyer information ↗</Link></aside></section>
 </main>;
}
