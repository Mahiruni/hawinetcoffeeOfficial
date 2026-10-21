import Link from "next/link";
import sanitizeHtml from "sanitize-html";
import {nav,logo} from "../lib/site";
export function Header(){return <header className="header"><div className="wrap head-row">
  <Link className="brand" href="/"><img src={logo} alt="Hawinet Coffee Export" width="62" height="48"/><span><strong>HAWINET</strong><small>COFFEE EXPORT</small></span></Link>
  <nav className="nav" aria-label="Main">{nav.map(([label,path])=><Link key={path} href={path}>{label}</Link>)}</nav>
  <Link href="/contact-us/" className="head-cta">Request Coffee ↗</Link>
  <details className="mobile"><summary aria-label="Open menu"><i></i><i></i><i></i></summary><nav>{nav.map(([label,path])=><Link key={path} href={path}>{label} <span>↗</span></Link>)}</nav></details>
</div></header>}
export function Footer(){return <footer className="footer"><div className="wrap footer-grid">
  <div><p className="eyebrow">HAWINET COFFEE EXPORT</p><h2>Ethiopia's finest, shared worldwide.</h2><p>Connecting Ethiopia’s coffee heritage to roasters, importers and partners around the globe.</p><Link href="/contact-us/" className="button light">Partner with us ↗</Link></div>
  <div><h3>Explore</h3>{nav.map(([label,path])=><Link key={path} href={path}>{label}</Link>)}</div>
  <div><h3>Contact</h3><a href="mailto:info@hawinetcoffee.com">info@hawinetcoffee.com</a><a href="tel:+251911258161">+251 911 258 161</a><a href="tel:+251911258163">+251 911 258 163</a><p>Adulala, Adama, Ethiopia</p><p>Meskel Flower, Addis Ababa</p></div>
</div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Hawinet Coffee Export</span><span>A Hamiya Investment Group company</span><a href="https://hisabtechnologies.com/">Website by Hisab Technologies</a></div></footer>}
export function Rich({html,className=""}){
 const source=String(html||"").replace(/href=(["'])https:\/\/hawinetcoffee\.com\//gi,"href=$1/");
 const cleaned=sanitizeHtml(source,{allowedTags:[...new Set([...sanitizeHtml.defaults.allowedTags,"div","span","section","img","figure","figcaption","video","source","picture","time","h1","h2","h3","h4","h5","h6"])],allowedAttributes:{a:["href","target","rel","title"],img:["src","alt","width","height","loading"],video:["src","poster","controls","width","height"],source:["src","type"],time:["datetime"]},allowedSchemes:["https","http","mailto","tel"],nonTextTags:["script","style","textarea","noscript","iframe"]});
 return <div className={"rich "+className} dangerouslySetInnerHTML={{__html:cleaned}}/>;
}
export function Banner({title,description,tag="HAWINET COFFEE EXPORT · ETHIOPIA"}){
 return <section className="banner"><div className="wrap"><p className="crumb"><Link href="/">Home</Link> / {title}</p><p className="eyebrow">{tag}</p><h1>{title}</h1><p className="banner-intro">{description}</p></div></section>;
}
