import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalContent } from "../LegalContent";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for BusyNotify - Your agreement with our notification infrastructure service.",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <LegalContent
        title="Terms of Service"
        lastUpdated="March 15, 2026"
        content={termsContent}
      />
      <Footer />
    </main>
  );
}

const termsContent = [
  {
    heading: "1. Acceptance of Terms",
    content: `By accessing and using BusyNotify ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Service.

These Terms of Service apply to all users of the Service, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.`,
  },
  {
    heading: "2. Description of Service",
    content: `BusyNotify provides AI-powered notification infrastructure services that enable businesses to send, manage, and optimize notifications across multiple channels including but not limited to email, SMS, Slack, Microsoft Teams, and webhooks.

Our Service includes:
• Multi-channel notification delivery
• Intelligent routing and prioritization
• Real-time analytics and monitoring
• API access and integrations
• Team collaboration features`,
  },
  {
    heading: "3. User Accounts",
    content: `You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password.

You must provide accurate, complete, and current information during the registration process and update such information to keep it accurate, complete, and current.

We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders at our sole discretion.`,
  },
  {
    heading: "4. Acceptable Use",
    content: `You agree not to use the Service:
• For any unlawful purpose or in violation of any laws
• To send spam, unsolicited messages, or fraudulent communications
• To distribute viruses, malware, or any harmful code
• To interfere with or disrupt the Service or servers
• To attempt to gain unauthorized access to any portion of the Service
• To impersonate any person or entity

Violation of these acceptable use policies may result in immediate termination of your account.`,
  },
  {
    heading: "5. Pricing and Payment",
    content: `BusyNotify offers various pricing plans as detailed on our pricing page. By selecting a paid plan, you agree to pay the applicable fees.

Payment is due at the beginning of each billing cycle. We accept major credit cards and other payment methods as displayed during checkout.

All fees are non-refundable except as expressly stated in these Terms or as required by law.`,
  },
  {
    heading: "6. Intellectual Property",
    content: `The Service and its original content, features, and functionality are owned by BusyNotify and are protected by international copyright, trademark, and other intellectual property laws.

Our trademarks and trade dress may not be used without our prior written consent.`,
  },
  {
    heading: "7. Limitation of Liability",
    content: `In no event shall BusyNotify, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.

Our total liability for any claim arising from the Service shall not exceed the amount paid by you for the Service in the twelve months preceding the claim.`,
  },
  {
    heading: "8. Changes to Terms",
    content: `We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last Updated" date.

Your continued use of the Service after any changes constitutes acceptance of the new Terms.`,
  },
  {
    heading: "9. Contact Us",
    content: `If you have any questions about these Terms, please contact us at:

Email: legal@busynotify.in
Address: BusyNotify Technologies Pvt. Ltd., Bangalore, India`,
  },
];
