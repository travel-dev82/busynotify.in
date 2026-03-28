"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CreditCard,
  IndianRupee,
  Calendar,
  Users,
  AlertTriangle,
  Bell,
  CheckCircle2,
  Zap,
  Clock,
  Shield,
  TrendingUp,
  Settings,
  ChevronRight,
  Building2,
  RefreshCw,
  Target,
  Percent,
  XCircle,
  MessageCircle,
  Building,
  Factory,
  Package,
  Pill,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";

const creditLimitFeatures = [
  {
    icon: IndianRupee,
    title: "Credit Limit Alert System (Outstanding Limit Monitoring)",
    description: "Set credit limits for each customer (e.g., ₹1 Lakh). System automatically detects when outstanding exceeds the limit and triggers instant alerts to you and reminders to customers.",
    keywords: "credit limit alert, outstanding monitoring, limit breach notification",
  },
  {
    icon: Calendar,
    title: "Overdue Payment Tracking (Due Days Monitoring System)",
    description: "Define credit periods per customer (e.g., 10 days). Any invoice exceeding the credit period triggers an automatic payment overdue reminder to the customer.",
    keywords: "overdue tracking, due days monitoring, payment due reminder",
  },
  {
    icon: RefreshCw,
    title: "Combined Credit Limit & Due Date Monitoring",
    description: "Run both credit limit and credit days checks simultaneously. Trigger reminders when EITHER condition is breached for comprehensive credit control coverage.",
    keywords: "dual credit check, combined monitoring, complete credit control",
  },
  {
    icon: Users,
    title: "Customer-Level Credit Control",
    description: "Settings are defined at individual customer level in BUSY Software. Each customer can have different limits and credit days as per your business policy.",
    keywords: "customer level credit, individual credit policy, per customer settings",
  },
  {
    icon: Target,
    title: "Smart Targeted Reminders",
    description: "Only customers who breach conditions receive reminders. No spam to customers with clean payment records. Precise and professional communication.",
    keywords: "targeted reminders, smart notification, selective alerts",
  },
  {
    icon: Bell,
    title: "Multi-Channel Credit Alerts",
    description: "Send credit reminders via WhatsApp, SMS, or both. Choose the channel that works best for your customer communication strategy.",
    keywords: "whatsapp reminder, sms alert, multi channel notification",
  },
  {
    icon: Shield,
    title: "Automated Credit Policy Enforcement",
    description: "Automatically enforce your credit policy without manual tracking. The system becomes your 24/7 credit controller protecting your business.",
    keywords: "credit policy enforcement, automated control, credit protection",
  },
  {
    icon: TrendingUp,
    title: "Recovery & Collection Analytics",
    description: "Track how many reminders were sent, how many customers responded, and measure improvement in collection efficiency over time.",
    keywords: "recovery tracking, collection analytics, payment improvement",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Set Credit Limits",
    description: "Define credit limit (₹ amount) and credit days (number of days) for each customer in BUSY Accounting Software.",
    icon: Settings,
  },
  {
    step: 2,
    title: "System Monitors 24/7",
    description: "Our system continuously checks customer outstanding against their credit limit and invoice dates against credit days.",
    icon: RefreshCw,
  },
  {
    step: 3,
    title: "Detect Breaches",
    description: "When any customer exceeds their credit limit OR their invoices go beyond the credit days, the breach is detected.",
    icon: AlertTriangle,
  },
  {
    step: 4,
    title: "Send Reminders",
    description: "Automatic reminder is sent to the customer with details of the breach. You're copied so you can follow up if needed.",
    icon: Bell,
  },
];

const exampleScenarios = [
  {
    title: "Credit Limit Breach",
    scenario: "Customer ABC has a credit limit of ₹1,00,000",
    trigger: "Outstanding reaches ₹1,25,000",
    action: "System sends reminder: 'Your outstanding exceeds your credit limit of ₹1 Lakh. Please clear dues to continue credit.'",
    icon: IndianRupee,
  },
  {
    title: "Payment Overdue (Credit Days Breach)",
    scenario: "Customer XYZ has 10 days credit period",
    trigger: "Invoice from 15 days ago is still unpaid",
    action: "System sends reminder: 'Invoice #1234 dated Jan 1st is overdue. Please clear payment at earliest.'",
    icon: Calendar,
  },
  {
    title: "Combined Condition Breach",
    scenario: "Customer PQR has ₹50,000 limit AND 15 days credit",
    trigger: "Outstanding is ₹60,000 AND invoice is 20 days old",
    action: "System sends comprehensive reminder highlighting both credit limit and overdue period breach.",
    icon: AlertTriangle,
  },
];

