import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GoogleSheetAutomationContent } from "./GoogleSheetAutomationContent";
import { googleSheetSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "BUSY to Google Sheets Integration | Automatic Data Sync & Reporting - BusyNotify",
  description:
    "Sync BUSY Accounting Software data to Google Sheets automatically. Export invoices, customers, stock, and reports in real-time. Build dashboards and share data easily without manual export.",
  keywords: [
    "BUSY to Google Sheets",
    "BUSY Google Sheets integration",
    "BUSY data export",
    "BUSY to Excel automation",
    "real-time reporting BUSY",
    "Google Sheets reporting BUSY",
    "data sync BUSY ERP",
    "business dashboard Google Sheets",
    "BUSY API alternative",
    "BUSY report automation",
    "BUSY accounting export",
    "sync BUSY to spreadsheet",
    "automated data export BUSY",
    "BUSY invoice data Google Sheets",
    "customer data sync BUSY",
    "stock report Google Sheets",
    "BUSY live dashboard",
    "BUSY data integration",
    "Google Sheets BI BUSY",
    "BUSY Looker Studio integration",
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
    title: "BUSY to Google Sheets Integration | Automatic Data Sync & Reporting",
    description:
      "Sync BUSY Accounting Software data to Google Sheets automatically. Export invoices, customers, stock, and reports in real-time. Build dashboards easily.",
    images: [
      {
        url: "/og/google-sheet-automation.png",
        width: 1200,
        height: 630,
        alt: "BUSY to Google Sheets Integration - Automatic Data Sync for Indian Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUSY to Google Sheets Integration | Auto Data Sync",
    description:
      "Sync BUSY data to Google Sheets automatically. Real-time reports, dashboards, and team sharing without manual export.",
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
