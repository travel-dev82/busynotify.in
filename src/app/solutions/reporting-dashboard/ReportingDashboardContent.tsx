"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  LayoutDashboard, 
  FileText, 
  Users, 
  Smartphone, 
  Clock,
  BookOpen,
  Receipt,
  ShoppingCart,
  TrendingUp,
  FileCheck,
  ClipboardList,
  ArrowUpCircle,
  ArrowDownCircle,
  Package,
  Building2,
  BarChart3,
  PieChart,
  RefreshCw,
  CheckCircle2,
  Zap,
  Shield,
  Settings,
  ChevronRight,
  UserPlus,
  Eye,
  Globe,
  Monitor,
  Database
} from "lucide-react";
import { Button } from "@/components/ui/button";

const reportsList = [
  {
    category: "Financial Reports",
    icon: BookOpen,
    color: "text-blue-400",
    reports: [
      { name: "Ledger Report", description: "Complete account statements with all transactions, balances, and party details" },
      { name: "Bills Receivable", description: "Track all pending bills and outstanding amounts from customers" },
      { name: "Receipt Register", description: "Record of all payment receipts with dates, parties, and amounts" },
      { name: "Payment Register", description: "Complete payment history with supplier and expense details" },
    ],
  },
  {
    category: "Sales Reports",
    icon: TrendingUp,
    color: "text-green-400",
    reports: [
      { name: "Sales List", description: "Item-wise and invoice-wise sales data with customer information" },
      { name: "Sales Register", description: "Complete sales summary with tax details and party-wise breakdown" },
      { name: "Sales Orders", description: "Track all sales orders with pending and fulfilled status" },
      { name: "Sales Quotations", description: "Monitor quotations sent, pending, and converted to orders" },
      { name: "Sales Return", description: "Track returns, reasons, and credit note generation" },
    ],
  },
  {
    category: "Purchase Reports",
    icon: ShoppingCart,
    color: "text-yellow-400",
    reports: [
      { name: "Purchase Register", description: "Complete purchase summary with supplier and item details" },
      { name: "Purchase Orders", description: "Track all POs with pending deliveries and supplier status" },
      { name: "Purchase Return", description: "Monitor returns to suppliers and debit note tracking" },
    ],
  },
  {
    category: "Inventory Reports",
    icon: Package,
    color: "text-purple-400",
    reports: [
      { name: "Material Receipt", description: "Track all material inward with supplier and quantity details" },
      { name: "Material Issue", description: "Monitor material consumption and transfers between locations" },
    ],
  },
  {
    category: "Analytics Reports",
    icon: BarChart3,
    color: "text-primary",
    reports: [
      { name: "Revisit Gap Report", description: "Track customer visit frequency and identify repeat customers" },
    ],
  },
];

const dashboardFeatures = [
  {
    icon: Monitor,
    title: "Web Portal Dashboard",
    description: "Access all reports from any browser. Desktop, tablet, or laptop - responsive design works everywhere.",
  },
  {
    icon: Smartphone,
    title: "Progressive Web App",
    description: "Install as an app on your phone. Access reports on-the-go without app store downloads.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Reports available round the clock. Check business performance anytime, anywhere.",
  },
  {
    icon: RefreshCw,
    title: "Real-time Sync",
    description: "Data syncs with Busy Software automatically. Always see the latest transactions.",
  },
];

const salesmanFeatures = [
  {
    icon: UserPlus,
    title: "Create Multiple Salesmen",
    description: "Admin can create unlimited salesman accounts. Each gets controlled access to relevant reports.",
  },
  {
    icon: Eye,
    title: "Controlled Visibility",
    description: "Define what each salesman can see. Restrict by customer, territory, or report type.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Track individual salesman performance. See sales, collections, and customer visits.",
  },
  {
    icon: Shield,
    title: "Secure Access",
    description: "Each user has unique credentials. Activity logs maintain complete audit trail.",
  },
];

const pwaFeatures = [
  {
    icon: Globe,
    title: "No App Store Needed",
    description: "Install directly from browser. No Play Store or App Store required.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed. Reports load in seconds even on slow connections.",
  },
  {
    icon: Database,
    title: "Offline Cache",
    description: "Recently viewed reports cached for quick access. Works with limited connectivity.",
  },
  {
    icon: Settings,
    title: "Push Notifications",
    description: "Get alerts for important reports and thresholds. Stay informed proactively.",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Instant Access",
    description: "No waiting for IT to generate reports. Self-service access to all business data.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Multiple team members access reports simultaneously. No conflicts, no delays.",
  },
  {
    icon: TrendingUp,
    title: "Better Decisions",
    description: "Real-time insights lead to faster, data-driven business decisions.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Designed for mobile usage. Check reports on the field, in meetings, anywhere.",
  },
];