const beforeAfterComparison = [
  {
    aspect: "Credit Tracking",
    before: "Manual tracking in Excel",
    after: "Automated 24/7 monitoring",
  },
  {
    aspect: "Breach Detection",
    before: "Late discovery of issues",
    after: "Instant alerts on breach",
  },
  {
    aspect: "Cash Flow",
    before: "Blocked due to delayed follow-up",
    after: "Faster payment recovery",
  },
  {
    aspect: "Policy Enforcement",
    before: "Inconsistent manual process",
    after: "System-driven enforcement",
  },
  {
    aspect: "Customer Communication",
    before: "Sporadic reminders",
    after: "Automated professional alerts",
  },
  {
    aspect: "Risk Prevention",
    before: "Reactive approach",
    after: "Proactive credit control",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Automated Monitoring",
    description: "No manual Excel sheets or calendar tracking. The system watches credit limits and due days continuously 24/7.",
  },
  {
    icon: TrendingUp,
    title: "Faster Recoveries",
    description: "Timely reminders lead to faster payments. Reduce your average collection period significantly.",
  },
  {
    icon: Shield,
    title: "Enforce Policy",
    description: "Your credit policy is enforced consistently without bias. Every breach is addressed professionally.",
  },
  {
    icon: Zap,
    title: "Reduce Bad Debts",
    description: "Early detection of credit issues prevents accounts from becoming uncollectible. Protect your business.",
  },
];

const whoShouldUse = [
  { role: "Distributors", desc: "Monitor dealer credit limits and prevent over-credit", icon: Package },
  { role: "Wholesalers", desc: "Track customer outstanding and due days automatically", icon: Building },
  { role: "Manufacturers", desc: "Enforce credit terms with dealers and distributors", icon: Factory },
  { role: "Retail Chains", desc: "Manage store credit and payment schedules", icon: Building2 },
  { role: "FMCG Businesses", desc: "Control credit exposure across distribution network", icon: Package },
  { role: "Pharma Dealers", desc: "Track outstanding and enforce credit limits", icon: Pill },
  { role: "MSMEs", desc: "Automate credit control without dedicated staff", icon: Users },
  { role: "Trading Companies", desc: "Monitor customer credit and reduce bad debts", icon: TrendingUp },
];

const industries = [
  "Trading Businesses",
  "Manufacturing Units",
  "Wholesale Distributors",
  "Retail Chains",
  "Service Providers",
  "FMCG Distribution",
  "Pharmaceutical Dealers",
  "Textile Merchants",
];

