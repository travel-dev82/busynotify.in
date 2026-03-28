"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  MessageCircle, 
  FileText, 
  Send, 
  FileCheck, 
  Receipt,
  FilePlus,
  ArrowUpCircle,
  ArrowDownCircle,
  CreditCard,
  Banknote,
  BookOpen,
  Package,
  Truck,
  ClipboardList,
  CheckCircle2,
  Zap,
  Clock,
  Users,
  Settings,
  ChevronRight,
  Building2,
  Bot,
  Globe,
  ExternalLink,
  BarChart3,
  FileSpreadsheet
} from "lucide-react";
import { Button } from "@/components/ui/button";

const voucherTypes = [
  {
    category: "Sales Documents",
    icon: FileText,
    vouchers: [
      { name: "Sale Quotation", description: "Send quotations to customers instantly when created in Busy" },
      { name: "Sale Order", description: "Confirm orders with automatic WhatsApp confirmation" },
      { name: "Sale Invoice", description: "Deliver invoices with PDF attachment directly to customer's WhatsApp" },
      { name: "Sale Return", description: "Notify customers about return acknowledgments" },
    ],
  },
  {
    category: "Purchase Documents",
    icon: FilePlus,
    vouchers: [
      { name: "Purchase Order", description: "Send PO copies to suppliers automatically" },
      { name: "Purchase Invoice", description: "Internal notification for purchase records" },
      { name: "Purchase Return", description: "Alert suppliers about return requests" },
    ],
  },
  {
    category: "Financial Vouchers",
    icon: Receipt,
    vouchers: [
      { name: "Payment", description: "Notify parties when payments are made to them" },
      { name: "Receipt", description: "Send payment receipt confirmations to customers" },
      { name: "Journal", description: "Share journal entries with relevant parties" },
      { name: "Credit Note", description: "Deliver credit notes for returns or adjustments" },
      { name: "Debit Note", description: "Send debit notes for additional charges" },
    ],
  },
  {
    category: "Inventory Documents",
    icon: Package,
    vouchers: [
      { name: "Material Issue", description: "Notify about material issue to production/departments" },
      { name: "Material Receipt", description: "Confirm material receipts to concerned parties" },
      { name: "Stock Transfer", description: "Alert about stock movements between locations" },
      { name: "Delivery Note", description: "Send delivery challans with shipment details" },
    ],
  },
];

const reportTypes = [
  {
    icon: BookOpen,
    title: "Ledger Statement",
    description: "Complete ledger with all transactions sent to customer's WhatsApp on demand.",
  },
  {
    icon: FileCheck,
    title: "Bill-by-Bill Statement",
    description: "Detailed outstanding breakup with each invoice, payment, and balance.",
  },
  {
    icon: Package,
    title: "Stock Reports",
    description: "Current stock levels, stock summary, and item-wise availability reports.",
  },
  {
    icon: BarChart3,
    title: "Outstanding Reports",
    description: "Age-wise outstanding analysis and party-wise pending amounts.",
  },
  {
    icon: FileSpreadsheet,
    title: "Sales Reports",
    description: "Daily, weekly, monthly sales summaries and item-wise sales analysis.",
  },
  {
    icon: Globe,
    title: "GST Reports",
    description: "GSTR-1, GSTR-3B data and GST summary reports for compliance.",
  },
];

const features = [
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "Vouchers are sent within seconds of creation in Busy Software. No delay, no manual intervention.",
  },
  {
    icon: FileText,
    title: "PDF Attachments",
    description: "All documents are sent as professionally formatted PDFs. Customers can view, download, or print.",
  },
  {
    icon: Settings,
    title: "Customizable Templates",
    description: "Customize message templates with your brand, include custom messages, terms, and conditions.",
  },
  {
    icon: Users,
    title: "Multi-Recipient",
    description: "Send to multiple contacts per customer. Inform billing team, warehouse, and management together.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Create Voucher in Busy",
    description: "Create any voucher in Busy Accounting Software as you normally do - sale, purchase, receipt, etc.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Auto-Detection",
    description: "BusyNotify detects the new voucher instantly and prepares the document for delivery.",
    icon: Zap,
  },
  {
    step: 3,
    title: "WhatsApp Delivery",
    description: "Document PDF is automatically sent to the customer's registered WhatsApp number.",
    icon: MessageCircle,
  },
  {
    step: 4,
    title: "Delivery Confirmation",
    description: "Track delivery status - sent, delivered, read. Maintain complete audit trail.",
    icon: CheckCircle2,
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Save Hours Weekly",
    description: "No manual printing, scanning, or emailing. Documents reach customers instantly.",
  },
  {
    icon: Send,
    title: "Professional Image",
    description: "Instant document delivery shows professionalism. Impresses customers with speed.",
  },
  {
    icon: CheckCircle2,
    title: "Audit Trail",
    description: "Complete record of what was sent, when, and to whom. Never lose track of communications.",
  },
  {
    icon: Bot,
    title: "Zero Manual Work",
    description: "Fully automated. Your team focuses on business, not document distribution.",
  },
];

