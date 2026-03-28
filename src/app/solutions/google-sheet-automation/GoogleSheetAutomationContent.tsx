"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  FileSpreadsheet,
  RefreshCw,
  Database,
  Clock,
  Code,
  BarChart3,
  Users,
  CheckCircle2,
  Zap,
  Settings,
  Download,
  ChevronRight,
  Building2,
  Table,
  FileText,
  Receipt,
  Package,
  TrendingUp,
  CreditCard,
  XCircle,
  PieChart,
  LineChart,
  Building,
  Factory,
  UserCheck,
  Briefcase,
  Plug
} from "lucide-react";
import { Button } from "@/components/ui/button";

const freeDataTypes = [
  {
    icon: Users,
    title: "Customer Data Sync (BUSY to Google Sheets)",
    description: "Complete customer information including name, contact, address, GST, and account details synced from BUSY Software to your Google Sheets.",
    keywords: "customer data sync, BUSY customer export, party details",
  },
  {
    icon: FileText,
    title: "Sales Invoice Data Export to Google Sheets",
    description: "All sales invoices with item details, quantities, rates, taxes, and amounts. Perfect for sales analysis and reporting dashboards.",
    keywords: "invoice data export, BUSY sales report, billing data sync",
  },
  {
    icon: Receipt,
    title: "Payment Receipt Data Sync",
    description: "Receipt records showing customer payments, dates, modes, and reference numbers for reconciliation and collection tracking.",
    keywords: "receipt data sync, payment records export, collection data",
  },
  {
    icon: CreditCard,
    title: "Overdue Bills & Outstanding Report",
    description: "List of outstanding invoices beyond due dates with aging analysis. Critical for collection tracking and cash flow management.",
    keywords: "overdue report, outstanding data sync, aging analysis",
  },
  {
    icon: Package,
    title: "Product & Item Master Export",
    description: "Complete product/item master with SKUs, descriptions, units, prices, and stock information for inventory management.",
    keywords: "product data export, item master sync, BUSY inventory",
  },
  {
    icon: BarChart3,
    title: "Stock Summary Data Sync",
    description: "Current stock levels by item and location. Track inventory across warehouses in real-time with automatic updates.",
    keywords: "stock data sync, inventory summary, warehouse stock",
  },
];

const pullMechanismFeatures = [
  {
    icon: RefreshCw,
    title: "Pull-Based Auto Sync",
    description: "Unlike push systems that hit API limits, our app pulls data from your Google Sheet at set intervals. Reliable and scalable for Indian businesses.",
  },
  {
    icon: Clock,
    title: "Configurable Sync Intervals",
    description: "Choose how often your sheet updates - every 10 minutes, 30 minutes, hourly, or custom schedule. Your choice based on business needs.",
  },
  {
    icon: Zap,
    title: "No Google API Rate Limits",
    description: "Since you pull data, not push, there are no Google API rate limits to worry about. Smooth operation 24/7 without interruptions.",
  },
  {
    icon: Database,
    title: "Always Fresh Data",
    description: "Your Google Sheet always reflects the latest from BUSY Software. Open the sheet anytime for current business information.",
  },
];

const customQueryFeatures = [
  {
    icon: Code,
    title: "Define Custom Queries",
    description: "Need specific data not in our free templates? Use our query management system to define exactly what you need from BUSY.",
  },
  {
    icon: Settings,
    title: "We Build Custom Queries",
    description: "Not technical? We offer custom query development for a fee. Tell us what data you need from BUSY, we create the query for you.",
  },
  {
    icon: Table,
    title: "Multiple Sheets Support",
    description: "Create multiple Google Sheets for different purposes - sales analysis, inventory tracking, financial reports - all from one BUSY setup.",
  },
  {
    icon: BarChart3,
    title: "Connect to BI Tools",
    description: "Once data is in Google Sheets, use pivot tables, charts, formulas, or connect to Looker Studio for advanced visualization.",
  },
];

const beforeAfterComparison = [
  {
    aspect: "Data Export",
    before: "Manual export from BUSY daily",
    after: "Automatic sync every 10 minutes",
  },
  {
    aspect: "Report Data",
    before: "Always outdated by hours/days",
    after: "Real-time fresh data always",
  },
  {
    aspect: "Team Access",
    before: "Email Excel files manually",
    after: "Shared Google Sheets live",
  },
  {
    aspect: "Dashboard",
    before: "Excel dependency, no live view",
    after: "Live dashboards, auto-updating",
  },
  {
    aspect: "Time Spent",
    before: "Hours on repetitive exports",
    after: "Fully automated, zero effort",
  },
  {
    aspect: "Analysis",
    before: "Static reports only",
    after: "Dynamic pivot tables, charts",
  },
];

