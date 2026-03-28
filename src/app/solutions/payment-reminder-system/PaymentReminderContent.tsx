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
  UserCheck,
  Building2,
  TruckIcon,
  Calculator,
  IndianRupee,
  TrendingUp,
  MessageCircle,
  XCircle,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

// SEO-Optimized Features with Keywords
const features = [
  {
    icon: Clock,
    title: "24/7 Automated Payment Reminders",
    description: "Our payment reminder system runs round the clock. Never miss sending a reminder, even on weekends or holidays. Fully automated from BUSY Software.",
    highlight: true,
    keyword: "automated payment reminders",
  },
  {
    icon: Calendar,
    title: "Flexible Reminder Scheduling",
    description: "Configure reminders daily, weekly, monthly, or on specific days of the week. Set multiple reminders per customer based on due dates.",
    keyword: "payment reminder schedule",
  },
  {
    icon: Users,
    title: "Customer & Group Mapping",
    description: "Map reminders to individual customers or create customer groups. Apply different reminder strategies to different segments from BUSY data.",
    keyword: "customer payment reminder groups",
  },
  {
    icon: FileText,
    title: "Bill-by-Bill Payment Reminder (Invoice-wise Outstanding)",
    description: "Send detailed bill-wise breakup with each reminder. Customers see exactly which invoices are pending with dates and amounts from BUSY.",
    keyword: "bill-by-bill payment reminder",
  },
  {
    icon: Layers,
    title: "Ledger-Based Outstanding Reminder (Total Balance Statement)",
    description: "Option to send ledger-based outstanding statements instead of individual bill breakdowns. Shows total balance from BUSY ledger.",
    keyword: "ledger-based outstanding reminder",
  },
  {
    icon: MessageSquare,
    title: "Customizable Reminder Messages",
    description: "Customize every part of the reminder message - greeting, amount display, payment details, closing text. Your brand, your voice for WhatsApp and SMS.",
    keyword: "custom payment reminder message",
  },
  {
    icon: TestTube,
    title: "Testing Mode",
    description: "Test your reminder configurations before going live. Send test messages to yourself without affecting customers.",
    keyword: "payment reminder testing",
  },
  {
    icon: CreditCard,
    title: "Bank Account Details in Reminders",
    description: "Include bank account details in reminders. Make it easy for customers to make payments directly from the WhatsApp message.",
    keyword: "payment instructions reminder",
  },
];

const scheduleOptions = [
  {
    type: "Daily Reminders",
    description: "Send payment reminders every day at your preferred time",
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
    description: "Set multiple reminders with different intervals after due date",
    example: "Day 3, Day 7, Day 15 after due date",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Reduce Outstanding by 40%",
    description: "Automated reminders ensure consistent follow-up without manual effort. Improve cash flow for your business.",
  },
  {
    icon: Timer,
    title: "Save 10+ Hours Weekly",
    description: "No more manually calling or messaging customers for payments. Free your staff for productive work.",
  },
  {
    icon: UserCheck,
    title: "Better Customer Relations",
    description: "Professional, timely reminders maintain business relationships. No awkward follow-up calls.",
  },
  {
    icon: Bell,
    title: "Never Miss a Reminder",
    description: "24/7 automated system ensures every customer gets reminded on time from BUSY data.",
  },
];

// Who Should Use This - Use Cases by Business Type
const useCases = [
  {
    icon: TruckIcon,
    title: "Distributors",
    description: "Collect payments from retailers automatically. Send outstanding reminders before delivery. Reduce credit cycle from 60+ days to 30 days.",
    benefit: "Payment reminder for distributors",
  },
  {
    icon: Building2,
    title: "Wholesalers",
    description: "Manage credit customers efficiently. Automated WhatsApp reminders for outstanding bills. Track payment follow-ups without manual calls.",
    benefit: "Payment reminder for wholesalers",
  },
  {
    icon: Settings,
    title: "Manufacturers",
    description: "Follow up on bulk invoices automatically. Send payment reminders with invoice details. Reduce outstanding from long credit customers.",
    benefit: "Payment reminder for manufacturers",
  },
  {
    icon: Calculator,
    title: "Accountants / CAs",
    description: "Track payment follow-ups for multiple clients. Automated reminders from BUSY data. Manage receivables for multiple companies.",
    benefit: "Payment reminder for accountants",
  },
  {
    icon: Users,
    title: "Service Providers",
    description: "Collect pending dues automatically. Send payment reminders after service delivery. Improve cash flow for service business.",
    benefit: "Payment reminder for service providers",
  },
  {
    icon: TrendingUp,
    title: "MSMEs & Small Business",
    description: "Improve cash flow with automated reminders. Reduce time spent on collection calls. Professional payment follow-up system.",
    benefit: "Payment reminder for MSME",
  },
];

