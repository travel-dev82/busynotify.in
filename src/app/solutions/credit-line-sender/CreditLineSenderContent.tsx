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
  Percent
} from "lucide-react";
import { Button } from "@/components/ui/button";

const creditLimitFeatures = [
  {
    icon: IndianRupee,
    title: "Credit Limit Monitoring",
    description: "Set credit limits for each customer (e.g., ₹1 Lakh). System automatically detects when outstanding exceeds the limit and triggers reminders.",
    keywords: "credit limit monitoring, customer credit limit, outstanding alert",
  },
  {
    icon: Calendar,
    title: "Credit Days Tracking",
    description: "Define credit periods per customer (e.g., 10 days). Any invoice exceeding the credit period triggers an automatic reminder to the customer.",
    keywords: "credit days tracking, due days monitoring, payment terms",
  },
  {
    icon: RefreshCw,
    title: "Dual Condition Check",
    description: "Run both credit limit and credit days checks simultaneously. Trigger reminders when EITHER condition is breached for comprehensive coverage.",
    keywords: "dual credit check, combined monitoring, credit policy",
  },
  {
    icon: Users,
    title: "Customer-Level Control",
    description: "Settings are defined at individual customer level in Busy Software. Each customer can have different limits and credit days as per your business policy.",
    keywords: "customer level credit, individual credit policy, per customer settings",
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Only customers who breach conditions receive reminders. No spam to customers with clean payment records. Precise and professional communication.",
    keywords: "targeted reminders, smart notification, selective alerts",
  },
  {
    icon: Bell,
    title: "Multi-Channel Alerts",
    description: "Send reminders via WhatsApp, SMS, or both. Choose the channel that works best for your customer communication strategy.",
    keywords: "whatsapp reminder, sms alert, multi channel notification",
  },
  {
    icon: Shield,
    title: "Policy Enforcement",
    description: "Automatically enforce your credit policy without manual tracking. The system becomes your 24/7 credit controller.",
    keywords: "credit policy, automated enforcement, credit control",
  },
  {
    icon: TrendingUp,
    title: "Recovery Analytics",
    description: "Track how many reminders were sent, how many customers responded, and measure improvement in collection efficiency.",
    keywords: "recovery tracking, collection analytics, payment improvement",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Set Credit Limits",
    description: "Define credit limit (₹ amount) and credit days (number of days) for each customer in Busy Accounting Software.",
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
    title: "Credit Days Breach",
    scenario: "Customer XYZ has 10 days credit period",
    trigger: "Invoice from 15 days ago is still unpaid",
    action: "System sends reminder: 'Invoice #1234 dated Jan 1st is overdue. Please clear payment at earliest.'",
    icon: Calendar,
  },
  {
    title: "Dual Condition Breach",
    scenario: "Customer PQR has ₹50,000 limit AND 15 days credit",
    trigger: "Outstanding is ₹60,000 AND invoice is 20 days old",
    action: "System sends comprehensive reminder highlighting both credit limit and overdue period breach.",
    icon: AlertTriangle,
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Automated Monitoring",
    description: "No manual Excel sheets or calendar tracking. The system watches credit limits and due days continuously.",
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
    question: "What is Credit Line Sender in BusyNotify?",
    answer: "Credit Line Sender is an intelligent credit management system that automatically monitors your customers' credit limits and credit days. When a customer exceeds their defined credit limit or their invoices go beyond the allowed credit period, the system automatically sends them a reminder.",
  },
  {
    question: "How does credit limit monitoring work?",
    answer: "You set a credit limit for each customer in Busy Software (e.g., ₹1 Lakh). The system continuously monitors the customer's outstanding amount. When it exceeds the limit, an automatic reminder is sent to the customer asking them to clear dues.",
  },
  {
    question: "What are credit days and how are they tracked?",
    answer: "Credit days define how long a customer can take to pay (e.g., 10 days from invoice date). The system tracks each invoice and sends a reminder when any invoice goes beyond the allowed credit period without payment.",
  },
  {
    question: "Can I use both credit limit and credit days together?",
    answer: "Yes! You can enable both conditions simultaneously. The system will trigger reminders if EITHER the credit limit is exceeded OR the credit days are breached. This provides comprehensive credit control.",
  },
  {
    question: "Where are credit settings defined?",
    answer: "Credit limits and credit days are set at the customer level in your Busy Accounting Software. Each customer can have different limits based on your business relationship with them.",
  },
  {
    question: "What channels are used for reminders?",
    answer: "Reminders can be sent via WhatsApp, SMS, or both. You choose the channel that works best for your customers. WhatsApp is popular for its rich formatting and document attachment capabilities.",
  },
  {
    question: "How often does the system check credit conditions?",
    answer: "The system runs checks multiple times daily. As soon as a breach is detected, the reminder is queued for sending. You can configure the exact timing and frequency of reminders.",
  },
  {
    question: "Can I customize the reminder message?",
    answer: "Yes, you can customize the message template. Include customer name, outstanding amount, credit limit, overdue invoices, and more. Professional communication that reflects your brand.",
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
                  <li className="text-foreground">Credit Line Sender</li>
                </ol>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="gradient-text">Credit Line Sender</span>{" "}
                - Smart Credit Management System
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Automatically remind customers who exceed their <strong>credit limits</strong> or 
                <strong> credit days</strong>. Intelligent, customer-level tracking integrated with 
                Busy Accounting Software for timely recoveries.
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
                  <span>Customer-Level Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Dual Condition Check</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Busy Software Ready</span>
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
                    <p className="font-medium">Credit Monitor Dashboard</p>
                    <p className="text-xs text-muted-foreground">Real-time Status</p>
                  </div>
                </div>
                
                {/* Customer card examples */}
                <div className="space-y-3">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Sharma Traders</span>
                      <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">Breach</span>
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
                Struggling to Enforce Credit Terms?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Most businesses face these credit management challenges:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Customer exceeded ₹1 Lakh limit but we noticed too late"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Invoice from 20 days ago still unpaid - forgot to follow up"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "No time to check each customer's credit status daily"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Cash flow blocked due to poor credit control"
                  </li>
                </ul>
                <p className="mt-4">
                  Manual credit tracking is impossible as your customer base grows. You need automation.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Intelligent Credit Control, Automated
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Credit Line Sender transforms your credit management:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Auto-detect credit limit breaches instantly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Track credit days per invoice automatically</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Send timely reminders without manual effort</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Enforce credit policy consistently 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
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
              Two Powerful <span className="gradient-text">Credit Conditions</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Monitor credit at customer level with two independent conditions - use either or both
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
                  <h3 className="text-2xl font-bold">Credit Limit</h3>
                  <p className="text-muted-foreground">Amount-based monitoring</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Set maximum outstanding amount per customer. When they cross this limit, 
                  automatic reminder is triggered.
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
                  <h3 className="text-2xl font-bold">Credit Days</h3>
                  <p className="text-muted-foreground">Time-based monitoring</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Define allowed credit period per customer. When invoices go beyond these days, 
                  automatic reminder is sent.
                </p>
                
                <div className="bg-white/5 rounded-xl p-4 space-y-2">
                  <p className="text-sm text-muted-foreground">Example:</p>
                  <p className="font-medium">Allowed Credit Days: <span className="text-primary">10 Days</span></p>
                  <p className="font-medium">Oldest Unpaid Invoice: <span className="text-yellow-400">18 Days</span></p>
                  <p className="text-sm text-yellow-400 font-medium">→ Reminder sent immediately!</p>
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
              Real-world examples of how Credit Line Sender protects your business
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
              How <span className="gradient-text">Credit Line Sender</span> Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to automated credit control
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
              Why Businesses Trust <span className="gradient-text">Credit Line Sender</span>
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
              Frequently Asked Questions about <span className="gradient-text">Credit Line Sender</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about automated credit management
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
              <CreditCard className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Automate Your Credit Control?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Stop chasing overdue payments manually. Let Credit Line Sender monitor your credit 
              limits and due days automatically. Start your free 3-day demo today.
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
