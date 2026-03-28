import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogContent } from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tutorials, and best practices for modern notification infrastructure and alert management.",
};

export default function BlogPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <BlogContent />
      <Footer />
    </main>
  );
}