const whoShouldUse = [
  { role: "Business Owners", desc: "Real-time dashboards to monitor business performance", icon: Briefcase },
  { role: "Accountants", desc: "Automated reporting without manual BUSY exports", icon: FileText },
  { role: "Sales Teams", desc: "Live sales tracking and customer data access", icon: TrendingUp },
  { role: "Inventory Managers", desc: "Real-time stock monitoring across locations", icon: Package },
  { role: "Data Analysts", desc: "Fresh data for analysis and BI tools", icon: BarChart3 },
  { role: "Finance Teams", desc: "Automated financial reports and reconciliation", icon: CreditCard },
  { role: "Operations Teams", desc: "Live operational data for decision making", icon: Settings },
  { role: "Management", desc: "Executive dashboards with key metrics", icon: Users },
];

const useCases = [
  {
    title: "Sales Performance Dashboard",
    description: "Track daily, weekly, monthly sales with automatic updates. Build charts in Google Sheets and share with your sales team.",
    icon: TrendingUp,
  },
  {
    title: "Collection Tracking System",
    description: "Monitor outstanding payments, aging reports, and collection efficiency in a shared Google Sheet accessible to finance team.",
    icon: CreditCard,
  },
  {
    title: "Inventory Management Dashboard",
    description: "Keep stock levels updated for your warehouse team. No more manual exports from BUSY - live stock data always available.",
    icon: Package,
  },
  {
    title: "Custom Business Reports",
    description: "Build reports your way with pivot tables and formulas. Share with stakeholders automatically without manual distribution.",
    icon: BarChart3,
  },
  {
    title: "Looker Studio Dashboards",
    description: "Connect Google Sheets to Looker Studio for professional visual dashboards. Live data flowing from BUSY to your BI tools.",
    icon: PieChart,
  },
  {
    title: "Team Collaboration",
    description: "Share live business data with team members. Everyone works on the same current data without version conflicts.",
    icon: Users,
  },
];

const benefits = [
  {
    icon: RefreshCw,
    title: "Real-Time Data Sync",
    description: "Your Google Sheet stays current with BUSY Software. No manual exports, no outdated reports, always fresh data.",
  },
  {
    icon: Zap,
    title: "No API Limits Issues",
    description: "Pull-based architecture means no Google API rate limits. Run uninterrupted 24/7 with reliable sync operation.",
  },
  {
    icon: Settings,
    title: "Fully Customizable",
    description: "Start with free templates, add custom queries as needed. Scale to any complexity for your business reporting.",
  },
  {
    icon: Download,
    title: "Familiar Google Sheets",
    description: "Use Google Sheets you already know. Add formulas, charts, pivot tables, and share with your team easily.",
  },
];

