import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DueFollowUpContent } from "./DueFollowUpContent";

export const metadata: Metadata = {
  title: "BUSY Payment Follow-up & Collection Management System | Telecaller CRM",
  description:
    "Manage payment follow-ups, track customer promises, and improve collections from BUSY Accounting Software. Built for telecallers and collection teams in India. CRM for outstanding tracking and recovery management.",
  keywords: [
    "payment follow up software",
    "collection management system",
    "outstanding follow up system",
    "customer follow up software",
    "payment collection CRM",
    "call reminder system for collections",
    "recovery management system",
    "debt collection software India",
    "follow up CRM",
    "telecaller CRM",
    "outstanding tracking system",
    "BUSY payment follow up",
    "BUSY collection management",
    "payment recovery software India",
    "telecaller dashboard",
    "customer promise tracking",
    "accounts receivable follow up",
    "collection team software",
    "debt collection CRM India",
    "outstanding management system",
    "payment reminder for telecallers",
    "BUSY outstanding tracking",
    "collection CRM for distributors",
    "follow up management software",
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
    url: "https://busynotify.in/solutions/due-follow-up-system",
    siteName: "BusyNotify",
    title: "BUSY Payment Follow-up & Collection Management System | Telecaller CRM",
    description:
      "Manage payment follow-ups, track customer promises, and improve collections from BUSY Accounting Software. Built for telecallers and collection teams in India.",
    images: [
      {
        url: "/og/due-follow-up-system.png",
        width: 1200,
        height: 630,
        alt: "Due Follow-up System for Busy Software - Telecaller Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BUSY Payment Follow-up & Collection Management | Telecaller CRM",
    description:
      "Manage payment follow-ups, track customer promises, and improve collections from BUSY Software.",
    images: ["/og/due-follow-up-system.png"],
    creator: "@busynotify",
  },
  alternates: {
    canonical: "https://busynotify.in/solutions/due-follow-up-system",
  },
  other: {
    "application/ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "BusyNotify Due Follow-up System",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, WhatsApp, SMS",
        description:
          "Manual due follow-up system integrated with Busy Accounting Software. Amount-wise and bill-by-bill tracking with telecaller dashboard and promise date reminders.",
        offers: {
          "@type": "Offer",
          price: "500",
          priceCurrency: "INR",
        },
        featureList: [
          "Amount-wise Follow-up",
          "Bill-by-bill Tracking",
          "Telecaller Dashboard",
          "Follow-up History",
          "Promise Date Reminders",
          "Customer Auto-reminders",
          "Telecaller Alerts",
          "Customizable Notifications",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a due follow-up system?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A due follow-up system helps telecallers and collection teams track pending payments, record customer commitments, and set reminders for both follow-up dates and promised payment dates.",
            },
          },
          {
            "@type": "Question",
            name: "How does the follow-up system work with Busy Software?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The system connects directly to Busy Accounting Software database, showing real-time outstanding data. Telecallers can see pending amounts, record follow-ups, and set reminders. Customer data stays in sync automatically.",
            },
          },
        ],
      },
    ]),
  },
};

export default function DueFollowUpPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <DueFollowUpContent />
      <Footer />
    </main>
  );
}
