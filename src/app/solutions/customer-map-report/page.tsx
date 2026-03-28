import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomerMapReportContent } from "./CustomerMapReportContent";
import { customerMapSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "BUSY Sales Territory & Customer Map Dashboard | Location-Based Analytics - BusyNotify",
  description:
    "Analyze sales, customers, and outstanding payments by location using a Google Maps dashboard integrated with BUSY Accounting Software. State-wise, district-wise analytics for smarter business decisions.",
  keywords: [
    "sales territory management software",
    "customer location tracking software",
    "sales map dashboard",
    "business analytics dashboard India",
    "customer distribution analysis",
    "region-wise sales report",
    "territory planning software",
    "sales analytics by location",
    "outstanding by region",
    "BUSY sales analysis",
    "geographic sales analysis",
    "customer mapping software",
    "sales territory dashboard",
    "location-based analytics India",
    "state-wise business report",
    "district-wise sales analysis",
    "sales territory mapping",
    "geographic business intelligence",
    "BUSY customer analytics",
    "regional sales dashboard",
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
    url: "https://busynotify.in/solutions/customer-map-report",
    siteName: "BusyNotify",
    title: "BUSY Sales Territory & Customer Map Dashboard | Location-Based Analytics",
    description:
      "Visualize customers, sales, and outstanding payments by location. Google Maps dashboard integrated with BUSY for geographic business analytics.",
    images: [
      {
        url: "/og/customer-map-report.png",
        width: 1200,
        height: 630,
        alt: "Sales Territory & Customer Map Dashboard for BUSY Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUSY Sales Territory & Customer Map Dashboard",
    description:
      "Visualize customers, sales, and outstanding by location. Google Maps dashboard for BUSY users.",
    images: ["/og/customer-map-report.png"],
    creator: "@busynotify",
  },
  alternates: {
    canonical: "https://busynotify.in/solutions/customer-map-report",
  },
  other: {
    "application/ld+json": JSON.stringify(customerMapSchemas),
  },
};

export default function CustomerMapReportPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <CustomerMapReportContent />
      <Footer />
    </main>
  );
}
