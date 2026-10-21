import "./globals.css";
import {Header,Footer} from "../components/Theme";
export const metadata={metadataBase:new URL("https://hawinetcoffee.com"),title:{default:"Hawinet Coffee Export | Premium Ethiopian Coffee",template:"%s | Hawinet Coffee Export"},description:"Premium Ethiopian coffee sourced with care, prepared for export and shared worldwide.",robots:process.env.VERCEL_ENV==="preview"?{index:false,follow:false}:{index:true,follow:true},openGraph:{siteName:"Hawinet Coffee Export",type:"website"}};
export const viewport={width:"device-width",initialScale:1,themeColor:"#f8f6f0"};
export default function Layout({children}){return <html lang="en"><body><Header/>{children}<Footer/></body></html>}
