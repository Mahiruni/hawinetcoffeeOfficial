import Link from "next/link";
import sanitizeHtml from "sanitize-html";
import {nav,logo} from "../lib/site";
import {MobileNavigation} from "./Premium";

export function Header(){
 return <header className="header p-header"><div className="wrap p-header-row">
  <Link className="brand p-brand" href="/" aria-label="Hawinet Coffee Export home"><img src={logo} alt="Hawinet Coffee Export logo" width="136" height="76"/></Link>
  <nav className="p-desktop-nav" aria-label="Primary navigation">{nav.map(([label,path])=><Link key={path} href={path}>{label}</Link>)}</nav>
  <Link href="/contact-us/" className="p-nav-cta">Request Coffee <span aria-hidden="true">↗</span></Link>
  <MobileNavigation nav={nav}/>
 </div></header>
}
export function Footer(){
 return <footer className="footer p-footer">
  <div className="wrap p-footer-hero"><div><p className="p-kicker p-kicker-light">BETTER COFFEE STARTS AT THE SOURCE</p><h2>Let's grow something <em>remarkable.</em></h2></div><Link className="p-btn p-btn-cream" href="/contact-us/">Start a conversation <span>↗</span></Link></div>
  <div className="wrap p-footer-grid">
  <div><Link className="p-footer-brand" href="/">HAWINET<span>.</span></Link><p>From Ethiopia’s coffee-growing origins to partners around the world. Committed to meaningful relationships and exceptional coffee.</p><p className="p-footer-parent">PART OF HAMIYA INVESTMENT GROUP</p></div>
  <div><h3>Explore</h3>{nav.map(([label,path])=><Link href={path} key={path}>{label}</Link>)}</div>
  <div><h3>Get in touch</h3><a href="mailto:info@hawinetcoffee.com">info@hawinetcoffee.com</a><a href="tel:+251911258161">+251 911 258 161</a><a href="tel:+251911258163">+251 911 258 163</a><p>Adulala, Adama, Ethiopia</p><p>Meskel Flower, Addis Ababa</p></div></div>
  <div className="wrap p-footer-bottom"><span>© {new Date().getFullYear()} Hawinet Coffee Export. All rights reserved.</span><span>Rooted in Ethiopia. Shared with the world.</span><a href="https://hisabtechnologies.com/" target="_blank" rel="noopener noreferrer">Digital experience by Hisab Technologies ↗</a></div>
 </footer>;
}
export function Rich({html,className=""}){
 const source=String(html||"").replace(/href=(["'])https:\/\/hawinetcoffee\.com\//gi,"href=$1/");
 const cleaned=sanitizeHtml(source,{
  allowedTags:[...new Set([...sanitizeHtml.defaults.allowedTags,"div","span","section","img","figure","figcaption","video","source","picture","time","h1","h2","h3","h4","h5","h6"])],
  allowedAttributes:{a:["href","target","rel","title"],img:["src","alt","width","height","loading"],video:["src","poster","controls","width","height"],source:["src","type"],time:["datetime"]},
  allowedSchemes:["https","http","mailto","tel"],nonTextTags:["script","style","textarea","noscript","iframe"]
 });
 return <div className={"rich "+className} dangerouslySetInnerHTML={{__html:cleaned}}/>;
}
export function Banner({title,description,tag="HAWINET COFFEE EXPORT · ETHIOPIA"}){
 return <section className="banner p-page-hero"><div className="wrap"><div className="p-breadcrumb"><Link href="/">Home</Link><span> / </span>{title}</div><p className="p-kicker">{tag}</p><h1>{title}</h1>{description&&<p className="p-page-intro">{description}</p>}</div></section>;
}
