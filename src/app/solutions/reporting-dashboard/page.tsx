import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ReportingDashboardContent } from "./ReportingDashboardContent";
import { reportingDashboardSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Reporting Dashboard & PWA | Busy Accounting Software Reports - BusyNotify",
  description:
    "Comprehensive reporting dashboard and PWA for Busy Accounting Software. Access ledger, sales register, purchase reports, bills receivable, and 15+ reports 24/7. Create multiple salesmen and track business performance in real-time.",
  keywords: [
    "Busy Accounting Software Reports",
    "Busy ERP Dashboard",
    "Accounting Reports India",
    "Sales Register Report",
    "Purchase Register Report",
    "Ledger Report Busy Software",
    "Bills Receivable Report",
    "Sales Order Tracking",
    "Purchase Order Report",
    "Receipt Register",
    "Payment Register",
    "Material Issue Report",
    "Material Receipt Report",
    "Business Dashboard India",
    "PWA for Accounting",
    "Salesman Management",
    "Customer Revisit Tracking",
    "Sales Analytics Dashboard",
    "ERP Reports Online",
    "Real-time Business Reports",
    "Busy Software PWA",
    "Mobile Reports Dashboard",
    "24/7 Report Access",
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
    url: "https://busynotify.in/solutions/reporting-dashboard",
    siteName: "BusyNotify",
    title: "Reporting Dashboard & PWA | Busy Accounting Software Reports",
    description:
      "Comprehensive reporting dashboard and PWA for Busy Software. Access 15+ reports 24/7. Create multiple salesmen and track business performance.",
    images: [
      {
        url: "/og/reporting-dashboard.png",
        width: 1200,
        height: 630,
        alt: "Reporting Dashboard for Busy Accounting Software - Comprehensive Business Reports",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reporting Dashboard & PWA | Busy Accounting Software Reports",
    description:
      "Comprehensive reporting dashboard for Busy Software. Access 15+ reports 24/7. Create multiple salesmen.",
    images: ["/og/reporting-dashboard.png"],
    creator: "@busynotify",
  },
  alternates: {
    canonical: "https://busynotify.in/solutions/reporting-dashboard",
  },
  other: {
    "application/ld+json": JSON.stringify(reportingDashboardSchemas),
  },
};

export default function ReportingDashboardPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <ReportingDashboardContent />
      <Footer />
    </main>
  );
}
