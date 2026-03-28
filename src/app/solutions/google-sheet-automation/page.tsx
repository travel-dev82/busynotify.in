import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GoogleSheetAutomationContent } from "./GoogleSheetAutomationContent";
import { googleSheetSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Busy Accounting Software Google Sheet Automation | Real-time Data Sync - BusyNotify",
  description:
    "Automate Busy Accounting Software data sync to Google Sheets. Pull-based updates every 10 minutes. Free data templates for customers, invoices, receipts, and products. Custom query support available.",
  keywords: [
    "Busy Accounting Software Google Sheet",
    "Busy ERP Google Sheet Automation",
    "Busy Software to Google Sheets",
    "ERP Data Sync Google Sheets",
    "Busy Accounting Export",
    "Google Sheet Integration Busy",
    "Automated Data Sync India",
    "Busy Software Reports Google Sheets",
    "Real-time ERP Data",
    "Accounting Software Automation",
    "Busy ERP Data Extraction",
    "Google Sheets Business Intelligence",
    "Busy Accounting Reports Automation",
    "Invoice Data Google Sheets",
    "Customer Data Sync",
    "Busy Software Query Management",
    "Custom ERP Reports",
    "Business Data Automation India",
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
    url: "https://busynotify.in/solutions/google-sheet-automation",
    siteName: "BusyNotify",
    title: "Busy Accounting Software Google Sheet Automation | Real-time Data Sync",
    description:
      "Automate Busy Software data sync to Google Sheets. Pull-based updates every 10 minutes. Free templates for customers, invoices, receipts, and products.",
    images: [
      {
        url: "/og/google-sheet-automation.png",
        width: 1200,
        height: 630,
        alt: "Busy Software Google Sheet Automation - Real-time Data Sync for Indian Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Busy Accounting Software Google Sheet Automation",
    description:
      "Automate Busy Software data sync to Google Sheets. Pull-based updates every 10 minutes with custom query support.",
    images: ["/og/google-sheet-automation.png"],
    creator: "@busynotify",
  },
  alternates: {
    canonical: "https://busynotify.in/solutions/google-sheet-automation",
  },
  other: {
    "application/ld+json": JSON.stringify(googleSheetSchemas),
  },
};

export default function GoogleSheetAutomationPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <GoogleSheetAutomationContent />
      <Footer />
    </main>
  );
}
