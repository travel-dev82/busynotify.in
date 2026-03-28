import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalContent } from "../LegalContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for BusyNotify - How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <LegalContent
        title="Privacy Policy"
        lastUpdated="March 15, 2026"
        content={privacyContent}
      />
      <Footer />
    </main>
  );
}

const privacyContent = [
  {
    heading: "1. Information We Collect",
    content: `We collect information you provide directly to us, including:
• Account information (name, email, company name)
• Billing information (payment method, billing address)
• Communication data (messages you send to us)
• Notification content and delivery data
• Usage data and analytics

We also collect information automatically:
• Log data (IP address, browser type, pages visited)
• Device information
• Cookies and similar technologies`,
  },
  {
    heading: "2. How We Use Your Information",
    content: `We use the information we collect to:
• Provide, maintain, and improve our Service
• Process transactions and send related information
• Send technical notices, updates, and administrative messages
• Respond to your comments, questions, and requests
• Monitor and analyze trends, usage, and activities
• Detect, investigate, and prevent fraudulent transactions and other illegal activities
• Personalize and improve the Service`,
  },
  {
    heading: "3. Information Sharing",
    content: `We do not sell your personal information. We share information only in the following circumstances:

• With service providers who perform services on our behalf
• To comply with legal obligations
• To protect our rights, privacy, safety, or property
• In connection with a merger, acquisition, or sale of assets
• With your consent`,
  },
  {
    heading: "4. Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

These measures include:
• Encryption of data in transit and at rest
• Regular security assessments
• Access controls and authentication
• Employee training and awareness

However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    heading: "5. Data Retention",
    content: `We retain your personal information for as long as necessary to provide the Service and fulfill the purposes outlined in this Privacy Policy.

When you delete your account, we will delete or anonymize your information within 30 days, except where retention is required by law.`,
  },
  {
    heading: "6. Your Rights",
    content: `You have the right to:
• Access your personal information
• Correct inaccurate data
• Delete your data
• Object to processing
• Data portability
• Withdraw consent

To exercise these rights, please contact us at privacy@busynotify.in.`,
  },
  {
    heading: "7. Cookies",
    content: `We use cookies and similar technologies to:
• Remember your preferences
• Understand how you use our Service
• Improve our Service
• Provide relevant content

You can manage cookie preferences through your browser settings. See our Cookie Policy for more details.`,
  },
  {
    heading: "8. Third-Party Services",
    content: `Our Service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties.

We encourage you to read the privacy policies of any third-party services you access.`,
  },
  {
    heading: "9. International Transfers",
    content: `Your information may be transferred to and processed in countries other than your country of residence.

We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.`,
  },
  {
    heading: "10. Changes to Privacy Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.

We encourage you to review this Privacy Policy periodically.`,
  },
  {
    heading: "11. Contact Us",
    content: `If you have questions about this Privacy Policy, please contact us at:

Email: privacy@busynotify.in
Address: BusyNotify Technologies Pvt. Ltd., Bangalore, India`,
  },
];
