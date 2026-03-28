import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | BUSY Software Automation Support - BusyNotify",
  description:
    "Contact BusyNotify for BUSY Accounting Software automation support. Get help with WhatsApp integration, payment reminders, reporting dashboards, and API setup. Based in Ujjain, Madhya Pradesh, India.",
  keywords: [
    "BUSY Software Support India",
    "BUSY WhatsApp Integration Help",
    "BUSY Automation Contact",
    "BUSY Payment Reminder Support",
    "BUSY API Integration",
    "BUSY Software Help India",
    "MSME Accounting Support",
    "Indian Business Automation",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://busynotify.in/contact",
    siteName: "BusyNotify",
    title: "Contact Us | BUSY Software Automation Support - BusyNotify",
    description:
      "Contact BusyNotify for BUSY Accounting Software automation support. Get help with WhatsApp integration, payment reminders, reporting dashboards, and API setup.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact BusyNotify - BUSY Software Automation Support",
      },
    ],
  },
  alternates: {
    canonical: "https://busynotify.in/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  );
}
