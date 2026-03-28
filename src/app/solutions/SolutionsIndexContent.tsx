"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  ChevronRight,
  Zap,
  Users,
  Clock,
  Bell,
  Phone,
  ClipboardList,
  Truck,
  Map,
  CreditCard,
  FileSpreadsheet,
  Code,
  MessageCircle,
  LayoutDashboard,
  IndianRupee,
  MessageSquare,
  BarChart3,
  Database,
  TruckIcon,
  Settings,
  AlertTriangle,
  Target,
  Globe,
  Shield,
  HeadphonesIcon,
  TrendingUp,
  Store,
  Factory,
  Calculator,
  Briefcase,
  Building,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Solution categories with BUSY-focused keywords
const solutionCategories = [
  {
    id: "payment-collection",
    title: "Payment & Collection Automation",
    shortTitle: "Payment & Collection",
    description: "Automate payment reminders, credit control, and follow-ups to improve collection efficiency in BUSY Software.",
    icon: IndianRupee,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    solutions: [
      {
        id: "payment-reminder-system",
        title: "BUSY Payment Reminder System (WhatsApp & SMS Automation)",
        shortTitle: "Payment Reminders",
        description: "24/7 automated payment reminders integrated with BUSY Software. Send daily, weekly, or monthly reminders via WhatsApp and SMS. Bill-by-bill or ledger-based with full customization for Indian businesses.",
        icon: Bell,
        features: [
          "WhatsApp Payment Reminders",
          "SMS Bill-by-Bill Statements",
          "Flexible Scheduling",
          "Custom Message Templates",
          "GST Invoice Reminders",
        ],
        popular: true,
        badge: "Most Popular",
      },
      {
        id: "credit-line-sender",
        title: "BUSY Credit Limit & Overdue Payment Reminder System",
        shortTitle: "Credit Control",
        description: "Intelligent credit management system that monitors credit limits and credit days at customer level in BUSY Software. Automatic WhatsApp reminders when customers breach their credit terms.",
        icon: CreditCard,
        features: [
          "Credit Limit Monitoring",
          "Overdue Payment Tracking",
          "WhatsApp Credit Alerts",
          "Credit Days Tracking",
          "Policy Enforcement",
        ],
        popular: false,
        badge: "Smart Recovery",
      },
      {
        id: "due-follow-up-system",
        title: "BUSY Payment Follow-up CRM for Telecallers",
        shortTitle: "Follow-up CRM",
        description: "Manual follow-up system for telecallers with BUSY Software integration. Track pending payments, record customer promises, and get dual reminders for both staff and customers on promise dates.",
        icon: ClipboardList,
        features: [
          "Telecaller Dashboard",
          "Promise Date Tracking",
          "Follow-up History",
          "Dual WhatsApp Reminders",
          "Team Performance Reports",
        ],
        popular: false,
        badge: "For Teams",
      },
    ],
  },
  {
    id: "communication",
    title: "Communication Automation",
    shortTitle: "Communication",
    description: "WhatsApp integration and chatbot solutions for BUSY Software customer communication.",
    icon: MessageSquare,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    solutions: [
      {
        id: "whatsapp-integration",
        title: "BUSY WhatsApp Integration for Invoices, Reports & Customer Communication",
        shortTitle: "WhatsApp Integration",
        description: "Automatically send all vouchers from BUSY Software to customers via WhatsApp. Invoices, quotations, orders, receipts, credit notes - all delivered instantly with PDF attachments.",
        icon: MessageCircle,
        features: [
          "Auto Invoice WhatsApp",
          "All Voucher Types",
          "PDF Delivery on WhatsApp",
          "Reports on Demand",
          "BUSY Chatbot Integration",
        ],
        popular: true,
        badge: "Essential",
      },
      {
        id: "busy-accounting-software-chatbot",
        title: "BUSY Accounting Software Chatbot (WhatsApp & Telegram)",
        shortTitle: "BUSY Chatbot",
        description: "AI-powered chatbot for BUSY Accounting Software. Automate customer queries for balance inquiries, ledgers, invoices, payment receipts, and more through WhatsApp or Telegram.",
        icon: Bot,
        features: [
          "Balance Inquiry Bot",
          "Ledger Statements on WhatsApp",
          "Invoice Delivery Bot",
          "Payment Receipt Bot",
          "Order Status Bot",
        ],
        popular: false,
        badge: "AI Powered",
      },
    ],
  },
  {
    id: "reporting-analytics",
    title: "Reporting & Analytics",
    shortTitle: "Reporting & Analytics",
    description: "Real-time dashboards, maps, and reporting solutions for BUSY Software data visualization.",
    icon: BarChart3,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    solutions: [
      {
        id: "reporting-dashboard",
        title: "BUSY Reporting Dashboard & PWA Portal (15+ Reports)",
        shortTitle: "Reports Dashboard",
        description: "Comprehensive web portal and PWA for 15+ BUSY Software reports. Create multiple salesmen, track customer revisits, and access reports 24/7 from any device - mobile or desktop.",
        icon: LayoutDashboard,
        features: [
          "15+ BUSY Reports",
          "Multi-Salesman Dashboard",
          "Mobile PWA Access",
          "Revisit Tracking",
          "Outstanding Reports",
        ],
        popular: false,
        badge: "Business Intelligence",
      },
      {
        id: "customer-map-report",
        title: "BUSY Sales Territory & Customer Map Dashboard",
        shortTitle: "Map Analytics",
        description: "Google Maps-powered dashboard showing customer distribution across India from BUSY Software data. State-wise and district-wise business analytics, outstanding payment visualization, and demand trend analysis.",
        icon: Map,
        features: [
          "Pan-India Customer Map",
          "State-wise Sales Analytics",
          "District-level Insights",
          "Outstanding by Region",
          "Territory Management",
        ],
        popular: false,
        badge: "Visual Analytics",
      },
    ],
  },
  {
    id: "data-integration",
    title: "Data & Integration",
    shortTitle: "Data & Integration",
    description: "API integration and data export solutions for BUSY Software connectivity.",
    icon: Database,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    solutions: [
      {
        id: "google-sheet-automation",
        title: "BUSY to Google Sheets Integration (Automatic Data Export)",
        shortTitle: "Google Sheets",
        description: "Automatically sync BUSY Software data to Google Sheets with pull-based updates every 10 minutes. Free templates for customers, invoices, receipts. Custom queries for advanced reporting.",
        icon: FileSpreadsheet,
        features: [
          "BUSY to Google Sheets Sync",
          "Customer Data Export",
          "Invoice Data Export",
          "Free Templates",
          "Custom Query Builder",
        ],
        popular: false,
        badge: "Data Integration",
      },
      {
        id: "custom-apis",
        title: "BUSY API Integration for Developers (REST API Access)",
        shortTitle: "API Integration",
        description: "RESTful APIs to access BUSY Software data programmatically. Free endpoints for customers, bills, products, ledgers. Custom API development for website, mobile app, and eCommerce integration.",
        icon: Code,
        features: [
          "Free BUSY API Endpoints",
          "Customer & Invoice API",
          "Product & Ledger API",
          "Custom API Development",
          "eCommerce Integration",
        ],
        popular: false,
        badge: "For Developers",
      },
    ],
  },
  {
    id: "logistics-operations",
    title: "Logistics & Operations",
    shortTitle: "Logistics & Operations",
    description: "Transport tracking and logistics management for BUSY Software users.",
    icon: TruckIcon,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    solutions: [
      {
        id: "transportation-slip-management",
        title: "LR & Transport Challan Tracking System for BUSY",
        shortTitle: "LR Tracking",
        description: "Digital LR copy and transport challan management with Google Drive integration for BUSY Software. Upload LR copies via PWA, let customers access transport details through WhatsApp chatbot.",
        icon: Truck,
        features: [
          "LR Copy Photo Capture",
          "Transport Challan Upload",
          "Google Drive Integration",
          "Customer Tracking Portal",
          "WhatsApp LR Inquiry",
        ],
        popular: false,
        badge: "Unique Feature",
      },
    ],
  },
];

