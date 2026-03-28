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
  CreditCard
} from "lucide-react";
import { Button } from "@/components/ui/button";

const freeDataTypes = [
  {
    icon: Users,
    title: "Customer Details",
    description: "Complete customer information including name, contact, address, GST, and account details synced from Busy Software.",
    keywords: "customer data, party details, customer master",
  },
  {
    icon: FileText,
    title: "Sales Invoices",
    description: "All sales invoices with item details, quantities, rates, taxes, and amounts. Perfect for sales analysis.",
    keywords: "sales invoice data, invoice export, billing data",
  },
  {
    icon: Receipt,
    title: "Payment Receipts",
    description: "Receipt records showing customer payments, dates, modes, and reference numbers for reconciliation.",
    keywords: "receipt data, payment records, collection data",
  },
  {
    icon: CreditCard,
    title: "Overdue Bills",
    description: "List of outstanding invoices beyond due dates with aging analysis. Critical for collection tracking.",
    keywords: "overdue bills, outstanding data, aging report",
  },
  {
    icon: Package,
    title: "Product Information",
    description: "Complete product/item master with SKUs, descriptions, units, prices, and stock information.",
    keywords: "product data, item master, inventory sync",
  },
  {
    icon: BarChart3,
    title: "Stock Summary",
    description: "Current stock levels by item and location. Track inventory across warehouses in real-time.",
    keywords: "stock data, inventory summary, warehouse stock",
  },
];

const pullMechanismFeatures = [
  {
    icon: RefreshCw,
    title: "Pull-Based Sync",
    description: "Unlike push systems that hit API limits, our app pulls data from your Google Sheet at set intervals. Reliable and scalable.",
  },
  {
    icon: Clock,
    title: "Configurable Intervals",
    description: "Choose how often your sheet updates - every 10 minutes, 30 minutes, hourly, or custom schedule. Your choice.",
  },
  {
    icon: Zap,
    title: "No Rate Limit Issues",
    description: "Since you pull data, not push, there are no Google API rate limits to worry about. Smooth operation always.",
  },
  {
    icon: Database,
    title: "Always Fresh Data",
    description: "Your sheet always reflects the latest from Busy Software. Open the sheet anytime for current information.",
  },
];

const customQueryFeatures = [
  {
    icon: Code,
    title: "Define Custom Queries",
    description: "Need specific data not in our free templates? Use our query management system to define exactly what you need.",
  },
  {
    icon: Settings,
    title: "We Build For You",
    description: "Not technical? We offer custom query development for a fee. Tell us what data you need, we create the query.",
  },
  {
    icon: Table,
    title: "Multiple Sheets",
    description: "Create multiple sheets for different purposes - sales analysis, inventory tracking, financial reports - all from one setup.",
  },
  {
    icon: BarChart3,
    title: "Your Analysis Tools",
    description: "Once data is in Google Sheets, use pivot tables, charts, formulas, or connect to Looker Studio for visualization.",
  },
];

const useCases = [
  {
    title: "Sales Performance Dashboard",
    description: "Track daily, weekly, monthly sales with automatic updates. Build charts and share with your team.",
    icon: TrendingUp,
  },
  {
    title: "Collection Tracking",
    description: "Monitor outstanding payments, aging reports, and collection efficiency in a shared sheet.",
    icon: CreditCard,
  },
  {
    title: "Inventory Management",
    description: "Keep stock levels updated for your warehouse team. No more manual exports from Busy.",
    icon: Package,
  },
  {
    title: "Custom Reports",
    description: "Build reports your way with pivot tables and formulas. Share with stakeholders automatically.",
    icon: BarChart3,
  },
];

const benefits = [
  {
    icon: RefreshCw,
    title: "Real-time Updates",
    description: "Your Google Sheet stays current with Busy Software. No manual exports, no outdated data.",
  },
  {
    icon: Zap,
    title: "No API Limits",
    description: "Pull-based architecture means no Google API rate limits. Run uninterrupted 24/7.",
  },
  {
    icon: Settings,
    title: "Fully Customizable",
    description: "Start with free templates, add custom queries as needed. Scale to any complexity.",
  },
  {
    icon: Download,
    title: "Familiar Interface",
    description: "Use Google Sheets you already know. Add formulas, charts, and share with your team easily.",
  },
];

