"use client";
import {useEffect,useRef,useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {createPortal} from "react-dom";

const origins=["Sidamo","Yirgacheffe","Harrar","Limu","Arsi","Guji","Kafa","Nekemte","Wolayita","Djimma","Bonga"];
function isCurrent(pathname,path){const normal=(s)=>(s||"/").replace(/\/+$/,"")||"/";return normal(pathname)===normal(path)}

export function DesktopNavigation({nav}){
 const pathname=usePathname();
 return <nav className="p-desktop-nav" aria-label="Primary navigation">
  {nav.map(([label,path])=><Link key={path} href={path} aria-current={isCurrent(pathname,path)?"page":undefined}>{label}</Link>)}
 </nav>;
}

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
        {list.length?list.map((name)=><button type="button" className={"p-origin-option"+(name===selected?" is-selected":"")} aria-pressed={name===selected} key={name} onClick={()=>setSelected(name)}>
          <span>{String(origins.indexOf(name)+1).padStart(2,"0")}</span><strong>{name}</strong><span className="p-origin-arrow" aria-hidden="true">↗</span>
        </button>):<p className="p-no-results">No matching origin. Try another search.</p>}
      </div>
      <div className="p-origin-detail" aria-live="polite">
        <div className="p-origin-detail-image"><img loading="lazy" decoding="async" alt="Ethiopian coffee cherries and production environment" src="https://hawinetcoffee.com/wp-content/uploads/2025/11/DSC07460-scaled.jpg"/></div>
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
 const [mounted,setMounted]=useState(false);
 const pathname=usePathname();
 const toggle=useRef(null);
 const panel=useRef(null);
 useEffect(()=>{setMounted(true)},[]);
 useEffect(()=>{setOpen(false)},[pathname]);
 useEffect(()=>{
   if(!open)return;
   const prior=document.body.style.overflow;
   document.body.style.overflow="hidden";
   const focusables=()=>Array.from(panel.current?.querySelectorAll('a[href],button:not([disabled])')||[]);
   const onKey=(e)=>{
     if(e.key==="Escape"){e.preventDefault();setOpen(false);toggle.current?.focus();return;}
     if(e.key!=="Tab")return;
     const items=focusables();if(!items.length)return;
     const first=items[0],last=items[items.length-1];
     if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
     else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
   };
   document.addEventListener("keydown",onKey);
   const frame=requestAnimationFrame(()=>focusables()[0]?.focus());
   return()=>{cancelAnimationFrame(frame);document.removeEventListener("keydown",onKey);document.body.style.overflow=prior;};
 },[open]);
 const close=()=>{setOpen(false);toggle.current?.focus()};
 return <div className="p-mobile-wrap">
  <button ref={toggle} type="button" className={"p-menu-toggle"+(open?" open":"")} aria-label={open?"Close navigation menu":"Open navigation menu"} aria-expanded={open} aria-controls="p-mobile-nav" onClick={()=>setOpen(x=>!x)}>
   <span/><span/><span/>
  </button>
  {mounted&&createPortal(<button type="button" aria-label="Close navigation" aria-hidden={!open} tabIndex={-1} className={"p-mobile-scrim"+(open?" is-visible":"")} onClick={close} />,document.body)}
  <nav ref={panel} inert={!open} aria-hidden={!open} id="p-mobile-nav" className={"p-mobile-panel"+(open?" is-open":"")} aria-label="Mobile navigation">
   <span className="p-mini-label">EXPLORE OUR WEBSITE</span>
   {nav.map(([label,path],i)=><Link onClick={()=>setOpen(false)} key={path} href={path} aria-current={isCurrent(pathname,path)?"page":undefined}><span className="p-menu-index">0{i+1}</span><strong>{label}</strong><span aria-hidden="true">↗</span></Link>)}
   <Link className="p-mobile-primary" onClick={()=>setOpen(false)} href="/contact-us/">Request Coffee ↗</Link>
  </nav>
 </div>;
}

export function GalleryWall({images}){
 const [active,setActive]=useState(-1);
 const trigger=useRef(null);
 const closeButton=useRef(null);
 const dialog=useRef(null);
 const close=()=>{
   setActive(-1);
   requestAnimationFrame(()=>trigger.current?.focus());
 };
 useEffect(()=>{
   if(active<0)return;
   const original=document.body.style.overflow;
   document.body.style.overflow="hidden";
   closeButton.current?.focus();
   const key=(event)=>{
     if(event.key==="Escape"){event.preventDefault();close();}
     if(event.key==="ArrowRight"){event.preventDefault();setActive(i=>(i+1)%images.length);}
     if(event.key==="ArrowLeft"){event.preventDefault();setActive(i=>(i+images.length-1)%images.length);}
     if(event.key==="Tab"){
       const buttons=Array.from(dialog.current?.querySelectorAll("button")||[]);
       if(!buttons.length)return;
       const first=buttons[0],last=buttons[buttons.length-1];
       if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
       else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
     }
   };
   document.addEventListener("keydown",key);
   return()=>{document.body.style.overflow=original;document.removeEventListener("keydown",key);}
 },[active,images.length]);
 return <><div className="p-gallery-grid">
  {images.map((url,i)=><button type="button" className="p-gallery-item" onClick={e=>{trigger.current=e.currentTarget;setActive(i);}} key={url} aria-label={"View coffee gallery photograph "+(i+1)}>
    <img src={url} alt={"Hawinet Coffee photographic gallery "+(i+1)} loading="lazy" decoding="async"/><span>VIEW PHOTOGRAPH <b aria-hidden="true">↗</b></span>
  </button>)}
 </div>{active>=0&&<div ref={dialog} className="p-lightbox" role="dialog" aria-modal="true" aria-label="Coffee gallery photo viewer" onClick={e=>{if(e.target===e.currentTarget)close();}}>
   <div className="p-lightbox-top"><span>{active+1} / {images.length}</span><button ref={closeButton} type="button" onClick={close} aria-label="Close photo viewer">✕</button></div>
   <img src={images[active]} alt={"Hawinet Coffee gallery image "+(active+1)} decoding="async" onClick={e=>e.stopPropagation()}/>
   <div className="p-lightbox-actions" onClick={e=>e.stopPropagation()}>
    <button type="button" onClick={()=>setActive(i=>(i+images.length-1)%images.length)}>← Previous</button>
    <button type="button" onClick={()=>setActive(i=>(i+1)%images.length)}>Next →</button>
   </div>
  </div>}</>;
}
