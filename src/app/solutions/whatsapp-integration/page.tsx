import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppIntegrationContent } from "./WhatsAppIntegrationContent";
import { whatsappIntegrationSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "BUSY WhatsApp Integration for Invoices, Ledgers & Reports | BusyNotify",
  description:
    "Automate WhatsApp delivery of GST invoices, vouchers, ledgers, payment reminders and reports from BUSY Accounting Software. Built for Indian businesses and accountants. Works with BUSY 17/18/21.",
  keywords: [
    "BUSY WhatsApp integration",
    "BUSY accounting software WhatsApp integration",
    "BUSY software WhatsApp integration",
    "send invoice on WhatsApp from BUSY",
    "BUSY invoice WhatsApp",
    "BUSY ledger WhatsApp",
    "BUSY reports on WhatsApp",
    "BUSY WhatsApp add-on",
    "BUSY WhatsApp API",
    "BUSY payment reminder WhatsApp",
    "BUSY GST invoice WhatsApp",
    "BUSY voucher WhatsApp",
    "BUSY statement on WhatsApp",
    "automate invoice sending in BUSY",
    "BUSY invoice PDF on WhatsApp",
    "BUSY accounting add-on India",
    "BUSY WhatsApp integration for Indian businesses",
    "send GST invoice from BUSY to WhatsApp",
    "BUSY ledger statement WhatsApp",
    "BUSY outstanding report WhatsApp",
    "BUSY payment reminder automation",
    "BUSY credit note WhatsApp",
    "BUSY debit note WhatsApp",
    "BUSY delivery challan WhatsApp",
    "WhatsApp Business API for BUSY",
    "BUSY invoice automation India",
    "BUSY WhatsApp integration for CAs",
    "BUSY WhatsApp integration for distributors",
    "BUSY WhatsApp integration for wholesalers",
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
    url: "https://busynotify.in/solutions/whatsapp-integration",
    siteName: "BusyNotify",
    title: "BUSY WhatsApp Integration for Invoices, Ledgers & Reports",
    description:
      "Automate WhatsApp delivery of GST invoices, vouchers, ledgers, payment reminders and reports from BUSY Accounting Software. Built for Indian businesses.",
    images: [
      {
        url: "/og/whatsapp-integration.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp Integration for Busy Accounting Software - Auto Voucher Delivery for Indian Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUSY WhatsApp Integration for Invoices, Ledgers & Reports",
    description:
      "Automate WhatsApp delivery of GST invoices, vouchers, ledgers, payment reminders and reports from BUSY Accounting Software.",
    images: ["/og/whatsapp-integration.png"],
    creator: "@busynotify",
  },
  alternates: {
    canonical: "https://busynotify.in/solutions/whatsapp-integration",
  },
  other: {
    "application/ld+json": JSON.stringify(whatsappIntegrationSchemas),
  },
};

export default function WhatsAppIntegrationPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <WhatsAppIntegrationContent />
      <Footer />
    </main>
  );
}
