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
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: ListChecks,
    title: "Amount-wise Follow-up",
    description: "Track outstanding amounts by total balance. Telecallers see the total due and follow up accordingly.",
  },
  {
    icon: FileText,
    title: "Bill-by-bill Tracking",
    description: "Detailed invoice-wise follow-up. See each pending bill, its date, amount, and follow-up status individually.",
  },
  {
    icon: Users,
    title: "Telecaller Dashboard",
    description: "Dedicated dashboard showing pending customers, their outstanding amounts, and follow-up history at a glance.",
  },
  {
    icon: History,
    title: "Follow-up History",
    description: "Complete record of all past follow-ups. See what was discussed, promises made, and outcomes recorded.",
  },
  {
    icon: Calendar,
    title: "Promise Date Tracking",
    description: "Record customer payment promises. If a customer says 'I'll pay in 4 days', set the reminder for that date.",
  },
  {
    icon: Bell,
    title: "Dual Reminders",
    description: "Both telecaller and customer get reminded on the promise date. Never miss a follow-up commitment.",
  },
  {
    icon: Target,
    title: "Priority Queues",
    description: "Prioritize follow-ups by amount, age, or customer. Focus efforts where they matter most.",
  },
  {
    icon: Eye,
    title: "Real-time Sync",
    description: "Data syncs live with Busy Software. See updated outstanding amounts after each payment.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Telecaller Opens Dashboard",
    description: "Login to see today's follow-up list with customers sorted by priority, amount, or follow-up due date.",
    icon: ClipboardList,
  },
  {
    step: 2,
    title: "View Customer Details",
    description: "Click any customer to see their outstanding amount, pending bills, and complete follow-up history.",
    icon: Eye,
  },
  {
    step: 3,
    title: "Record Follow-up",
    description: "After the call, record what was discussed, the outcome, and any payment promise made by the customer.",
    icon: MessageSquare,
  },
  {
    step: 4,
    title: "Set Promise Reminder",
    description: "If customer promises payment in 4 days, set the reminder. On Day 4, both telecaller and customer get notified.",
    icon: Bell,
  },
];

const benefits = [
  {
    icon: UserCheck,
    title: "Never Miss a Follow-up",
    description: "Automated reminders ensure telecallers always know who to call and when.",
  },
  {
    icon: Zap,
    title: "40% Faster Collections",
    description: "Systematic follow-ups lead to faster payment realization from customers.",
  },
  {
    icon: Timer,
    title: "Complete Visibility",
    description: "Managers see team performance, pending follow-ups, and collection progress.",
  },
  {
    icon: AlertCircle,
    title: "Customer Accountability",
    description: "Customers know you're tracking their promises. They take commitments seriously.",
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
    title: "Today's Tasks",
    description: "Customers scheduled for follow-up today",
  },
  {
    title: "Promise Calendar",
    description: "Upcoming payment promises by date",
  },
  {
    title: "Team Performance",
    description: "Track each telecaller's follow-ups and results",
  },
  {
    title: "Overdue Alerts",
    description: "Customers who missed their promised payment date",
  },
];

const faqs = [
  {
    question: "What is a due follow-up system?",
    answer: "A due follow-up system is a tool that helps collection teams track pending payments, record customer conversations, and set reminders for future follow-ups. It ensures no customer commitment is forgotten and every outstanding is systematically pursued.",
  },
  {
    question: "How is this different from automated payment reminders?",
    answer: "Automated reminders are sent without human intervention. The due follow-up system is for manual follow-ups where a telecaller calls the customer, has a conversation, and records the outcome. It's for personalized collection efforts where human touch matters.",
  },
  {
    question: "Can I track both amount-wise and bill-by-bill follow-ups?",
    answer: "Yes, you can choose your follow-up mode. Amount-wise shows total outstanding - good for customers with multiple small bills. Bill-by-bill shows each pending invoice separately - useful for disputing specific bills or detailed discussions.",
  },
  {
    question: "How does the promise date reminder work?",
    answer: "When a customer promises to pay on a specific date (e.g., 'I'll pay on Friday'), you set that as the promise date. On Friday, the system reminds the telecaller to follow up and also sends a reminder to the customer about their commitment.",
  },
  {
    question: "Can multiple telecallers use the system?",
    answer: "Yes, the system supports multiple telecallers. Each has their own login and dashboard. Managers can see team-wide performance and assign customers to specific telecallers.",
  },
  {
    question: "Does it integrate with Busy Accounting Software?",
    answer: "Yes, the system connects directly to your Busy Software database. Outstanding amounts, customer details, and payment history are synced in real-time. When a payment is recorded in Busy, it reflects in the follow-up system immediately.",
  },
  {
    question: "What happens if a customer misses their promise date?",
    answer: "The customer appears in the 'Overdue Promises' section. The telecaller is alerted, and the customer automatically receives a follow-up reminder. You can escalate to managers if needed.",
  },
  {
    question: "Is there a mobile app for telecallers?",
    answer: "The dashboard is mobile-responsive and works on any browser. Telecallers can access it from their phones or tablets. A dedicated mobile app is coming soon.",
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
                  <li className="text-foreground">Due Follow-up</li>
                </ol>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Due <span className="gradient-text">Follow-up System</span> for Busy Software
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                <strong>Never miss a customer follow-up again.</strong> Our manual follow-up system 
                integrates with Busy Accounting Software to help telecallers track pending payments, 
                record promises, and get reminders at the right time.
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
                  <span>Amount-wise & Bill-by-bill</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Promise Date Reminders</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Telecaller Dashboard</span>
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
                    <p className="font-semibold">Telecaller Dashboard</p>
                    <p className="text-xs text-muted-foreground">Today's Follow-ups</p>
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
                Struggling to Track Customer Follow-ups?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Manual follow-up management is chaotic:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "When did I last call this customer?"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "They promised to pay... when was that?"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Did anyone follow up with that big account?"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Customer is upset - we forgot their promise date"
                  </li>
                </ul>
                <p className="mt-4">
                  Without a proper system, follow-ups are missed, promises forgotten, and collections suffer.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                BusyNotify Solves This
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our due follow-up system gives telecallers everything they need:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>See all pending customers in one dashboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Complete history of past interactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Record promises and get auto-reminders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Customers also reminded on promise dates</span>
                  </li>
                </ul>
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
              Complete <span className="gradient-text">Follow-up Management</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Every tool telecallers need to manage collections effectively
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
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
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
              How <span className="gradient-text">It Works</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple workflow that keeps your collections on track
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
                <span className="gradient-text">Telecaller Dashboard</span> Features
              </h2>
              <p className="text-muted-foreground mb-8">
                Everything your collection team needs in one place:
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
                <h3 className="font-semibold">Today's Promise Calendar</h3>
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
              Why Teams Love <span className="gradient-text">BusyNotify</span> Follow-up System
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
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
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
              <Phone className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold">
              Never Miss a Follow-up Again
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Give your telecallers the tools they need to collect faster. 
              Start your free 3-day demo today.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="glow-teal group" asChild>
                <Link href="/pricing">
                  Start Free Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#">
                  <Phone className="mr-2 w-4 h-4" />
                  Talk to Sales
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
