"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LegalSection {
  heading: string;
  content: string;
}

interface Props {
  title: string;
  lastUpdated: string;
  content: LegalSection[];
}

export function LegalContent({ title, lastUpdated, content }: Props) {
  return (
    <div className="flex-1 pt-24">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button variant="ghost" size="sm" className="mb-8" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Link>
            </Button>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {title}
            </h1>
            
            <p className="mt-4 text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose-busynotify prose prose-lg prose-invert max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-ul:text-muted-foreground prose-ol:text-muted-foreground
              prose-li:marker:text-primary"
          >
            {content.map((section) => (
              <div key={section.heading}>
                <h2>{section.heading}</h2>
                <p dangerouslySetInnerHTML={{ __html: section.content.replace(/\n\n/g, '</p><p>').replace(/• /g, '<br/>• ') }} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
