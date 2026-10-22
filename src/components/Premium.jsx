"use client";

import {useEffect,useRef,useState} from "react";
import Link from "next/link";

const origins=["Sidamo","Yirgacheffe","Harrar","Limu","Arsi","Guji","Kafa","Nekemte","Wolayita","Djimma","Bonga"];

export function OriginExplorer({compact=false}){
  const [selected,setSelected]=useState(origins[0]);
  const [query,setQuery]=useState("");
  const list=origins.filter(name=>name.toLowerCase().includes(query.trim().toLowerCase()));
  return <div className={"p-explorer"+(compact?" p-explorer-compact":"")}>
    <div className="p-explorer-top">
      <div><span className="p-kicker">EXPLORE THE ORIGINS <span className="p-kicker-line"/></span><h3>Discover your next origin.</h3></div>
      <label className="p-origin-search"><span className="sr-only">Search coffee origins</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search origins…" type="search"/></label>
    </div>
    <div className="p-explorer-body">
      <div className="p-origin-options" role="group" aria-label="Select Ethiopian coffee origin">
        {list.length?list.map((name,index)=><button type="button" className={"p-origin-option"+(name===selected?" is-selected":"")} aria-pressed={name===selected} key={name} onClick={()=>setSelected(name)}>
          <span>{String(origins.indexOf(name)+1).padStart(2,"0")}</span><strong>{name}</strong><span className="p-origin-arrow" aria-hidden="true">↗</span>
        </button>):<p className="p-no-results">No matching origin. Try another search.</p>}
      </div>
      <div className="p-origin-detail" aria-live="polite">
        <div className="p-origin-detail-image"><img loading="lazy" alt="Ethiopian coffee cherries and production environment" src="https://hawinetcoffee.com/wp-content/uploads/2025/11/DSC07460-scaled.jpg"/></div>
        <div className="p-origin-detail-content"><span className="p-mini-label">ETHIOPIAN COFFEE ORIGIN / {String(origins.indexOf(selected)+1).padStart(2,"0")}</span><h4>{selected}<em> Coffee.</em></h4>
          <p>Explore Hawinet’s {selected} coffee offering. Request verified grades, processing details, samples and current availability directly from our export team.</p>
          <div className="p-detail-note"><span>ORIGIN</span><strong>Ethiopia · {selected}</strong></div>
          <Link className="p-btn p-btn-ink" href={"/contact-us/?origin="+encodeURIComponent(selected)}>Inquire about {selected} <span>↗</span></Link>
        </div>
      </div>
    </div>
  </div>;
}

export function MobileNavigation({nav}){
  const [open,setOpen]=useState(false);
  const ref=useRef(null);
  useEffect(()=>{
    if(!open)return;
    const key=(e)=>{if(e.key==="Escape")setOpen(false);};
    const outside=(e)=>{if(ref.current&&!ref.current.contains(e.target))setOpen(false);};
    document.addEventListener("keydown",key);document.addEventListener("pointerdown",outside);
    return()=>{document.removeEventListener("keydown",key);document.removeEventListener("pointerdown",outside)};
  },[open]);
  return <div className="p-mobile-wrap" ref={ref}>
    <button type="button" className={"p-menu-toggle"+(open?" open":"")} aria-label={open?"Close navigation menu":"Open navigation menu"} aria-expanded={open} aria-controls="p-mobile-nav" onClick={()=>setOpen(!open)}>
      <span/><span/><span/>
    </button>
    {open&&<nav id="p-mobile-nav" className="p-mobile-panel" aria-label="Mobile navigation">
      <span className="p-mini-label">DISCOVER HAWINET</span>
      {nav.map(([label,path],i)=><Link onClick={()=>setOpen(false)} key={path} href={path}><span className="p-menu-index">0{i+1}</span><strong>{label}</strong><span aria-hidden="true">↗</span></Link>)}
      <Link className="p-mobile-primary" onClick={()=>setOpen(false)} href="/contact-us/">Request Coffee ↗</Link>
    </nav>}
  </div>;
}

export function GalleryWall({images}){
 const [active,setActive]=useState(-1);
 useEffect(()=>{
  if(active<0)return;
  const handler=e=>{if(e.key==="Escape")setActive(-1);if(e.key==="ArrowRight")setActive(i=>(i+1)%images.length);if(e.key==="ArrowLeft")setActive(i=>(i+images.length-1)%images.length)};
  document.addEventListener("keydown",handler);
  return()=>document.removeEventListener("keydown",handler);
 },[active,images.length]);
 return <><div className="p-gallery-grid">
  {images.map((url,i)=><button type="button" className="p-gallery-item" onClick={()=>setActive(i)} key={url} aria-label={"View coffee gallery photograph "+(i+1)}>
   <img src={url} alt={"Hawinet Coffee photographic gallery "+(i+1)} loading="lazy"/><span>EXPLORE IMAGE <b>↗</b></span>
  </button>)}
 </div>{active>=0&&<div className="p-lightbox" role="dialog" aria-modal="true" aria-label="Coffee gallery photo viewer" onClick={()=>setActive(-1)}>
  <div className="p-lightbox-top"><span>{active+1} / {images.length}</span><button type="button" onClick={()=>setActive(-1)} aria-label="Close photo viewer">✕</button></div>
  <img src={images[active]} alt={"Hawinet Coffee gallery image "+(active+1)} onClick={e=>e.stopPropagation()}/>
  <div className="p-lightbox-actions" onClick={e=>e.stopPropagation()}>
  <button type="button" onClick={()=>setActive((active+images.length-1)%images.length)}>← Previous</button><button type="button" onClick={()=>setActive((active+1)%images.length)}>Next →</button>
  </div></div>}</>;
}