const useCases = [
  {
    title: "Sales Team on the Field",
    description: "Salesmen check outstanding balances and sales history before customer meetings.",
    icon: Users,
  },
  {
    title: "Management Reviews",
    description: "Business owners track daily sales, purchases, and collections from anywhere.",
    icon: TrendingUp,
  },
  {
    title: "Inventory Monitoring",
    description: "Warehouse teams track material movement and stock levels in real-time.",
    icon: Package,
  },
  {
    title: "Accounts Reconciliation",
    description: "Accounts team accesses ledgers and registers for quick reconciliation.",
    icon: BookOpen,
  },
];

const faqs = [
  {
    question: "What is the Reporting Dashboard for Busy Accounting Software?",
    answer: "The Reporting Dashboard is a web-based portal and Progressive Web App (PWA) that provides 24/7 access to all your Busy Software reports. It includes financial reports, sales reports, purchase reports, inventory reports, and analytics - all accessible from any device.",
  },
  {
    question: "Which reports are available in the dashboard?",
    answer: "The dashboard includes: Ledger Report, Bills Receivable, Sales List, Sales Register, Sales Orders, Sales Quotations, Sales Return, Purchase Register, Purchase Orders, Purchase Return, Receipt Register, Payment Register, Material Receipt, Material Issue, and Revisit Gap Report for customer tracking.",
  },
  {
    question: "Can I create multiple users for my team?",
    answer: "Yes! As admin, you can create unlimited salesman and team member accounts. Each user gets controlled access based on your permissions. You can restrict access by customer, territory, or report type.",
  },
  {
    question: "What is the Revisit Gap Report?",
    answer: "The Revisit Gap Report tracks customer visit frequency. It helps you identify which customers visit regularly, which haven't visited in a while, and patterns in customer behavior. This helps in customer retention and follow-up strategies.",
  },
  {
    question: "How does the PWA work?",
    answer: "The Progressive Web App installs directly from your browser - no app store needed. It works on Android, iOS, and desktop. Once installed, access reports like a native app with fast loading and offline caching.",
  },
  {
    question: "Is the data real-time?",
    answer: "Yes, the dashboard syncs with your Busy Accounting Software automatically. Reports show the latest transactions within minutes of entry. No manual refresh or data export required.",
  },
  {
    question: "Can I access reports on mobile?",
    answer: "Absolutely! The dashboard is fully responsive and works on any smartphone. Install the PWA for an app-like experience. Check reports on-the-go, in meetings, or from anywhere.",
  },
  {
    question: "How secure is the access?",
    answer: "Each user has unique login credentials. Data is transmitted over encrypted connections. Admin can control what each user sees. Complete activity logs maintain audit trail for compliance.",
  },
];