const faqs = [
  {
    question: "How to export BUSY data to Google Sheets automatically?",
    answer: "With BusyNotify's BUSY to Google Sheets integration, your BUSY data syncs automatically without manual export. Simply connect your BUSY Software, select the data templates you need (customers, invoices, stock, etc.), and your Google Sheet updates automatically every 10-60 minutes based on your preference.",
  },
  {
    question: "Can I automate BUSY reports to Google Sheets?",
    answer: "Yes! BusyNotify automates BUSY reports to Google Sheets including sales reports, customer lists, outstanding bills, stock summaries, and more. Set up once and your reports refresh automatically. You can also create custom reports using pivot tables and charts in Google Sheets.",
  },
  {
    question: "Can I create dashboards from BUSY data in Google Sheets?",
    answer: "Absolutely. Once your BUSY data is synced to Google Sheets, you can build live dashboards using Google Sheets charts, pivot tables, and conditional formatting. You can also connect to Google Looker Studio for advanced visual dashboards that update automatically from your synced data.",
  },
  {
    question: "Is BUSY API required for this integration?",
    answer: "No BUSY API is required. BusyNotify connects directly to your BUSY database and syncs data to Google Sheets without any API development. This is perfect for businesses that don't have technical resources or don't want to invest in API integration development.",
  },
  {
    question: "How to share BUSY reports with my team?",
    answer: "Since data syncs to Google Sheets, sharing is as simple as sharing the sheet with your team members. Give them view or edit access, and everyone sees the same live data. No more emailing Excel files or managing different versions.",
  },
  {
    question: "Can I connect BUSY to Google Data Studio or Looker Studio?",
    answer: "Yes! Since your BUSY data syncs to Google Sheets, you can easily connect Google Sheets as a data source in Looker Studio (Google Data Studio). Build professional visual dashboards that update automatically as your BUSY data refreshes.",
  },
  {
    question: "What is the difference between push and pull sync for Google Sheets?",
    answer: "Traditional push sync sends data from external servers to Google Sheets API, which often hits rate limits and fails. BusyNotify uses pull-based sync where an app inside Google Sheets fetches data from our secure API. This approach has no rate limit issues and ensures reliable 24/7 operation.",
  },
  {
    question: "What BUSY data can I sync to Google Sheets?",
    answer: "We provide free templates for: Customer Details, Sales Invoices, Payment Receipts, Overdue Bills, Product Information, and Stock Summary. You can also request custom queries for any other data from BUSY including ledger data, purchase orders, GST reports, and more.",
  },
  {
    question: "How often does the data update from BUSY to Google Sheets?",
    answer: "You choose the update frequency - every 10 minutes, 30 minutes, hourly, or a custom schedule. More frequent updates are available for plans that need near real-time data. Most businesses find 10-30 minute intervals ideal for reporting dashboards.",
  },
  {
    question: "Will this integration hit Google API limits?",
    answer: "No. Because our system uses a pull mechanism from within Google Sheets, the data request comes from Google Apps Script itself. This avoids the typical Google API rate limits that push-based sync systems encounter, ensuring reliable uninterrupted operation.",
  },
  {
    question: "Can I create multiple Google Sheets for different purposes?",
    answer: "Absolutely. Create separate Google Sheets for sales analysis, inventory tracking, financial reports, or any other purpose. Each sheet can have different data templates and update schedules. Perfect for different departments or reporting needs.",
  },
  {
    question: "What analysis can I do with BUSY data in Google Sheets?",
    answer: "Once data is in Google Sheets, you can use pivot tables for multi-dimensional analysis, charts for visualization, formulas for calculations, conditional formatting for alerts, and connect to Looker Studio for advanced dashboards. Share live reports with stakeholders automatically.",
  },
  {
    question: "Is this suitable for non-technical users?",
    answer: "Yes! BusyNotify is designed for business users, not developers. We provide ready-to-use templates that work out of the box. If you need custom data, our team can build queries for you. No coding or technical knowledge required.",
  },
  {
    question: "How is this different from BUSY's built-in export feature?",
    answer: "BUSY's export feature requires manual action every time you need fresh data. BusyNotify automates this completely - your Google Sheets update automatically without any manual intervention. Plus, you get live dashboards, team sharing, and BI tool connectivity.",
  },
  {
    question: "Can I use this for MIS reporting to management?",
    answer: "Perfect for MIS reporting. Create standardized reports in Google Sheets that update automatically. Management always sees current data. You can build executive dashboards with key metrics, charts, and KPIs that refresh from BUSY without any manual work.",
  },
  {
    question: "What's the setup time for BUSY Google Sheets integration?",
    answer: "Setup typically takes 24-48 hours. We connect to your BUSY database, configure the data sync, and set up your Google Sheets with the templates you need. No changes to your existing BUSY setup required. Start getting automated reports quickly.",
  },
];

