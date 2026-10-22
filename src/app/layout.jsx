import "./globals.css";
import "./premium.css";
import "./polish.css";
import "./seo.css";
import {Header,Footer} from "../components/Theme";
import ScrollExperience from "../components/ScrollExperience";
import AnalyticsConsent from "../components/AnalyticsConsent";
import {SITE_NAME,SITE_URL,INDEXING_ENABLED,makeMetadata} from "../lib/seo";

export const metadata={
 metadataBase:new URL(SITE_URL),
 ...makeMetadata({path:"/"}),
 applicationName:SITE_NAME,
 appleWebApp:{title:"Hawinet Coffee",capable:true},
 robots:INDEXING_ENABLED?{index:true,follow:true,"max-image-preview":"large"}:{index:false,follow:true},
 verification:{...(process.env.GOOGLE_SITE_VERIFICATION?{google:process.env.GOOGLE_SITE_VERIFICATION}:{})},
 icons:{icon:[{url:"/icon.svg",type:"image/svg+xml"}],apple:"/apple-icon",shortcut:"/icon.svg"},
 manifest:"/manifest.webmanifest",
 category:"business"
};
export const viewport={width:"device-width",initialScale:1,themeColor:"#faf8f3"};
export default function Layout({children}){return <html lang="en"><body>
 <a href="#main" className="p-skip-link">Skip to main content</a>
 <ScrollExperience/><Header/>{children}<Footer/><AnalyticsConsent/>
 </body></html>}
