"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Bot, 
  MessageCircle, 
  Bell, 
  LayoutDashboard, 
  Map, 
  CreditCard,
  FileSpreadsheet,
  Code,
  ArrowRight
} from "lucide-react";

const solutions = [
  {
    title: "AI Chatbot for Busy",
    description: "Customers check balances, download invoices, and get ledgers via WhatsApp or Telegram — automatically, 24/7.",
    icon: Bot,
    href: "/solutions/busy-accounting-software-chatbot",
    highlight: true,
  },
  {
    title: "WhatsApp Integration",
    description: "Auto-send all vouchers (invoices, orders, receipts) to customers via WhatsApp the moment they're created in Busy.",
    icon: MessageCircle,
    href: "/solutions/whatsapp-integration",
    highlight: true,
  },
  {
    title: "Payment Reminders",
    description: "Automated payment reminders via WhatsApp and SMS. Daily, weekly, or monthly schedules with full customization.",
    icon: Bell,
    href: "/solutions/payment-reminder-system",
    highlight: false,
  },
  {
    title: "Reporting Dashboard",
    description: "15+ reports accessible 24/7 via web portal and PWA. Create multiple salesmen with controlled access.",
    icon: LayoutDashboard,
    href: "/solutions/reporting-dashboard",
    highlight: false,
  },
  {
    title: "Customer Map Report",
    description: "See customer distribution across India on Google Maps. State-wise analytics, outstanding visualization, demand trends.",
    icon: Map,
    href: "/solutions/customer-map-report",
    highlight: false,
  },
  {
    title: "Credit Line Sender",
    description: "Monitor credit limits and credit days per customer. Auto-remind when customers breach their credit terms.",
    icon: CreditCard,
    href: "/solutions/credit-line-sender",
    highlight: false,
  },
  {
    title: "Google Sheet Sync",
    description: "Auto-sync Busy data to Google Sheets every 10 minutes. Free templates for customers, invoices, receipts.",
    icon: FileSpreadsheet,
    href: "/solutions/google-sheet-automation",
    highlight: false,
  },
  {
    title: "Custom APIs",
    description: "RESTful APIs to access Busy data programmatically. Free endpoints for customers, bills, products, ledgers.",
    icon: Code,
    href: "/solutions/custom-apis",
    highlight: false,
  },
];

export function Features() {
  return (
    <section id="solutions" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-accent">Our Solutions</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything you need to{" "}
            <span className="gradient-text">automate Busy Software</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            10 powerful solutions built specifically for Busy Accounting Software users in India.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 ${
                solution.highlight ? "ring-1 ring-primary/30" : ""
              }`}
            >
              <Link href={solution.href} className="block h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg ${solution.highlight ? "bg-primary/20" : "bg-primary/10"}`}>
                    <solution.icon className={`w-5 h-5 ${solution.highlight ? "text-primary" : "text-primary"}`} />
                  </div>
                  {solution.highlight && (
                    <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">Popular</span>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="mt-4 flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link 
            href="/solutions" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            View all 10 solutions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