// Before vs After Comparison
const beforeAfterComparison = [
  { aspect: "Payment Follow-up", before: "Manual calls to customers", after: "Automated WhatsApp reminders" },
  { aspect: "Reminder Consistency", before: "Missed follow-ups", after: "Scheduled reminders, never missed" },
  { aspect: "Collection Speed", before: "Delayed payments (60+ days)", after: "Faster collection (30-40 days)" },
  { aspect: "Staff Dependency", before: "Staff must remember", after: "24/7 automated system" },
  { aspect: "Message Quality", before: "Informal, inconsistent", after: "Professional, branded messages" },
  { aspect: "Cost", before: "Staff hours + phone bills", after: "Low monthly subscription" },
  { aspect: "Scale", before: "Limited to staff capacity", after: "Unlimited customers" },
  { aspect: "Tracking", before: "No follow-up records", after: "Complete reminder history" },
];

// Why BUSY Users Need This
const whyBusyUsersNeed = [
  {
    problem: "BUSY shows outstanding but doesn't follow up automatically",
    solution: "Automated reminders from BUSY outstanding data",
  },
  {
    problem: "Staff forgets to send reminders on time",
    solution: "Scheduled reminders - never miss a follow-up",
  },
  {
    problem: "No WhatsApp automation in BUSY",
    solution: "Send reminders directly via WhatsApp from BUSY",
  },
  {
    problem: "No scheduled follow-up system",
    solution: "Configure Day 1, Day 7, Day 15 reminders",
  },
  {
    problem: "No bill-wise reminder in BUSY",
    solution: "Send invoice-wise outstanding details automatically",
  },
];

// Payment Reminder Templates
const reminderTemplates = [
  {
    type: "Polite Reminder",
    tone: "Friendly First Reminder",
    template: "Dear {CustomerName}, hope you are doing well! This is a gentle reminder about your outstanding balance of ₹{Amount} as of {Date}. Please let us know if you have any questions. Thank you for your continued business!",
    useCase: "First reminder, good customers",
  },
  {
    type: "Follow-up Reminder",
    tone: "Professional Second Reminder",
    template: "Dear {CustomerName}, we haven't received payment for the outstanding amount of ₹{Amount}. Invoice details: {BillList}. Kindly arrange payment at your earliest convenience. Bank details: {BankAccount}",
    useCase: "Second reminder after 7 days",
  },
  {
    type: "Urgent Reminder",
    tone: "Firm Third Reminder",
    template: "Dear {CustomerName}, your outstanding of ₹{Amount} is now overdue. Please clear the pending amount immediately to avoid any disruption in services. Pending invoices: {BillList}",
    useCase: "Third reminder after 15 days",
  },
  {
    type: "Final Notice",
    tone: "Serious Final Reminder",
    template: "Dear {CustomerName}, this is a final reminder for your overdue payment of ₹{Amount}. Please clear this immediately to maintain your credit terms. Contact us urgently if there are any issues.",
    useCase: "Final reminder after 30+ days",
  },
];

