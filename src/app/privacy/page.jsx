import Link from "next/link";
import {Banner} from "../../components/Theme";
import {makeMetadata} from "../../lib/seo";
import PrivacySettings from "../../components/PrivacySettings";
export const metadata=makeMetadata({title:"Privacy & Website Analytics | Hawinet Coffee",description:"Learn how Hawinet Coffee handles information submitted through inquiry forms and optional website analytics.",path:"/privacy/"});
export default function PrivacyPage(){
 return <main id="main"><Banner title="Privacy and your trust." tag="TRANSPARENT CONTACT & WEBSITE MEASUREMENT" description="An overview of how inquiry information and optional analytics are handled on the Hawinet Coffee website."/>
  <section className="wrap p-seo-section p-seo-two-col"><article>
   <h2>Our approach <em>to privacy.</em></h2>
   <p className="p-seo-lead">We collect information you choose to submit through contact and coffee inquiry forms so the export team can respond to your questions.</p>
   <h3>Contact information you provide</h3><p>A form may collect your name, company, email address, telephone number, country, origin preference, requested quantity and written inquiry. The information is used to process your request and relevant follow-up. Do not submit payment card details or other sensitive data through the form.</p>
   <h3>Email delivery</h3><p>When configured, the website sends inquiries to the Hawinet export team through an email delivery provider. If delivery is unavailable, the form displays an error rather than claiming that a message was sent.</p>
   <h3>Optional analytics</h3><p>If Google Analytics is configured, the website asks for your permission before loading its analytics script. Analytics may provide aggregate information such as visited pages and visitor regions. You can decline and still use the website.</p>
   <h3>Cookies and your choice</h3><p>The browser remembers your optional analytics selection. You may change the selection below. Website features needed for functionality may still use technical browser storage.</p>
   <PrivacySettings/>
   <h3>Requests and questions</h3><p>Contact <a href="mailto:info@hawinetcoffee.com">info@hawinetcoffee.com</a> for questions about your submitted information. The company should maintain its formally approved privacy notice and retention rules; this page is an initial disclosure and does not claim the existence of policies or security controls that have not been verified.</p>
   <Link className="p-editorial-link" href="/contact-us/">Contact Hawinet ↗</Link>
  </article><aside className="p-seo-aside"><p className="p-kicker">PRIVACY CONTACT</p><h3>Hawinet Coffee Export</h3><p>Questions about your inquiry or website experience?</p><a href="mailto:info@hawinetcoffee.com">info@hawinetcoffee.com ↗</a></aside></section>
 </main>;
}
