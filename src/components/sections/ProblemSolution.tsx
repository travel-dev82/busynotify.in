"use client";

import { motion } from "framer-motion";

export function ProblemSolution() {
  const problems = [
    "Customers keep calling to check their balance and outstanding.",
    "Invoices and receipts get sent manually — time-consuming and error-prone.",
    "Payment reminders are inconsistent, leading to delayed collections.",
    "No visibility into which customers are overdue or at risk.",
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
          className="space-y-4"
        >
          {problems.map((problem, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-lg sm:text-xl text-muted-foreground"
            >
              <span className="text-red-400 mr-2">✗</span>
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
            <span className="text-primary font-semibold">BusyNotify automates it all.</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Built specifically for <span className="text-foreground font-medium">Busy Accounting Software users</span>. 
          We connect to your Busy database and automate customer communication, reminders, reporting, and more.
        </motion.p>
      </div>
    </section>
  );
}