const faqs = [
  {
    question: "What is credit control system for BUSY Software?",
    answer: "Credit control system for BUSY is an automated solution that monitors customer credit limits and payment due dates. When a customer exceeds their defined credit limit or their invoices go beyond the allowed credit period, the system automatically sends them a payment reminder - helping you maintain healthy cash flow and reduce bad debts.",
  },
  {
    question: "How to monitor credit limit in BUSY Accounting Software?",
    answer: "With BusyNotify's credit control system, you set credit limits for each customer in BUSY Software. The system continuously monitors the customer's outstanding amount against this limit. When it exceeds the limit, an automatic reminder is sent to the customer asking them to clear dues. No manual checking required.",
  },
  {
    question: "How to track overdue payments automatically in BUSY?",
    answer: "Define credit days (payment terms) for each customer in BUSY. BusyNotify tracks every invoice and automatically sends reminders when any invoice goes beyond the allowed credit period without payment. The system checks daily and alerts customers about overdue invoices.",
  },
  {
    question: "Can I send credit limit reminders on WhatsApp?",
    answer: "Yes! BusyNotify sends credit limit alerts and overdue payment reminders via WhatsApp, SMS, or both. WhatsApp reminders have higher engagement rates and you can include detailed information about the breach with professional formatting.",
  },
  {
    question: "How to reduce overdue payments with automated reminders?",
    answer: "Automated reminders work by sending timely alerts the moment a payment condition is breached - either credit limit exceeded or invoice overdue. This proactive approach ensures customers are immediately notified, leading to faster payments and reduced average collection period.",
  },
  {
    question: "Can I automate credit monitoring for my business?",
    answer: "Absolutely. BusyNotify's credit control system runs 24/7, checking every customer's outstanding against their credit limit and every invoice against their credit days. When any condition is breached, automatic reminders are sent without any manual intervention required.",
  },
  {
    question: "What are credit days and how are they tracked?",
    answer: "Credit days define how long a customer can take to pay (e.g., 10 days from invoice date). The system tracks each invoice and sends a reminder when any invoice goes beyond the allowed credit period without payment. This is also called payment due tracking or due days monitoring.",
  },
  {
    question: "Can I use both credit limit and credit days together?",
    answer: "Yes! You can enable both conditions simultaneously. The system will trigger reminders if EITHER the credit limit is exceeded OR the credit days are breached. This provides comprehensive credit control - protecting you from both over-credit and overdue payments.",
  },
  {
    question: "Where are credit settings defined?",
    answer: "Credit limits and credit days are set at the customer level in your BUSY Accounting Software. Each customer can have different limits based on your business relationship and credit policy with them. The system reads these settings automatically.",
  },
  {
    question: "What channels are used for credit reminders?",
    answer: "Credit reminders can be sent via WhatsApp, SMS, or both channels simultaneously. You choose the channel that works best for your customers. WhatsApp is popular for its rich formatting, document attachment capabilities, and higher response rates.",
  },
  {
    question: "How often does the system check credit conditions?",
    answer: "The system runs checks multiple times daily. As soon as a breach is detected - either credit limit exceeded or invoice overdue - the reminder is queued for sending. You can configure the exact timing and frequency of reminders based on your preference.",
  },
  {
    question: "Can I customize the credit reminder message?",
    answer: "Yes, you can customize the message template for credit limit alerts and overdue reminders. Include customer name, outstanding amount, credit limit, overdue invoices, breach details, and more. Professional communication that reflects your brand.",
  },
  {
    question: "How does this help with credit policy enforcement?",
    answer: "Instead of manually checking each customer's credit status, the system automatically enforces your credit policy 24/7. Every breach is detected and addressed professionally. This ensures consistent policy application without bias or human error.",
  },
  {
    question: "What happens when both credit limit and days are breached?",
    answer: "When both conditions are breached, the system sends a comprehensive reminder highlighting both issues - the amount by which credit limit is exceeded AND the invoices that are overdue. This gives customers complete picture of their credit situation.",
  },
  {
    question: "Is this suitable for businesses with many customers?",
    answer: "Absolutely. In fact, the more customers you have, the more valuable automated credit control becomes. Manual tracking becomes impossible at scale. The system handles unlimited customers with the same efficiency, ensuring no credit issues slip through.",
  },
  {
    question: "How quickly can I implement credit control system?",
    answer: "Setup typically takes 24-48 hours. We integrate with your BUSY Software, configure credit limits and days that are already defined in your system, and activate automated reminders. No changes to your existing workflow required.",
  },
];

