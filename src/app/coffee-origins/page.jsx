import Link from "next/link";
import {coffeeOrigins} from "../../data/coffeeOrigins";
import {makeMetadata,breadcrumbs} from "../../lib/seo";
import StructuredData from "../../components/StructuredData";
import {Banner} from "../../components/Theme";
export const metadata=makeMetadata({
 title:"Ethiopian Coffee Origins | Guji, Yirgacheffe, Sidamo & More",
 description:"Explore eleven Ethiopian Arabica coffee origin names, including Yirgacheffe, Sidamo, Guji, Harrar and Kafa. Learn what green-coffee buyers should verify.",
 path:"/coffee-origins/"
});
export default function CoffeeOrigins(){
 return <main id="main"><StructuredData data={breadcrumbs([{name:"Home",path:"/"},{name:"Ethiopian coffee origins",path:"/coffee-origins/"}])}/>
  <Banner title="Coffee has a place." tag="ETHIOPIAN COFFEE ORIGINS" description="Eleven origin names. A world of growing traditions, processing possibilities and sourcing questions. Explore the regional story before requesting a lot-specific sample."/>
  <section className="wrap p-seo-section">
    <div className="p-seo-intro"><p className="p-kicker">EXPLORE BY ORIGIN</p><h2>Different places. <em>Distinct possibilities.</em></h2><p>Each origin page below is a starting point, not a live stock list. Coffee grade, processing method, harvest details and availability must be confirmed with Hawinet's export team.</p></div>
    <div className="p-seo-origin-grid">{coffeeOrigins.map((origin,index)=><Link key={origin.slug} className="p-seo-origin-card" href={"/coffee-origins/"+origin.slug+"/"}>
      <span className="p-seo-count">{String(index+1).padStart(2,"0")} / 11 <span aria-hidden="true">↗</span></span><h2>{origin.name}</h2><p className="p-seo-region">{origin.region}</p><p>{origin.focus}</p><span className="p-seo-discover">DISCOVER ORIGIN →</span>
    </Link>)}</div>
  </section>
  <section className="p-seo-band"><div className="wrap p-seo-band-inner"><div><p className="p-kicker p-kicker-light">SOURCING, MADE CLEARER</p><h2>Origin is the starting point. <em>The lot is the decision.</em></h2><p>Ask for the lot's documented preparation, grade, representative sample and current quotation before making a buying decision.</p></div><Link className="p-btn p-btn-cream" href="/contact-us/">Request an origin sample ↗</Link></div></section>
  <section className="wrap p-seo-section"><h2>Helpful resources for coffee buyers</h2><div className="p-seo-links"><Link href="/ethiopian-green-coffee/">How to source Ethiopian green coffee ↗</Link><Link href="/buyers/saudi-arabia/">Information for Saudi importers ↗</Link><Link href="/buyers/united-states/">Information for US buyers ↗</Link><Link href="/products/">Original Hawinet product collection ↗</Link></div></section>
 </main>;
}
