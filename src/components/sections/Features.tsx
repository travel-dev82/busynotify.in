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
  ArrowRight,
  IndianRupee,
  MessageSquare,
  BarChart3,
  Database,
  TruckIcon,
} from "lucide-react";

// Category-based solution grouping
const solutionCategories = [
  {
    title: "Payment & Collection",
    icon: IndianRupee,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    solutions: [
      {
        title: "BUSY Payment Reminder System",
        description: "Automated WhatsApp & SMS payment reminders with bill-by-bill statements. Daily, weekly, or monthly schedules for BUSY Software users.",
        icon: Bell,
        href: "/solutions/payment-reminder-system",
        highlight: true,
      },
      {
        title: "BUSY Credit Limit & Overdue Control",
        description: "Monitor credit limits and credit days per customer. Auto-remind when customers breach their credit terms.",
        icon: CreditCard,
        href: "/solutions/credit-line-sender",
        highlight: false,
      },
    ],
  },
  {
    title: "Communication",
    icon: MessageSquare,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    solutions: [
      {
        title: "BUSY WhatsApp Integration",
        description: "Auto-send all vouchers (invoices, orders, receipts) to customers via WhatsApp the moment they're created in BUSY.",
        icon: MessageCircle,
        href: "/solutions/whatsapp-integration",
        highlight: true,
      },
      {
        title: "BUSY AI Chatbot",
        description: "Customers check balances, download invoices, and get ledgers via WhatsApp or Telegram — automatically, 24/7.",
        icon: Bot,
        href: "/solutions/busy-accounting-software-chatbot",
        highlight: true,
      },
    ],
  },
  {
    title: "Reporting & Analytics",
    icon: BarChart3,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    solutions: [
      {
        title: "BUSY Reporting Dashboard",
        description: "15+ BUSY reports accessible 24/7 via web portal and PWA. Create multiple salesmen with controlled access.",
        icon: LayoutDashboard,
        href: "/solutions/reporting-dashboard",
        highlight: false,
      },
      {
        title: "BUSY Customer Map Analytics",
        description: "See customer distribution across India on Google Maps. State-wise analytics, outstanding visualization, demand trends.",
        icon: Map,
        href: "/solutions/customer-map-report",
        highlight: false,
      },
    ],
  },
  {
    title: "Data & Integration",
    icon: Database,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    solutions: [
      {
        title: "BUSY to Google Sheets Sync",
        description: "Auto-sync BUSY data to Google Sheets every 10 minutes. Free templates for customers, invoices, receipts.",
        icon: FileSpreadsheet,
        href: "/solutions/google-sheet-automation",
        highlight: false,
      },
      {
        title: "BUSY API Integration",
        description: "RESTful APIs to access BUSY data programmatically. Free endpoints for customers, bills, products, ledgers.",
        icon: Code,
        href: "/solutions/custom-apis",
        highlight: false,
      },
    ],
  },
];

const additionalSolutions = [
  {
    title: "BUSY Follow-up CRM",
    description: "Manual follow-up system for telecallers with BUSY integration. Track promises and get dual reminders.",
    icon: Bell,
    href: "/solutions/due-follow-up-system",
    color: "text-green-500",
  },
  {
    title: "BUSY LR & Transport Tracking",
    description: "Digital LR copy management with Google Drive integration. Let customers access transport details via chatbot.",
    icon: TruckIcon,
    href: "/solutions/transportation-slip-management",
    color: "text-cyan-500",
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
          <span className="label-accent">BUSY Software Solutions</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything you need to{" "}
            <span className="gradient-text">automate BUSY Software</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            10 powerful solutions organized by category. Built specifically for BUSY Accounting Software users in India.
          </p>
        </motion.div>

        {/* Category-Based Solutions */}
        {solutionCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="mb-12"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                <category.icon className={`w-5 h-5 ${category.color}`} />
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.solutions.map((solution, index) => (
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
                      <div className={`p-2 rounded-lg ${category.bgColor}`}>
                        <solution.icon className={`w-5 h-5 ${category.color}`} />
                      </div>
                      {solution.highlight && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">Popular</span>
                      )}
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h4>
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
          </motion.div>
        ))}

        {/* Additional Solutions Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          {additionalSolutions.map((solution) => (
            <Link
              key={solution.title}
              href={solution.href}
              className="group glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 flex items-start gap-4"
            >
              <div className="p-2 rounded-lg bg-white/5">
                <solution.icon className={`w-5 h-5 ${solution.color}`} />
              </div>
              <div>
                <h4 className="font-semibold group-hover:text-primary transition-colors">
                  {solution.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {solution.description}
                </p>
              </div>
              <ArrowRight className="ml-auto w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link 
            href="/solutions" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg font-medium"
          >
            View all 10 BUSY automation solutions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
