import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PaymentReminderContent } from "./PaymentReminderContent";

export const metadata: Metadata = {
  title: "BUSY Payment Reminder System | WhatsApp & SMS Collection Software India",
  description:
    "Automate payment reminders from BUSY Accounting Software via WhatsApp and SMS. Send outstanding, bill-wise details, and improve collections for Indian businesses. Works with BUSY 17/18/21.",
  keywords: [
    "BUSY payment reminder",
    "payment reminder software India",
    "WhatsApp payment reminder system",
    "outstanding reminder system",
    "invoice reminder WhatsApp",
    "BUSY outstanding reminder",
    "automated collection system",
    "payment follow-up automation",
    "BUSY payment collection software",
    "WhatsApp payment reminder for BUSY",
    "SMS payment reminder India",
    "bill reminder software",
    "invoice reminder system",
    "customer payment reminder",
    "account receivable reminder",
    "due amount reminder system",
    "debtor management India",
    "BUSY accounting reminder",
    "payment reminder for distributors",
    "payment reminder for wholesalers",
    "automated payment follow up",
    "BUSY credit control",
    "outstanding collection software",
    "payment reminder message",
    "WhatsApp reminder format",
    "BUSY ERP payment collection",
    "automated payment collection India",
  ],
  authors: [{ name: "BusyNotify Team" }],
  creator: "BusyNotify",
  publisher: "BusyNotify",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://busynotify.in/solutions/payment-reminder-system",
    siteName: "BusyNotify",
    title: "BUSY Payment Reminder System | WhatsApp & SMS Collection Software",
    description:
      "Automate payment reminders from BUSY Accounting Software via WhatsApp and SMS. Send outstanding, bill-wise details, and improve collections for Indian businesses.",
    images: [
      {
        url: "/og/payment-reminder-system.png",
        width: 1200,
        height: 630,
        alt: "Payment Reminder System for Busy Software - Automated Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUSY Payment Reminder System | WhatsApp & SMS Collection",
    description:
      "Automate payment reminders from BUSY via WhatsApp and SMS. Improve collections for Indian businesses.",
    images: ["/og/payment-reminder-system.png"],
    creator: "@busynotify",
  },
  alternates: {
    canonical: "https://busynotify.in/solutions/payment-reminder-system",
  },
  other: {
    "application/ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "BusyNotify Payment Reminder System",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, WhatsApp, SMS",
        description:
          "Automated payment reminder system integrated with Busy Accounting Software. Send customizable reminders via WhatsApp and SMS.",
        offers: {
          "@type": "Offer",
          price: "500",
          priceCurrency: "INR",
        },
        featureList: [
          "Daily/Weekly/Monthly Reminders",
          "Bill-by-Bill Statements",
          "Ledger-Based Reminders",
          "Customer Group Mapping",
          "Custom Message Templates",
          "Testing Mode",
          "Account Number Integration",
          "24/7 Uptime",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How does the payment reminder system work with Busy Software?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our system connects directly to your Busy Accounting Software database, reads customer outstanding data, and sends automated reminders via WhatsApp or SMS based on your configured schedule.",
            },
          },
          {
            "@type": "Question",
            name: "Can I customize reminder schedules?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, you can set reminders daily, weekly, monthly, or on specific days. You can also configure multiple reminders for the same customer.",
            },
          },
        ],
      },
    ]),
  },
};

export default function PaymentReminderPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <PaymentReminderContent />
      <Footer />
    </main>
  );
}
