"use client";
import {useState} from "react";
export default function Form({kind="contact"}){
 const [state,setState]=useState({type:"",message:""});
 const labels={contact:"Start a conversation",sample:"Request coffee samples",tour:"Coffee tour registration",newsletter:"Stay close to the origin"};
 async function submit(e){
  e.preventDefault();const el=e.currentTarget;setState({type:"pending",message:"Sending your request…"});
  try {
   const payload={kind,...Object.fromEntries(new FormData(el).entries())};
   const response=await fetch("/api/inquiry",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
   const body=await response.json();
   if(!response.ok)throw new Error(body.error||"Delivery failed.");
   el.reset();setState({type:"success",message:"Your inquiry has been sent successfully."});
  }catch(err){setState({type:"error",message:err.message||"Please use direct email below."});}
 }
 return <div className="form-box"><p className="eyebrow">LET'S CONNECT</p><h2>{labels[kind]||labels.contact}</h2><p>Our team welcomes inquiries from importers, buyers and coffee enthusiasts.</p><form onSubmit={submit}>
  {kind!=="newsletter"&&<div className="form-row"><label>Full name<input name="name" autoComplete="name" required maxLength="120" placeholder="Your full name"/></label><label>Company<input name="company" maxLength="160" placeholder="Company name"/></label></div>}
  <div className="form-row"><label>Email address<input type="email" name="email" autoComplete="email" required maxLength="254" placeholder="name@company.com"/></label>{kind!=="newsletter"&&<label>Phone<input name="phone" maxLength="70" autoComplete="tel" placeholder="+251 …"/></label>}</div>
  {kind==="sample"&&<label>Preferred origin<select name="origin"><option value="">Choose an origin (optional)</option>{["Sidamo","Yirgacheffe","Harrar","Limu","Arsi","Guji","Kafa","Nekemte","Wolayita","Djimma","Bonga"].map(x=><option key={x}>{x}</option>)}</select></label>}
  {kind==="tour"&&<div className="form-row"><label>Position<input name="position" maxLength="120"/></label><label>Country<input name="country" maxLength="120"/></label><label>Company website<input name="companyWebsite" maxLength="250"/></label><label>Tour duration<select name="duration"><option value="">Select duration</option><option>3 days</option><option>4 days</option><option>5 days</option></select></label></div>}
  {kind!=="newsletter"&&<label>Message<textarea name="message" rows="4" maxLength="3000" placeholder="Tell us what you are looking for…"/></label>}
  <label className="consent"><input type="checkbox" name="consent" value="yes" required/> <span>I consent to Hawinet contacting me about my inquiry.</span></label>
  <div className="trap" aria-hidden="true"><label>Leave empty<input tabIndex="-1" autoComplete="off" name="website_confirm"/></label></div>
  <button className="button dark" type="submit" disabled={state.type==="pending"}>{state.type==="pending"?"Sending…":"Send inquiry ↗"}</button>
  <p className={"feedback "+state.type} role="status">{state.message}</p><p className="direct">Or email <a href="mailto:info@hawinetcoffee.com">info@hawinetcoffee.com</a></p>
 </form></div>;
}
