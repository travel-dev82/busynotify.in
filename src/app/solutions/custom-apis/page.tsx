import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomAPIsContent } from "./CustomAPIsContent";
import { customAPIsSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "BUSY API Integration | Access ERP Data via REST APIs for Developers - BusyNotify",
  description:
    "Integrate BUSY Accounting Software with websites, apps, and systems using REST APIs. Access customer, invoice, product, and ledger data in real-time. Free endpoints and custom query development available.",
  keywords: [
    "BUSY API integration",
    "BUSY ERP API",
    "BUSY data API",
    "BUSY software integration",
    "REST API BUSY",
    "ERP integration API",
    "accounting software API India",
    "connect BUSY to website",
    "BUSY to eCommerce integration",
    "BUSY API for developers",
    "BUSY database API",
    "fetch BUSY data programmatically",
    "BUSY customer API",
    "BUSY invoice API",
    "BUSY product API",
    "BUSY ledger API",
    "BUSY integration services",
    "accounting ERP API",
    "business data API India",
    "BUSY third-party integration",
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
    title: "BUSY API Integration | Access ERP Data via REST APIs for Developers",
    description:
      "Integrate BUSY Accounting Software with websites and apps using REST APIs. Access customer, invoice, product data in real-time.",
    images: [
      {
        url: "/og/custom-apis.png",
        width: 1200,
        height: 630,
        alt: "BUSY API Integration - REST APIs for BUSY ERP Data Access",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUSY API Integration | REST APIs for Developers",
    description:
      "Integrate BUSY Software with websites and apps using REST APIs. Real-time data access for developers.",
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
