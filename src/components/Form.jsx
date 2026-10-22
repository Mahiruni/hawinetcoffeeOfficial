"use client";
import {useState} from "react";
const origins=["Sidamo","Yirgacheffe","Harrar","Limu","Arsi","Guji","Kafa","Nekemte","Wolayita","Djimma","Bonga"];
export default function Form({kind="contact",initialOrigin=""}){
 const [state,setState]=useState({type:"",message:""});
 const labels={contact:"Start a conversation.",sample:"Request coffee samples.",tour:"Ask about a coffee tour.",newsletter:"Stay close to the origin."};
 async function submit(e){
  e.preventDefault();const el=e.currentTarget;setState({type:"pending",message:"Sending your request…"});
  try{
   const payload={kind,...Object.fromEntries(new FormData(el).entries())};
   const response=await fetch("/api/inquiry",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
   const body=await response.json();
   if(!response.ok)throw new Error(body.error||"Delivery failed.");
   el.reset();setState({type:"success",message:"Your inquiry has been sent successfully."});
  }catch(err){setState({type:"error",message:err.message||"Please use direct email below."})}
 }
 return <div className="form-box p-form-box"><p className="p-kicker">LET'S CONNECT</p><h2>{labels[kind]||labels.contact}</h2><p>Tell us what you’re looking for. We’ll help you take the next step.</p>
 <form onSubmit={submit}>
  {kind!=="newsletter"&&<div className="form-row"><label>Full name<input name="name" autoComplete="name" required maxLength="120" placeholder="Your full name"/></label><label>Company / organization<input name="company" maxLength="160" placeholder="Company name"/></label></div>}
  <div className="form-row"><label>Email address<input type="email" name="email" autoComplete="email" required maxLength="254" placeholder="name@company.com"/></label>{kind!=="newsletter"&&<label>Phone / WhatsApp<input name="phone" maxLength="70" autoComplete="tel" placeholder="+251 …"/></label>}</div>
  {(kind==="sample"||kind==="contact")&&<label>Coffee origin of interest<select name="origin" defaultValue={origins.includes(initialOrigin)?initialOrigin:""}><option value="">Not decided yet</option>{origins.map(x=><option key={x} value={x}>{x}</option>)}</select></label>}
  {kind==="sample"&&<div className="form-row"><label>Processing preference<select name="processing"><option value="">Not specified</option><option>Washed</option><option>Natural</option><option>Other / discuss</option></select></label><label>Estimated quantity<input name="quantity" maxLength="100" placeholder="e.g. 1 container (optional)"/></label></div>}
  {kind==="tour"&&<div className="form-row"><label>Position<input name="position" maxLength="120"/></label><label>Country<input name="country" maxLength="120"/></label><label>Company website<input name="companyWebsite" maxLength="250"/></label><label>Preferred tour duration<select name="duration"><option value="">Not decided</option><option>3 days</option><option>4 days</option><option>5 days</option></select></label></div>}
  {kind!=="newsletter"&&<label>Message<textarea name="message" rows="4" maxLength="3000" placeholder="Tell us about your sourcing needs…"/></label>}
  <label className="consent"><input type="checkbox" name="consent" value="yes" required/><span>I consent to Hawinet Coffee contacting me about my inquiry.</span></label>
  <div className="trap" aria-hidden="true"><label>Leave empty<input tabIndex="-1" autoComplete="off" name="website_confirm"/></label></div>
  <button className="p-btn p-btn-ink p-form-submit" type="submit" disabled={state.type==="pending"}>{state.type==="pending"?"Sending…":kind==="newsletter"?"Join coffee updates ↗":"Send inquiry ↗"}</button>
  <p className={"feedback "+state.type} role="status" aria-live="polite">{state.message}</p><p className="direct">Prefer email? <a href="mailto:info@hawinetcoffee.com">info@hawinetcoffee.com</a></p>
 </form></div>;
}
