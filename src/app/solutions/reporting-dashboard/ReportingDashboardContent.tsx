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
  Database,
  IndianRupee,
  Calculator,
  Building,
  TruckIcon,
  UserCheck,
  XCircle,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

// SEO-Optimized Reports List with Keywords
const reportsList = [
  {
    category: "Financial Reports",
    icon: BookOpen,
    color: "text-blue-400",
    reports: [
      { name: "Ledger Report (Party Ledger / Account Statement)", description: "View complete party-wise ledger from BUSY online. Check all transactions, balances, and account statements without opening BUSY desktop.", keyword: "BUSY ledger online" },
      { name: "Outstanding Report (Bills Receivable / Party Outstanding)", description: "Track all pending bills and outstanding amounts from customers. Age-wise analysis of receivables from BUSY data.", keyword: "BUSY outstanding report mobile" },
      { name: "Receipt Register (Payment Receipts)", description: "Record of all payment receipts with dates, parties, and amounts from BUSY.", keyword: "BUSY receipt register" },
      { name: "Payment Register (Payment Vouchers)", description: "Complete payment history with supplier and expense details from BUSY.", keyword: "BUSY payment register" },
    ],
  },
  {
    category: "Sales Reports",
    icon: TrendingUp,
    color: "text-green-400",
    reports: [
      { name: "Sales List (Item-wise Sales)", description: "Item-wise and invoice-wise sales data with customer information from BUSY.", keyword: "BUSY sales list report" },
      { name: "Sales Register (GST Sales Report)", description: "Complete sales summary with tax details and party-wise breakdown. GST-compliant sales report from BUSY.", keyword: "BUSY GST sales report" },
      { name: "Sales Orders (Pending Orders)", description: "Track all sales orders with pending and fulfilled status from BUSY.", keyword: "BUSY sales order tracking" },
      { name: "Sales Quotations (Quotation Tracking)", description: "Monitor quotations sent, pending, and converted to orders from BUSY.", keyword: "BUSY quotation report" },
      { name: "Sales Return (Credit Notes)", description: "Track returns, reasons, and credit note generation from BUSY.", keyword: "BUSY sales return report" },
    ],
  },
  {
    category: "Purchase Reports",
    icon: ShoppingCart,
    color: "text-yellow-400",
    reports: [
      { name: "Purchase Register (Purchase Summary)", description: "Complete purchase summary with supplier and item details from BUSY.", keyword: "BUSY purchase register" },
      { name: "Purchase Orders (PO Tracking)", description: "Track all POs with pending deliveries and supplier status from BUSY.", keyword: "BUSY purchase order report" },
      { name: "Purchase Return (Debit Notes)", description: "Monitor returns to suppliers and debit note tracking from BUSY.", keyword: "BUSY purchase return" },
    ],
  },
  {
    category: "Inventory Reports",
    icon: Package,
    color: "text-purple-400",
    reports: [
      { name: "Material Receipt (Stock Inward)", description: "Track all material inward with supplier and quantity details from BUSY.", keyword: "BUSY material receipt report" },
      { name: "Material Issue (Stock Consumption)", description: "Monitor material consumption and transfers between locations from BUSY.", keyword: "BUSY material issue report" },
    ],
  },
  {
    category: "Analytics Reports",
    icon: BarChart3,
    color: "text-primary",
    reports: [
      { name: "Customer Follow-Up Report (Revisit Gap Analysis)", description: "Track customer visit frequency, identify repeat customers, and spot at-risk customers for follow-up.", keyword: "BUSY customer revisit tracking" },
    ],
  },
];

