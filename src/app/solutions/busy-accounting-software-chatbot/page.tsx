import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionsContent } from "./SolutionsContent";
import { allSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Busy Software WhatsApp Integration | Send Invoices & Ledger via Chatbot India - BusyNotify",
  description:
    "Automate Busy Accounting Software with WhatsApp chatbot. Send invoices, ledger, balance & receipts instantly. Best Busy ERP automation solution for Indian businesses. Works with Busy 17, 18, 21.",
  keywords: [
    "busy software whatsapp integration",
    "busy whatsapp api",
    "busy accounting software automation",
    "busy erp chatbot",
    "busy software customer portal",
    "busy software api integration",
    "send invoice on whatsapp busy software",
    "busy software ledger on whatsapp",
    "accounting chatbot for whatsapp india",
    "whatsapp bot for accounting software india",
    "how to send invoice from busy software to whatsapp",
    "how to automate busy accounting queries",
    "busy software customer self service system",
    "busy accounting software chatbot india",
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
    "busy accounting software whatsapp",
    "busy software automated messaging",
    "busy erp whatsapp integration india",
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
    title: "Busy Software WhatsApp Integration | Send Invoices & Ledger via Chatbot India",
    description:
      "Automate Busy Accounting Software with WhatsApp chatbot. Send invoices, ledger, balance & receipts instantly to customers. Best Busy ERP automation solution.",
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
    title: "Busy Software WhatsApp Integration | Send Invoices & Ledger via Chatbot",
    description:
      "Automate Busy Accounting Software with WhatsApp chatbot. Send invoices, ledger, balance & receipts instantly to customers.",
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
