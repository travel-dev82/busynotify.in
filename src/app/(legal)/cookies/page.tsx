import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalContent } from "../LegalContent";

export const metadata: Metadata = {
  title: "Cookie Policy | BusyNotify - BUSY Software Automation Platform",
  description:
    "Cookie Policy for BusyNotify (M/S WILFORD TECHNOLOGY). Learn how we use cookies and similar technologies on our BUSY Software automation platform.",
  keywords: [
    "BusyNotify Cookie Policy",
    "BUSY Software Cookies",
    "Indian Website Cookies",
    "MSME Cookie Policy",
    "Website Privacy India",
    "M/S WILFORD TECHNOLOGY Cookies",
  ],
  alternates: {
    canonical: "https://busynotify.in/cookies",
  },
};

export default function CookiesPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <LegalContent
        title="Cookie Policy"
        lastUpdated="March 28, 2026"
        content={cookiesContent}
      />
      <Footer />
    </main>
  );
}

const cookiesContent = [
  {
    heading: "Introduction",
    content: `This Cookie Policy explains how BusyNotify (operated by **M/S WILFORD TECHNOLOGY**, a proprietorship) uses cookies and similar technologies when you visit or use our website and services.`,
  },
  {
    heading: "1. What Are Cookies?",
    content: `Cookies are small text files stored on your device (computer, mobile, or tablet) when you visit a website. They help websites function efficiently and improve user experience.

**Types of Cookies:**

• **Session Cookies** – deleted when you close your browser
• **Persistent Cookies** – stored on your device for a fixed period`,
  },
  {
    heading: "2. How We Use Cookies",
    content: `We use cookies to enhance your experience and improve our services.

**🔹 Essential Cookies**
• Required for website functionality
• Enable login, navigation, and security
• Cannot be disabled

**🔹 Performance & Analytics Cookies**
• Help us understand how users interact with our website
• Track pages visited, time spent, and usage patterns
• Used to improve performance and features

**🔹 Functional Cookies**
• Remember your preferences (language, settings)
• Provide personalized user experience

**🔹 Marketing Cookies**
• Help deliver relevant content or advertisements
• Measure effectiveness of campaigns`,
  },
  {
    heading: "3. Types of Cookies We Use",
    content: `**First-Party Cookies**

Set directly by BusyNotify to ensure proper website functionality.

**Third-Party Cookies**

We may use third-party services such as:

• Analytics tools (e.g., Google Analytics, PostHog, etc.)
• Communication tools
• Integration platforms

These third parties may place cookies on your device according to their own policies.`,
  },
  {
    heading: "4. How You Can Manage Cookies",
    content: `You can control or disable cookies through your browser settings.

**Common Options:**
• View stored cookies
• Delete cookies
• Block all cookies or third-party cookies
• Set preferences for specific websites

**Browser Settings:**

• **Chrome:** Settings → Privacy & Security → Cookies
• **Firefox:** Settings → Privacy & Security
• **Safari:** Preferences → Privacy
• **Edge:** Settings → Cookies and Site Permissions`,
  },
  {
    heading: "5. Impact of Disabling Cookies",
    content: `If you disable cookies:

• Some features of the website may not work properly
• Login sessions may not function correctly
• Preferences may not be saved
• Certain services may become unavailable`,
  },
  {
    heading: "6. Do Not Track (DNT)",
    content: `Some browsers allow you to send a "Do Not Track" signal.

BusyNotify respects such signals where technically feasible and may limit tracking or analytics accordingly.`,
  },
  {
    heading: "7. Updates to This Policy",
    content: `We may update this Cookie Policy from time to time.

Changes will be posted on this page with an updated "Last Updated" date.`,
  },
  {
    heading: "8. Contact Us",
    content: `If you have any questions about this Cookie Policy, please contact:

**M/S WILFORD TECHNOLOGY**
(Operating BusyNotify)

📧 Support Email: support@busynotify.in
📧 Privacy Email: privacy@busynotify.in
📞 Phone: +91 96698 23388
📍 Address: Madhya Pradesh Udyogik Vikas Nigam, GROUND, C21, RES-COMM, Indore Road Stadium Yojna, Nanakheda, Ujjain, Madhya Pradesh, 456010, India

---

By continuing to use our website, you agree to the use of cookies as described in this policy.`,
  },
];