const dashboardFeatures = [
  {
    icon: Monitor,
    title: "Web Portal Dashboard",
    description: "Access all BUSY reports from any browser. Desktop, tablet, or laptop - responsive design works everywhere.",
  },
  {
    icon: Smartphone,
    title: "Mobile PWA App",
    description: "Install as an app on your phone. Access BUSY reports on-the-go without app store downloads.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "BUSY reports available round the clock. Check business performance anytime, anywhere - even when BUSY is closed.",
  },
  {
    icon: RefreshCw,
    title: "Real-time Sync",
    description: "Data syncs with BUSY Software automatically. Always see the latest transactions without manual export.",
  },
];

const salesmanFeatures = [
  {
    icon: UserPlus,
    title: "Create Multiple Salesmen",
    description: "Admin can create unlimited salesman accounts. Each gets controlled access to relevant BUSY reports.",
  },
  {
    icon: Eye,
    title: "Controlled Visibility",
    description: "Define what each salesman can see. Restrict by customer, territory, or report type from BUSY data.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Track individual salesman performance. See sales, collections, and customer visits from BUSY.",
  },
  {
    icon: Shield,
    title: "Secure Access",
    description: "Each user has unique credentials. Activity logs maintain complete audit trail for compliance.",
  },
];

const pwaFeatures = [
  {
    icon: Globe,
    title: "No App Store Needed",
    description: "Install directly from browser. No Play Store or App Store required for BUSY reports access.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed. BUSY reports load in seconds even on slow connections.",
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
    description: "No waiting for IT to generate reports. Self-service access to all BUSY business data.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Multiple team members access BUSY reports simultaneously. No conflicts, no delays.",
  },
  {
    icon: TrendingUp,
    title: "Better Decisions",
    description: "Real-time insights from BUSY lead to faster, data-driven business decisions.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Designed for mobile usage. Check BUSY reports on the field, in meetings, anywhere.",
  },
];

// Role-based "Who Is This For" Section
const roleBasedUsers = [
  {
    icon: Building2,
    title: "Business Owners",
    description: "Check sales, outstanding, and collections anytime from mobile. Monitor business performance without calling the office. Access BUSY data remotely.",
    benefit: "BUSY owner dashboard for remote monitoring",
  },
  {
    icon: Users,
    title: "Salesmen / Field Staff",
    description: "Check customer balance and outstanding before visits. Access sales history on mobile. No need to call office for customer data from BUSY.",
    benefit: "BUSY reports for salesman on mobile",
  },
  {
    icon: Calculator,
    title: "Accountants / CAs",
    description: "Access ledgers and registers without opening BUSY desktop. Quick reconciliation from anywhere. Multi-company support for CA firms.",
    benefit: "BUSY reports for accountant access",
  },
  {
    icon: TruckIcon,
    title: "Distributors / Wholesalers",
    description: "Monitor stock and sales remotely. Track salesman performance. Check outstanding from mobile without being at office.",
    benefit: "BUSY dashboard for distributors",
  },
  {
    icon: UserCheck,
    title: "Managers",
    description: "Track team performance in real-time. Monitor sales targets and collections. Approve requests remotely via mobile.",
    benefit: "BUSY reports for managers",
  },
];

// Problem Section - Why Do BUSY Users Need This
const problems = [
  {
    problem: "BUSY is desktop-based",
    solution: "No remote access to data",
    icon: Monitor,
  },
  {
    problem: "Owners can't check data outside office",
    solution: "Must be at office computer",
    icon: Building2,
  },
  {
    problem: "Salesmen don't have access",
    solution: "Call office for customer info",
    icon: Users,
  },
  {
    problem: "Accountants depend on operator",
    solution: "Wait for reports to be generated",
    icon: Calculator,
  },
  {
    problem: "Reports not mobile-friendly",
    solution: "Difficult to view on phone",
    icon: Smartphone,
  },
];

