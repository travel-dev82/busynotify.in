"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Calendar, 
  Users, 
  FileText, 
  Phone,
  CheckCircle2,
  Zap,
  MessageSquare,
  Clock,
  Bell,
  ChevronRight,
  History,
  UserCheck,
  AlertCircle,
  ListChecks,
  ClipboardList,
  Timer,
  Target,
  Eye,
  Building2,
  TruckIcon,
  Calculator,
  TrendingUp,
  HeadphonesIcon,
  XCircle,
  CheckCircle,
  IndianRupee
} from "lucide-react";
import { Button } from "@/components/ui/button";

// SEO-Optimized Features with Keywords
const features = [
  {
    icon: IndianRupee,
    title: "Outstanding-Based Follow-up (Total Balance Tracking)",
    description: "Track outstanding amounts by total balance. Telecallers see the total due and follow up on the full outstanding amount from BUSY Software.",
    keyword: "outstanding tracking system",
  },
  {
    icon: FileText,
    title: "Invoice-wise Follow-up Tracking (Bill-by-Bill Management)",
    description: "Detailed invoice-wise follow-up. See each pending bill, its date, amount, and follow-up status individually from BUSY Accounting Software.",
    keyword: "invoice follow up tracking",
  },
  {
    icon: Users,
    title: "Telecaller CRM Dashboard for Payment Collection",
    description: "Dedicated CRM dashboard showing pending customers, their outstanding amounts, and complete follow-up history at a glance. Built for collection teams.",
    keyword: "telecaller CRM dashboard",
  },
  {
    icon: History,
    title: "Complete Follow-up History & Call Logs",
    description: "Full record of all past follow-ups. See what was discussed, promises made, call outcomes, and payment commitments recorded by telecallers.",
    keyword: "follow up history tracking",
  },
  {
    icon: Calendar,
    title: "Customer Promise Date Tracking",
    description: "Record customer payment promises. If a customer says 'I'll pay in 4 days', set the reminder for that date. Never miss a payment commitment.",
    keyword: "customer promise tracking",
  },
  {
    icon: Bell,
    title: "Dual Reminders (Telecaller + Customer Alerts)",
    description: "Both telecaller and customer get reminded on the promise date. Automated follow-up system ensures no commitment is forgotten.",
    keyword: "payment reminder system",
  },
  {
    icon: Target,
    title: "Priority-Based Collection Queues",
    description: "Prioritize follow-ups by outstanding amount, age, or customer type. Focus collection efforts on high-value accounts first.",
    keyword: "collection priority management",
  },
  {
    icon: Eye,
    title: "Real-time Outstanding Sync from BUSY",
    description: "Data syncs live with BUSY Accounting Software. See updated outstanding amounts after each payment is recorded in BUSY.",
    keyword: "BUSY real-time sync",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Telecaller Opens Collection Dashboard",
    description: "Login to see today's follow-up list with customers sorted by outstanding amount, priority, or promise due date from BUSY Software.",
    icon: ClipboardList,
  },
  {
    step: 2,
    title: "View Customer Outstanding Details",
    description: "Click any customer to see their outstanding amount, pending bills, past promises, and complete follow-up history from BUSY.",
    icon: Eye,
  },
  {
    step: 3,
    title: "Record Call & Follow-up Outcome",
    description: "After the call, record what was discussed, the outcome, and any payment promise date given by the customer in the CRM.",
    icon: MessageSquare,
  },
  {
    step: 4,
    title: "Set Promise Date Reminder",
    description: "If customer promises payment in 4 days, set the reminder. On Day 4, both telecaller and customer get notified automatically.",
    icon: Bell,
  },
];

const benefits = [
  {
    icon: UserCheck,
    title: "Never Miss a Follow-up",
    description: "Automated reminders ensure telecallers always know who to call and when. No more forgotten promises.",
  },
  {
    icon: Zap,
    title: "40% Faster Collections",
    description: "Systematic follow-ups with CRM tracking lead to faster payment realization from customers.",
  },
  {
    icon: Timer,
    title: "Complete Team Visibility",
    description: "Managers see telecaller performance, pending follow-ups, and collection progress in real-time dashboard.",
  },
  {
    icon: AlertCircle,
    title: "Customer Accountability",
    description: "Customers know you're tracking their promises. They take payment commitments more seriously.",
  },
];

