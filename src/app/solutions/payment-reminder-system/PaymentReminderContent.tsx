"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Clock, 
  Calendar, 
  Users, 
  FileText, 
  Settings, 
  Phone,
  CheckCircle2,
  Zap,
  MessageSquare,
  TestTube,
  CreditCard,
  Bell,
  ChevronRight,
  Send,
  Timer,
  Layers,
  UserCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Clock,
    title: "24/7 Uptime",
    description: "Our payment reminder system runs round the clock. Never miss sending a reminder, even on weekends or holidays.",
    highlight: true,
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Configure reminders daily, weekly, monthly, or on specific days of the week. Set multiple reminders per customer.",
  },
  {
    icon: Users,
    title: "Customer & Group Mapping",
    description: "Map reminders to individual customers or create customer groups. Apply different reminder strategies to different segments.",
  },
  {
    icon: FileText,
    title: "Bill-by-Bill Statements",
    description: "Send detailed bill-wise breakup with each reminder. Customers see exactly which invoices are pending.",
  },
  {
    icon: Layers,
    title: "Ledger-Based Reminders",
    description: "Option to send ledger-based outstanding statements instead of individual bill breakdowns.",
  },
  {
    icon: MessageSquare,
    title: "Fully Customizable Messages",
    description: "Customize every part of the reminder message - greeting, amount display, payment details, closing text. Your brand, your voice.",
  },
  {
    icon: TestTube,
    title: "Testing Mode",
    description: "Test your reminder configurations before going live. Send test messages to yourself without affecting customers.",
  },
  {
    icon: CreditCard,
    title: "Account Number Option",
    description: "Include bank account details in reminders. Make it easy for customers to make payments directly.",
  },
];

const scheduleOptions = [
  {
    type: "Daily Reminders",
    description: "Send reminders every day at your preferred time",
    example: "Every day at 10:00 AM",
  },
  {
    type: "Weekly Reminders",
    description: "Remind customers once a week on specific days",
    example: "Every Monday and Thursday",
  },
  {
    type: "Monthly Reminders",
    description: "Monthly outstanding statements on specific dates",
    example: "1st and 15th of every month",
  },
  {
    type: "Custom Schedule",
    description: "Set multiple reminders with different intervals",
    example: "Day 3, Day 7, Day 15 after due date",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Reduce Outstanding by 40%",
    description: "Automated reminders ensure consistent follow-up without manual effort.",
  },
  {
    icon: Timer,
    title: "Save 10+ Hours Weekly",
    description: "No more manually calling or messaging customers for payments.",
  },
  {
    icon: UserCheck,
    title: "Better Customer Relations",
    description: "Professional, timely reminders maintain business relationships.",
  },
  {
    icon: Bell,
    title: "Never Miss a Reminder",
    description: "24/7 automated system ensures every customer gets reminded on time.",
  },
];

const faqs = [
  {
    question: "How does the payment reminder system work with Busy Accounting Software?",
    answer: "Our system connects directly to your Busy Accounting Software database. It reads customer outstanding data in real-time and sends automated reminders via WhatsApp or SMS based on your configured schedule and rules. No manual data export is needed.",
  },
  {
    question: "Can I send different reminder messages to different customers?",
    answer: "Yes! You can create multiple reminder templates and assign them to different customer groups. VIP customers can receive polite reminders while repeat defaulters get more urgent messages. Every aspect of the message is customizable.",
  },
  {
    question: "What is the difference between bill-by-bill and ledger-based reminders?",
    answer: "Bill-by-bill reminders show each pending invoice with its date, amount, and invoice number - detailed breakup. Ledger-based reminders show the total outstanding amount with a summary statement. You can choose which format works best for your customers.",
  },
  {
    question: "How many reminders can I send to one customer?",
    answer: "You can configure multiple reminders per customer. For example, you can set up to 5 reminders: Day 1 (gentle), Day 7 (follow-up), Day 15 (urgent), Day 30 (final notice), and Day 45 (escalation). Each can have different message templates.",
  },
  {
    question: "Does it work on weekends and holidays?",
    answer: "Yes, our system operates 24/7. However, you can configure it to skip weekends or specific holidays if you prefer. You have full control over when reminders are sent.",
  },
  {
    question: "Can I test the reminder system before going live?",
    answer: "Absolutely. We have a testing mode that lets you send test messages to your own number without affecting your customers. Preview exactly how reminders will look before activating them.",
  },
  {
    question: "What channels can I use to send reminders?",
    answer: "Currently we support WhatsApp and SMS. WhatsApp is recommended for better engagement and lower costs. SMS is available as a fallback or for customers who don't use WhatsApp.",
  },
  {
    question: "How much does the payment reminder system cost?",
    answer: "Pricing starts at ₹500/month for the Basic plan. WhatsApp message charges are additional based on usage. Contact us for detailed pricing based on your reminder volume.",
  },
];

