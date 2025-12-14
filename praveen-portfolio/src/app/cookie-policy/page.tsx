import React from "react";
import Link from "next/link";
import { siteConfig, buildMetaData } from "@/config/site.config";
export const metadata = buildMetaData({
  title: `Cookie Policy | ${siteConfig.siteName}`,
  description: 'Cookie Policy — how we use cookies and tracking technologies.',
});
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

export default function CookiePolicy() {
  return (
    <main className="max-w-5xl mx-auto pt-20 sm:pt-24 pb-12 px-4">
      <div className="transition-all duration-300 ease-out">
        <Card>
          <CardHeader>
            <CardTitle>Cookie Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-base lg:text-lg space-y-4">
              <p className="text-sm text-muted-foreground mb-4">Last updated: December 15, 2025.</p>

              <p className="mb-4">
                This Cookie Policy explains how praveenjo.com (&quot;we&quot;, &quot;us&quot;, or &quot;Praveen Jo&quot;) uses cookies and similar tracking technologies when you visit our website. This policy should be read alongside our <Link href="/privacy-policy" className="underline text-primary">Privacy Policy</Link>, which provides additional information about how we collect, use, and protect your personal information.
              </p>
              <p className="mb-4 text-sm">
                This Policy applies to praveenjo.com and any other websites, domains, applications, services, products, or digital properties owned, operated, or offered by Praveen Jo.
              </p>

              <h3 id="toc" className="text-lg font-medium mt-6">Table of Contents</h3>
              <ul className="list-disc list-inside my-3 space-y-1 text-sm">
                <li><Link href="#what-are-cookies" className="underline text-primary">What Are Cookies?</Link></li>
                <li><Link href="#types-of-cookies" className="underline text-primary">Types of Cookies We Use</Link></li>
                <li><Link href="#purpose" className="underline text-primary">Purpose of Cookies</Link></li>
                <li><Link href="#third-party" className="underline text-primary">Third-Party Cookies</Link></li>
                <li><Link href="#manage" className="underline text-primary">Managing Cookies</Link></li>
                <li><Link href="#other-tracking" className="underline text-primary">Other Tracking Technologies</Link></li>
                <li><Link href="#updates" className="underline text-primary">Updates to This Policy</Link></li>
                <li><Link href="#contact" className="underline text-primary">Contact</Link></li>
              </ul>

              <h4 id="what-are-cookies" className="mt-4 font-semibold">What Are Cookies?</h4>
              <p className="mb-2 text-sm">Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies allow a website to recognize your device and store some information about your preferences or past actions.</p>
              <p className="mb-2 text-sm">We also use similar tracking technologies such as web beacons, pixel tags, and local storage, which function similarly to cookies and are covered by this policy.</p>

              <h4 id="types-of-cookies" className="mt-4 font-semibold">Types of Cookies We Use</h4>
              <p className="mb-2 text-sm">We use the following types of cookies on our website:</p>

              <p className="mb-2 text-sm font-medium mt-3">Essential Cookies</p>
              <p className="mb-2 text-sm">These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies as they are essential for the website to work.</p>

              <p className="mb-2 text-sm font-medium mt-3">Analytics Cookies</p>
              <p className="mb-2 text-sm">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the website&#39;s performance and user experience. We may use third-party analytics services (such as Google Analytics) that set these cookies.</p>

              <p className="mb-2 text-sm font-medium mt-3">Functional Cookies</p>
              <p className="mb-2 text-sm">These cookies allow the website to remember choices you make (such as your language preference or region) and provide enhanced, personalized features. They may also be used to provide services you have requested.</p>

              <p className="mb-2 text-sm font-medium mt-3">Performance Cookies</p>
              <p className="mb-2 text-sm">These cookies collect information about how you use our website, such as which pages you visit most often. This data helps us optimize our website and improve its performance.</p>

              <h4 id="purpose" className="mt-4 font-semibold">Purpose of Cookies</h4>
              <p className="mb-2 text-sm">We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside ml-5 mt-2 text-sm">
                <li>To ensure the website functions correctly and securely</li>
                <li>To remember your preferences and settings</li>
                <li>To analyze website traffic and user behavior</li>
                <li>To improve website performance and user experience</li>
                <li>To provide personalized content and features</li>
                <li>To measure the effectiveness of our content and marketing</li>
              </ul>

              <h4 id="third-party" className="mt-4 font-semibold">Third-Party Cookies</h4>
              <p className="mb-2 text-sm">In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements, and so on. These third-party services may include:</p>
              <ul className="list-disc list-inside ml-5 mt-2 text-sm">
                <li><strong>Google Analytics:</strong> Helps us understand how visitors use our website. You can learn more about Google Analytics cookies and opt-out options at <a className="underline text-primary" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.</li>
                <li><strong>Hosting Providers:</strong> Our hosting and content delivery services may set cookies to ensure optimal performance.</li>
              </ul>
              <p className="mb-2 text-sm">These third parties may use cookies to collect information about your online activities across different websites. We do not control these third-party cookies, and we recommend that you review the privacy policies of these third-party services to understand their cookie practices.</p>

              <h4 id="manage" className="mt-4 font-semibold">Managing Cookies</h4>
              <p className="mb-2 text-sm">You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, this may prevent you from taking full advantage of the website.</p>
              <p className="mb-2 text-sm font-medium mt-3">Browser Settings</p>
              <p className="mb-2 text-sm">You can control cookies through your browser settings. Here are links to instructions for popular browsers:</p>
              <ul className="list-disc list-inside ml-5 mt-2 text-sm">
                <li><a className="underline text-primary" href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                <li><a className="underline text-primary" href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                <li><a className="underline text-primary" href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                <li><a className="underline text-primary" href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
              </ul>
              <p className="mb-2 text-sm font-medium mt-3">Opt-Out Tools</p>
              <p className="mb-2 text-sm">You can also opt-out of certain third-party cookies by visiting:</p>
              <ul className="list-disc list-inside ml-5 mt-2 text-sm">
                <li><a className="underline text-primary" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                <li><a className="underline text-primary" href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">Your Online Choices</a> (for European users)</li>
              </ul>
              <p className="mb-2 text-sm">Please note that blocking or deleting cookies may impact your experience on our website, and some features may not function properly.</p>

              <h4 id="other-tracking" className="mt-4 font-semibold">Other Tracking Technologies</h4>
              <p className="mb-2 text-sm">In addition to cookies, we may use other tracking technologies:</p>
              <ul className="list-disc list-inside ml-5 mt-2 text-sm">
                <li><strong>Web Beacons:</strong> Small graphic images that may be included in our website or emails to track user engagement.</li>
                <li><strong>Pixel Tags:</strong> Similar to web beacons, used to track user behavior and measure the effectiveness of our content.</li>
                <li><strong>Local Storage:</strong> Technology that allows websites to store information locally on your device, similar to cookies but with more storage capacity.</li>
              </ul>
              <p className="mb-2 text-sm">These technologies are used for the same purposes as cookies and are subject to the same controls and preferences.</p>

              <h4 id="updates" className="mt-4 font-semibold">Updates to This Policy</h4>
              <p className="mb-2 text-sm">We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The &quot;Last updated&quot; date at the top of this page indicates when this policy was last revised. We encourage you to review this page periodically to stay informed about our use of cookies.</p>

              <h4 id="contact" className="mt-4 font-semibold">Contact</h4>
              <p className="mb-2 text-sm">If you have any questions about our use of cookies or this Cookie Policy, please contact us at: <a className="underline text-primary" href="mailto:praveenjoofficial05@gmail.com">praveenjoofficial05@gmail.com</a>.</p>

              <p className="mt-6 text-sm">For more information about how we handle your personal information, please review our <Link href="/privacy-policy" className="underline text-primary">Privacy Policy</Link>.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
