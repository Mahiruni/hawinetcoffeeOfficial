import Link from "next/link";
import {Rich} from "../components/Theme";
import Form from "../components/Form";
import {get,posts,teaser,origins,photo} from "../lib/site";
export default function Home(){
 const home=get("home");
 return <main id="main">
  <section className="hero"><img className="hero-img" src={photo} alt="Ethiopian coffee origins" fetchPriority="high"/><div className="hero-shade"></div><div className="wrap hero-body"><p className="eyebrow">ETHIOPIAN COFFEE · PURE ORIGIN</p><h1>Rooted in Ethiopia.<br/><em>Shared with the world.</em></h1><p>From a single origin, we source and deliver the world's finest Arabica coffee to the global market.</p><div className="hero-actions"><Link className="button light" href="/products/">Explore our coffee ↗</Link><Link className="button outline" href="/contact-us/">Contact Hawinet ↗</Link></div></div></section>
  <section className="wrap section split"><div><p className="eyebrow">HAWINET COFFEE EXPORT</p><h2>Every remarkable coffee has a story worth sharing.</h2></div><div><p className="lede">From Ethiopia's highlands to the global market, our commitment is rooted in quality, relationships and the farmers who make each harvest possible.</p><Link className="textlink" href="/about-us/">Discover our story ↗</Link></div></section>
  <section className="soft section"><div className="wrap"><div className="section-head"><div><p className="eyebrow">FROM THE BIRTHPLACE OF COFFEE</p><h2>Explore our coffee origins.</h2></div><Link className="textlink" href="/products/">View all coffee ↗</Link></div><div className="origins">{origins.map((origin,i)=><Link className="origin" key={origin} href="/products/"><small>{String(i+1).padStart(2,"0")}</small><strong>{origin}</strong><span>↗</span></Link>)}</div></div></section>
  <section className="image-split"><img src="https://hawinetcoffee.com/wp-content/uploads/2025/11/DSC07921-min-scaled.jpg" loading="lazy" alt="Hawinet coffee sourcing in Ethiopia"/><div><p className="eyebrow">QUALITY AT ORIGIN</p><h2>Sourced with purpose. Prepared with care.</h2><p>Discover our process, quality standards and traceable Ethiopian green coffee origins.</p><Link className="button dark" href="/products/">Our coffee collection ↗</Link></div></section>
  <section className="wrap section"><div className="section-head"><div><p className="eyebrow">LATEST FROM HAWINET</p><h2>Coffee stories & updates.</h2></div><Link className="textlink" href="/news-blogs/">All news ↗</Link></div><div className="posts">{posts.slice(0,3).map(post=><Link className="post" key={post.slug} href={"/"+post.slug+"/"}><small>{post.date.slice(0,10)}</small><h3>{post.title}</h3><p>{teaser(post.excerpt,170)}</p><span>Read story ↗</span></Link>)}</div></section>
  <section className="cta"><div className="wrap"><p className="eyebrow">COFFEE ORIGIN EXPERIENCES</p><h2>Experience coffee at its source.</h2><p>Discover the coffee regions, people, harvesting traditions and processing sites that make Ethiopia exceptional.</p><Link href="/early-bird-invitation-1st-edition/" className="button light">Explore coffee tour ↗</Link></div></section>
  <section className="wrap section"><p className="eyebrow">FROM OUR ORIGINAL WEBSITE</p><h2>Our heritage, coffee and values.</h2><Rich className="archive-rich" html={home.html}/></section>
  <section className="wrap section form-section"><Form kind="sample"/></section>
 </main>;
}