export function CreditLineSenderContent() {
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
                  <li className="text-foreground">Credit Control System</li>
                </ol>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="gradient-text">BUSY Credit Limit & Overdue</span>{" "}
                Payment Reminder System (Automated Credit Control)
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Automatically track <strong>customer credit limits and overdue invoices</strong> in BUSY Accounting Software. 
                Send instant reminders when credit limits are exceeded or payment due dates are crossed. 
                Improve cash flow with automated credit control and payment monitoring.
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
                  <span>Credit Limit Alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Overdue Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>WhatsApp Reminders</span>
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
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Credit Control Dashboard</p>
                    <p className="text-xs text-muted-foreground">Real-time Monitoring</p>
                  </div>
                </div>
                
                {/* Customer card examples */}
                <div className="space-y-3">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Sharma Traders</span>
                      <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">Limit Breach</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Credit Limit</p>
                        <p className="font-medium">₹1,00,000</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Outstanding</p>
                        <p className="font-bold text-red-400">₹1,25,000</p>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-red-400">⚠️ Limit exceeded by ₹25,000</div>
                  </div>
                  
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Gupta Enterprises</span>
                      <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">Overdue</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Credit Days</p>
                        <p className="font-medium">10 Days</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Oldest Invoice</p>
                        <p className="font-bold text-yellow-400">18 Days</p>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-yellow-400">⚠️ 8 days past credit period</div>
                  </div>
                  
                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Patel Distributors</span>
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">OK</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Credit Limit</p>
                        <p className="font-medium">₹5,00,000</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Outstanding</p>
                        <p className="font-bold text-green-400">₹2,50,000</p>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-green-400">✓ Within all limits</div>
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
                  <AlertTriangle className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">Auto Alert</span>
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
              <span className="text-red-400">❗ Problems</span> in Credit Control for BUSY Users
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Most businesses struggle with credit management until it becomes a crisis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { problem: "No real-time credit monitoring", impact: "Breaches discovered too late" },
              { problem: "Customers exceed limits unnoticed", impact: "Risk of bad debts increases" },
              { problem: "Overdue invoices not tracked daily", impact: "Cash flow gets blocked" },
              { problem: "Manual checking required", impact: "Time-consuming and error-prone" },
              { problem: "Credit policy not enforced", impact: "Inconsistent customer treatment" },
              { problem: "Cash flow gets blocked", impact: "Business growth suffers" },
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
              <span className="text-red-400">Without System</span> vs <span className="gradient-text">With BusyNotify</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Transform your credit control from reactive to proactive
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full glass-card rounded-2xl overflow-hidden">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold">Aspect</th>
                  <th className="text-left p-4 font-semibold text-red-400">Without System</th>
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

      {/* Credit Control System Section */}
      <section className="py-20 border-y border-border">
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
                💰 Credit Control System for <span className="gradient-text">BUSY Businesses</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                A complete credit management solution that enforces your credit policy automatically. 
                Prevent over-credit situations, reduce bad debts, and maintain healthy cash flow.
              </p>
              <ul className="space-y-3">
                {[
                  "Enforce credit policy automatically",
                  "Prevent customers from over-credit",
                  "Reduce risk of bad debts",
                  "Automate payment reminders",
                  "Maintain healthy cash flow",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Credit Policy Dashboard
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Customers Monitored", value: "456", status: "active" },
                  { label: "Credit Limit Alerts (Today)", value: "12", status: "warning" },
                  { label: "Overdue Alerts (Today)", value: "8", status: "warning" },
                  { label: "Policy Compliance Rate", value: "94%", status: "success" },
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className={`font-bold ${item.status === 'success' ? 'text-green-400' : item.status === 'warning' ? 'text-yellow-400' : 'text-primary'}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Credit Reminder Section */}
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
              📲 WhatsApp <span className="gradient-text">Credit Limit & Overdue Reminder</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Instant customer notification via WhatsApp for better engagement and faster payments
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
                  <Send className="w-5 h-5 text-green-500" />
                  Notify Customers Instantly
                </h3>
                <p className="text-muted-foreground">
                  When a credit limit is breached or invoice becomes overdue, customers receive 
                  an immediate WhatsApp notification with complete details.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  Better Engagement
                </h3>
                <p className="text-muted-foreground">
                  WhatsApp has 90%+ open rates compared to SMS or email. Customers see and respond 
                  to credit reminders faster, improving collection efficiency.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <IndianRupee className="w-5 h-5 text-green-500" />
                  Faster Payment Recovery
                </h3>
                <p className="text-muted-foreground">
                  Professional, well-formatted WhatsApp reminders with invoice details and 
                  outstanding amounts lead to quicker payment responses.
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
              <h3 className="text-lg font-semibold mb-4">WhatsApp Reminder Example</h3>
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2 border-b border-green-500/20 pb-2">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium">Credit Alert from ABC Traders</span>
                </div>
                <div className="text-sm space-y-2">
                  <p>Dear <strong>Sharma Traders</strong>,</p>
                  <p>Your outstanding has exceeded the credit limit:</p>
                  <div className="bg-white/5 rounded-lg p-3 space-y-1">
                    <p><strong>Credit Limit:</strong> ₹1,00,000</p>
                    <p><strong>Current Outstanding:</strong> ₹1,25,000</p>
                    <p className="text-red-400"><strong>Exceeded By:</strong> ₹25,000</p>
                  </div>
                  <p className="text-muted-foreground">Please clear the dues to continue availing credit facility.</p>
                  <p className="text-xs text-muted-foreground">- ABC Traders Team</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Two Conditions Section */}
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
              Two Powerful <span className="gradient-text">Credit Monitoring Conditions</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Monitor credit at customer level with two independent conditions - use either or both for complete control
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Credit Limit Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <IndianRupee className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Credit Limit Alert</h3>
                  <p className="text-muted-foreground">Amount-based monitoring</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Set maximum outstanding amount per customer. When they cross this limit, 
                  automatic reminder is triggered to protect your business.
                </p>
                
                <div className="bg-white/5 rounded-xl p-4 space-y-2">
                  <p className="text-sm text-muted-foreground">Example:</p>
                  <p className="font-medium">Customer Credit Limit: <span className="text-primary">₹1,00,000</span></p>
                  <p className="font-medium">Current Outstanding: <span className="text-red-400">₹1,25,000</span></p>
                  <p className="text-sm text-red-400 font-medium">→ Reminder sent immediately!</p>
                </div>
              </div>
            </motion.div>

            {/* Credit Days Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Overdue Payment Tracking</h3>
                  <p className="text-muted-foreground">Time-based monitoring</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Define allowed credit period per customer. When invoices go beyond these days, 
                  automatic payment overdue reminder is sent.
                </p>
                
                <div className="bg-white/5 rounded-xl p-4 space-y-2">
                  <p className="text-sm text-muted-foreground">Example:</p>
                  <p className="font-medium">Allowed Credit Days: <span className="text-primary">10 Days</span></p>
                  <p className="font-medium">Oldest Unpaid Invoice: <span className="text-yellow-400">18 Days</span></p>
                  <p className="text-sm text-yellow-400 font-medium">→ Overdue reminder sent!</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dual Condition Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 text-center border-primary/30"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <RefreshCw className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Use Both Conditions Together</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For comprehensive credit control, enable both credit limit AND credit days. 
              The system triggers reminders if <strong>EITHER condition is breached</strong> - 
              giving you complete coverage of your credit policy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Example Scenarios Section */}
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
              See It In <span className="gradient-text">Action</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world examples of how credit control protects your business
            </p>
          </motion.div>

          <div className="space-y-6">
            {exampleScenarios.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex items-start gap-4 lg:w-1/3">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <example.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{example.title}</h3>
                      <p className="text-sm text-muted-foreground">{example.scenario}</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/3 flex items-center">
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-4 py-2 w-full">
                      <p className="text-sm font-medium text-yellow-400">Trigger: {example.trigger}</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/3 flex items-center">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2 w-full">
                      <p className="text-sm text-muted-foreground">Action:</p>
                      <p className="text-sm text-green-400">{example.action}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              How <span className="gradient-text">Credit Control System</span> Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to automated credit monitoring and reminders
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

      {/* Features Grid Section */}
      <section id="features" className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Complete <span className="gradient-text">Credit Management</span> Features
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to protect your business from credit risks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creditLimitFeatures.map((feature, index) => (
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
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <meta itemProp="keywords" content={feature.keywords} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Use This Section */}
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
              👥 Who Should Use This <span className="gradient-text">Credit Management System</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Any business that offers credit to customers benefits from automated monitoring
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
              Why Businesses Trust <span className="gradient-text">Credit Control System</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Real benefits that improve your cash flow and reduce credit risks
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

      {/* Industries Section */}
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
              Perfect for <span className="gradient-text">Credit-Based Businesses</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Any business that offers credit to customers benefits from automated monitoring
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card rounded-full px-5 py-2 text-sm font-medium"
              >
                {industry}
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
              Frequently Asked Questions about <span className="gradient-text">Credit Control System</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about automated credit management
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
              <CreditCard className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Automate Your Credit Control?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Stop chasing overdue payments manually. Let our system monitor your credit 
              limits and due days automatically. Improve cash flow starting today.
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