export function GoogleSheetAutomationContent() {
  return (
    <div className="flex-1 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb for SEO */}
              <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2">
                  <li><Link href="/" className="hover:text-primary">Home</Link></li>
                  <li><ChevronRight className="w-4 h-4" /></li>
                  <li><Link href="/solutions" className="hover:text-primary">Solutions</Link></li>
                  <li><ChevronRight className="w-4 h-4" /></li>
                  <li className="text-foreground">BUSY Google Sheets Integration</li>
                </ol>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="gradient-text">Sync BUSY to Google Sheets</span>{" "}
                (Automatic Data Export & Reports)
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Automatically sync <strong>BUSY Accounting Software data to Google Sheets</strong>. 
                Get real-time sales, invoices, customers, stock, and outstanding reports without manual export. 
                Build dashboards, share reports with team, and automate your business analysis.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="glow-teal group" asChild>
                  <Link href="/pricing">
                    Start Free Demo
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#how-it-works">See How It Works</Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Real-Time Sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>No API Limits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Free Templates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>BUSY Integration</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                      <FileSpreadsheet className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">BUSY → Google Sheets</p>
                      <p className="text-xs text-muted-foreground">Last sync: 2 mins ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-400">
                    <RefreshCw className="w-4 h-4" />
                    <span>Auto-syncing</span>
                  </div>
                </div>
                
                {/* Sheet preview */}
                <div className="bg-white/5 rounded-xl p-4 overflow-hidden">
                  <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                    <Table className="w-3 h-3" />
                    <span>BUSY_Sales_Data Sheet</span>
                  </div>
                  
                  {/* Mock spreadsheet grid */}
                  <div className="text-xs font-mono">
                    <div className="grid grid-cols-4 gap-2 mb-2 text-muted-foreground border-b border-border pb-2">
                      <span>Invoice #</span>
                      <span>Customer</span>
                      <span>Amount</span>
                      <span>Date</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-green-400">
                      <span>INV-0892</span>
                      <span>Sharma Traders</span>
                      <span>₹45,000</span>
                      <span>15 Jan</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 mt-1">
                      <span>INV-0893</span>
                      <span>Gupta & Co</span>
                      <span>₹32,500</span>
                      <span>15 Jan</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 mt-1">
                      <span>INV-0894</span>
                      <span>Patel Bros</span>
                      <span>₹78,000</span>
                      <span>15 Jan</span>
                    </div>
                  </div>
                </div>
                
                {/* Sync status */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Next sync in:</span>
                  <span className="font-mono text-primary">08:24</span>
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-card rounded-lg px-3 py-2 shadow-xl hidden lg:block"
              >
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Every 10 min</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Awareness Section */}
      <section className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="text-red-400">❗ Problems</span> with BUSY Data Export
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Every business using BUSY Software faces these data reporting challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { problem: "Manual export to Excel daily", impact: "Hours wasted on repetitive work" },
              { problem: "Reports always outdated", impact: "Decisions based on old data" },
              { problem: "Difficult to share with team", impact: "Multiple file versions chaos" },
              { problem: "No real-time dashboard", impact: "Cannot monitor business live" },
              { problem: "Repetitive export work", impact: "Staff time wasted daily" },
              { problem: "Cannot connect to BI tools", impact: "Limited analysis capability" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-5 border-l-4 border-red-400/50"
              >
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{item.problem}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After Comparison */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="text-red-400">Without Automation</span> vs <span className="gradient-text">With BusyNotify</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Transform your BUSY data reporting workflow
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full glass-card rounded-2xl overflow-hidden">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold">Aspect</th>
                  <th className="text-left p-4 font-semibold text-red-400">Without Automation</th>
                  <th className="text-left p-4 font-semibold text-green-400">With BusyNotify</th>
                </tr>
              </thead>
              <tbody>
                {beforeAfterComparison.map((row, index) => (
                  <tr key={index} className="border-b border-border/50 last:border-0">
                    <td className="p-4 font-medium">{row.aspect}</td>
                    <td className="p-4 text-muted-foreground">{row.before}</td>
                    <td className="p-4 text-green-400">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pull vs Push Section */}
      <section id="how-it-works" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why <span className="gradient-text">Pull-Based Sync</span> is Better
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our unique approach avoids the common problems with traditional BUSY data sync
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Traditional Push */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8 border-red-500/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <span className="text-red-400 text-xl">✗</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Traditional Push Sync</h3>
                  <p className="text-sm text-muted-foreground">What others use</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Server pushes data to Google Sheets API</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Quickly hits Google's rate limits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Sync fails silently or errors frequently</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Unreliable for business-critical data</span>
                </li>
              </ul>
            </motion.div>

            {/* Our Pull */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8 border-green-500/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Our Pull-Based Sync</h3>
                  <p className="text-sm text-muted-foreground">What BusyNotify uses</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                  <span>App inside Google Sheet pulls data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                  <span>No external API calls to Google</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                  <span>No rate limit issues ever</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-1" />
                  <span>Reliable 24/7 operation</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Pull Mechanism Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pullMechanismFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-built Templates Section */}
      <section id="features" className="py-20 border-y border-border bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Pre-built <span className="gradient-text">Google Sheets Templates for BUSY Data</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Start with these ready-to-use data sync templates included at no extra cost
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeDataTypes.map((data, index) => (
              <motion.div
                key={data.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 group hover:border-primary/30 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <data.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {data.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-green-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Included free</span>
                </div>
                <meta itemProp="keywords" content={data.keywords} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-Time Dashboards Section */}
      <section className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              📊 Build <span className="gradient-text">Real-Time Dashboards</span> from BUSY Data
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform your BUSY data into live business intelligence dashboards
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Google Sheets Charts
                </h3>
                <p className="text-muted-foreground">
                  Build live charts directly in Google Sheets. Sales trends, stock levels, 
                  collection status - all updating automatically from BUSY.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-primary" />
                  Looker Studio Integration
                </h3>
                <p className="text-muted-foreground">
                  Connect your synced Google Sheets to Google Looker Studio for 
                  professional visual dashboards with drill-down capabilities.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <LineChart className="w-5 h-5 text-primary" />
                  Live Business Reports
                </h3>
                <p className="text-muted-foreground">
                  Share live reports with management. No more outdated PDFs - 
                  stakeholders always see current business metrics.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Sales Dashboard Preview
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                  <p className="text-xs text-muted-foreground">Today's Sales</p>
                  <p className="text-2xl font-bold text-green-400">₹4.2 L</p>
                  <p className="text-xs text-green-400">↑ 12% vs yesterday</p>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
                  <p className="text-xs text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold text-primary">₹85 L</p>
                  <p className="text-xs text-primary">↑ 8% vs last month</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Top Customers</span>
                  <span className="text-xs text-primary">Live from BUSY</span>
                </div>
                {[
                  { name: "Sharma Traders", amount: "₹12.5 L" },
                  { name: "Gupta Enterprises", amount: "₹9.8 L" },
                  { name: "Patel Distributors", amount: "₹7.2 L" },
                ].map((customer, i) => (
                  <div key={i} className="flex justify-between text-sm py-1 border-b border-border/50 last:border-0">
                    <span>{customer.name}</span>
                    <span className="font-medium">{customer.amount}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BUSY API Alternative Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              🔌 <span className="gradient-text">BUSY Data Integration</span> Without API Complexity
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Get your BUSY data where you need it - no developers, no API coding required
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <Plug className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Plug-and-Play Integration</h3>
                    <p className="text-sm text-muted-foreground">No technical setup required</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {[
                    "No BUSY API development needed",
                    "No developer resources required",
                    "No complex integration projects",
                    "Works with your existing BUSY setup",
                    "Setup in hours, not weeks",
                    "Maintained and updated by us",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-lg text-muted-foreground">
                Many businesses want to integrate BUSY with other systems but find the API route 
                too expensive, time-consuming, or technically challenging.
              </p>
              <p className="text-lg text-muted-foreground">
                BusyNotify provides a practical alternative: get your BUSY data into Google Sheets 
                automatically, then connect to any tool that supports Google Sheets - Looker Studio, 
                Power BI, custom applications, and more.
              </p>
              <div className="glass-card rounded-xl p-4 mt-4">
                <p className="text-sm font-medium mb-2">Perfect for businesses that need:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Quick data integration without IT projects</li>
                  <li>• Cost-effective alternative to custom development</li>
                  <li>• Flexible data access for multiple tools</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Queries Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Need <span className="gradient-text">Custom BUSY Data</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our query management system lets you get exactly the data you need from BUSY
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customQueryFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 flex items-start gap-4"
              >
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Use This Section */}
      <section className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              💼 Who Should Use <span className="gradient-text">BUSY Google Sheets Integration</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Perfect for anyone who needs quick access to BUSY data for reporting and analysis
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {whoShouldUse.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card rounded-xl p-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{item.role}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              How Businesses Use <span className="gradient-text">BUSY to Google Sheets</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical applications that transform your BUSY reporting workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 flex items-start gap-4"
              >
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why Choose <span className="gradient-text">BUSY Google Sheets Integration</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Built specifically for BUSY Accounting Software users in India
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
                <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Frequently Asked Questions about <span className="gradient-text">BUSY Google Sheets Integration</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about syncing BUSY Software to Google Sheets
            </p>
          </motion.div>

          <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card rounded-xl p-6"
                itemProp="mainEntity"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3 className="font-semibold text-lg mb-3" itemProp="name">
                  {faq.question}
                </h3>
                <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p className="text-muted-foreground leading-relaxed" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
              <FileSpreadsheet className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Sync BUSY to Google Sheets Automatically?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Stop exporting data manually. Let BusyNotify sync your BUSY Software data to Google Sheets 
              automatically. Build dashboards, share reports, and save hours daily.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="glow-teal group" asChild>
                <Link href="/pricing">
                  Start Free Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/solutions">
                  <Building2 className="mr-2 w-4 h-4" />
                  View All Solutions
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Setup in 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
