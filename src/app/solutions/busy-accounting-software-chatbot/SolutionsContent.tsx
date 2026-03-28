"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Bot, 
  Clock, 
  MessageSquare, 
  FileText, 
  Receipt, 
  Truck, 
  FileCheck, 
  ShoppingCart,
  Phone,
  CheckCircle2,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Building2,
  ChevronRight,
  MessageCircle,
  BarChart3,
  Settings,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Feature data for the chatbot capabilities
const chatbotFeatures = [
  {
    icon: FileText,
    title: "Balance Inquiry",
    description: "Customers can instantly check their account balance without calling your office. Get real-time outstanding amounts directly on WhatsApp or Telegram.",
    keywords: "balance check, account balance, outstanding balance Busy Software",
  },
  {
    icon: FileCheck,
    title: "Ledger Statements",
    description: "Generate and send complete ledger statements on demand. Customers receive detailed account statements in PDF format within seconds.",
    keywords: "ledger statement, account statement Busy, party ledger",
  },
  {
    icon: Receipt,
    title: "Bill-by-Bill Statement",
    description: "Provide detailed bill-wise breakup of outstanding amounts. Customers can see each invoice, payment, and pending amount clearly.",
    keywords: "bill by bill statement, invoice breakup, pending bills Busy",
  },
  {
    icon: FileText,
    title: "Invoice Generation",
    description: "Send sales invoices directly to customers through chat. They can download, print, or forward invoices to their accounts team.",
    keywords: "invoice download, sales invoice Busy Software, GST invoice",
  },
  {
    icon: Receipt,
    title: "Payment Receipts",
    description: "Automatically send payment receipt copies when customers ask. No manual searching or emailing required.",
    keywords: "payment receipt, receipt copy Busy, payment acknowledgment",
  },
  {
    icon: Truck,
    title: "Transportation Slips",
    description: "Share challans and transport documents instantly. Customers can track their shipment details without calling your dispatch team.",
    keywords: "transport challan, delivery challan Busy, LR copy",
  },
  {
    icon: FileCheck,
    title: "General Vouchers",
    description: "Provide journal entries, debit notes, credit notes, and other vouchers on request. Complete transparency in all transactions.",
    keywords: "journal voucher, debit note Busy, credit note voucher",
  },
  {
    icon: ShoppingCart,
    title: "Pending Sales Orders",
    description: "Customers can check their pending order status, expected dispatch dates, and order history - all through simple chat commands.",
    keywords: "pending order status, sales order Busy, order tracking",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your chatbot never sleeps. Customers get instant responses at midnight, weekends, or holidays.",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "No waiting, no hold music. Customers get information in under 3 seconds.",
  },
  {
    icon: Users,
    title: "Handle Multiple Queries",
    description: "Serve 100+ customers simultaneously. No more busy lines or callback requests.",
  },
  {
    icon: TrendingUp,
    title: "Reduce Workload by 70%",
    description: "Free your staff from repetitive queries. Focus on business growth instead.",
  },
];

const howItWorksSteps = [
  {
    step: 1,
    title: "Connect Busy Software",
    description: "Our team integrates BusyNotify with your existing Busy Accounting Software. Works with Busy 17, Busy 18, Busy 21, and all versions.",
    icon: Settings,
  },
  {
    step: 2,
    title: "Configure WhatsApp/Telegram",
    description: "Link your business WhatsApp number or create a Telegram bot. Your customers use their preferred messaging app.",
    icon: MessageCircle,
  },
  {
    step: 3,
    title: "Customers Start Chatting",
    description: "Customers simply send messages like 'Show my balance' or 'Send last invoice'. The AI understands natural language.",
    icon: Bot,
  },
  {
    step: 4,
    title: "Get Instant Reports",
    description: "Reports and documents are fetched from Busy Software in real-time and delivered instantly to the customer.",
    icon: BarChart3,
  },
];

const industries = [
  "Trading Businesses",
  "Manufacturing Units",
  "Distribution Companies",
  "Wholesale Dealers",
  "Retail Chains",
  "Service Providers",
  "Import/Export Firms",
  "Pharmaceutical Distribution",
];

