import {ImageResponse} from "next/og";
export const size={width:1200,height:630};
export const contentType="image/png";
export const alt="Hawinet Coffee Export — Born in Ethiopia. Shared with the World.";
export default function OpenGraphImage(){
 return new ImageResponse(
 <div style={{width:"100%",height:"100%",background:"#173D2D",color:"#FCF8F0",display:"flex",position:"relative",flexDirection:"column",justifyContent:"space-between",padding:"72px 80px"}}>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
   <div style={{display:"flex",alignItems:"center",gap:21}}>
    <div style={{width:64,height:64,border:"2px solid #D8C29B",borderRadius:13,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:47}}>H</div>
    <span style={{fontSize:25,letterSpacing:4,fontWeight:700}}>HAWINET COFFEE EXPORT</span>
   </div>
   <div style={{fontSize:19,color:"#E6CFAC"}}>ETHIOPIA ↗</div>
  </div>
  <div style={{display:"flex",flexDirection:"column",gap:13}}>
    <div style={{fontSize:74,fontWeight:700,letterSpacing:-3,lineHeight:1.13}}>Born in Ethiopia.</div>
    <div style={{fontSize:74,fontWeight:700,letterSpacing:-3,lineHeight:1.13,color:"#E6CFAC"}}>Shared with the World.</div>
    <div style={{fontSize:23,color:"#CDD9CB",marginTop:24}}>Authentic Ethiopian Arabica · Green Coffee Sourcing</div>
  </div>
  <div style={{height:5,width:260,background:"#BA965C",borderRadius:8}}/>
 </div>,size);
}