// BUSY Desktop vs BusyNotify Comparison
const busyComparison = [
  { aspect: "Mobile Access", busy: "❌ No", busynotify: "✅ Yes - PWA enabled", better: true },
  { aspect: "Remote Access", busy: "❌ Desktop only", busynotify: "✅ Anywhere via web", better: true },
  { aspect: "Multi-user Access", busy: "⚠️ Limited licenses", busynotify: "✅ Unlimited users", better: true },
  { aspect: "Salesman Access", busy: "❌ Not available", busynotify: "✅ Controlled access", better: true },
  { aspect: "Real-time Dashboard", busy: "❌ Must open BUSY", busynotify: "✅ Always available", better: true },
  { aspect: "Mobile App", busy: "❌ No mobile app", busynotify: "✅ PWA for all devices", better: true },
  { aspect: "Field Staff Access", busy: "❌ No", busynotify: "✅ Territory-based access", better: true },
  { aspect: "24/7 Availability", busy: "⚠️ When BUSY is open", busynotify: "✅ Always online", better: true },
];

const useCases = [
  {
    title: "Sales Team on the Field",
    description: "Salesmen check outstanding balances and sales history from BUSY before customer meetings on their mobile.",
    icon: Users,
  },
  {
    title: "Management Reviews",
    description: "Business owners track daily sales, purchases, and collections from BUSY anywhere via mobile dashboard.",
    icon: TrendingUp,
  },
  {
    title: "Inventory Monitoring",
    description: "Warehouse teams track material movement and stock levels from BUSY in real-time on mobile.",
    icon: Package,
  },
  {
    title: "Accounts Reconciliation",
    description: "Accounts team accesses ledgers and registers from BUSY for quick reconciliation without opening BUSY desktop.",
    icon: BookOpen,
  },
];

