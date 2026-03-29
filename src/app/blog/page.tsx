import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogContent } from "./BlogContent";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "BUSY Software Tips & Tutorials | BusyNotify Blog",
  description:
    "Learn how to automate BUSY Accounting Software with WhatsApp integration, payment reminders, Google Sheets sync, and more. Step-by-step guides for Indian businesses.",
  keywords: [
    "BUSY Software tips",
    "BUSY Accounting tutorials",
    "BUSY WhatsApp integration",
    "BUSY payment reminder",
    "BUSY automation guide",
    "BUSY Software India"
  ],
  openGraph: {
    title: "BUSY Software Tips & Tutorials | BusyNotify Blog",
    description: "Step-by-step guides to automate BUSY Accounting Software workflows for Indian businesses.",
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <BlogContent posts={posts} />
      <Footer />
    </main>
  );
}
