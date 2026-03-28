import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionsIndexContent } from "./SolutionsIndexContent";

export const metadata: Metadata = {
  title: "Solutions | AI-Powered Business Automation - BusyNotify",
  description:
    "Explore BusyNotify's AI-powered solutions for Indian businesses. From Busy Accounting Software chatbots to ERP automation, we help you automate customer queries and boost productivity.",
  keywords: [
    "Business Automation Solutions India",
    "ERP Chatbot Solutions",
    "Accounting Software Automation",
    "Customer Query Automation",
    "WhatsApp Business Solutions",
    "Telegram Bot for Business",
    "AI Chatbot Solutions India",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://busynotify.in/solutions",
    siteName: "BusyNotify",
    title: "Solutions | AI-Powered Business Automation - BusyNotify",
    description:
      "Explore BusyNotify's AI-powered solutions for Indian businesses. Automate customer queries and boost productivity.",
    images: [
      {
        url: "/og/solutions.png",
        width: 1200,
        height: 630,
        alt: "BusyNotify Solutions - AI-Powered Business Automation",
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