// Expanded SEO-Optimized FAQs (16+ questions)
const faqs = [
  {
    question: "Can I access BUSY reports on mobile?",
    answer: "Yes! BusyNotify provides a mobile dashboard and Progressive Web App (PWA) that lets you access all BUSY reports from your smartphone. View ledger, outstanding, sales, purchase, and stock reports from anywhere without opening BUSY desktop.",
  },
  {
    question: "Can I check BUSY ledger without opening the software?",
    answer: "Absolutely! BusyNotify Dashboard provides online access to BUSY ledger reports. You can view party-wise ledger, account statements, and transaction history from any device with internet - no need to open BUSY desktop or be at the office computer.",
  },
  {
    question: "How to view BUSY data online?",
    answer: "BusyNotify connects to your BUSY Accounting Software and provides a web-based dashboard. Simply log in from any browser or install the PWA on your mobile to access all BUSY reports online. Data syncs automatically in real-time.",
  },
  {
    question: "Can salesmen access BUSY reports?",
    answer: "Yes! BusyNotify allows you to create unlimited salesman accounts with controlled access. Each salesman can view relevant reports (outstanding, sales history, customer balance) on their mobile. Admin controls what data each salesman can see.",
  },
  {
    question: "Is this a BUSY cloud solution?",
    answer: "BusyNotify is an online dashboard that works with your existing BUSY desktop software. It syncs data from BUSY to provide cloud-like access. Your BUSY data remains on your computer while BusyNotify provides remote/mobile access to reports.",
  },
  {
    question: "Can I check outstanding report remotely?",
    answer: "Yes! The outstanding report (bills receivable) from BUSY is available on the BusyNotify dashboard. Check party-wise outstanding, age-wise analysis, and pending amounts from your mobile or any web browser - no need to be at the office.",
  },
  {
    question: "Does it work with BUSY desktop?",
    answer: "Yes, BusyNotify works with BUSY Desktop (single user), BUSY on LAN, and BUSY Server editions. We support BUSY 17, BUSY 18, BUSY 21, and all major versions. Setup is handled by our team.",
  },
  {
    question: "Can multiple users access reports?",
    answer: "Absolutely! BusyNotify supports unlimited users. Create accounts for owners, managers, salesmen, and accountants. Each user gets controlled access based on their role. Admin has full control over permissions.",
  },
  {
    question: "What reports are available from BUSY?",
    answer: "BusyNotify provides 15+ reports from BUSY: Ledger Report (Party Ledger), Outstanding Report (Bills Receivable), Sales List, Sales Register (GST Sales), Sales Orders, Sales Quotations, Sales Return, Purchase Register, Purchase Orders, Purchase Return, Receipt Register, Payment Register, Material Receipt, Material Issue, and Customer Follow-Up (Revisit Gap) Report.",
  },
  {
    question: "How does the PWA work for BUSY reports?",
    answer: "The Progressive Web App (PWA) installs directly from your browser - no app store needed. Once installed, you can access BUSY reports like a native app on Android, iOS, or desktop. It works offline for recently viewed reports and loads fast even on slow connections.",
  },
  {
    question: "Is the data real-time from BUSY?",
    answer: "Yes, the dashboard syncs with your BUSY Accounting Software automatically. Reports show the latest transactions within minutes of entry in BUSY. No manual refresh or data export required.",
  },
  {
    question: "Can I create multiple salesmen accounts?",
    answer: "Yes! As admin, you can create unlimited salesman and team member accounts. Each user gets controlled access based on your permissions. You can restrict access by customer, territory, or report type from BUSY.",
  },
  {
    question: "What is the Customer Follow-Up (Revisit Gap) Report?",
    answer: "The Revisit Gap Report tracks customer visit patterns from BUSY data. It identifies which customers buy frequently, which haven't purchased recently (30-60 days), and which are at-risk (60+ days). This helps in customer retention and follow-up strategies.",
  },
  {
    question: "How secure is the access to BUSY data?",
    answer: "Each user has unique login credentials. Data is transmitted over encrypted connections. Admin can control what each user sees. Complete activity logs maintain audit trail for compliance. Your BUSY data remains secure.",
  },
  {
    question: "Can accountants access BUSY reports remotely?",
    answer: "Yes! Accountants can access ledgers, registers, and reconciliation reports from BUSY via the web dashboard. Perfect for CA firms managing multiple BUSY clients or accountants working remotely. Multi-company support available.",
  },
  {
    question: "Why use BusyNotify instead of BUSY's built-in reports?",
    answer: "BUSY desktop requires you to be at the office computer to view reports. BusyNotify provides: mobile access, remote access from anywhere, unlimited user accounts, salesman access with controls, real-time dashboard, 24/7 availability, and PWA for app-like experience - all without replacing your existing BUSY setup.",
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
                BUSY Reports Dashboard for <span className="gradient-text">Mobile & Remote Access</span> (PWA Enabled)
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                <strong>Access BUSY Accounting Software reports online from mobile or web.</strong> View ledger, outstanding, sales, purchase, and stock reports anytime—without opening BUSY desktop. Perfect for business owners, sales teams, and accountants who need real-time data on the go.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="glow-teal group" asChild>
                  <Link href="/pricing">
                    Start Free Demo
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#comparison">BUSY vs BusyNotify</Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Works with BUSY 17/18/21</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>15+ Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Unlimited Users</span>
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
                      <p className="font-medium">BUSY Reports Dashboard</p>
                      <p className="text-xs text-muted-foreground">Real-time from BUSY</p>
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
                    <p className="text-xs text-muted-foreground">Today&apos;s Sales</p>
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

      {/* Why Do BUSY Users Need This - Problem Section */}
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
              Why Do <span className="gradient-text">BUSY Users</span> Need an Online Reporting Dashboard?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              BUSY is powerful desktop software, but it has limitations for modern business needs. Here&apos;s the problem:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {problems.map((item, index) => (
              <motion.div
                key={item.problem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-red-400" />
                </div>
                <p className="font-medium text-sm mb-2">{item.problem}</p>
                <p className="text-xs text-red-400">{item.solution}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 glass-card rounded-2xl p-8 text-center"
          >
            <p className="text-lg">
              <strong className="text-primary">BusyNotify solves all these problems</strong> by providing online, mobile access to all your BUSY reports. No more being tied to the office desktop.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who Is This For - Role-Based Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 via-primary/10 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="gradient-text">Built for BUSY Users</span> Across Teams
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Everyone in your organization gets the access they need - controlled by admin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roleBasedUsers.map((user, index) => (
              <motion.div
                key={user.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <user.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{user.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{user.description}</p>
                    <p className="text-xs text-primary font-medium">{user.benefit}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSY vs BusyNotify Comparison */}
      <section id="comparison" className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why Choose <span className="gradient-text">BusyNotify Dashboard</span> vs BUSY Desktop?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              BUSY already provides reports. Here&apos;s why you need BusyNotify for remote and mobile access:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-6 py-4 text-left font-semibold">Feature</th>
                      <th className="px-6 py-4 text-left font-semibold text-red-400">BUSY Desktop</th>
                      <th className="px-6 py-4 text-left font-semibold text-green-400">BusyNotify</th>
                    </tr>
                  </thead>
                  <tbody>
                    {busyComparison.map((row, index) => (
                      <tr key={row.aspect} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                        <td className="px-6 py-4 font-medium">{row.aspect}</td>
                        <td className="px-6 py-4 text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <XCircle className="w-4 h-4 text-red-400" />
                            {row.busy}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-green-400">
                          <span className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {row.busynotify}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Features Section */}
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
              Access <span className="gradient-text">BUSY Reports</span> Your Way
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Web portal for desktop work, PWA for mobile access - both synced in real-time with BUSY
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

      {/* All Reports Section - SEO Optimized */}
      <section id="reports" className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="gradient-text">15+ BUSY Reports</span> Available Online
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Every report from BUSY accessible 24/7 from any device - without opening BUSY desktop
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.reports.map((report) => (
                    <div key={report.name} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-medium text-sm">{report.name}</p>
                          <p className="text-xs text-muted-foreground mt-1">{report.description}</p>
                          <meta itemProp="keywords" content={report.keyword} />
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

      {/* Customer Follow-Up Report Highlight - Renamed for SEO */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
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
                <span className="gradient-text">Customer Follow-Up & Revisit Tracking</span> Report
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Track customer visit patterns from BUSY and identify buying behavior. Know which customers 
                visit regularly, which are becoming inactive, and when to follow up for repeat business. Perfect for sales follow-up and customer retention.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Identify Repeat Customers</p>
                    <p className="text-sm text-muted-foreground">See who buys frequently and reward loyalty from BUSY data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-medium">Spot At-Risk Customers</p>
                    <p className="text-sm text-muted-foreground">Find inactive customers who haven&apos;t purchased recently</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Optimize Sales Follow-ups</p>
                    <p className="text-sm text-muted-foreground">Time your outreach based on buying patterns from BUSY</p>
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
                Customer Revisit Analysis from BUSY
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
                  <p className="text-xs text-muted-foreground mt-1">No purchase in 60+ days - follow up needed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Salesman Management Section */}
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
              <span className="gradient-text">BUSY Reports for Sales Team</span> - Multi-User Access
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
            <h4 className="font-semibold mb-4">Active Salesmen Performance (from BUSY)</h4>
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
              <span className="gradient-text">Progressive Web App</span> for BUSY Reports
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
              How Teams Use the <span className="gradient-text">BUSY Reports Dashboard</span>
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
              Why Choose <span className="gradient-text">BusyNotify</span> for BUSY Reports?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform how your team accesses and uses business data from BUSY
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

      {/* FAQ Section - Expanded */}
      <section id="faq" className="py-20 border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Frequently Asked Questions about <span className="gradient-text">BUSY Reports Dashboard</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about accessing BUSY reports online
            </p>
          </motion.div>

          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
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
              Ready for 24/7 Mobile Access to BUSY Reports?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Give your team instant access to all BUSY reports from mobile and web. Create multiple salesmen, 
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
