import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | BUSY Software Automation Platform - BusyNotify",
  description:
    "BusyNotify is a dedicated automation platform built specifically for businesses using BUSY Accounting Software. We help Indian businesses automate manual work, improve efficiency, and grow faster with modern tools.",
  keywords: [
    "BUSY Software Automation",
    "BUSY Accounting Solutions India",
    "Indian Business Automation",
    "MSME Automation Platform",
    "BUSY ERP Integration",
    "WhatsApp Automation for BUSY",
    "Payment Collection Software India",
    "BusyNotify About",
    "BUSY Software Solutions Provider",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://busynotify.in/about",
    siteName: "BusyNotify",
    title: "About Us | BUSY Software Automation Platform - BusyNotify",
    description:
      "BusyNotify is a dedicated automation platform built specifically for businesses using BUSY Accounting Software. We help Indian businesses automate and grow.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About BusyNotify - BUSY Software Automation Platform",
      },
    ],
  },
  alternates: {
    canonical: "https://busynotify.in/about",
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  );
}
