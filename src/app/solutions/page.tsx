import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionsIndexContent } from "./SolutionsIndexContent";

export const metadata: Metadata = {
  title: "BUSY Software Automation Solutions | WhatsApp, Reporting, API & Integration - BusyNotify",
  description:
    "Explore BUSY Accounting Software automation tools including WhatsApp integration, payment reminders, reporting dashboards, APIs, and Google Sheets sync for Indian businesses. Built for distributors, wholesalers, and manufacturers.",
  keywords: [
    "BUSY Software Automation",
    "BUSY WhatsApp Integration",
    "BUSY Payment Reminder System",
    "BUSY Reporting Dashboard",
    "BUSY API Integration",
    "BUSY Google Sheets Integration",
    "BUSY ERP Automation",
    "BUSY Accounting Software Tools",
    "BUSY Software Integration",
    "BUSY CRM Integration",
    "BUSY Data Export",
    "BUSY Chatbot",
    "BUSY Customer Portal",
    "Indian Business Automation",
    "MSME Accounting Automation",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://busynotify.in/solutions",
    siteName: "BusyNotify",
    title: "BUSY Software Automation Solutions | WhatsApp, Reporting, API & Integration",
    description:
      "Explore BUSY Accounting Software automation tools including WhatsApp integration, payment reminders, reporting dashboards, APIs, and Google Sheets sync for Indian businesses.",
    images: [
      {
        url: "/og/solutions.png",
        width: 1200,
        height: 630,
        alt: "BusyNotify Solutions - BUSY Software Automation for Indian Businesses",
      },
    ],
  },
  alternates: {
    canonical: "https://busynotify.in/solutions",
  },
};

export default function SolutionsIndexPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <SolutionsIndexContent />
      <Footer />
    </main>
  );
}
