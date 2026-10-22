import "./globals.css";
import "./premium.css";
import "./polish.css";
import {Header,Footer} from "../components/Theme";
export const metadata={
 metadataBase:new URL("https://hawinetcoffee.com"),
 title:{default:"Hawinet Coffee Export | Born in Ethiopia. Shared with the World.",template:"%s | Hawinet Coffee Export"},
 description:"Discover authentic Ethiopian Arabica coffee with Hawinet Coffee Export. Explore eleven coffee origins and inquire about export partnerships and samples.",
 robots:process.env.VERCEL_ENV==="preview"?{index:false,follow:false}:{index:true,follow:true},
 openGraph:{siteName:"Hawinet Coffee Export",type:"website",locale:"en_US"}
};
export const viewport={width:"device-width",initialScale:1,themeColor:"#fbfaf7"};
export default function Layout({children}){return <html lang="en"><body><a href="#main" className="p-skip-link">Skip to main content</a><Header/>{children}<Footer/></body></html>}
