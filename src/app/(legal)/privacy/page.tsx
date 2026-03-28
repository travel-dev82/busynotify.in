import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalContent } from "../LegalContent";

export const metadata: Metadata = {
  title: "Privacy Policy | BusyNotify - BUSY Software Automation Platform",
  description:
    "Privacy Policy for BusyNotify. Learn how we collect, use, store, and protect your information when you use our BUSY Software automation services.",
  keywords: [
    "BusyNotify Privacy Policy",
    "BUSY Software Data Privacy",
    "BUSY Automation Privacy",
    "Indian Business Data Protection",
    "MSME Data Security",
  ],
  alternates: {
    canonical: "https://busynotify.in/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <LegalContent
        title="Privacy Policy"
        lastUpdated="March 28, 2026"
        content={privacyContent}
      />
      <Footer />
    </main>
  );
}

const privacyContent = [
  {
    heading: "Introduction",
    content: `BusyNotify ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use our services.`,
  },
  {
    heading: "1. Information We Collect",
    content: `We may collect the following types of information:

**a) Information You Provide**
• Name, email address, phone number
• Company name and business details
• Account login credentials
• Support queries and communication

**b) Business & System Data**
• BUSY Accounting Software data (only for processing and automation)
• Invoice, customer, ledger, and transaction data (as required by services)
• Notification logs (WhatsApp, SMS, chatbot interactions)

**c) Automatically Collected Data**
• IP address and browser type
• Device information
• Usage logs and analytics
• Cookies and tracking data`,
  },
  {
    heading: "2. How We Use Your Information",
    content: `We use your data to:

• Provide and operate BusyNotify services
• Automate WhatsApp messages, reminders, and reports
• Sync data with Google Sheets, APIs, and dashboards
• Improve system performance and user experience
• Provide customer support
• Send service-related notifications and updates
• Ensure security and prevent fraud`,
  },
  {
    heading: "3. Data Storage & Security",
    content: `We prioritize data security:

• Data encryption (in transit and at rest)
• Secure authentication and access control
• Regular monitoring and security checks

🔒 **Important:**
Your BUSY Accounting data remains on your system/server wherever possible. BusyNotify only processes data required for automation and integrations.`,
  },
  {
    heading: "4. Information Sharing",
    content: `We **do not sell your personal or business data**.

We may share data only in these cases:

• With trusted service providers (hosting, messaging APIs, etc.)
• To comply with legal obligations
• To protect our rights, security, or users
• With your explicit consent`,
  },
  {
    heading: "5. Third-Party Integrations",
    content: `BusyNotify integrates with third-party services such as:

• WhatsApp Business API providers
• Telegram
• Google Sheets
• Google Drive
• Other APIs and platforms

These services have their own privacy policies, and we recommend reviewing them.`,
  },
  {
    heading: "6. Data Retention",
    content: `We retain data only as long as necessary:

• Active account data is retained during service usage
• Data is deleted or anonymized within **30 days after account closure**, unless required by law`,
  },
  {
    heading: "7. Your Rights",
    content: `You have the right to:

• Access your personal data
• Request correction of inaccurate data
• Request deletion of your data
• Withdraw consent for data processing
• Request data portability

To exercise these rights, contact us at:
📧 privacy@busynotify.in`,
  },
  {
    heading: "8. Cookies & Tracking",
    content: `We use cookies to:

• Improve user experience
• Analyze usage and performance
• Remember preferences

You can disable cookies through your browser settings.`,
  },
  {
    heading: "9. Data Security Disclaimer",
    content: `While we implement strong security measures, no system is completely secure. Users are responsible for maintaining the confidentiality of their account credentials.`,
  },
  {
    heading: "10. Changes to This Policy",
    content: `We may update this Privacy Policy periodically. Updates will be posted on this page with a revised "Last Updated" date.`,
  },
  {
    heading: "11. Contact Us",
    content: `If you have any questions regarding this Privacy Policy, please contact:

**BusyNotify**
📧 Email: privacy@busynotify.in
📞 Phone: +91 96698 23388
📍 Address: 131, C21 Mall, Ujjain, Madhya Pradesh, India`,
  },
  {
    heading: "12. Compliance",
    content: `This Privacy Policy is designed to comply with applicable data protection laws in India and general global best practices.

By using BusyNotify, you agree to the terms outlined in this Privacy Policy.`,
  },
];