// Who Should Use This - Use Cases
const useCases = [
  {
    icon: TruckIcon,
    title: "Distributors",
    description: "Manage collection follow-ups for hundreds of retailers. Track promises, monitor telecaller performance, and reduce outstanding by 40%.",
    benefit: "Collection CRM for distributors",
  },
  {
    icon: Building2,
    title: "Wholesalers",
    description: "Systematic follow-up for credit customers. Track payment promises and ensure timely collections from your wholesale business.",
    benefit: "Payment follow up for wholesalers",
  },
  {
    icon: Calculator,
    title: "Manufacturers",
    description: "Handle large outstanding amounts with structured follow-up. Track bulk payment promises and improve cash flow for manufacturing business.",
    benefit: "Outstanding collection for manufacturers",
  },
  {
    icon: Users,
    title: "Collection Teams & Telecallers",
    description: "Purpose-built CRM for telecallers making collection calls. Dashboard, history, promise tracking - everything in one place.",
    benefit: "Telecaller CRM for collections",
  },
  {
    icon: HeadphonesIcon,
    title: "Account Managers",
    description: "Track customer relationships and payment follow-ups. Complete history of all conversations and promises at your fingertips.",
    benefit: "Account manager follow up tool",
  },
  {
    icon: TrendingUp,
    title: "MSMEs & Small Business",
    description: "Don't let outstanding affect your cash flow. Simple follow-up system that works with BUSY Accounting Software.",
    benefit: "Collection system for MSME India",
  },
];

// Before vs After Comparison
const beforeAfterComparison = [
  { aspect: "Follow-up Tracking", before: "Manual notes in diaries", after: "Centralized CRM dashboard" },
  { aspect: "Promise Recording", before: "Forget customer promises", after: "Every promise tracked & reminded" },
  { aspect: "Call History", before: "No record of past calls", after: "Complete follow-up history" },
  { aspect: "Team Accountability", before: "No visibility of telecaller work", after: "Track every call & outcome" },
  { aspect: "Outstanding Data", before: "Check BUSY manually each time", after: "Real-time sync with BUSY" },
  { aspect: "Reminder System", before: "Miss follow-up dates", after: "Auto-reminders for promises" },
  { aspect: "Priority", before: "Call randomly", after: "Prioritize by amount & age" },
  { aspect: "Customer Pressure", before: "Customers delay easily", after: "Tracked promises = faster payment" },
];

// Why Payment Follow-ups Fail
const whyFollowUpsFail = [
  {
    problem: "No centralized follow-up tracking",
    solution: "CRM dashboard shows all pending follow-ups in one place",
  },
  {
    problem: "No call history or past records",
    solution: "Complete history of every call, promise, and outcome",
  },
  {
    problem: "Customer promises are forgotten",
    solution: "Promise date tracking with auto-reminders",
  },
  {
    problem: "No accountability for telecallers",
    solution: "Track calls made, promises recorded, collections achieved",
  },
  {
    problem: "Manual dependency on BUSY reports",
    solution: "Real-time outstanding sync from BUSY database",
  },
];

const dashboardFeatures = [
  {
    title: "Pending Payments List",
    description: "All customers with outstanding amounts, sorted by priority",
  },
  {
    title: "Follow-up History",
    description: "Past calls, promises, and outcomes for each customer",
  },
  {
    title: "Today's Follow-up Tasks",
    description: "Customers scheduled for follow-up today",
  },
  {
    title: "Promise Calendar",
    description: "Upcoming payment promises by date",
  },
  {
    title: "Telecaller Performance",
    description: "Track each telecaller's calls and collections",
  },
  {
    title: "Overdue Promise Alerts",
    description: "Customers who missed their promised payment date",
  },
];

