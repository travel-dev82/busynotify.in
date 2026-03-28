import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomAPIsContent } from "./CustomAPIsContent";
import { customAPIsSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Custom APIs for Busy Accounting Software | ERP Data Integration - BusyNotify",
  description:
    "Access Busy Accounting Software data through powerful APIs. Free endpoints for customers, bills, products, and ledgers. Custom query development for specific business needs. Build your own integrations.",
  keywords: [
    "Busy Accounting Software API",
    "Busy ERP API Integration",
    "Custom API for Busy Software",
    "ERP Data API India",
    "Accounting Software API",
    "Busy Software Data Extraction",
    "REST API for Busy ERP",
    "Custom ERP Integration",
    "Busy Accounting Integration",
    "Business Data API",
    "Accounting Data API",
    "Invoice API India",
    "Customer Data API",
    "Ledger API Busy Software",
    "Product Information API",
    "Custom Query Development",
    "ERP Customization India",
    "Software Integration Services",
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
    url: "https://busynotify.in/solutions/custom-apis",
    siteName: "BusyNotify",
    title: "Custom APIs for Busy Accounting Software | ERP Data Integration",
    description:
      "Access Busy Software data through powerful APIs. Free endpoints for customers, bills, products, and ledgers. Custom query development available.",
    images: [
      {
        url: "/og/custom-apis.png",
        width: 1200,
        height: 630,
        alt: "Custom APIs for Busy Accounting Software - ERP Data Integration for Indian Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom APIs for Busy Accounting Software | ERP Data Integration",
    description:
      "Access Busy Software data through APIs. Free endpoints for customers, bills, products. Custom query development available.",
    images: ["/og/custom-apis.png"],
    creator: "@busynotify",
  },
  alternates: {
    canonical: "https://busynotify.in/solutions/custom-apis",
  },
  other: {
    "application/ld+json": JSON.stringify(customAPIsSchemas),
  },
};

export default function CustomAPIsPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <CustomAPIsContent />
      <Footer />
    </main>
  );
}
