"use client";

import { motion } from "framer-motion";
import { MessageCircle, Bell, Phone, LayoutDashboard, Code, FileSpreadsheet, AlertTriangle, CheckCircle2 } from "lucide-react";

const problems = [
  {
    problem: "Customers keep calling to check their balance and outstanding",
    icon: Phone,
  },
  {
    problem: "Invoices and receipts get sent manually — time-consuming and error-prone",
    icon: MessageCircle,
  },
  {
    problem: "Payment reminders are inconsistent, leading to delayed collections",
    icon: Bell,
  },
  {
    problem: "No visibility into which customers are overdue or at credit risk",
    icon: AlertTriangle,
  },
  {
    problem: "No mobile access to BUSY reports and dashboards",
    icon: LayoutDashboard,
  },
  {
    problem: "No API to connect BUSY with websites, apps, or other tools",
    icon: Code,
  },
];

const whyBUSYNeedsAutomation = [
  {
    problem: "No Built-in WhatsApp Integration",
    solution: "Auto-send invoices, reminders, and reports via WhatsApp directly from BUSY",
    icon: MessageCircle,
  },
  {
    problem: "Manual Payment Follow-ups",
    solution: "Automated payment reminders with bill-by-bill statements on schedule",
    icon: Bell,
  },
  {
    problem: "Limited Mobile Access",
    solution: "PWA dashboards and chatbots for 24/7 access from any device",
    icon: Phone,
  },
  {
    problem: "No Real-time Dashboards",
    solution: "Live reporting dashboards with maps, charts, and analytics",
    icon: LayoutDashboard,
  },
  {
    problem: "No API Access",
    solution: "REST APIs to connect BUSY with websites, apps, and third-party tools",
    icon: Code,
  },
  {
    problem: "Manual Data Export",
    solution: "Automatic sync to Google Sheets without manual intervention",
    icon: FileSpreadsheet,
  },
];

export function ProblemSolution() {
  return (
    <>
      {/* Problem Statement Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium">Common BUSY User Challenges</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Sound <span className="gradient-text">Familiar?</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {problems.map((item, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-lg sm:text-xl text-muted-foreground flex items-center justify-center gap-3"
              >
                <span className="text-red-400 text-xl">✗</span>
                {item.problem}
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
              <span className="text-primary font-semibold text-lg">BusyNotify automates it all.</span>
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
            Built specifically for <span className="text-foreground font-medium">BUSY Accounting Software users</span>. 
            We connect to your BUSY database and automate customer communication, reminders, reporting, and more.
          </motion.p>
        </div>
      </section>

      {/* Why BUSY Needs Automation Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-card/50 to-background">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why BUSY Users Need <span className="gradient-text">Automation Tools</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              BUSY Accounting Software is excellent for accounting, but lacks modern automation features.
              Here&apos;s what BUSY users struggle with — and how BusyNotify solves it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyBUSYNeedsAutomation.map((item, index) => (
              <motion.div
                key={item.problem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-red-400 font-medium mb-2">❌ {item.problem}</p>
                    <p className="text-green-400 text-sm">✅ {item.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
