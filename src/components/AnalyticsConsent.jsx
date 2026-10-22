"use client";
import {useEffect,useState} from "react";
import {usePathname} from "next/navigation";

const KEY="hawinet_analytics_consent";
const measurement=process.env.NEXT_PUBLIC_GA4_ID||"";
export default function AnalyticsConsent(){
 const pathname=usePathname();
 const [choice,setChoice]=useState("checking");
 useEffect(()=>{
  let saved=null;try{saved=localStorage.getItem(KEY)}catch{}
  setChoice(saved==="yes"?"yes":saved==="no"?"no":"unset");
 },[]);
 useEffect(()=>{
  const reset=()=>setChoice("unset");
  window.addEventListener("hawinet:cookie-preferences",reset);
  return()=>window.removeEventListener("hawinet:cookie-preferences",reset);
 },[]);
 useEffect(()=>{
  if(!measurement||choice!=="yes")return;
  if(!/^G-[A-Z0-9]+$/.test(measurement))return;
  if(!window.__hawinetAnalyticsReady){
   window.dataLayer=window.dataLayer||[];
   window.gtag=function(){window.dataLayer.push(arguments)};
   window.gtag("js",new Date());
   window.gtag("config",measurement,{anonymize_ip:true,send_page_view:false});
   const script=document.createElement("script");
   script.async=true;
   script.src="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(measurement);
   document.head.appendChild(script);
   window.__hawinetAnalyticsReady=true;
  }
 },[choice]);
 useEffect(()=>{
  if(measurement&&choice==="yes"&&typeof window.gtag==="function"){
   window.gtag("event","page_view",{page_path:pathname,page_location:window.location.href,page_title:document.title});
  }
 },[choice,pathname]);
 function choose(value){try{localStorage.setItem(KEY,value)}catch{}setChoice(value)}
 if(!measurement||choice!=="unset")return null;
 return <section className="p-analytics-banner" aria-label="Optional analytics cookies">
  <div><strong>Help improve Hawinet's website</strong><p>With your permission, anonymous website usage measurements help us understand visitors. Essential website features work without analytics.</p></div>
  <div className="p-analytics-actions"><button type="button" onClick={()=>choose("no")}>Decline</button><button type="button" onClick={()=>choose("yes")}>Allow analytics</button></div>
 </section>;
}