const benefits = [
  {
    icon: Clock,
    title: "24/7 Automation",
    description: "Your BUSY workflows run automatically. Payment reminders, WhatsApp messages, and reports - all without manual effort.",
  },
  {
    icon: Zap,
    title: "Instant WhatsApp Delivery",
    description: "Invoices, reminders, and reports delivered instantly via WhatsApp. No delays, no manual sending.",
  },
  {
    icon: Users,
    title: "Multi-Channel Support",
    description: "Works with WhatsApp, Telegram, SMS, Google Sheets, and custom APIs for complete flexibility.",
  },
  {
    icon: Building2,
    title: "Made for Indian MSMEs",
    description: "Designed for Indian businesses using BUSY. GST-ready, Hindi support, and local payment methods.",
  },
];

const whoIsThisFor = [
  {
    icon: Store,
    title: "Distributors",
    description: "Manage hundreds of retailers with automated payment reminders and WhatsApp communication.",
  },
  {
    icon: Building,
    title: "Wholesalers",
    description: "Track outstanding payments, credit limits, and customer balances automatically.",
  },
  {
    icon: Factory,
    title: "Manufacturers",
    description: "Integrate BUSY with websites, apps, and logistics for complete business automation.",
  },
  {
    icon: Calculator,
    title: "Accountants & CAs",
    description: "Provide clients with automated reporting, dashboards, and WhatsApp integration.",
  },
  {
    icon: Briefcase,
    title: "Sales Teams",
    description: "Mobile PWA dashboards, territory maps, and customer revisit tracking.",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Businesses",
    description: "Connect BUSY to online stores with APIs and real-time data sync.",
  },
];

