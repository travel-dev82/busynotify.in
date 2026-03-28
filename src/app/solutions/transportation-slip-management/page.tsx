import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransportationSlipContent } from "./TransportationSlipContent";
import { transportationSlipSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "LR & Transport Challan Tracking System for BUSY | Dispatch Management Software - BusyNotify",
  description:
    "Manage LR copies, transport challans, and dispatch details from BUSY Accounting Software. Track shipments, store challans digitally, and share transport info with customers instantly. Indian logistics document management.",
  keywords: [
    "LR tracking system",
    "transport challan software",
    "dispatch tracking software",
    "logistics document management",
    "transport document system",
    "delivery challan tracking",
    "transporter tracking system",
    "BUSY transport challan",
    "LR copy management",
    "transport slip upload",
    "challan management India",
    "dispatch management software",
    "transport tracking portal",
    "invoice transport tracking",
    "bill-wise LR management",
    "logistics tracking India",
    "transport document digital",
    "BUSY dispatch tracking",
    "goods transport documentation",
    "transporter details system",
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
    title: "LR & Transport Challan Tracking System for BUSY Software",
    description:
      "Track transport challans, LR copies, and dispatch details from BUSY. Upload slips to Google Drive, share transport info with customers via WhatsApp and PWA.",
    images: [
      {
        url: "/og/transportation-slip-management.png",
        width: 1200,
        height: 630,
        alt: "LR & Transport Challan Tracking System for BUSY Accounting Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LR & Transport Challan Tracking System for BUSY Software",
    description:
      "Track transport challans, LR copies, and dispatch details from BUSY. Share transport info with customers instantly.",
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
