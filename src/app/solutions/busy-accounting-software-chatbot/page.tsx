import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionsContent } from "./SolutionsContent";
import { allSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Busy Accounting Software Chatbot | AI-Powered ERP Chatbot India - BusyNotify",
  description:
    "Automate your Busy Accounting Software with AI chatbot. 24/7 customer support for balance inquiries, ledgers, invoices, payment receipts & more. Best ERP chatbot solution for Indian businesses using Busy 17, 18, 21.",
  keywords: [
    "Busy Accounting Software Chatbot",
    "Busy ERP Chatbot",
    "Busy Software Chatbot India",
    "ERP Chatbot for Busy Accounting",
    "Automated Accounting Chatbot",
    "Busy Software WhatsApp Bot",
    "Accounting Automation India",
    "Busy ERP Automation",
    "Customer Support Chatbot for Busy",
    "Invoice Chatbot India",
    "Ledger Bot for Busy Software",
    "Busy Accounting Integration",
    "AI Chatbot for Chartered Accountants",
    "Busy Software Customer Query Bot",
    "ERP Chatbot Provider India",
    "WhatsApp Chatbot for Busy Software",
    "Telegram Bot for Busy ERP",
    "Balance Inquiry Chatbot",
    "Pending Order Status Chatbot",
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
    url: "https://busynotify.in/solutions/busy-accounting-software-chatbot",
    siteName: "BusyNotify",
    title: "Busy Accounting Software Chatbot | AI-Powered ERP Chatbot India",
    description:
      "Automate your Busy Accounting Software with AI chatbot. 24/7 customer support for balance inquiries, ledgers, invoices, payment receipts & more. Works with Busy 17, 18, 21.",
    images: [
      {
        url: "/og/busy-erp-chatbot.png",
        width: 1200,
        height: 630,
        alt: "Busy ERP Chatbot - AI-Powered Accounting Automation for Indian Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Busy Accounting Software Chatbot | AI-Powered ERP Chatbot",
    description:
      "Automate your Busy Accounting Software with AI chatbot. 24/7 customer support for balance inquiries, ledgers, invoices & more.",
    images: ["/og/busy-erp-chatbot.png"],
    creator: "@busynotify",
  },
  alternates: {
    canonical: "https://busynotify.in/solutions/busy-accounting-software-chatbot",
  },
  other: {
    "application/ld+json": JSON.stringify(allSchemas),
  },
};

export default function BusyAccountingChatbotPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <SolutionsContent />
      <Footer />
    </main>
  );
}
