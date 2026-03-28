import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for BusyNotify. Start free, scale as you grow. Plans from ₹0/month.",
};

export default function PricingPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <PricingContent />
      <Footer />
    </main>
  );
}
