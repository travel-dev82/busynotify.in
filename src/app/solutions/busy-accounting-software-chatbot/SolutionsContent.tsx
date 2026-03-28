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
  Globe,
  IndianRupee,
  TrendingDown,
  HeadphonesIcon,
  Building,
  Package,
  Pill,
  TruckIcon,
  Calculator
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Feature data for the chatbot capabilities - SEO-Optimized Headings
const chatbotFeatures = [
  {
    icon: FileText,
    title: "Check Account Balance via WhatsApp from Busy Software",
    shortTitle: "Balance Inquiry",
    description: "Customers can instantly check their account balance without calling your office. Get real-time outstanding amounts directly on WhatsApp or Telegram from Busy Accounting Software.",
    keywords: "busy software balance check whatsapp, account balance busy, outstanding balance check",
  },
  {
    icon: FileCheck,
    title: "Send Ledger Statements from Busy Software to WhatsApp",
    shortTitle: "Ledger Statements",
    description: "Generate and send complete ledger statements on demand from Busy ERP. Customers receive detailed account statements in PDF format within seconds via WhatsApp.",
    keywords: "busy software ledger whatsapp, account statement busy, party ledger send whatsapp",
  },
  {
    icon: Receipt,
    title: "Get Bill-by-Bill Statement from Busy via WhatsApp",
    shortTitle: "Bill-by-Bill Statement",
    description: "Provide detailed bill-wise breakup of outstanding amounts from Busy Software. Customers can see each invoice, payment, and pending amount clearly.",
    keywords: "bill by bill statement busy, invoice breakup whatsapp, pending bills busy software",
  },
  {
    icon: Receipt,
    title: "Send Invoices from Busy Software to WhatsApp Automatically",
    shortTitle: "Invoice Generation",
    description: "Send sales invoices directly to customers through WhatsApp from Busy Accounting Software. They can download, print, or forward invoices to their accounts team.",
    keywords: "send invoice busy whatsapp, sales invoice busy software, GST invoice whatsapp",
  },
  {
    icon: FileText,
    title: "Share Payment Receipts from Busy Software on WhatsApp",
    shortTitle: "Payment Receipts",
    description: "Automatically send payment receipt copies when customers ask. No manual searching or emailing required. Receipts fetched directly from Busy ERP.",
    keywords: "payment receipt busy whatsapp, receipt copy busy, payment acknowledgment",
  },
  {
    icon: Truck,
    title: "Send Transportation Slips & Challans via WhatsApp from Busy",
    shortTitle: "Transportation Slips",
    description: "Share challans and transport documents instantly from Busy Software. Customers can track their shipment details without calling your dispatch team.",
    keywords: "transport challan busy, delivery challan whatsapp, LR copy busy software",
  },
  {
    icon: FileCheck,
    title: "Provide General Vouchers from Busy Software on WhatsApp",
    shortTitle: "General Vouchers",
    description: "Provide journal entries, debit notes, credit notes, and other vouchers on request from Busy ERP. Complete transparency in all transactions.",
    keywords: "journal voucher busy, debit note whatsapp, credit note voucher busy",
  },
  {
    icon: ShoppingCart,
    title: "Check Pending Sales Orders from Busy Software via WhatsApp",
    shortTitle: "Pending Sales Orders",
    description: "Customers can check their pending order status, expected dispatch dates, and order history from Busy ERP - all through simple WhatsApp chat commands.",
    keywords: "pending order status busy, sales order whatsapp, order tracking busy software",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your Busy Software WhatsApp chatbot never sleeps. Customers get instant responses at midnight, weekends, or holidays.",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "No waiting, no hold music. Customers get Busy ERP information in under 3 seconds.",
  },
  {
    icon: Users,
    title: "Handle Multiple Queries",
    description: "Serve 100+ customers simultaneously from Busy Software. No more busy lines or callback requests.",
  },
  {
    icon: TrendingUp,
    title: "Reduce Workload by 70%",
    description: "Free your staff from repetitive Busy Software queries. Focus on business growth instead.",
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
    description: "Link your business WhatsApp number or create a Telegram bot. Your customers use their preferred messaging app for Busy ERP access.",
    icon: MessageCircle,
  },
  {
    step: 3,
    title: "Customers Start Chatting",
    description: "Customers simply send messages like 'Show my balance' or 'Send last invoice'. The AI understands natural language for Busy Software queries.",
    icon: Bot,
  },
  {
    step: 4,
    title: "Get Instant Reports",
    description: "Reports and documents are fetched from Busy Software in real-time and delivered instantly to the customer via WhatsApp.",
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

// Use Cases for Different Industries
const useCases = [
  {
    icon: Package,
    title: "Trading Businesses",
    description: "Traders can automate balance inquiries and invoice sharing. Customers check outstanding amounts and download GST invoices directly from Busy Software via WhatsApp without calling the office.",
    benefits: ["Reduce 80% of customer calls", "Instant invoice delivery", "Real-time balance updates"],
    keyword: "busy software for traders india",
  },
  {
    icon: Pill,
    title: "Pharmaceutical Distribution",
    description: "Pharma distributors handle hundreds of retailer queries daily. Busy Software WhatsApp integration allows retailers to check credit limits, pending orders, and download invoices 24/7.",
    benefits: ["Handle 500+ daily queries", "Credit limit notifications", "Batch-wise invoice tracking"],
    keyword: "busy accounting for pharma distributors",
  },
  {
    icon: TruckIcon,
    title: "Distribution & Logistics",
    description: "Distributors can share transportation challans, LR copies, and delivery status instantly. Customers track orders without calling dispatch teams.",
    benefits: ["Automated challan sharing", "Order status updates", "Reduced dispatch calls"],
    keyword: "busy software for distributors india",
  },
  {
    icon: Calculator,
    title: "Chartered Accountants & Tax Consultants",
    description: "CAs can provide client ledger statements, balance confirmations, and voucher copies on demand from Busy Software through WhatsApp automation.",
    benefits: ["Quick client responses", "Audit-ready documents", "Year-round availability"],
    keyword: "busy accounting chatbot for CAs",
  },
];

// Manual vs Chatbot Comparison
const comparisonData = [
  {
    aspect: "Response Time",
    manual: "5-30 minutes per call",
    chatbot: "Under 3 seconds",
    improvement: "10x faster",
  },
  {
    aspect: "Availability",
    manual: "Business hours only",
    chatbot: "24/7 including holidays",
    improvement: "Round-the-clock",
  },
  {
    aspect: "Simultaneous Queries",
    manual: "1 customer at a time",
    chatbot: "100+ customers together",
    improvement: "Unlimited capacity",
  },
  {
    aspect: "Staff Required",
    manual: "1-2 dedicated persons",
    chatbot: "Zero staff needed",
    improvement: "Save ₹15,000+/month",
  },
  {
    aspect: "Error Rate",
    manual: "Human errors possible",
    chatbot: "100% accurate from Busy",
    improvement: "Zero errors",
  },
  {
    aspect: "Customer Satisfaction",
    manual: "Frustrated by wait times",
    chatbot: "Delighted by instant response",
    improvement: "Higher retention",
  },
];

// ROI Calculator Data
const roiStats = [
  { label: "Queries Automated Monthly", value: "500+", icon: MessageSquare },
  { label: "Staff Hours Saved", value: "60+", icon: Clock },
  { label: "Cost Savings Per Month", value: "₹15,000+", icon: IndianRupee },
  { label: "Customer Satisfaction Increase", value: "85%", icon: TrendingUp },
];

// Expanded SEO-Optimized FAQs
const faqs = [
  {
    question: "Can Busy software send invoices on WhatsApp automatically?",
    answer: "Yes! BusyNotify integrates directly with your Busy Accounting Software to automatically send invoices, ledgers, balance details, and other documents on WhatsApp. When a customer requests an invoice, our chatbot fetches it from Busy Software in real-time and delivers it instantly via WhatsApp.",
  },
  {
    question: "How to integrate Busy accounting software with WhatsApp?",
    answer: "BusyNotify provides seamless WhatsApp integration for Busy Software. Our team handles the complete setup - we connect your Busy database (Busy 17/18/21), configure your WhatsApp Business number, and train the chatbot. Setup takes just 24 hours with no technical knowledge required from your side.",
  },
  {
    question: "Is there an API for Busy software automation?",
    answer: "Yes, BusyNotify offers REST APIs for Busy Software automation. Developers can use our APIs to fetch ledgers, invoices, balances, and other data programmatically. We also provide custom API development for specific Busy ERP integration needs.",
  },
  {
    question: "Can customers check ledger in Busy via WhatsApp?",
    answer: "Absolutely! Customers can request their complete ledger statement via WhatsApp. The BusyNotify chatbot fetches the ledger from Busy Software and sends a PDF directly to the customer's WhatsApp within seconds. No manual intervention needed.",
  },
  {
    question: "How to automate customer queries in Busy ERP?",
    answer: "BusyNotify automates Busy ERP customer queries by connecting your Busy database to WhatsApp/Telegram. Customers send natural language requests like 'show my balance' or 'send last invoice' and get instant responses. Queries for balance, ledger, invoices, receipts, orders - all handled automatically 24/7.",
  },
  {
    question: "Which is the best chatbot for Busy accounting software in India?",
    answer: "BusyNotify is the leading WhatsApp chatbot for Busy Accounting Software in India, trusted by 500+ businesses. We offer native Busy integration, support all Busy versions (17/18/21), handle 15+ document types, and provide 24/7 automated customer support starting at just ₹500/month.",
  },
  {
    question: "What is Busy Accounting Software Chatbot?",
    answer: "Busy Accounting Software Chatbot is an AI-powered automation tool that connects with your Busy ERP to handle customer queries automatically. Customers can request balance details, ledgers, invoices, payment receipts, and other documents through WhatsApp or Telegram without contacting your office.",
  },
  {
    question: "How does the Busy ERP Chatbot work?",
    answer: "The chatbot integrates directly with your Busy Software database. When a customer sends a query via WhatsApp or Telegram, our AI processes the request, fetches data from Busy in real-time, and sends back the requested information within seconds. It works with Busy 17, 18, 21, and all versions.",
  },
  {
    question: "Which Busy Software versions are supported?",
    answer: "BusyNotify works with all major Busy Accounting Software versions including Busy 17, Busy 18, Busy 21, and the latest releases. We support both single-user and multi-user editions, as well as Busy Win and Busy Enterprise versions.",
  },
  {
    question: "Is my Busy Software data secure?",
    answer: "Absolutely. We use enterprise-grade encryption and never store your accounting data on external servers. The chatbot only reads data on-demand with proper authentication. We comply with Indian data protection guidelines and your Busy database remains completely secure.",
  },
  {
    question: "Can customers access data 24/7?",
    answer: "Yes! The Busy Software WhatsApp chatbot operates round-the-clock. Your customers can check balances, download invoices, or track orders at any time - midnight, weekends, or holidays. No more missed queries or frustrated customers.",
  },
  {
    question: "How much does Busy ERP Chatbot cost?",
    answer: "BusyNotify pricing starts at just ₹500/month for basic plans. We offer flexible plans based on your query volume and number of customers. Plans include: Starter (₹500/mo, 500 queries), Business (₹1,500/mo, 2000 queries), Enterprise (custom pricing). Check our pricing page for detailed plans.",
  },
  {
    question: "Do I need technical knowledge to set this up?",
    answer: "No technical expertise required. Our team handles the complete Busy Software WhatsApp integration. You just need to share your Busy Software access and WhatsApp business number details. Setup is completed within 24 hours.",
  },
  {
    question: "Can I customize what information customers can access?",
    answer: "Yes, you have full control over what data is accessible. You can enable/disable specific features like balance inquiry, invoice download, or ledger statements based on your preferences. Different customer groups can have different access levels.",
  },
  {
    question: "Does it work with Telegram as well?",
    answer: "Yes, BusyNotify supports both WhatsApp and Telegram. You can choose one platform or use both simultaneously. Telegram is especially popular for B2B customers who prefer instant messaging for business communications.",
  },
  {
    question: "What documents can the chatbot send from Busy Software?",
    answer: "The chatbot can send 15+ document types from Busy ERP: Balance statements, Ledger statements, Bill-by-bill statements, Sales invoices, Purchase invoices, Payment receipts, Debit notes, Credit notes, Journal vouchers, Delivery challans, Transport/LR copies, Pending order status, Outstanding reports, and more.",
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
                Busy Software <span className="gradient-text">WhatsApp Integration</span> & AI Chatbot for Automated Accounting (India)
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                <strong>Send invoices, ledgers, balance & reports directly from Busy Accounting Software to WhatsApp automatically.</strong> Automate customer queries 24/7 with our AI chatbot.
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

      {/* Problem-Solution Section with SEO Keywords */}
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
                  <strong>If you are using Busy Accounting Software and handling customer queries manually, this WhatsApp automation solution eliminates repetitive accounting support tasks.</strong>
                </p>
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
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "I need my ledger statement"
                  </li>
                </ul>
                <p className="mt-4">
                  These repetitive queries consume hours of productive time. Your accounting team can&apos;t focus on actual work because they&apos;re constantly answering the same questions about Busy Software data.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                BusyNotify Solves This Automatically
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our AI chatbot connects to your <strong>Busy Accounting Software</strong> and handles these queries automatically through WhatsApp:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Customers get instant responses 24/7 from Busy ERP</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>No phone calls or manual lookups needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Documents sent via WhatsApp & Telegram from Busy Software</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Your staff focuses on real accounting work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Reduce customer query workload by 70%</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section with SEO-Rich Headings */}
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
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              <strong>This Busy software WhatsApp chatbot allows customers to access invoices, ledgers, payment receipts, and account balances instantly without calling your office.</strong> Customers can request these documents directly through WhatsApp or Telegram chat.
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
                <h3 className="text-base font-semibold mb-2 leading-tight">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                {/* Hidden keywords for SEO */}
                <meta itemProp="keywords" content={feature.keywords} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
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
              Calculate Your <span className="gradient-text">ROI with Busy Software Automation</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              See how much time and money you can save by automating customer queries from Busy Accounting Software
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {roiStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Manual vs Chatbot Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              Manual Customer Support vs Busy Software WhatsApp Chatbot
            </h3>
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-6 py-4 text-left font-semibold">Aspect</th>
                      <th className="px-6 py-4 text-left font-semibold text-red-400">Manual Process</th>
                      <th className="px-6 py-4 text-left font-semibold text-green-400">BusyNotify Chatbot</th>
                      <th className="px-6 py-4 text-left font-semibold text-primary">Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={row.aspect} className={index % 2 === 0 ? 'bg-white/5' : ''}>
                        <td className="px-6 py-4 font-medium">{row.aspect}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.manual}</td>
                        <td className="px-6 py-4 text-green-400">{row.chatbot}</td>
                        <td className="px-6 py-4 text-primary font-medium">{row.improvement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why Choose <span className="gradient-text">BusyNotify</span> for Your Business?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform how you handle customer queries from Busy Accounting Software with AI-powered WhatsApp automation
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

      {/* How It Works Section with Keyword-Rich Intro */}
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
              How <span className="gradient-text">Busy Software WhatsApp Integration</span> Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              <strong>Our Busy software WhatsApp integration works by connecting your accounting database with an AI chatbot that responds to customer queries in real time.</strong> Get started in 4 simple steps. Our team handles everything.
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
              <span className="gradient-text">Industry Use Cases</span> for Busy Software WhatsApp Integration
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              See how different industries in India are using BusyNotify to automate Busy Accounting Software queries
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
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <useCase.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-muted-foreground mb-4">{useCase.description}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs text-muted-foreground">
                      Keyword: {useCase.keyword}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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

      {/* Hindi Section for Indian Market */}
      <section className="py-20 border-y border-border bg-gradient-to-b from-primary/5 to-transparent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                🇮🇳 बिजी सॉफ्टवेयर WhatsApp इंटीग्रेशन
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>Busy software WhatsApp integration</strong> से अब आप अपने ग्राहकों को तुरंत invoice, ledger और balance भेज सकते हैं।
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div className="space-y-2">
                <p className="text-primary font-medium">✅ 24/7 Automatic Response</p>
                <p className="text-sm text-muted-foreground">ग्राहक कभी भी balance और invoice पूछ सकते हैं</p>
              </div>
              <div className="space-y-2">
                <p className="text-primary font-medium">✅ No Phone Calls Required</p>
                <p className="text-sm text-muted-foreground">सब कुछ WhatsApp पर automatic</p>
              </div>
              <div className="space-y-2">
                <p className="text-primary font-medium">✅ Works with Busy 17/18/21</p>
                <p className="text-sm text-muted-foreground">सभी Busy versions के साथ compatible</p>
              </div>
              <div className="space-y-2">
                <p className="text-primary font-medium">✅ Starting ₹500/month</p>
                <p className="text-sm text-muted-foreground">Affordable pricing for Indian businesses</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Expanded SEO Optimized */}
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
              Frequently Asked Questions about <span className="gradient-text">Busy Software WhatsApp Integration</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about automating your Busy Accounting Software with WhatsApp chatbot
            </p>
          </motion.div>

          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
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
              Ready to Automate Your Busy Software Customer Queries?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Join 500+ Indian businesses already using BusyNotify to handle customer queries automatically from Busy Accounting Software via WhatsApp. 
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