const faqs = [
  {
    question: "How does WhatsApp integration work with Busy Accounting Software?",
    answer: "BusyNotify connects with your Busy Software database and monitors for new vouchers. When any voucher (invoice, receipt, order, etc.) is created, it automatically generates a PDF and sends it to the customer's WhatsApp number registered in Busy - all within seconds, without any manual intervention.",
  },
  {
    question: "Which vouchers are automatically sent via WhatsApp?",
    answer: "All transactional vouchers are supported: Sale Quotation, Sale Order, Sale Invoice, Sale Return, Purchase Order, Purchase Invoice, Purchase Return, Payment, Receipt, Journal, Credit Note, Debit Note, Material Issue, Material Receipt, Delivery Note, and more. You can enable/disable specific voucher types as needed.",
  },
  {
    question: "Can customers receive reports via WhatsApp?",
    answer: "Yes! Customers can request reports like Ledger Statement, Bill-by-Bill Statement, Stock Reports, Outstanding Reports, and more via WhatsApp. They simply send a message requesting the report, and our chatbot delivers it instantly.",
  },
  {
    question: "What is sent - just a message or the actual document?",
    answer: "The actual document (PDF) is sent as a WhatsApp attachment. Customers receive a professionally formatted invoice/quotation/receipt that they can view, download, forward, or print - just like a regular PDF.",
  },
  {
    question: "Do I need WhatsApp Business API?",
    answer: "Yes, we use official WhatsApp Business API for reliable, compliant messaging. BusyNotify handles the entire setup - you don't need technical knowledge. Your messages are delivered through Meta's official channels.",
  },
  {
    question: "Can I customize the message sent with documents?",
    answer: "Absolutely! You can customize the message template for each voucher type. Include your branding, custom greetings, payment terms, bank details, or any specific message you want customers to see.",
  },
  {
    question: "What if a customer's WhatsApp number is not in Busy?",
    answer: "You can maintain WhatsApp numbers separately in BusyNotify if they differ from phone numbers in Busy. The system will match customers and send to the correct WhatsApp number.",
  },
  {
    question: "Is there a delivery confirmation?",
    answer: "Yes, you get complete tracking - sent, delivered, and read status for each message. The audit log shows exactly when each document was delivered and viewed by the customer.",
  },
];

