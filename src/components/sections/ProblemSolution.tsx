"use client";

import { motion } from "framer-motion";

export function ProblemSolution() {
  const problems = [
    "Your team is drowning in tool-switching.",
    "Critical events get buried in the noise.",
    "Responses happen too late — when it's already a crisis.",
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {problems.map((problem, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-xl sm:text-2xl text-muted-foreground"
            >
              {problem}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            <span className="text-primary font-medium">BusyNotify changes that.</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          We built BusyNotify because we lived this pain. Every day, critical alerts were lost in a sea of notifications. 
          We knew there had to be a better way — one that uses AI to surface what matters, when it matters.
        </motion.p>
      </div>
    </section>
  );
}
