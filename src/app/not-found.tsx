"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="relative mx-auto max-w-2xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <div className="relative inline-block">
            <span className="text-[150px] sm:text-[200px] font-bold text-primary/10">
              404
            </span>
            <span className="absolute inset-0 flex items-center justify-center text-6xl sm:text-8xl font-bold gradient-text">
              Oops!
            </span>
          </div>

          <h1 className="mt-8 text-2xl sm:text-3xl font-bold">
            Page not found
          </h1>
          
          <p className="mt-4 text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="glow-teal group" asChild>
              <Link href="/">
                <Home className="mr-2 w-4 h-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Read our Blog
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
