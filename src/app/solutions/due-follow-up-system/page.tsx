import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DueFollowUpContent } from "./DueFollowUpContent";

export const metadata: Metadata = {
  title: "Due Follow-up System for Busy Software | Telecaller Reminder Management India",
  description:
    "Manage due follow-ups with Busy Accounting Software integration. Amount-wise and bill-by-bill tracking. Telecaller dashboard with follow-up history. Promise date reminders for customers and staff. Indian businesses.",
  keywords: [
    "Due Follow-up System India",
    "Busy Software Follow-up",
    "Telecaller Reminder System",
    "Payment Follow-up Software",
    "Busy ERP Due Management",
    "Accounts Receivable Follow-up",
    "Collection Management System",
    "Promise Date Reminder",
    "Customer Follow-up Tool",
    "Outstanding Collection Software",
    "Telecaller Dashboard India",
    "Bill Follow-up System",
    "Debtor Management Software",
    "Recovery Reminder System",
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
    title: "Due Follow-up System for Busy Software | Telecaller Reminder Management",
    description:
      "Manage due follow-ups with Busy Accounting Software integration. Amount-wise and bill-by-bill tracking. Promise date reminders for customers and staff.",
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
    title: "Due Follow-up System for Busy Software | Telecaller Management",
    description:
      "Manage due follow-ups with Busy Accounting Software. Telecaller dashboard with promise date reminders.",
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
