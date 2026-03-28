import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SolutionsContent } from "./SolutionsContent";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Discover how BusyNotify can transform your notification infrastructure. From alert fatigue reduction to intelligent routing, we have solutions for every team.",
};

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <SolutionsContent />
      <Footer />
    </main>
  );
}
