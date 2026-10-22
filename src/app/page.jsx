import Link from "next/link";
import Form from "../components/Form";
import {OriginExplorer} from "../components/Premium";
import {posts,teaser,photo} from "../lib/site";
import {organizationSchema,websiteSchema} from "../lib/seo";
import StructuredData from "../components/StructuredData";
import Icon from "../components/Icon";

const farm="https://hawinetcoffee.com/wp-content/uploads/2025/11/DSC07460-scaled.jpg";
const processing="https://hawinetcoffee.com/wp-content/uploads/2025/11/DSC07921-min-scaled.jpg";
const people="https://hawinetcoffee.com/wp-content/uploads/2025/11/DSC07752-scaled.jpg";

const steps=[
 {number:"01",title:"Origin relationships",desc:"Connected directly with Ethiopian coffee farmers and local sourcing relationships."},
 {number:"02",title:"Preparation & quality",desc:"Coffee cleaning, warehouse care, and representative sampling, as described in Hawinet's original company story."},
 {number:"03",title:"Export partnership",desc:"Helping buyers explore green-coffee origins, processing preferences, and international sourcing inquiries."}
];
export default function Home(){
 return <main id="main" className="p-home">
  <StructuredData data={organizationSchema()}/><StructuredData data={websiteSchema()}/>
  <section className="p-hero">
   <div className="wrap p-hero-grid">
    <div className="p-hero-copy">
     <h1>Born in Ethiopia.<br/><span>Shared with</span><br/><em>the world.</em></h1>
     <p>Remarkable Ethiopian Arabica. Meaningful origin relationships. An export experience rooted in quality, care, and connection.</p>
     <div className="p-hero-buttons"><Link href="/products/" className="p-btn p-btn-ink">Explore our coffee <span>↗</span></Link><Link href="/contact-us/" className="p-btn p-btn-link">Request samples <span>↗</span></Link></div>
     <div className="p-hero-small"><span className="p-round-mark" aria-hidden="true">✳</span><div><strong>ETHIOPIA, THE BIRTHPLACE OF COFFEE</strong><small>Discover the extraordinary origin behind every cup.</small></div></div>
    </div>
    <div className="p-hero-visual">
     <div className="p-hero-image-wrap"><img src={photo} alt="Ethiopian coffee farm and coffee production" fetchPriority="high" loading="eager" decoding="async"/></div>
     <div className="p-hero-corner">ORIGIN <strong>ETHIOPIA</strong><span>↗</span></div>
     <div className="p-hero-image-tag"><span className="p-tag-star">✳</span><span>FROM FARMERS<br/>TO THE WORLD</span></div>
     <div className="p-hero-number">01 — 03</div>
    </div>
   </div>
   <div className="wrap p-hero-footer"><span>ESTABLISHED IN ETHIOPIA. CONNECTED GLOBALLY.</span><a href="#discover">SCROLL TO EXPLORE ↓</a></div>
  </section>
  <div className="p-origin-strip" aria-label="Ethiopian coffee origin names"><div className="wrap"><span>ELEVEN COFFEE ORIGINS</span><span>SIDAMO <b>✳</b> YIRGACHEFFE <b>✳</b> HARRAR <b>✳</b> GUJI <b>✳</b> KAFA</span><Link href="/products/">EXPLORE ALL ↗</Link></div></div>
  <section className="p-intro p-section" id="discover"><div className="wrap p-intro-grid"><div><p className="p-kicker">THE HAWINET PHILOSOPHY</p><h2>Not just coffee.<br/><em>A story of origin.</em></h2></div><div><span className="p-section-index">/ OUR STORY</span><p className="p-intro-lead">Ethiopia's coffee is one of its most remarkable gifts to the world. We believe the relationships behind each harvest matter just as much as the coffee itself.</p><p>At Hawinet, we work directly with local farmers and prepare green coffee for the global market—bridging heritage and modern export standards.</p><Link href="/about-us/" className="p-editorial-link">Meet Hawinet <span>↗</span></Link></div></div></section>
  <section className="p-feature-image"><div className="p-feature-panel"><img src={farm} alt="Coffee production and local sourcing in Ethiopia" loading="lazy" decoding="async"/></div><div className="p-feature-overlay"><span>THE ROOTS OF EVERYTHING WE DO</span><strong>EXCEPTIONAL ORIGINS.<br/>GENUINE CONNECTIONS.</strong></div><span className="p-feature-icon" aria-hidden="true">✳</span></section>
  <section className="p-section p-coffee-section" id="origins"><div className="wrap"><div className="p-section-heading"><div><p className="p-kicker">THE COLLECTION · ETHIOPIAN ARABICA</p><h2>Every origin has <em>its own story.</em></h2><p>Explore coffee regions represented in Hawinet's original portfolio. Our team can provide confirmed details for your sourcing needs.</p></div><Link href="/products/" className="p-editorial-link">View coffee portfolio <span>↗</span></Link></div><OriginExplorer/></div></section>
  <section className="p-process p-section"><div className="wrap"><div className="p-process-intro"><div><p className="p-kicker p-kicker-light">FROM THE SOURCE</p><h2>A better journey,<br/><em>from start to export.</em></h2></div><p>Our approach connects the people, places and care behind Ethiopian coffee with the needs of international buyers.</p></div><div className="p-process-list">{steps.map(step=><div className="p-process-row" key={step.number}><span>{step.number} / 03</span><h3>{step.title}</h3><p>{step.desc}</p><span className="p-process-asterisk" aria-hidden="true">✳</span></div>)}</div><Link className="p-btn p-btn-cream" href="/about-us/">How we work <span>↗</span></Link></div></section>
  <section className="p-section p-visual-story"><div className="wrap p-story-grid"><div className="p-story-copy"><p className="p-kicker">A PLACE LIKE NO OTHER</p><h2>More than<br/>a crop. <em>A culture.</em></h2><p>From familiar coffee ceremonies to the communities that produce it, Ethiopian coffee carries generations of history.</p><Link className="p-editorial-link" href="/gallery/">Explore the gallery <span>↗</span></Link><div className="p-story-stamp">ROOTED IN<br/>ETHIOPIA <span>✳</span></div></div><div className="p-story-image"><img src={people} alt="Hawinet coffee production and community" loading="lazy" decoding="async"/><span>THE PEOPLE BEHIND THE HARVEST <b>↗</b></span></div></div></section>
  <section className="p-seo-home-resources p-section">
   <div className="wrap"><div className="p-section-heading"><div><p className="p-kicker">ETHIOPIAN GREEN COFFEE · INTERNATIONAL SOURCING</p><h2>Good sourcing starts <em>with knowledge.</em></h2><p>Thoughtful resources for Ethiopian coffee enthusiasts, international roasters and green-coffee buyers.</p></div><Link className="p-editorial-link" href="/coffee-origins/">Explore all origins <span>↗</span></Link></div>
   <div className="p-seo-home-grid">
    <Link href="/ethiopian-green-coffee/" className="p-seo-home-card"><Icon name="coffee" size={31}/><h3>Understand green coffee sourcing.</h3><p>From selecting an Ethiopian origin to requesting a representative lot sample and export quotation.</p><span>READ THE SOURCING GUIDE ↗</span></Link>
    <Link href="/buyers/saudi-arabia/" className="p-seo-home-card"><Icon name="globe" size={31}/><h3>For coffee buyers in Saudi Arabia.</h3><p>Practical information for Saudi roasters and importers researching Ethiopian Arabica.</p><span>SAUDI BUYER GUIDE ↗</span></Link>
    <Link href="/buyers/united-states/" className="p-seo-home-card"><Icon name="ship" size={31}/><h3>For roasters in the United States.</h3><p>How to begin a commercial Ethiopian green-coffee sourcing inquiry from the American market.</p><span>US BUYER GUIDE ↗</span></Link>
   </div></div>
  </section>
  <section className="p-news p-section"><div className="wrap"><div className="p-section-heading"><div><p className="p-kicker">THE HAWINET JOURNAL</p><h2>Stories worth <em>sharing.</em></h2></div><Link className="p-editorial-link" href="/news-blogs/">All articles <span>↗</span></Link></div><div className="p-news-grid">{posts.slice(0,3).map((post,i)=><Link href={"/"+post.slug+"/"} className="p-news-card" key={post.slug}><span className="p-news-n">0{i+1} <span>↗</span></span><span className="p-mini-label">{new Date(post.date.replace(" ","T")+"Z").toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric",timeZone:"UTC"})} · HAWINET JOURNAL</span><h3>{post.title}</h3><p>{teaser(post.excerpt,160)}</p><span className="p-read-link">READ ARTICLE ↗</span></Link>)}</div></div></section>
  <section className="p-final-banner"><div className="wrap p-final-banner-grid"><div><p className="p-kicker p-kicker-light">YOUR NEXT COFFEE PARTNER</p><h2>Let's bring Ethiopia's best <em>to your world.</em></h2></div><div><p>Whether you're a green coffee buyer, roaster or importer, start a conversation with our team about origins, samples and potential partnerships.</p><Link className="p-btn p-btn-cream" href="/contact-us/">Talk to our export team <span>↗</span></Link></div></div></section>
  <section className="wrap p-section p-home-form"><div><p className="p-kicker">REQUEST AN INTRODUCTION</p><h2>Ready to discover <em>your coffee?</em></h2><p>Tell us what you're sourcing. We'll help you find a starting point.</p><img src={processing} loading="lazy" decoding="async" alt="Coffee preparation and export sourcing"/></div><Form kind="sample"/></section>
 </main>;
}
