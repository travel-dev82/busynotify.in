import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CreditLineSenderContent } from "./CreditLineSenderContent";
import { creditLineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Credit Line Sender | Smart Credit Limit & Due Days Reminder System - BusyNotify",
  description:
    "Intelligent credit management system for Busy Accounting Software. Auto-remind customers who exceed credit limits or credit days. Track credit breaches at customer level and ensure timely recoveries.",
  keywords: [
    "Credit Line Sender",
    "Credit Limit Reminder India",
    "Credit Days Tracking",
    "Busy Software Credit Management",
    "Due Days Reminder System",
    "Credit Limit Alert",
    "ERP Credit Control",
    "Accounts Receivable Reminder",
    "Credit Breach Notification",
    "Customer Credit Monitoring",
    "Busy ERP Credit System",
    "Auto Credit Reminder",
    "Payment Collection System",
    "Credit Control Software India",
    "Outstanding Management",
    "Credit Policy Enforcement",
    "Smart Due Reminder",
    "Credit Limit Exceeded Alert",
    "Business Credit Tracking",
    "Invoice Due Reminder",
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
    url: "https://busynotify.in/solutions/credit-line-sender",
    siteName: "BusyNotify",
    title: "Credit Line Sender | Smart Credit Limit & Due Days Reminder System",
    description:
      "Intelligent credit management for Busy Software. Auto-remind customers who exceed credit limits or credit days. Ensure timely recoveries with smart tracking.",
    images: [
      {
        url: "/og/credit-line-sender.png",
        width: 1200,
        height: 630,
        alt: "Credit Line Sender - Smart Credit Management for Indian Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Credit Line Sender | Smart Credit Limit & Due Days Reminder",
    description:
      "Intelligent credit management for Busy Software. Auto-remind customers who exceed credit limits or due days.",
    images: ["/og/credit-line-sender.png"],
    creator: "@busynotify",
  },
  alternates: {
    canonical: "https://busynotify.in/solutions/credit-line-sender",
  },
  other: {
    "application/ld+json": JSON.stringify(creditLineSchemas),
  },
};

export default function CreditLineSenderPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <CreditLineSenderContent />
      <Footer />
    </main>
  );
}