const whyAutomation = [
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

const differentiators = [
  {
    icon: Target,
    title: "Built Exclusively for BUSY",
    description: "Every solution is designed specifically for BUSY Accounting Software users.",
  },
  {
    icon: Globe,
    title: "Made for Indian Market",
    description: "GST-ready, Hindi language support, WhatsApp-first approach for Indian businesses.",
  },
  {
    icon: Shield,
    title: "Data Security First",
    description: "Your BUSY data stays on your server. We never store sensitive information.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Direct WhatsApp support for quick setup and troubleshooting.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Trusted by 100+ BUSY users across India for payment collection and automation.",
  },
  {
    icon: Settings,
    title: "Fully Customizable",
    description: "Every solution can be tailored to your specific business requirements.",
  },
];

const seoFooterLinks = [
  { title: "BUSY WhatsApp Integration", href: "/solutions/whatsapp-integration" },
  { title: "BUSY Payment Reminder System", href: "/solutions/payment-reminder-system" },
  { title: "BUSY API Integration", href: "/solutions/custom-apis" },
  { title: "BUSY Data Export", href: "/solutions/google-sheet-automation" },
  { title: "BUSY Reporting Dashboard", href: "/solutions/reporting-dashboard" },
  { title: "BUSY Chatbot", href: "/solutions/busy-accounting-software-chatbot" },
  { title: "BUSY Credit Control", href: "/solutions/credit-line-sender" },
  { title: "BUSY Follow-up CRM", href: "/solutions/due-follow-up-system" },
  { title: "BUSY Customer Map", href: "/solutions/customer-map-report" },
  { title: "BUSY LR Tracking", href: "/solutions/transportation-slip-management" },
];

export function SolutionsIndexContent() {
  return (
    <div className="flex-1 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 mesh-gradient opacity-30" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <ol className="flex items-center justify-center gap-2">
                <li><Link href="/" className="hover:text-primary">Home</Link></li>
                <li><ChevronRight className="w-4 h-4" /></li>
                <li className="text-foreground">BUSY Software Solutions</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              BUSY Software <span className="gradient-text">Automation Tools</span>
            </h1>
            <p className="mt-4 text-lg text-primary font-medium">
              WhatsApp Integration • Payment Reminders • Reporting Dashboards • APIs • Data Sync
            </p>

            <p className="mt-6 text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Automate your <strong>BUSY Accounting Software</strong> with powerful tools for WhatsApp integration,
              payment reminders, reporting dashboards, APIs, and data sync. Built for Indian businesses to
              improve collections, reporting, and operations.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="glow-teal group" asChild>
                <Link href="#solutions">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold">
              What <span className="gradient-text">BusyNotify</span> Does
            </h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              BusyNotify extends BUSY Accounting Software with automation features that are missing in the core product.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Bell, title: "Automates Payment Collection", desc: "WhatsApp & SMS reminders for outstanding payments" },
              { icon: MessageCircle, title: "Adds WhatsApp Integration", desc: "Auto-send invoices, reports, and documents" },
              { icon: LayoutDashboard, title: "Enables Real-time Dashboards", desc: "Mobile PWA for reports and analytics" },
              { icon: Code, title: "Provides API Access", desc: "Connect BUSY to websites, apps, and tools" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BUSY Needs Automation Section */}
      <section className="py-16 bg-gradient-to-b from-background to-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-500 mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium">Common BUSY User Challenges</span>
            </div>
            <h2 className="text-3xl font-bold">
              Why BUSY Users Need <span className="gradient-text">Automation Tools</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              BUSY Accounting Software is excellent for accounting, but lacks modern automation features.
              Here&apos;s what BUSY users struggle with - and how BusyNotify solves it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyAutomation.map((item, index) => (
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
                    <item.icon className="w-5 h-5 text-red-500" />
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

      {/* Solutions by Category */}
      <section id="solutions" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold">
              BUSY Software <span className="gradient-text">Automation Solutions</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Choose the solution category that fits your business needs. Each solution integrates directly with BUSY Accounting Software.
            </p>
          </motion.div>

          {solutionCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              {/* Solutions in Category */}
              <div className="space-y-4">
                {category.solutions.map((solution, index) => (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      {/* Icon */}
                      <div className="shrink-0">
                        <div className={`w-14 h-14 rounded-xl ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <solution.icon className={`w-7 h-7 ${category.color}`} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h4 className="text-xl font-bold">{solution.title}</h4>
                          {solution.popular ? (
                            <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                              {solution.badge}
                            </span>
                          ) : (
                            <span className="px-3 py-1 text-xs font-medium bg-white/10 text-muted-foreground rounded-full">
                              {solution.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {solution.description}
                        </p>

                        {/* Features */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {solution.features.map((feature) => (
                            <span
                              key={feature}
                              className="inline-flex items-center gap-1.5 px-3 py-1 text-sm bg-white/5 rounded-full"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="shrink-0">
                        <Button className="glow-teal group" asChild>
                          <Link href={`/solutions/${solution.id}`}>
                            View Details
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-16 border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">
              Built for <span className="gradient-text">BUSY Software Users</span> in India
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our solutions are designed for businesses of all sizes using BUSY Accounting Software
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoIsThisFor.map((item, index) => (
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
        </div>
      </section>

      {/* Why Choose BusyNotify Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">
              What Makes <span className="gradient-text">BusyNotify</span> Different
            </h2>
            <p className="mt-4 text-muted-foreground">
              Why BUSY users across India choose BusyNotify for automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">
              Key <span className="gradient-text">Benefits</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Transform your BUSY Software experience with automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold">
              Need a Custom BUSY Integration?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              We can build custom automation solutions for your specific BUSY Software requirements.
              Let&apos;s discuss your needs.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="glow-teal group" asChild>
                <Link href="/contact">
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Footer Links */}
      <section className="py-12 border-t border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold mb-2">BUSY Software Solutions</h3>
            <p className="text-sm text-muted-foreground">Quick links to all our BUSY automation tools</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {seoFooterLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
