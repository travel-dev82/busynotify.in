import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransportationSlipContent } from "./TransportationSlipContent";
import { transportationSlipSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Transportation Slip Management System | Busy Accounting Software Integration - BusyNotify",
  description:
    "Manage transportation slips digitally with BusyNotify. Upload transport challans to Google Drive, let customers access slips via PWA or chatbot. Perfect for Indian businesses using Busy Accounting Software for logistics tracking.",
  keywords: [
    "Transportation Slip Management",
    "Transport Challan Management India",
    "Busy Software Transport Slip",
    "LR Copy Management",
    "Delivery Challan System",
    "Goods Transport Documentation",
    "Logistics Slip Upload",
    "Google Drive Transport Slips",
    "Transport Document Management",
    "Busy Accounting Transport",
    "Challan Upload System",
    "Transport Slip PWA",
    "Customer Transport Tracking",
    "Invoice Transport Slip India",
    "Bill-wise Transport Details",
    "Transporter Details System",
    "Shipping Document Management",
    "Transport Paperwork Automation",
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
    url: "https://busynotify.in/solutions/transportation-slip-management",
    siteName: "BusyNotify",
    title: "Transportation Slip Management System | Digital Transport Challan - BusyNotify",
    description:
      "Upload transportation slips to Google Drive automatically. Customers access transport details via PWA or chatbot. Perfect for Indian businesses using Busy Accounting Software.",
    images: [
      {
        url: "/og/transportation-slip-management.png",
        width: 1200,
        height: 630,
        alt: "Transportation Slip Management - Digital Transport Challan System for Indian Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transportation Slip Management System | Digital Transport Challan",
    description:
      "Upload transportation slips to Google Drive. Customers access transport details via PWA or chatbot. Perfect for Indian logistics businesses.",
    images: ["/og/transportation-slip-management.png"],
    creator: "@busynotify",
  },
  alternates: {
    canonical: "https://busynotify.in/solutions/transportation-slip-management",
  },
  other: {
    "application/ld+json": JSON.stringify(transportationSlipSchemas),
  },
};

export default function TransportationSlipManagementPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <TransportationSlipContent />
      <Footer />
    </main>
  );
}
