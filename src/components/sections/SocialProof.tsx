"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "Vercel", logo: "Vercel" },
  { name: "Stripe", logo: "Stripe" },
  { name: "Linear", logo: "Linear" },
  { name: "Notion", logo: "Notion" },
  { name: "Figma", logo: "Figma" },
  { name: "Supabase", logo: "Supabase" },
];

export function SocialProof() {
  return (
    <section className="relative py-16 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-muted-foreground mb-8"
        >
          Trusted by teams at
        </motion.p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
            >
              {company.logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