export function ReportingDashboardContent() {
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
                  <li className="text-foreground">Reporting Dashboard</li>
                </ol>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="gradient-text">Reporting Dashboard</span>{" "}
                & PWA for Busy Software
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Access <strong>15+ comprehensive reports</strong> 24/7 via web portal and mobile PWA. 
                Create multiple salesmen, track customer revisits, and monitor business performance 
                in real-time from any device.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="glow-teal group" asChild>
                  <Link href="/pricing">
                    Start Free Demo
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#reports">View All Reports</Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>15+ Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Multi-User Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>PWA Enabled</span>
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
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <LayoutDashboard className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Business Dashboard</p>
                      <p className="text-xs text-muted-foreground">Real-time overview</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-green-400">
                    <RefreshCw className="w-3 h-3" />
                    <span>Live</span>
                  </div>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground">Today's Sales</p>
                    <p className="text-2xl font-bold text-green-400">₹2.4L</p>
                    <p className="text-xs text-green-400">↑ 12% from yesterday</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground">Outstanding</p>
                    <p className="text-2xl font-bold text-yellow-400">₹18.5L</p>
                    <p className="text-xs text-muted-foreground">45 parties</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground">Receipts Today</p>
                    <p className="text-2xl font-bold text-primary">₹85K</p>
                    <p className="text-xs text-muted-foreground">8 entries</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground">Salesmen Active</p>
                    <p className="text-2xl font-bold text-blue-400">5</p>
                    <p className="text-xs text-muted-foreground">On field today</p>
                  </div>
                </div>
                
                {/* Quick Actions */}
                <div className="flex gap-2">
                  <div className="flex-1 bg-white/5 rounded-lg p-3 text-center">
                    <FileText className="w-5 h-5 mx-auto text-primary mb-1" />
                    <p className="text-xs">Ledger</p>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-lg p-3 text-center">
                    <TrendingUp className="w-5 h-5 mx-auto text-green-400 mb-1" />
                    <p className="text-xs">Sales</p>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-lg p-3 text-center">
                    <ShoppingCart className="w-5 h-5 mx-auto text-yellow-400 mb-1" />
                    <p className="text-xs">Purchase</p>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-lg p-3 text-center">
                    <Package className="w-5 h-5 mx-auto text-purple-400 mb-1" />
                    <p className="text-xs">Stock</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-card rounded-lg px-3 py-2 shadow-xl hidden lg:block"
              >
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">PWA Ready</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Features Section */}
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
              Access Reports <span className="gradient-text">Your Way</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Web portal for desktop work, PWA for mobile access - both synced in real-time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {dashboardFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Reports Section */}
      <section id="reports" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="gradient-text">15+ Comprehensive Reports</span> Available
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Every report you need to run your business, accessible 24/7 from any device
            </p>
          </motion.div>

          <div className="space-y-6">
            {reportsList.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                  <span className="text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded-full">
                    {category.reports.length} reports
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.reports.map((report) => (
                    <div key={report.name} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-sm">{report.name}</p>
                          <p className="text-xs text-muted-foreground mt-1">{report.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revisit Gap Report Highlight */}
      <section className="py-20 border-y border-border bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full text-sm text-primary mb-4">
                <BarChart3 className="w-4 h-4" />
                <span>Unique Analytics</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="gradient-text">Revisit Gap Report</span> - Know Your Customers Better
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Track customer visit patterns and identify buying behavior. Know which customers 
                visit regularly, which are becoming inactive, and when to follow up for repeat business.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Identify Repeat Customers</p>
                    <p className="text-sm text-muted-foreground">See who buys frequently and reward loyalty</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-medium">Spot At-Risk Customers</p>
                    <p className="text-sm text-muted-foreground">Find customers who haven't purchased recently</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Optimize Follow-ups</p>
                    <p className="text-sm text-muted-foreground">Time your outreach based on buying patterns</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-6"
            >
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Customer Revisit Analysis
              </h4>
              
              <div className="space-y-3">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Active (This Month)</span>
                    <span className="font-bold text-green-400">124</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Purchased within 30 days</p>
                </div>
                
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Needs Attention (30-60 days)</span>
                    <span className="font-bold text-yellow-400">45</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">No purchase in 30-60 days</p>
                </div>
                
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">At Risk (60+ days)</span>
                    <span className="font-bold text-red-400">23</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">No purchase in 60+ days</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Salesman Management Section */}
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
              <span className="gradient-text">Multi-Salesman Management</span> for Teams
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Create unlimited salesman accounts with controlled access - admin has full control
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {salesmanFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Salesman Demo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 glass-card rounded-2xl p-6"
          >
            <h4 className="font-semibold mb-4">Active Salesmen Performance</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4">Salesman</th>
                    <th className="text-left py-3 px-4">Territory</th>
                    <th className="text-right py-3 px-4">Customers</th>
                    <th className="text-right py-3 px-4">This Month</th>
                    <th className="text-right py-3 px-4">Collection</th>
                    <th className="text-center py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Rajesh Kumar</td>
                    <td className="py-3 px-4 text-muted-foreground">North Zone</td>
                    <td className="py-3 px-4 text-right">45</td>
                    <td className="py-3 px-4 text-right text-green-400">₹4.2L</td>
                    <td className="py-3 px-4 text-right text-primary">₹3.8L</td>
                    <td className="py-3 px-4 text-center"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Active</span></td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Priya Sharma</td>
                    <td className="py-3 px-4 text-muted-foreground">South Zone</td>
                    <td className="py-3 px-4 text-right">38</td>
                    <td className="py-3 px-4 text-right text-green-400">₹3.5L</td>
                    <td className="py-3 px-4 text-right text-primary">₹2.9L</td>
                    <td className="py-3 px-4 text-center"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Active</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Amit Patel</td>
                    <td className="py-3 px-4 text-muted-foreground">West Zone</td>
                    <td className="py-3 px-4 text-right">52</td>
                    <td className="py-3 px-4 text-right text-green-400">₹5.1L</td>
                    <td className="py-3 px-4 text-right text-primary">₹4.5L</td>
                    <td className="py-3 px-4 text-center"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Active</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PWA Features Section */}
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
              <span className="gradient-text">Progressive Web App</span> Features
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              App-like experience without the app store - works on any device
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pwaFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
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
              How Teams Use the <span className="gradient-text">Reporting Dashboard</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world use cases for different roles in your organization
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
              Why Choose <span className="gradient-text">BusyNotify Reporting Dashboard</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform how your team accesses and uses business data
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
              Frequently Asked Questions about <span className="gradient-text">Reporting Dashboard</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about accessing reports for Busy Software
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
              <LayoutDashboard className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready for 24/7 Report Access?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Give your team instant access to all Busy Software reports. Create multiple salesmen, 
              track customer behavior, and monitor business in real-time. Start your free 3-day demo today.
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