export function WhatsAppIntegrationContent() {
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
                  <li className="text-foreground">WhatsApp Integration</li>
                </ol>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="gradient-text">WhatsApp Integration</span>{" "}
                for Busy Accounting Software
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Automatically send <strong>vouchers, invoices, and reports</strong> from Busy Software 
                to customers via WhatsApp. Every document delivered instantly - zero manual effort.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="glow-teal group" asChild>
                  <Link href="/pricing">
                    Start Free Demo
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#vouchers">View Supported Vouchers</Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>WhatsApp Business API</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>All Voucher Types</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Instant Delivery</span>
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
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp Business</p>
                    <p className="text-xs text-green-400">✓ Connected to Busy Software</p>
                  </div>
                </div>
                
                {/* Message mockup */}
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-green-600/20 rounded-2xl rounded-br-sm px-4 py-2 max-w-xs">
                      <p className="text-sm">Send my last invoice</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white/5 rounded-2xl rounded-bl-sm p-3 max-w-sm space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-10 bg-red-500/20 rounded flex items-center justify-center">
                          <FileText className="w-4 h-4 text-red-400" />
                        </div>
                        <div>
                          <p className="text-xs font-medium">INV-2024-0892.pdf</p>
                          <p className="text-xs text-muted-foreground">125 KB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white/5 rounded-2xl rounded-bl-sm px-4 py-2 max-w-sm">
                      <p className="text-sm">📄 Invoice #INV-2024-0892</p>
                      <p className="text-sm">Amount: ₹45,000</p>
                      <p className="text-xs text-muted-foreground mt-1">Sharma Traders</p>
                    </div>
                  </div>
                </div>
                
                {/* Status */}
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                  <span>Delivered ✓✓</span>
                  <span>Today, 2:30 PM</span>
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-card rounded-lg px-3 py-2 shadow-xl hidden lg:block"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">Auto-Send</span>
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
                Still Manually Sending Invoices on WhatsApp?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Every business using Busy Software faces this daily routine:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Create invoice in Busy → Export PDF → Find customer's WhatsApp → Send manually"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Forgot to send the quotation to the client"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Receipt not sent to customer - they're asking for confirmation"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Hours wasted on manual document sharing"
                  </li>
                </ul>
                <p className="mt-4">
                  Manual document delivery is slow, error-prone, and unprofessional. Automate it.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Automatic Document Delivery
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  BusyNotify transforms document delivery:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Create voucher in Busy → Auto-sent to WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>All voucher types supported</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>PDFs delivered with professional formatting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Reports available on-demand via chatbot</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Supported Vouchers Section */}
      <section id="vouchers" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              All <span className="gradient-text">Voucher Types</span> Supported
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Every voucher created in Busy Accounting Software can be automatically sent via WhatsApp
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {voucherTypes.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.vouchers.map((voucher) => (
                    <div key={voucher.name} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-sm">{voucher.name}</p>
                        <p className="text-xs text-muted-foreground">{voucher.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Voucher Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 text-center"
          >
            <div className="glass-card rounded-xl p-6 inline-block">
              <p className="text-muted-foreground">
                <span className="text-primary font-medium">And many more...</span> Delivery Note, Stock Transfer, 
                Production Order, Job Work In/Out, Requisition Slip, and all other transactional vouchers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reports Section */}
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
              <span className="gradient-text">Reports</span> on WhatsApp
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Customers can request any report through WhatsApp chatbot - delivered instantly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportTypes.map((report, index) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 group hover:border-primary/30 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <report.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{report.title}</h3>
                <p className="text-sm text-muted-foreground">{report.description}</p>
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
              How <span className="gradient-text">WhatsApp Integration</span> Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps from voucher creation to customer delivery
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
              Powerful <span className="gradient-text">WhatsApp Features</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade features for reliable document delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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

      {/* API Documentation Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 md:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  API Documentation Available
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Want to integrate WhatsApp notifications into your own application? 
                  Our API documentation provides complete details on how to use our 
                  WhatsApp messaging service programmatically.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>RESTful API endpoints for sending messages</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Send vouchers, reports, and custom messages</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Webhook support for delivery status</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Complete code examples in multiple languages</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button size="lg" className="glow-teal group" asChild>
                    <Link href="/solutions/custom-apis">
                      View API Documentation
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-black/40 rounded-xl p-6 overflow-x-auto">
                <pre className="text-sm font-mono text-green-400 whitespace-pre-wrap">
{`// Send Invoice via WhatsApp API
POST /api/v1/whatsapp/send

{
  "phone": "+91XXXXXXXXXX",
  "type": "invoice",
  "voucherNo": "INV-2024-0892",
  "message": "Your invoice is ready!",
  "attachment": true
}

// Response
{
  "success": true,
  "messageId": "wamid.XXXXX",
  "status": "sent"
}`}
                </pre>
              </div>
            </div>
          </motion.div>
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
              Why Choose <span className="gradient-text">BusyNotify WhatsApp</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform how you share documents with customers
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
              Frequently Asked Questions about <span className="gradient-text">WhatsApp Integration</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about WhatsApp automation for Busy Software
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
              <MessageCircle className="w-8 h-8 text-green-400" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Automate Document Delivery?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Stop manually sending invoices and reports. Let BusyNotify automatically deliver 
              every voucher to your customers via WhatsApp. Start your free 3-day demo today.
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