// Expanded SEO-Optimized FAQs
const faqs = [
  {
    question: "What is payment follow-up software?",
    answer: "Payment follow-up software helps businesses track outstanding payments, record customer conversations, set reminders for payment promises, and manage collection teams. BusyNotify's payment follow-up system integrates with BUSY Accounting Software to provide real-time outstanding data, telecaller dashboards, and automated promise reminders.",
  },
  {
    question: "How to track outstanding payments in BUSY?",
    answer: "BUSY Accounting Software shows outstanding reports, but doesn't help with follow-up management. BusyNotify connects to your BUSY database and provides a complete CRM for tracking follow-ups, recording customer promises, and setting reminders. Telecallers can see outstanding amounts, make calls, and track outcomes in one dashboard.",
  },
  {
    question: "How to manage collection team and telecallers?",
    answer: "BusyNotify provides a telecaller CRM dashboard where managers can assign customers, track call outcomes, monitor promise recordings, and measure collection performance. Each telecaller has their own login, and managers see team-wide analytics including calls made, promises recorded, and payments collected.",
  },
  {
    question: "Can I track customer payment promises?",
    answer: "Absolutely! When a customer promises to pay on a specific date (e.g., 'I'll pay ₹50,000 on Friday'), you record that promise in BusyNotify. The system sends automatic reminders to both the telecaller and the customer on the promise date. If the customer misses the date, it shows up in 'Overdue Promises' for escalation.",
  },
  {
    question: "Is this a CRM for payment collections?",
    answer: "Yes! BusyNotify is a purpose-built CRM for payment collections and telecaller teams. It integrates with BUSY Accounting Software to show outstanding data, lets telecallers record call outcomes, tracks payment promises, and provides complete follow-up history. Built specifically for Indian businesses using BUSY.",
  },
  {
    question: "Can telecallers use this system on mobile?",
    answer: "Yes! The telecaller dashboard is mobile-responsive and works on any browser. Telecallers can access it from their phones or tablets while on the move. A dedicated mobile app is coming soon for even better mobile experience.",
  },
  {
    question: "How to improve payment recovery for my business?",
    answer: "BusyNotify improves payment recovery by: 1) Ensuring no follow-up is missed with automated reminders, 2) Tracking every customer promise with date-based alerts, 3) Providing telecallers with complete customer history before calls, 4) Prioritizing high-value accounts, 5) Creating accountability with performance tracking. Businesses typically see 40% faster collections.",
  },
  {
    question: "What is the difference between amount-wise and bill-by-bill follow-up?",
    answer: "Amount-wise follow-up shows the total outstanding balance for a customer - useful when they have multiple small bills. Bill-by-bill follow-up shows each pending invoice separately with dates and amounts - useful for discussing specific invoices or disputing bills. You can switch between both views in BusyNotify.",
  },
  {
    question: "How does the promise date reminder work?",
    answer: "When a customer promises to pay on a specific date (e.g., 'I'll pay on Friday'), you set that as the promise date in BusyNotify. On Friday, the system reminds the telecaller to follow up and also sends an automated reminder to the customer about their commitment. This ensures no promise is forgotten.",
  },
  {
    question: "Can multiple telecallers use the system?",
    answer: "Yes! BusyNotify supports unlimited telecallers with individual logins. Each telecaller sees their assigned customers and follow-up tasks. Managers can view team-wide performance, assign customers to specific telecallers, and track who is following up with which accounts.",
  },
  {
    question: "Does it integrate with BUSY Accounting Software?",
    answer: "Yes, BusyNotify connects directly to your BUSY database (BUSY 17/18/21 supported). Outstanding amounts, customer details, and payment history sync in real-time. When a payment is recorded in BUSY, the outstanding automatically updates in BusyNotify. No manual data entry required.",
  },
  {
    question: "What happens if a customer misses their promise date?",
    answer: "When a customer misses their promised payment date, they automatically appear in the 'Overdue Promises' section. The telecaller gets an alert, and the customer receives an automated follow-up reminder. You can also configure escalation rules for repeated missed promises.",
  },
  {
    question: "Is this suitable for distributors and wholesalers in India?",
    answer: "Absolutely! BusyNotify is built for Indian businesses using BUSY Accounting Software. Distributors, wholesalers, manufacturers, and trading companies across India use it to manage collection teams, track outstanding, and improve cash flow. Supports ₹ currency and Indian business workflows.",
  },
  {
    question: "How is this different from automated payment reminders?",
    answer: "Automated payment reminders are sent without human intervention (like WhatsApp bulk messages). BusyNotify's follow-up system is for personalized, manual follow-ups where a telecaller calls the customer, has a conversation, understands their situation, and records the outcome. It's for human-touch collection efforts where relationship matters.",
  },
  {
    question: "Can I see past follow-up history for a customer?",
    answer: "Yes! Complete follow-up history is maintained for each customer. You can see: date/time of each call, telecaller who made the call, what was discussed, promises made, promise dates, and outcomes. This helps any telecaller understand the customer's history before making the next call.",
  },
  {
    question: "What does the telecaller CRM dashboard include?",
    description: "The dashboard includes: pending customers list sorted by priority, outstanding amounts from BUSY, past follow-up history, today's scheduled follow-ups, promise calendar showing upcoming payment dates, overdue promises alerts, and performance metrics. Everything a collection team needs in one screen.",
  },
];

