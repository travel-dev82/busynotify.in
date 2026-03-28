import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalContent } from "../LegalContent";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for BusyNotify - How we use cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <LegalContent
        title="Cookie Policy"
        lastUpdated="March 15, 2026"
        content={cookiesContent}
      />
      <Footer />
    </main>
  );
}

const cookiesContent = [
  {
    heading: "1. What Are Cookies",
    content: `Cookies are small text files stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.

Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device for a set period, while session cookies are deleted when you close your browser.`,
  },
  {
    heading: "2. How We Use Cookies",
    content: `We use cookies for the following purposes:

Essential Cookies
• Required for the website to function properly
• Enable navigation and access to secure areas
• Cannot be disabled

Analytics Cookies
• Help us understand how visitors interact with our website
• Collect anonymous statistical data
• Used to improve our website and services

Functional Cookies
• Remember your preferences and settings
• Provide enhanced, personalized features

Marketing Cookies
• Used to deliver relevant advertisements
• Track the effectiveness of marketing campaigns`,
  },
  {
    heading: "3. Types of Cookies We Use",
    content: `First-Party Cookies: Set by BusyNotify directly on our website.

Third-Party Cookies: Set by third-party service providers we use, such as:
• Analytics providers (e.g., Plausible, PostHog)
• Communication tools
• Integration services`,
  },
  {
    heading: "4. Managing Cookies",
    content: `Most browsers allow you to manage cookie preferences. You can:

• View cookies stored on your device
• Delete all or specific cookies
• Block all cookies or only third-party cookies
• Set preferences for specific websites

To manage cookies in your browser:
• Chrome: Settings > Privacy and Security > Cookies
• Firefox: Options > Privacy & Security > Cookies
• Safari: Preferences > Privacy > Cookies
• Edge: Settings > Cookies and Site Permissions`,
  },
  {
    heading: "5. Impact of Disabling Cookies",
    content: `If you disable cookies, some features of our Service may not function properly:

• You may not be able to access certain areas
• Preferences may not be saved
• Some services may be unavailable
• Analytics data will be limited

Essential cookies cannot be disabled as they are necessary for the Service to function.`,
  },
  {
    heading: "6. Do Not Track",
    content: `Some browsers have a "Do Not Track" feature that signals websites not to track your online activity.

We currently respond to Do Not Track signals by not loading analytics cookies when the signal is detected.`,
  },
  {
    heading: "7. Updates to This Policy",
    content: `We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.

We encourage you to review this policy periodically.`,
  },
  {
    heading: "8. Contact Us",
    content: `If you have questions about our use of cookies, please contact us at:

Email: privacy@busynotify.in
Address: BusyNotify Technologies Pvt. Ltd., Bangalore, India`,
  },
];
