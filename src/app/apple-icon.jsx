import {ImageResponse} from "next/og";
export const size={width:180,height:180};
export const contentType="image/png";
export default function AppleIcon(){
 return new ImageResponse(
 <div style={{display:"flex",width:"100%",height:"100%",background:"#183D2E",alignItems:"center",justifyContent:"center",borderRadius:30}}>
  <span style={{fontSize:112,fontWeight:800,letterSpacing:-7,color:"#FAF8F3"}}>H</span>
  <span style={{fontSize:24,color:"#BA965C",alignSelf:"center"}}>✳</span>
 </div>,size);
}
