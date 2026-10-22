"use client";
export default function PrivacySettings(){
 return <button type="button" className="p-btn p-btn-ink" onClick={()=>window.dispatchEvent(new Event("hawinet:cookie-preferences"))}>Change analytics preference ↗</button>;
}