const faqs = [
  {
    question: "What is Busy Accounting Software Chatbot?",
    answer: "Busy Accounting Software Chatbot is an AI-powered automation tool that connects with your Busy ERP to handle customer queries automatically. Customers can request balance details, ledgers, invoices, and other documents through WhatsApp or Telegram without contacting your office.",
  },
  {
    question: "How does the Busy ERP Chatbot work?",
    answer: "The chatbot integrates directly with your Busy Software database. When a customer sends a query via WhatsApp or Telegram, our AI processes the request, fetches data from Busy in real-time, and sends back the requested information within seconds.",
  },
  {
    question: "Which Busy Software versions are supported?",
    answer: "BusyNotify works with all major Busy Accounting Software versions including Busy 17, Busy 18, Busy 21, and the latest releases. We support both single-user and multi-user editions.",
  },
  {
    question: "Is my Busy Software data secure?",
    answer: "Absolutely. We use enterprise-grade encryption and never store your accounting data on external servers. The chatbot only reads data on-demand with proper authentication. We comply with Indian data protection guidelines.",
  },
  {
    question: "Can customers access data 24/7?",
    answer: "Yes! The chatbot operates round-the-clock. Your customers can check balances, download invoices, or track orders at any time - midnight, weekends, or holidays.",
  },
  {
    question: "How much does Busy ERP Chatbot cost?",
    answer: "Pricing starts at just ₹500/month for basic plans. We offer flexible plans based on your query volume and number of customers. Check our pricing page for detailed plans.",
  },
  {
    question: "Do I need technical knowledge to set this up?",
    answer: "No technical expertise required. Our team handles the complete integration. You just need to share your Busy Software access and WhatsApp business number details.",
  },
  {
    question: "Can I customize what information customers can access?",
    answer: "Yes, you have full control over what data is accessible. You can enable/disable specific features like balance inquiry, invoice download, or ledger statements based on your preferences.",
  },
];

export function SolutionsContent() {
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
                  <li className="text-foreground">Busy Accounting Chatbot</li>
                </ol>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                AI-Powered{" "}
                <span className="gradient-text">Busy Accounting Software Chatbot</span>{" "}
                for Indian Businesses
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Automate customer queries 24/7. Let customers check <strong>balances, ledgers, invoices, payment receipts</strong> and more through <strong>WhatsApp</strong> or <strong>Telegram</strong> — without calling your office.
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
                  <span>Works with Busy 17/18/21</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>WhatsApp & Telegram</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Setup in 24 Hours</span>
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
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">BusyNotify Bot</p>
                    <p className="text-xs text-green-400">Online • 24/7 Active</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-primary/20 rounded-2xl rounded-br-sm px-4 py-2 max-w-xs">
                      <p className="text-sm">Show my balance</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white/5 rounded-2xl rounded-bl-sm px-4 py-3 max-w-sm space-y-2">
                      <p className="text-sm font-medium">📋 Account Balance</p>
                      <p className="text-sm text-muted-foreground">Hello Sharma Traders!</p>
                      <p className="text-lg font-bold text-primary">Outstanding: ₹45,250</p>
                      <p className="text-xs text-muted-foreground">As of: Today, 2:30 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-primary/20 rounded-2xl rounded-br-sm px-4 py-2 max-w-xs">
                      <p className="text-sm">Send last 3 invoices</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white/5 rounded-2xl rounded-bl-sm px-4 py-3 max-w-sm space-y-2">
                      <p className="text-sm font-medium">📄 3 Invoices Sent</p>
                      <p className="text-xs text-muted-foreground">INV-2024-0892.pdf</p>
                      <p className="text-xs text-muted-foreground">INV-2024-0875.pdf</p>
                      <p className="text-xs text-muted-foreground">INV-2024-0851.pdf</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
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
                Tired of Answering the Same Customer Questions All Day?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Every day, your staff handles dozens of calls asking the same things:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "What's my outstanding balance?"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Can you send my last invoice?"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "What's my pending order status?"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Send me the payment receipt"
                  </li>
                </ul>
                <p className="mt-4">
                  These repetitive queries consume hours of productive time. Your accounting team can't focus on actual work.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                BusyNotify Solves This Automatically
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our AI chatbot connects to your Busy Accounting Software and handles these queries automatically:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Customers get instant responses 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>No phone calls or manual lookups needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Documents sent via WhatsApp/Telegram</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Your staff focuses on real work</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
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
              What Can the <span className="gradient-text">Busy ERP Chatbot</span> Do?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Customers can request these documents directly through WhatsApp or Telegram chat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chatbotFeatures.map((feature, index) => (
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
                {/* Hidden keywords for SEO - not visible but crawlable */}
                <meta itemProp="keywords" content={feature.keywords} />
              </motion.div>
            ))}
          </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why Choose <span className="gradient-text">BusyNotify</span> for Your Business?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform how you handle customer queries with AI-powered automation
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
              How <span className="gradient-text">Busy ERP Chatbot</span> Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in 4 simple steps. Our team handles everything.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector line */}
                {index < howItWorksSteps.length - 1 && (
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
              Trusted by <span className="gradient-text">Indian Businesses</span> Across Industries
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From small traders to large distributors, BusyNotify works for everyone using Busy Accounting Software
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

      {/* FAQ Section - SEO Optimized */}
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
              Frequently Asked Questions about <span className="gradient-text">Busy ERP Chatbot</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about automating your Busy Accounting Software
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
              <Bot className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Automate Your Customer Queries?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Join 500+ Indian businesses already using BusyNotify to handle customer queries automatically. 
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
