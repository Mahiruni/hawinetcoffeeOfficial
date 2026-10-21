import {NextResponse} from "next/server";
export const runtime="nodejs";
const types=new Set(["contact","sample","tour","newsletter"]);
function safe(s,n=300){return typeof s==="string"?s.trim().slice(0,n):""}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,(c)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
export async function POST(request){
 const origin=request.headers.get("origin");
 try{if(origin&&new URL(origin).host!==new URL(request.url).host)return NextResponse.json({error:"Invalid origin."},{status:403});}catch{return NextResponse.json({error:"Invalid origin."},{status:403})}
 if(Number(request.headers.get("content-length")||0)>16000)return NextResponse.json({error:"Request too large."},{status:413});
 let data;try{data=await request.json()}catch{return NextResponse.json({error:"Invalid form data."},{status:400})}
 const kind=safe(data?.kind,30),email=safe(data?.email,254);
 if(!types.has(kind)||!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))||safe(data?.consent,10)!=="yes")return NextResponse.json({error:"Valid email and consent required."},{status:400});
 if(data.website_confirm)return NextResponse.json({ok:true});
 if(kind!=="newsletter"&&!safe(data.name,120))return NextResponse.json({error:"Name is required."},{status:400});
 if(!process.env.RESEND_API_KEY||!process.env.CONTACT_FROM_EMAIL)return NextResponse.json({error:"Online form delivery is not yet configured. Please email info@hawinetcoffee.com directly."},{status:503});
 const fields=["name","company","email","phone","origin","position","country","companyWebsite","duration","message"];
 const rows=fields.map(key=>[key,safe(data[key],key==="message"?3000:254)]).filter(row=>row[1]);
 const html="<h2>Hawinet Coffee "+escapeHtml(kind)+" inquiry</h2><ul>"+rows.map(row=>"<li><strong>"+escapeHtml(row[0])+":</strong> "+escapeHtml(row[1])+"</li>").join("")+"</ul>";
 try{
  const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+process.env.RESEND_API_KEY},body:JSON.stringify({from:process.env.CONTACT_FROM_EMAIL,to:[process.env.CONTACT_TO_EMAIL||"info@hawinetcoffee.com"],reply_to:email,subject:"Hawinet Coffee "+kind+" inquiry",html}),signal:AbortSignal.timeout(10000)});
  if(!response.ok)return NextResponse.json({error:"Email delivery failed. Please contact info@hawinetcoffee.com directly."},{status:502});
  return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:"Email delivery unavailable. Please contact info@hawinetcoffee.com directly."},{status:502})}
}