export function PaymentReminderContent() {
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
                  <li className="text-foreground">Payment Reminder</li>
                </ol>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Automated <span className="gradient-text">Payment Reminder System</span> for Busy Software
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                <strong>24/7 automated payment collection</strong> integrated with your Busy Accounting Software. 
                Send customizable reminders via WhatsApp and SMS — daily, weekly, or monthly. 
                Reduce outstanding payments by 40%.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="glow-teal group" asChild>
                  <Link href="/pricing">
                    Start Free Demo
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#features">See Features</Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Works with Busy 17/18/21</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>WhatsApp & SMS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>24/7 Uptime</span>
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
                {/* Chat mockup */}
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">Payment Reminder</p>
                    <p className="text-xs text-green-400">Automated • 24/7 Active</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-start">
                    <div className="bg-white/5 rounded-2xl rounded-bl-sm px-4 py-3 max-w-sm space-y-2">
                      <p className="text-sm font-medium">📋 Payment Reminder</p>
                      <p className="text-sm text-muted-foreground">Dear Sharma Traders,</p>
                      <p className="text-sm text-muted-foreground">Your outstanding as of today:</p>
                      <p className="text-lg font-bold text-primary">₹1,25,450</p>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <p>INV-2024-0892: ₹45,000</p>
                        <p>INV-2024-0875: ₹52,000</p>
                        <p>INV-2024-0851: ₹28,450</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">A/c: HDFC 50123456789</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground py-2">
                    <Send className="w-3 h-3" />
                    <span>Sent via WhatsApp</span>
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
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">24/7 Active</span>
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
                Struggling to Collect Payments on Time?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Manual payment follow-ups are:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    Time-consuming — hours spent calling customers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    Inconsistent — reminders get missed during busy days
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    Unprofessional — informal messages hurt brand image
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    Error-prone — wrong amounts or missing invoices
                  </li>
                </ul>
                <p className="mt-4">
                  Your outstanding keeps growing while your team stays busy with reminders instead of real work.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                BusyNotify Automates Everything
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our payment reminder system connects directly to Busy Software and handles collections automatically:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Reads outstanding data in real-time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Sends reminders at your configured schedule</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Customizable messages for every scenario</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Runs 24/7 without manual intervention</span>
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
              Powerful <span className="gradient-text">Features</span> for Payment Collection
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Every feature designed to help you collect payments faster
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
                className={`glass-card rounded-xl p-6 group hover:border-primary/30 transition-colors ${
                  feature.highlight ? "border-primary/30" : ""
                }`}
              >
                <div className={`p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform ${
                  feature.highlight ? "bg-primary/20" : "bg-primary/10"
                }`}>
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

      {/* Scheduling Options */}
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
              Flexible <span className="gradient-text">Reminder Schedules</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Configure reminders exactly how you want them
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scheduleOptions.map((option, index) => (
              <motion.div
                key={option.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">{option.type}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                <p className="text-xs text-primary font-mono bg-primary/10 rounded px-2 py-1">
                  {option.example}
                </p>
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why Choose <span className="gradient-text">BusyNotify</span>?
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

      {/* Integration Section */}
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
              <h2 className="text-3xl font-bold mb-6">
                Direct Integration with <span className="gradient-text">Busy Accounting Software</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our payment reminder system connects directly to your Busy Software database. No exports, no manual data transfer.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Real-time outstanding data sync</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Works with Busy 17, 18, 21 and all versions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Single-user and multi-user editions supported</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Secure read-only database access</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Busy Software</h3>
                  <p className="text-sm text-muted-foreground">Connected</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Customers Synced</span>
                  <span className="font-medium">1,247</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Outstanding Amount</span>
                  <span className="font-medium">₹48.5 Lakhs</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-sm text-muted-foreground">Reminders Configured</span>
                  <span className="font-medium">3 Active</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-muted-foreground">Next Reminder</span>
                  <span className="font-medium text-primary">Today, 10:00 AM</span>
                </div>
              </div>
            </div>
          </motion.div>
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
              <Bell className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold">
              Start Collecting Payments Faster
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Join 500+ Indian businesses using automated payment reminders. 
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