export function DueFollowUpContent() {
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
              {/* Breadcrumb */}
              <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2">
                  <li><Link href="/" className="hover:text-primary">Home</Link></li>
                  <li><ChevronRight className="w-4 h-4" /></li>
                  <li><Link href="/solutions" className="hover:text-primary">Solutions</Link></li>
                  <li><ChevronRight className="w-4 h-4" /></li>
                  <li className="text-foreground">Collection CRM</li>
                </ol>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                BUSY Payment Follow-up & <span className="gradient-text">Collection Management</span> System (CRM for Telecallers)
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                <strong>Manage payment follow-ups, customer promises, and outstanding collections from BUSY Accounting Software in one dashboard.</strong> Track calls, record commitments, and ensure every payment is followed up systematically using a telecaller CRM built for Indian businesses.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="glow-teal group" asChild>
                  <Link href="/pricing">
                    Start Free Demo
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#use-cases">See Use Cases</Link>
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
                  <span>Telecaller CRM</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Promise Tracking</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual - Telecaller Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-6 space-y-4">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p className="font-semibold">Collection CRM Dashboard</p>
                    <p className="text-xs text-muted-foreground">Today&apos;s Follow-ups from BUSY</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">24</p>
                    <p className="text-xs text-muted-foreground">Pending Today</p>
                  </div>
                </div>
                
                {/* Customer List */}
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-xl p-3 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Sharma Traders</p>
                        <p className="text-xs text-muted-foreground">Last call: 2 days ago</p>
                      </div>
                      <p className="font-bold text-primary">₹1,45,000</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-400">Promise: Tomorrow</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-3 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Gupta Exports</p>
                        <p className="text-xs text-muted-foreground">Last call: 5 days ago</p>
                      </div>
                      <p className="font-bold text-primary">₹82,500</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-0.5 rounded bg-red-500/20 text-red-400">Overdue</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-3 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Patel Distributors</p>
                        <p className="text-xs text-muted-foreground">Last call: Today</p>
                      </div>
                      <p className="font-bold text-primary">₹56,200</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-0.5 rounded bg-green-500/20 text-green-400">New</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating reminder badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass-card rounded-lg px-3 py-2 shadow-xl hidden lg:block"
              >
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">3 Promises Due Today</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Payment Follow-ups Fail Section */}
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
              Why <span className="gradient-text">Payment Follow-ups Fail</span> in BUSY
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              BUSY shows outstanding amounts but doesn&apos;t help manage the follow-up process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyFollowUpsFail.map((item, index) => (
              <motion.div
                key={item.problem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-red-400">
                    <XCircle className="w-4 h-4" />
                    <span className="text-xs font-medium">Problem</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.problem}</p>
                  <div className="pt-2 border-t border-border">
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-xs font-medium">BusyNotify</span>
                    </div>
                    <p className="text-sm font-medium mt-1">{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Collection Management System Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 via-primary/10 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="gradient-text">Payment Collection Management</span> System for BUSY Users
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                BusyNotify transforms how you manage outstanding collections from BUSY Accounting Software. 
                From tracking follow-ups to recording promises, everything your collection team needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Manage Outstanding Payments</p>
                    <p className="text-sm text-muted-foreground">See all pending customers with amounts from BUSY in one dashboard</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Track Every Follow-up</p>
                    <p className="text-sm text-muted-foreground">Record call outcomes, customer responses, and next actions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Monitor Collection Team</p>
                    <p className="text-sm text-muted-foreground">Track telecaller performance, calls made, and results achieved</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Improve Recovery Rate</p>
                    <p className="text-sm text-muted-foreground">Systematic follow-ups lead to 40% faster payment collection</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Collection Improvement Stats
              </h4>
              
              <div className="space-y-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Collection Time Reduction</span>
                    <span className="font-bold text-green-400">-15 days</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Faster payment realization</p>
                </div>
                
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Follow-up Success Rate</span>
                    <span className="font-bold text-primary">+65%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Promises converted to payments</p>
                </div>
                
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Outstanding Reduction</span>
                    <span className="font-bold text-yellow-400">40%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Within first 3 months</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Telecaller CRM Section */}
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
              <span className="gradient-text">Telecaller CRM</span> for Payment Follow-ups
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Purpose-built CRM dashboard for telecallers making collection calls from BUSY Software data
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-xl p-6"
            >
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Call Tracking</h3>
              <p className="text-sm text-muted-foreground">Record every call made, duration, and outcome. Know which customers were contacted and when.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <Calendar className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Promise Tracking</h3>
              <p className="text-sm text-muted-foreground">Record payment promises with dates. Get reminders when promise dates arrive.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-xl p-6"
            >
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Follow-up Scheduling</h3>
              <p className="text-sm text-muted-foreground">Schedule future follow-ups. Never miss calling a customer at the right time.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card rounded-xl p-6"
            >
              <History className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Customer History</h3>
              <p className="text-sm text-muted-foreground">Complete history of all past conversations, promises, and payment patterns.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Should Use This Section */}
      <section id="use-cases" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="gradient-text">Who Should Use</span> This Collection CRM?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for Indian businesses that need systematic payment follow-up management
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
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{useCase.description}</p>
                    <p className="text-xs text-primary font-medium">{useCase.benefit}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After Comparison */}
      <section className="py-20 border-y border-border bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Before vs After: <span className="gradient-text">Collection Management</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              See how BusyNotify transforms your payment follow-up process
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
                      <th className="px-6 py-4 text-left font-semibold">Aspect</th>
                      <th className="px-6 py-4 text-left font-semibold text-red-400">Without BusyNotify</th>
                      <th className="px-6 py-4 text-left font-semibold text-green-400">With BusyNotify</th>
                    </tr>
                  </thead>
                  <tbody>
                    {beforeAfterComparison.map((row, index) => (
                      <tr key={row.aspect} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                        <td className="px-6 py-4 font-medium">{row.aspect}</td>
                        <td className="px-6 py-4 text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <XCircle className="w-4 h-4 text-red-400" />
                            {row.before}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-green-400">
                          <span className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {row.after}
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

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Complete <span className="gradient-text">Collection CRM Features</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Every tool telecallers need to manage payment follow-ups effectively
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 group hover:border-primary/30 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <meta itemProp="keywords" content={feature.keyword} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              How <span className="gradient-text">Collection CRM</span> Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple workflow that keeps your payment collections on track
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                
                <div className="glass-card rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      {step.step}
                    </div>
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="gradient-text">Outstanding Follow-up Dashboard</span> Features
              </h2>
              <p className="text-muted-foreground mb-8">
                Everything your collection team needs in one CRM dashboard:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dashboardFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{feature.title}</p>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Dashboard Preview */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <h3 className="font-semibold">Promise Calendar - Today</h3>
                <span className="text-sm text-primary">3 promises due</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Sharma Traders</p>
                      <p className="text-xs text-muted-foreground">Promised ₹50,000</p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-amber-500/20 text-amber-400">Today</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Agarwal & Sons</p>
                      <p className="text-xs text-muted-foreground">Promised ₹1,25,000</p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-amber-500/20 text-amber-400">Today</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Mehta Industries</p>
                      <p className="text-xs text-muted-foreground">Promised full payment</p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-amber-500/20 text-amber-400">Today</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border flex gap-3">
                <Button size="sm" className="flex-1">Call Customers</Button>
                <Button size="sm" variant="outline" className="flex-1">Send Reminders</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 border-y border-border bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why Collection Teams Love <span className="gradient-text">BusyNotify CRM</span>
            </h2>
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

      {/* FAQ Section - Expanded */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Frequently Asked Questions about <span className="gradient-text">Collection CRM</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about payment follow-up management for BUSY
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
              <Phone className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold">
              Transform Your Payment Collection Process
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Give your telecallers the CRM tools they need to collect faster. 
              Track promises, manage follow-ups, improve recovery. Start your free 3-day demo today.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="glow-teal group" asChild>
                <Link href="/pricing">
                  Start Free Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <Phone className="mr-2 w-4 h-4" />
                  Talk to Sales
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
