import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LegalContent } from "../LegalContent";

export const metadata: Metadata = {
  title: "Terms of Service | BusyNotify - BUSY Software Automation Platform",
  description:
    "Terms of Service for BusyNotify (M/S WILFORD TECHNOLOGY). Read the terms and conditions governing your use of our BUSY Software automation services including WhatsApp integration, payment reminders, and API access.",
  keywords: [
    "BusyNotify Terms of Service",
    "BUSY Software Terms",
    "BUSY Automation Legal",
    "Indian SaaS Terms",
    "MSME Service Agreement",
    "M/S WILFORD TECHNOLOGY Terms",
  ],
  alternates: {
    canonical: "https://busynotify.in/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <LegalContent
        title="Terms of Service"
        lastUpdated="March 28, 2026"
        content={termsContent}
      />
      <Footer />
    </main>
  );
}

const termsContent = [
  {
    heading: "Introduction",
    content: `Welcome to BusyNotify (operated by **M/S WILFORD TECHNOLOGY**, a proprietorship). These Terms of Service ("Terms") govern your access to and use of our services, including all features, tools, and integrations provided by BusyNotify.

By using our services, you agree to these Terms. If you do not agree, please do not use BusyNotify.`,
  },
  {
    heading: "1. Description of Service",
    content: `BusyNotify provides automation and integration solutions for **BUSY Accounting Software**, including:

• WhatsApp and communication automation
• Payment reminder systems
• Reporting dashboards and analytics
• Google Sheets data synchronization
• API access and custom integrations
• CRM and follow-up systems
• LR & Transport tracking

Our services are designed to enhance business operations for Indian businesses using BUSY Software.`,
  },
  {
    heading: "2. User Accounts",
    content: `To use certain features, you must create an account.

You agree to:
• Provide accurate and complete information
• Maintain the confidentiality of your login credentials
• Be responsible for all activities under your account

BusyNotify reserves the right to suspend or terminate accounts that violate these Terms.`,
  },
  {
    heading: "3. Acceptable Use",
    content: `You agree **not** to use BusyNotify:

• For any illegal or unauthorized purpose
• To send spam, unsolicited, or misleading messages
• To misuse WhatsApp, SMS, or communication channels
• To attempt unauthorized access to systems or data
• To distribute harmful software (malware, viruses, etc.)

Violation may result in immediate suspension or termination.`,
  },
  {
    heading: "4. Third-Party Integrations",
    content: `BusyNotify integrates with third-party services such as:

• WhatsApp Business API providers
• Telegram
• Google Sheets and Google Drive
• Other APIs and tools

You agree to comply with the terms and policies of these third-party platforms. BusyNotify is not responsible for their service availability or policy changes.`,
  },
  {
    heading: "5. Data Access & Responsibility",
    content: `BusyNotify connects to your BUSY Accounting Software to process and automate data.

• **You retain full ownership of your data**
• You are responsible for ensuring proper permissions and data accuracy
• BusyNotify processes data only to deliver requested services`,
  },
  {
    heading: "6. Pricing & Payments",
    content: `• Paid services are billed as per selected plans
• Payment is due in advance for subscription-based services
• All fees are non-refundable unless otherwise stated
• Failure to pay may result in service suspension`,
  },
  {
    heading: "7. Service Availability",
    content: `We strive to provide reliable service, but we do not guarantee:

• Uninterrupted or error-free operation
• Compatibility with all third-party systems
• Continuous availability of integrations

Maintenance or updates may temporarily affect service availability.`,
  },
  {
    heading: "8. Intellectual Property",
    content: `All content, software, and technology used in BusyNotify are the property of M/S WILFORD TECHNOLOGY.

You may not:
• Copy, modify, or distribute our services
• Reverse engineer or attempt to extract source code`,
  },
  {
    heading: "9. Limitation of Liability",
    content: `BusyNotify shall not be liable for:

• Loss of profits, revenue, or business opportunities
• Data loss or system downtime
• Errors caused by third-party services

Our total liability is limited to the amount paid by you for the service.`,
  },
  {
    heading: "10. Termination",
    content: `We may suspend or terminate your access if:

• You violate these Terms
• You misuse the platform
• Payment obligations are not met

You may also discontinue use of the service at any time.`,
  },
  {
    heading: "11. Changes to Terms",
    content: `We may update these Terms periodically. Changes will be posted on this page with an updated date.

Continued use of the service means you accept the revised Terms.`,
  },
  {
    heading: "12. Governing Law & Jurisdiction",
    content: `These Terms are governed by the laws of **India**.

All disputes shall be subject to the jurisdiction of courts in **Ujjain, Madhya Pradesh, India**.

This business operates under the **Madhya Pradesh Goods and Services Tax Act, 2017**.`,
  },
  {
    heading: "13. Business Information",
    content: `**Trade Name:** M/S WILFORD TECHNOLOGY
**Business Type:** Proprietorship
**GST Registration Number:** 23DBQPA9343Q1Z1
**Date of Liability:** 12/03/2020`,
  },
  {
    heading: "14. Contact Us",
    content: `If you have any questions about these Terms, please contact:

**M/S WILFORD TECHNOLOGY**
(Operating BusyNotify)

📧 Support Email: support@busynotify.in
📧 Privacy Email: privacy@busynotify.in
📞 Phone: +91 96698 23388
📍 Address: Madhya Pradesh Udyogik Vikas Nigam, GROUND, C21, RES-COMM, Indore Road Stadium Yojna, Nanakheda, Ujjain, Madhya Pradesh, 456010, India

---

By using BusyNotify, you agree to these Terms of Service.`,
  },
];
