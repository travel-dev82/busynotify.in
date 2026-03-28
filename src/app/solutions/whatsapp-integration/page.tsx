import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppIntegrationContent } from "./WhatsAppIntegrationContent";
import { whatsappIntegrationSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "WhatsApp Integration for Busy Accounting Software | Auto Voucher Delivery - BusyNotify",
  description:
    "Automatically send vouchers from Busy Accounting Software to customers via WhatsApp. Invoices, quotations, orders, receipts, credit notes, and all reports delivered instantly. WhatsApp Business API integration for Indian businesses.",
  keywords: [
    "Busy Accounting WhatsApp Integration",
    "WhatsApp for Busy Software",
    "Busy ERP WhatsApp API",
    "Auto Invoice WhatsApp",
    "Voucher WhatsApp Notification",
    "Busy Software WhatsApp Message",
    "WhatsApp Business Integration India",
    "Invoice Delivery WhatsApp",
    "Quotation WhatsApp Busy Software",
    "Sale Order WhatsApp Notification",
    "Payment Receipt WhatsApp",
    "Credit Note WhatsApp",
    "Debit Note WhatsApp Alert",
    "Stock Report WhatsApp",
    "Ledger WhatsApp Busy Software",
    "Bill by Bill Statement WhatsApp",
    "WhatsApp Business API India",
    "Accounting Software WhatsApp",
    "ERP WhatsApp Notification",
    "Auto Document Delivery WhatsApp",
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
    title: "WhatsApp Integration for Busy Accounting Software | Auto Voucher Delivery",
    description:
      "Automatically send vouchers from Busy Software to customers via WhatsApp. Invoices, quotations, orders, receipts - all delivered instantly.",
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
    title: "WhatsApp Integration for Busy Accounting Software",
    description:
      "Auto-send vouchers from Busy Software via WhatsApp. Invoices, quotations, orders, receipts - all delivered instantly.",
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