const faqs = [
  {
    question: "What is Busy Accounting Software Google Sheet Automation?",
    answer: "It's a system that automatically syncs your Busy Software data to Google Sheets. Unlike traditional push-based sync, our system uses a pull mechanism where your Google Sheet fetches updated data at set intervals, avoiding API rate limits.",
  },
  {
    question: "How does the pull-based sync work?",
    answer: "Instead of pushing data from our server to Google (which hits limits), our app runs inside your Google Sheet and pulls data from our secure API at configured intervals - every 10 minutes, 30 minutes, or hourly. This ensures reliable, uninterrupted sync.",
  },
  {
    question: "What data is available for free?",
    answer: "We provide free data templates for: Customer Details, Sales Invoices, Payment Receipts, Overdue Bills, Product Information, and Stock Summary. These cover the most common reporting needs.",
  },
  {
    question: "Can I get custom data not in the free templates?",
    answer: "Yes! We offer a query management system where you can define custom queries for specific data needs. If you're not technical, we can build custom queries for you for a fee.",
  },
  {
    question: "How often does the data update?",
    description: "You choose the update frequency - every 10 minutes, 30 minutes, hourly, or a custom schedule. More frequent updates are available for plans that need near real-time data.",
  },
  {
    question: "Will this hit Google API limits?",
    answer: "No. Because our system uses a pull mechanism, the data request comes from within Google Sheets itself. This avoids the typical API rate limits that push-based systems encounter.",
  },
  {
    question: "Can I create multiple sheets for different purposes?",
    answer: "Absolutely. Create separate sheets for sales analysis, inventory tracking, financial reports, or any other purpose. Each can have different data and update schedules.",
  },
  {
    question: "What can I do with the data in Google Sheets?",
    answer: "Once data is in Google Sheets, you can use pivot tables, charts, formulas, conditional formatting, and share with team members. You can also connect to Google Looker Studio for advanced dashboards.",
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
                  <li className="text-foreground">Google Sheet Automation</li>
                </ol>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="gradient-text">Busy Accounting Software</span>{" "}
                Google Sheet Automation
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Automatically sync your <strong>Busy ERP data to Google Sheets</strong>. 
                Pull-based updates every 10 minutes. Free templates for customers, invoices, receipts, 
                and products. Custom queries available.
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
                  <span>Pull-Based Sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>No API Limits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Free Templates</span>
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
                      <p className="font-medium">Google Sheets Sync</p>
                      <p className="text-xs text-muted-foreground">Last sync: 2 mins ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-400">
                    <RefreshCw className="w-4 h-4" />
                    <span>Auto-updating</span>
                  </div>
                </div>
                
                {/* Sheet preview */}
                <div className="bg-white/5 rounded-xl p-4 overflow-hidden">
                  <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                    <Table className="w-3 h-3" />
                    <span>Sales_Data Sheet</span>
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

      {/* Problem-Solution Section */}
      <section className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Tired of Manual Data Exports?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Every business using Busy Software faces this problem:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Need to export reports from Busy, import to Excel daily"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Dashboard data is always outdated by hours or days"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Push-based sync hits Google API limits constantly"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Can't share real-time reports with team members"
                  </li>
                </ul>
                <p className="mt-4">
                  Manual exports waste time and create outdated data. You need automated, reliable sync.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Automated Data Sync That Actually Works
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  BusyNotify's Google Sheet automation solves these problems:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Pull-based sync avoids API limits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Data updates every 10 minutes automatically</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Free templates for common data needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Custom queries for specific requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
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
              Our unique approach avoids the common problems with traditional data sync
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

      {/* Free Data Templates Section */}
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
              Free Data <span className="gradient-text">Templates</span> Included
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Start with these ready-to-use data templates at no extra cost
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
              Need <span className="gradient-text">Custom Data</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our query management system lets you get exactly the data you need
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

      {/* Use Cases Section */}
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
              How Businesses Use <span className="gradient-text">Google Sheet Sync</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical applications that transform your reporting workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose <span className="gradient-text">BusyNotify Google Sheet Sync</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Built specifically for Busy Accounting Software users
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
      <section id="faq" className="py-20 border-y border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Frequently Asked Questions about <span className="gradient-text">Google Sheet Automation</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about syncing Busy Software to Google Sheets
            </p>
          </motion.div>

          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
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
              Ready to Automate Your Busy Software Reports?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Stop exporting data manually. Let BusyNotify sync your Busy Software data to Google Sheets 
              automatically. Start your free 3-day demo today.
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
