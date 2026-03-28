"use client";

import { motion } from "framer-motion";

export function SocialProof() {
  const industries = [
    "Trading Companies",
    "Manufacturing Units", 
    "Distribution Houses",
    "Wholesale Businesses",
    "Retail Chains",
    "Service Providers",
  ];

  return (
    <section className="relative py-12 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-muted-foreground mb-6"
        >
          Trusted by Indian businesses across industries
        </motion.p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-sm font-medium text-muted-foreground/70 hover:text-muted-foreground transition-colors"
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
