import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ReportingDashboardContent } from "./ReportingDashboardContent";
import { reportingDashboardSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "BUSY Reports Dashboard for Mobile & Online Access | BusyNotify",
  description:
    "Access BUSY Accounting Software reports online via mobile dashboard and PWA. View ledger, outstanding, sales, purchase, and stock reports anytime. Built for business owners, sales teams, and accountants. Works with BUSY 17/18/21.",
  keywords: [
    "BUSY reports online",
    "BUSY software reports on mobile",
    "access BUSY data online",
    "BUSY cloud reports",
    "BUSY ledger online",
    "BUSY outstanding report mobile",
    "BUSY dashboard mobile",
    "BUSY remote access reports",
    "BUSY reports app",
    "BUSY PWA",
    "BUSY reports for salesman",
    "BUSY data access for field staff",
    "BUSY owner dashboard",
    "BUSY reports for accountant",
    "view BUSY ledger online",
    "check BUSY outstanding report",
    "BUSY sales report mobile",
    "BUSY stock report online",
    "BUSY Accounting Software reports",
    "BUSY ERP dashboard",
    "accounting reports India",
    "sales register report BUSY",
    "purchase register report",
    "bills receivable report BUSY",
    "sales order tracking BUSY",
    "receipt register BUSY",
    "payment register",
    "business dashboard India",
    "PWA for accounting",
    "salesman management BUSY",
    "customer revisit tracking",
    "sales analytics dashboard",
    "ERP reports online",
    "real-time business reports",
    "BUSY software PWA",
    "mobile reports dashboard",
    "24/7 report access",
    "BUSY multi-user reports",
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
    title: "BUSY Reports Dashboard for Mobile & Online Access",
    description:
      "Access BUSY Accounting Software reports online via mobile dashboard and PWA. View ledger, outstanding, sales, purchase, and stock reports anytime. Built for business owners, sales teams, and accountants.",
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
    title: "BUSY Reports Dashboard for Mobile & Online Access",
    description:
      "Access BUSY Accounting Software reports online via mobile dashboard and PWA. View ledger, outstanding, sales reports anytime.",
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
