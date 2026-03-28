import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomerMapReportContent } from "./CustomerMapReportContent";
import { customerMapSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Customer Map Report | Google Maps Analytics Dashboard - BusyNotify",
  description:
    "Visualize your customer data across India with Google Maps-powered dashboard. State-wise and district-wise business analytics, outstanding payments mapping, and demand trend analysis for Busy Accounting Software users.",
  keywords: [
    "Customer Map Report",
    "Customer Location Analytics India",
    "Busy Software Customer Map",
    "State-wise Business Report",
    "District-wise Sales Analysis",
    "Customer Distribution Map",
    "Outstanding Payment Map",
    "Google Maps Business Dashboard",
    "Customer Analytics Dashboard",
    "Area-wise Sales Report",
    "Geographic Business Intelligence",
    "Customer Location Tracking",
    "Regional Sales Analysis India",
    "Demand Trend Analysis",
    "Product Sales by Region",
    "Customer Territory Mapping",
    "Business Heat Map",
    "ERP Customer Analytics",
    "Busy Accounting Analytics",
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
    title: "Customer Map Report | Google Maps Analytics Dashboard - BusyNotify",
    description:
      "Visualize customer data across India with Google Maps dashboard. State-wise analytics, outstanding payments mapping, and demand trends for Busy Software users.",
    images: [
      {
        url: "/og/customer-map-report.png",
        width: 1200,
        height: 630,
        alt: "Customer Map Report - Google Maps Analytics Dashboard for Indian Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Map Report | Google Maps Analytics Dashboard",
    description:
      "Visualize customer data across India with Google Maps dashboard. State-wise analytics and demand trends for Busy Software users.",
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
