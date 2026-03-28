"use client";

import { motion } from "framer-motion";
import { Bell, MessageCircle, LayoutDashboard, Code, Zap, Database, Settings, Shield } from "lucide-react";

const whatWeDo = [
  {
    icon: Bell,
    title: "Automates Payment Collection",
    description: "WhatsApp & SMS payment reminders for outstanding amounts with bill-by-bill statements",
  },
  {
    icon: MessageCircle,
    title: "Adds WhatsApp Integration",
    description: "Auto-send invoices, reports, and documents directly from BUSY to customers",
  },
  {
    icon: LayoutDashboard,
    title: "Enables Real-time Dashboards",
    description: "Mobile PWA for reports, analytics, and customer tracking from anywhere",
  },
  {
    icon: Code,
    title: "Provides API Access",
    description: "REST APIs to connect BUSY with websites, apps, and third-party tools",
  },
  {
    icon: Database,
    title: "Syncs Data Automatically",
    description: "Google Sheets integration with automatic data sync every 10 minutes",
  },
  {
    icon: Shield,
    title: "Monitors Credit Limits",
    description: "Credit limit and credit days monitoring with automatic alerts",
  },
];

const differentiators = [
  {
    icon: Zap,
    title: "Built Exclusively for BUSY",
    description: "Every solution is designed specifically for BUSY Accounting Software users.",
  },
  {
    icon: Settings,
    title: "Made for Indian Market",
    description: "GST-ready, Hindi language support, WhatsApp-first approach for Indian businesses.",
  },
  {
    icon: Shield,
    title: "Data Security First",
    description: "Your BUSY data stays on your server. We never store sensitive information.",
  },
];

export function WhatWeDo() {
  return (
    <section className="relative py-24 overflow-hidden border-y border-border bg-card/30">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="label-accent">Our Platform</span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
            What <span className="gradient-text">BusyNotify</span> Does
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            BusyNotify extends BUSY Accounting Software with automation features that are missing in the core product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatWeDo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
            >
              <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {differentiators.map((item, index) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