// Expanded SEO-Optimized FAQs
const faqs = [
  {
    question: "How to send payment reminder from BUSY?",
    answer: "BusyNotify connects directly to your BUSY Accounting Software database and sends automated payment reminders via WhatsApp and SMS. Configure your reminder schedule (daily, weekly, monthly), customize the message template, and the system automatically sends reminders to customers with outstanding balances from BUSY - no manual work required.",
  },
  {
    question: "Can I send WhatsApp payment reminders automatically from BUSY?",
    answer: "Yes! BusyNotify sends automated WhatsApp payment reminders directly from BUSY Software. When you create a reminder configuration, our system reads outstanding data from BUSY and sends WhatsApp messages automatically at your scheduled times. Works with all BUSY versions (17/18/21).",
  },
  {
    question: "How to reduce outstanding payments in BUSY?",
    answer: "Use BusyNotify automated payment reminder system to consistently follow up with customers via WhatsApp and SMS. Businesses typically see 40% reduction in outstanding within 3 months. Automated reminders ensure no customer is missed, leading to faster collections and improved cash flow.",
  },
  {
    question: "Can I send invoice reminders via WhatsApp?",
    answer: "Absolutely! BusyNotify sends invoice-wise reminders via WhatsApp with complete bill details. Each reminder includes invoice numbers, dates, amounts, and total outstanding. Customers see exactly which invoices are pending. You can also include bank account details for easy payment.",
  },
  {
    question: "Is this payment reminder system suitable for Indian businesses?",
    answer: "Yes! BusyNotify is built specifically for Indian businesses using BUSY Accounting Software. It supports ₹ currency, Indian date formats, Hindi/English messages, and works with Indian WhatsApp usage patterns. Perfect for distributors, wholesalers, manufacturers, and MSMEs across India.",
  },
  {
    question: "Can I customize reminder messages for different customers?",
    answer: "Yes! You can create multiple reminder templates and assign them to different customer groups. VIP customers can receive polite reminders while repeat defaulters get more urgent messages. Every aspect of the message is customizable - greeting, amount format, payment details, and closing.",
  },
  {
    question: "Can I send reminders for multiple invoices together?",
    answer: "Absolutely! BusyNotify sends consolidated reminders showing all pending invoices for a customer. You can choose bill-by-bill format (each invoice listed separately) or ledger-based format (total outstanding summary). Both include complete details from BUSY.",
  },
  {
    question: "How does the payment reminder system work with BUSY Software?",
    answer: "BusyNotify connects directly to your BUSY Accounting Software database. It reads customer outstanding data in real-time and sends automated reminders via WhatsApp or SMS based on your configured schedule and rules. No manual data export is needed. Works with BUSY 17, 18, 21, and all versions.",
  },
  {
    question: "What is the difference between bill-by-bill and ledger-based reminders?",
    answer: "Bill-by-bill reminders show each pending invoice with its date, amount, and invoice number - detailed breakup of every bill. Ledger-based reminders show the total outstanding amount with a summary statement from BUSY ledger. You can choose which format works best for each customer group.",
  },
  {
    question: "How many reminders can I send to one customer?",
    answer: "You can configure multiple reminders per customer. For example, set up to 5 reminders: Day 1 (gentle), Day 7 (follow-up), Day 15 (urgent), Day 30 (final notice), and Day 45 (escalation). Each can have different message templates and tones.",
  },
  {
    question: "Does it work on weekends and holidays?",
    answer: "Yes, our system operates 24/7. However, you can configure it to skip weekends or specific holidays if you prefer. You have full control over when reminders are sent based on your business preferences.",
  },
  {
    question: "Can I test the reminder system before going live?",
    answer: "Absolutely. We have a testing mode that lets you send test messages to your own number without affecting your customers. Preview exactly how reminders will look before activating them for real customers.",
  },
  {
    question: "What channels can I use to send reminders?",
    answer: "Currently we support WhatsApp and SMS. WhatsApp is recommended for better engagement and lower costs - 90%+ open rate. SMS is available as a fallback or for customers who don't use WhatsApp.",
  },
  {
    question: "How much does the payment reminder system cost?",
    answer: "Pricing starts at ₹500/month for the Basic plan. WhatsApp message charges are additional based on usage (₹0.25-0.50 per message typically). Contact us for detailed pricing based on your reminder volume and customer count.",
  },
  {
    question: "Can I include bank account details in reminders?",
    answer: "Yes! You can include your bank account details (account number, IFSC, bank name) in every reminder. This makes it easy for customers to make payments directly. You can also add UPI ID or payment links.",
  },
  {
    question: "Does it support multiple companies in BUSY?",
    answer: "Yes, BusyNotify supports multiple companies in BUSY. You can configure separate reminder rules for each company, or use the same settings across all companies. Perfect for CA firms and multi-company businesses.",
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
                BUSY Payment Reminder System for <span className="gradient-text">WhatsApp & SMS</span> (Automated Collection)
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                <strong>Send automated payment reminders from BUSY Accounting Software via WhatsApp and SMS.</strong> Share outstanding balance, bill-by-bill details, and payment instructions automatically. Reduce pending payments and improve cash flow for your Indian business.
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
                  <span>WhatsApp & SMS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>24/7 Automated</span>
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
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp Payment Reminder</p>
                    <p className="text-xs text-green-400">Automated • From BUSY Software</p>
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
                    <span>Sent via WhatsApp automatically</span>
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

      {/* Why BUSY Users Need This Section */}
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
              Why <span className="gradient-text">BUSY Users</span> Need Automated Payment Reminders
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              BUSY shows outstanding amounts, but doesn&apos;t follow up automatically. Here&apos;s the gap we fill:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyBusyUsersNeed.map((item, index) => (
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
                    <span className="text-xs font-medium">BUSY Only</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.problem}</p>
                  <div className="pt-2 border-t border-border">
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-xs font-medium">With BusyNotify</span>
                    </div>
                    <p className="text-sm font-medium mt-1">{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After Comparison */}
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
              Before vs After: <span className="gradient-text">Payment Collection Transformation</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              See how automated reminders from BUSY change your collection process
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
                      <th className="px-6 py-4 text-left font-semibold text-red-400">Without Automation</th>
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

      {/* Who Should Use This Section */}
      <section id="use-cases" className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Who Should Use This <span className="gradient-text">Payment Reminder System</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for Indian businesses that want to improve collection and cash flow
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

      {/* WhatsApp Payment Reminder Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full text-sm text-green-400 mb-4">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Integration</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="gradient-text">WhatsApp Payment Reminder</span> for BUSY
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6">
                Send payment reminders directly on WhatsApp from BUSY Accounting Software. 
                Higher open rates than email and SMS. Customers see invoice details instantly.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">90%+ Open Rate</p>
                    <p className="text-sm text-muted-foreground">WhatsApp messages have much higher open rates than email</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Instant Delivery</p>
                    <p className="text-sm text-muted-foreground">Customers see outstanding amount immediately on their phone</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Payment Instructions</p>
                    <p className="text-sm text-muted-foreground">Include bank details, UPI ID, or payment links in every reminder</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Professional Image</p>
                    <p className="text-sm text-muted-foreground">Branded, professional reminders maintain business relationships</p>
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
                <MessageCircle className="w-5 h-5 text-green-400" />
                WhatsApp Reminder Stats
              </h4>
              
              <div className="space-y-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Open Rate</span>
                    <span className="font-bold text-green-400">98%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">vs 20% for email reminders</p>
                </div>
                
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Response Rate</span>
                    <span className="font-bold text-primary">45%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Customers reply or make payment</p>
                </div>
                
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Avg Collection Time</span>
                    <span className="font-bold text-yellow-400">-15 days</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Faster payment compared to calls</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Reminder Templates Section */}
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
              <span className="gradient-text">Payment Reminder Message</span> Templates
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Use these ready-made templates or customize your own for WhatsApp and SMS reminders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reminderTemplates.map((template, index) => (
              <motion.div
                key={template.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">{template.type}</h3>
                  <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                    {template.tone}
                  </span>
                </div>
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <p className="text-sm text-muted-foreground leading-relaxed font-mono">
                    {template.template}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  <strong>Use case:</strong> {template.useCase}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-20">
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
                    Time-consuming — hours spent calling customers daily
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
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    Expensive — staff hours + phone calls add up
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
                  Our payment reminder system connects directly to BUSY Software and handles collections automatically:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Reads outstanding data in real-time from BUSY</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Sends WhatsApp/SMS reminders at configured schedule</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Customizable messages for every scenario</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Runs 24/7 without manual intervention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Includes bank details for easy payment</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Powerful <span className="gradient-text">Payment Collection Features</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Every feature designed to help you collect payments faster from BUSY data
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

      {/* Scheduling Options */}
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
              Flexible <span className="gradient-text">Reminder Schedules</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Configure payment reminders exactly how you want them from BUSY outstanding data
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
              Why Choose <span className="gradient-text">BusyNotify</span> for Payment Reminders?
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
                Direct Integration with <span className="gradient-text">BUSY Accounting Software</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our payment reminder system connects directly to your BUSY Software database. No exports, no manual data transfer.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Real-time outstanding data sync from BUSY</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Works with BUSY 17, 18, 21 and all versions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Single-user and multi-user editions supported</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Secure read-only database access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Multi-company support for CA firms</span>
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
                  <h3 className="font-semibold">BUSY Software</h3>
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
              Frequently Asked Questions about <span className="gradient-text">Payment Reminder System</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about automated payment reminders from BUSY
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
              <Bell className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold">
              Start Collecting Payments Faster with Automated Reminders
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Join 500+ Indian businesses using automated payment reminders from BUSY. 
              Reduce outstanding by 40% and improve cash flow. Start your free 3-day demo today.
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
