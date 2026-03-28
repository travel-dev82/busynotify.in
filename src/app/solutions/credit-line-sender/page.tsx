import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CreditLineSenderContent } from "./CreditLineSenderContent";
import { creditLineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "BUSY Credit Limit & Overdue Reminder System | Automated Credit Control - BusyNotify",
  description:
    "Track credit limits and overdue payments in BUSY Accounting Software. Send automatic reminders when customers exceed limits or due dates. Improve cash flow with automated credit control system.",
  keywords: [
    "credit control system",
    "credit limit alert",
    "overdue payment reminder",
    "payment due tracking",
    "credit monitoring software",
    "outstanding limit alert",
    "due days reminder",
    "BUSY credit limit control",
    "automated credit monitoring",
    "payment overdue alert system",
    "customer credit management",
    "credit policy enforcement",
    "outstanding tracking software",
    "BUSY credit control",
    "credit limit monitoring India",
    "accounts receivable reminder",
    "invoice due reminder",
    "credit breach notification",
    "payment collection system",
    "credit management software India",
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
    title: "BUSY Credit Limit & Overdue Reminder System | Automated Credit Control",
    description:
      "Track credit limits and overdue payments in BUSY. Send automatic reminders when customers exceed limits or due dates. Improve cash flow.",
    images: [
      {
        url: "/og/credit-line-sender.png",
        width: 1200,
        height: 630,
        alt: "Credit Control & Overdue Payment Reminder System for BUSY Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUSY Credit Limit & Overdue Reminder System",
    description:
      "Track credit limits and overdue payments in BUSY. Automatic reminders when customers exceed limits or due dates.",
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
