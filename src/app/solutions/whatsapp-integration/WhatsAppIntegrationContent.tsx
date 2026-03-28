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
  FileSpreadsheet,
  Bell,
  IndianRupee,
  TrendingUp,
  Calculator,
  Building,
  Pill,
  TruckIcon,
  XCircle,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

// SEO-Optimized Voucher Types with GST terminology
const voucherTypes = [
  {
    category: "Sales Documents",
    icon: FileText,
    vouchers: [
      { name: "GST Sale Invoice / Tax Invoice", description: "Send GST invoices directly to customer's WhatsApp as PDF from BUSY", keyword: "BUSY GST invoice WhatsApp" },
      { name: "Sale Quotation", description: "Deliver quotations instantly when created in BUSY Software", keyword: "BUSY quotation WhatsApp" },
      { name: "Sale Order", description: "Confirm orders with automatic WhatsApp notification", keyword: "BUSY sale order WhatsApp" },
      { name: "Proforma Invoice", description: "Send proforma invoices for advance payment requests", keyword: "BUSY proforma invoice WhatsApp" },
      { name: "Sale Return / Credit Note", description: "Notify customers about return acknowledgments and credit notes", keyword: "BUSY credit note WhatsApp" },
    ],
  },
  {
    category: "Purchase Documents",
    icon: FilePlus,
    vouchers: [
      { name: "Purchase Order", description: "Send PO copies to suppliers automatically from BUSY", keyword: "BUSY purchase order WhatsApp" },
      { name: "Purchase Invoice", description: "Internal notification for purchase records", keyword: "BUSY purchase invoice" },
      { name: "Purchase Return / Debit Note", description: "Alert suppliers about return requests and debit notes", keyword: "BUSY debit note WhatsApp" },
    ],
  },
  {
    category: "Financial Vouchers",
    icon: Receipt,
    vouchers: [
      { name: "Payment Voucher", description: "Notify parties when payments are made to them from BUSY", keyword: "BUSY payment voucher WhatsApp" },
      { name: "Receipt Voucher", description: "Send payment receipt confirmations to customers", keyword: "BUSY receipt voucher WhatsApp" },
      { name: "Journal Voucher", description: "Share journal entries with relevant parties", keyword: "BUSY journal voucher" },
      { name: "Contra Voucher", description: "Internal fund transfer notifications", keyword: "BUSY contra voucher" },
    ],
  },
  {
    category: "Inventory & Delivery Documents",
    icon: Package,
    vouchers: [
      { name: "Delivery Challan / Delivery Note", description: "Send delivery challans with shipment details via WhatsApp", keyword: "BUSY delivery challan WhatsApp" },
      { name: "Material Issue", description: "Notify about material issue to production/departments", keyword: "BUSY material issue" },
      { name: "Material Receipt", description: "Confirm material receipts to concerned parties", keyword: "BUSY material receipt" },
      { name: "Stock Transfer", description: "Alert about stock movements between locations", keyword: "BUSY stock transfer" },
    ],
  },
];

// SEO-Optimized Report Types with Search Intent Headings
const reportTypes = [
  {
    icon: BookOpen,
    title: "Send Ledger Statement on WhatsApp from BUSY",
    shortTitle: "Ledger Statement",
    description: "Complete ledger with all transactions sent to customer's WhatsApp on demand. Party-wise account statement from BUSY Software.",
    keyword: "BUSY ledger statement WhatsApp",
  },
  {
    icon: FileCheck,
    title: "Send Bill-by-Bill Statement to Customers",
    shortTitle: "Bill-by-Bill Statement",
    description: "Detailed outstanding breakup with each invoice, payment, and balance from BUSY. Clear pending amount visibility.",
    keyword: "BUSY bill by bill statement",
  },
  {
    icon: BarChart3,
    title: "Share Outstanding Report on WhatsApp",
    shortTitle: "Outstanding Reports",
    description: "Age-wise outstanding analysis and party-wise pending amounts. Track receivables from BUSY directly on WhatsApp.",
    keyword: "BUSY outstanding report WhatsApp",
  },
  {
    icon: Package,
    title: "Send Stock Report on WhatsApp from BUSY",
    shortTitle: "Stock Reports",
    description: "Current stock levels, stock summary, and item-wise availability reports from BUSY Inventory.",
    keyword: "BUSY stock report WhatsApp",
  },
  {
    icon: FileSpreadsheet,
    title: "Send GST Summary and Sales Reports via WhatsApp",
    shortTitle: "GST & Sales Reports",
    description: "GSTR-1, GSTR-3B data, GST summary reports, and sales analysis from BUSY for compliance.",
    keyword: "BUSY GST report WhatsApp",
  },
];

// Payment Reminder Features
const paymentReminderFeatures = [
  {
    icon: Bell,
    title: "Automated Payment Reminders",
    description: "Send automatic payment reminders from BUSY to customers via WhatsApp before/after due dates.",
  },
  {
    icon: IndianRupee,
    title: "Outstanding Alerts",
    description: "Notify customers about pending amounts with detailed bill-wise breakup from BUSY Software.",
  },
  {
    icon: Clock,
    title: "Due Date Reminders",
    description: "Automatic reminders for invoices approaching due date. Improve collection timing.",
  },
  {
    icon: TrendingUp,
    title: "Follow-up Scheduling",
    description: "Schedule periodic reminders for long-outstanding amounts from BUSY ledger data.",
  },
];

const features = [
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "GST invoices and vouchers sent within seconds of creation in BUSY Software. No delay, no manual intervention.",
  },
  {
    icon: FileText,
    title: "PDF Attachments",
    description: "All documents sent as professionally formatted PDFs. Direct PDF delivery - not just links.",
  },
  {
    icon: Settings,
    title: "Customizable Templates",
    description: "Customize WhatsApp message templates with your brand, GST details, payment terms, and bank information.",
  },
  {
    icon: Users,
    title: "Multi-Recipient Routing",
    description: "Send to multiple contacts per customer. Inform billing team, warehouse, and management together.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Create Voucher in BUSY",
    description: "Create any voucher in BUSY Accounting Software - GST invoice, receipt, order, etc. Works with BUSY 17/18/21.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Auto-Detection",
    description: "BusyNotify detects the new voucher instantly and prepares the PDF document for WhatsApp delivery.",
    icon: Zap,
  },
  {
    step: 3,
    title: "WhatsApp Delivery",
    description: "Document PDF is automatically sent to the customer's registered WhatsApp number via Business API.",
    icon: MessageCircle,
  },
  {
    step: 4,
    title: "Delivery Confirmation",
    description: "Track delivery status - sent, delivered, read. Maintain complete audit trail for compliance.",
    icon: CheckCircle2,
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Save Hours Weekly",
    description: "No manual printing, exporting, or sending. GST invoices reach customers instantly from BUSY.",
  },
  {
    icon: Send,
    title: "Professional Image",
    description: "Instant document delivery shows professionalism. Impress customers with speed and reliability.",
  },
  {
    icon: CheckCircle2,
    title: "Complete Audit Trail",
    description: "Track what was sent, when, and to whom. Never lose track of document communications.",
  },
  {
    icon: Bot,
    title: "Zero Manual Work",
    description: "Fully automated after voucher creation in BUSY. Your team focuses on business, not document distribution.",
  },
];

// BUSY Native vs BusyNotify Comparison
const busyComparison = [
  { aspect: "Invoice Sending", busy: "Manual export and send", busynotify: "Fully automatic after creation", better: true },
  { aspect: "PDF Delivery", busy: "Link or manual attach", busynotify: "Direct PDF attachment", better: true },
  { aspect: "Multiple Recipients", busy: "Send one by one", busynotify: "Multi-recipient routing", better: true },
  { aspect: "Delivery Tracking", busy: "No tracking", busynotify: "Complete audit trail", better: true },
  { aspect: "Payment Reminders", busy: "Manual follow-up", busynotify: "Automated reminders", better: true },
  { aspect: "Report Chatbot", busy: "Not available", busynotify: "On-demand reports via chat", better: true },
  { aspect: "Custom Templates", busy: "Limited", busynotify: "Fully customizable", better: true },
  { aspect: "WhatsApp API Provider", busy: "Fixed integration", busynotify: "Works with multiple providers", better: true },
];

// Industry Use Cases
const industryUseCases = [
  {
    icon: Building,
    title: "Wholesalers & Distributors",
    description: "Send GST invoices, credit notes, and delivery challans automatically. Customers receive invoices before goods arrive. Outstanding reports on demand reduce collection calls.",
    keywords: "BUSY WhatsApp integration for distributors, BUSY invoice automation for wholesalers",
  },
  {
    icon: Calculator,
    title: "Chartered Accountants & Tax Consultants",
    description: "Share ledger statements, balance confirmations, and GST reports with clients via WhatsApp. On-demand report delivery for audit season without manual work.",
    keywords: "BUSY WhatsApp integration for CAs, BUSY ledger statement WhatsApp",
  },
  {
    icon: Pill,
    title: "Pharmaceutical Distribution",
    description: "Batch-wise invoices, credit/debit notes, and stock reports sent automatically. Retailers get instant invoice copies for compliance. Payment reminders improve collections.",
    keywords: "BUSY WhatsApp integration for pharma distributors",
  },
  {
    icon: TruckIcon,
    title: "Manufacturing & Trading",
    description: "Sale orders, delivery challans, and GST invoices delivered instantly. Outstanding reports and payment reminders reduce follow-up workload. Multi-location stock reports on WhatsApp.",
    keywords: "BUSY WhatsApp integration for manufacturers, BUSY invoice WhatsApp for traders",
  },
];

// WhatsApp API Providers
const apiProviders = [
  { name: "Interakt", description: "Official WhatsApp Business Solution Provider" },
  { name: "MSG91", description: "Indian messaging platform with WhatsApp API" },
  { name: "AiSensy", description: "WhatsApp Business API for businesses" },
  { name: "Wati", description: "WhatsApp Business API platform" },
  { name: "Custom API", description: "Connect your existing WhatsApp API provider" },
];

// Expanded SEO-Optimized FAQs (16+ questions)
const faqs = [
  {
    question: "Can I send BUSY invoices directly on WhatsApp?",
    answer: "Yes! BusyNotify automatically sends GST invoices, tax invoices, and all voucher types from BUSY Accounting Software directly to customer's WhatsApp as PDF attachments. When you create an invoice in BUSY, it's delivered within seconds - no manual export or sending required.",
  },
  {
    question: "How do I automate WhatsApp invoice sending in BUSY?",
    answer: "BusyNotify connects with your BUSY Software (BUSY 17/18/21) and monitors for new vouchers. When you create any invoice, it automatically generates a PDF and sends it to the customer's WhatsApp number registered in BUSY - all within seconds, fully automated.",
  },
  {
    question: "Can I send ledger statements from BUSY on WhatsApp?",
    answer: "Absolutely! Customers can request their complete ledger statement via WhatsApp chat. BusyNotify fetches the ledger from BUSY Software and sends a PDF directly to the customer's WhatsApp within seconds. No manual intervention needed from your team.",
  },
  {
    question: "Can BUSY send GST invoices on WhatsApp automatically?",
    answer: "Yes, BusyNotify enables automatic GST invoice delivery from BUSY via WhatsApp. Every GST invoice created in BUSY is instantly sent to the customer with proper PDF formatting, GST details, and your branding - fully compliant with Indian GST requirements.",
  },
  {
    question: "Does this work with BUSY Desktop, BUSY Cloud, or BUSY on LAN/server?",
    answer: "BusyNotify works with all BUSY deployments - BUSY Desktop (single user), BUSY on LAN, BUSY on Cloud, and BUSY Server editions. We support BUSY 17, BUSY 18, BUSY 21, and all major versions. Setup is handled by our team.",
  },
  {
    question: "Can I send payment reminders from BUSY on WhatsApp?",
    answer: "Yes! BusyNotify can send automated payment reminders from BUSY to customers via WhatsApp. You can configure reminders for due dates, overdue amounts, and follow-up schedules. Customers receive outstanding alerts with bill-wise breakup directly from BUSY ledger data.",
  },
  {
    question: "Is the invoice sent as PDF or just a link on WhatsApp?",
    answer: "Actual PDF documents are sent as WhatsApp attachments - not just links. Customers receive professionally formatted invoices, ledgers, and reports that they can view, download, forward, or print directly from WhatsApp.",
  },
  {
    question: "Which WhatsApp API providers are supported with BUSY?",
    answer: "BusyNotify works with official WhatsApp Business API providers including Interakt, MSG91, AiSensy, Wati, and custom API integrations. You can connect your existing WhatsApp Business API or we can help you set up a new one.",
  },
  {
    question: "Is this useful for accountants, distributors, wholesalers, and retailers in India?",
    answer: "Yes! BusyNotify is built for Indian businesses using BUSY - wholesalers, distributors, retailers, manufacturers, CAs, tax consultants, and service providers. GST invoices, ledgers, outstanding reports, and payment reminders are all automated for Indian business workflows.",
  },
  {
    question: "Can I send reports in Hindi or English?",
    answer: "Yes, reports can be generated in both Hindi and English from BUSY and sent via WhatsApp. The WhatsApp message language can also be customized based on customer preference.",
  },
  {
    question: "Does it support multiple companies in BUSY?",
    answer: "Yes, BusyNotify supports multiple companies in BUSY. Each company can have separate WhatsApp configurations, templates, and recipient rules. Multi-company BUSY setups are fully supported.",
  },
  {
    question: "Does it work for Indian GST billing workflows?",
    answer: "Absolutely! BusyNotify is designed for Indian GST billing. GST invoices, tax invoices, credit notes, debit notes, e-invoice references, and GST reports (GSTR-1, GSTR-3B) can all be sent via WhatsApp automatically from BUSY.",
  },
  {
    question: "How does WhatsApp integration work with BUSY Accounting Software?",
    answer: "BusyNotify connects with your BUSY database and monitors for new vouchers. When any voucher (GST invoice, receipt, order, etc.) is created, it automatically generates a PDF and sends it to the customer's WhatsApp number via official WhatsApp Business API - all within seconds.",
  },
  {
    question: "Which vouchers are automatically sent via WhatsApp?",
    answer: "All transactional vouchers are supported: GST Sale Invoice, Tax Invoice, Sale Quotation, Sale Order, Proforma Invoice, Purchase Order, Payment Voucher, Receipt Voucher, Journal Voucher, Credit Note, Debit Note, Delivery Challan, and more. You can enable/disable specific voucher types.",
  },
  {
    question: "Can I customize the WhatsApp message sent with documents?",
    answer: "Yes! You can customize the WhatsApp message template for each voucher type. Include your branding, GST details, payment terms, bank information, custom greetings, or any specific message you want customers to see.",
  },
  {
    question: "Is there a delivery confirmation for sent documents?",
    answer: "Yes, you get complete tracking - sent, delivered, and read status for each WhatsApp message. The audit log shows exactly when each document was delivered and viewed by the customer. Useful for compliance and follow-up.",
  },
  {
    question: "What if a customer's WhatsApp number is not in BUSY?",
    answer: "You can maintain WhatsApp numbers separately in BusyNotify if they differ from phone numbers in BUSY. The system will match customers and send to the correct WhatsApp number automatically.",
  },
  {
    question: "Why use BusyNotify instead of BUSY's default WhatsApp sharing?",
    answer: "BusyNotify provides advanced automation: instant auto-send after voucher creation, direct PDF delivery (not just links), multi-recipient routing, complete audit trail, payment reminder automation, on-demand report chatbot, custom templates, and flexibility with WhatsApp API providers. BUSY's default sharing requires manual steps for each document.",
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
                Automate WhatsApp Invoice Delivery from <span className="gradient-text">BUSY Accounting Software</span>
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                <strong>Automatically send GST invoices, vouchers, ledgers, payment reminders, and reports from BUSY Accounting Software to customers on WhatsApp.</strong> Built for Indian businesses, accountants, distributors, and MSMEs who want faster document delivery with less manual work.
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
                  <span>Official WhatsApp Business API</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Works with BUSY 17/18/21</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Direct PDF Delivery</span>
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
                    <p className="text-xs text-green-400">✓ Connected to BUSY Software</p>
                  </div>
                </div>
                
                {/* Message mockup */}
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-green-600/20 rounded-2xl rounded-br-sm px-4 py-2 max-w-xs">
                      <p className="text-sm">Send my GST invoice</p>
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
                          <p className="text-xs text-muted-foreground">125 KB • GST Invoice</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white/5 rounded-2xl rounded-bl-sm px-4 py-2 max-w-sm">
                      <p className="text-sm">📄 GST Invoice #INV-2024-0892</p>
                      <p className="text-sm">Amount: ₹45,000 + GST</p>
                      <p className="text-xs text-muted-foreground mt-1">Sharma Traders • From BUSY</p>
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

      {/* Problem-Solution Section - India Specific */}
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
                Still Manually Sending GST Invoices on WhatsApp from BUSY?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>For BUSY users in India who need true WhatsApp automation for GST invoices, ledgers, payment reminders, and reports.</strong>
                </p>
                <p>
                  Every business using BUSY Accounting Software faces these daily challenges:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Sale invoice created in BUSY, but staff still exports PDF and sends it manually on WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Ledger statement requested by party, but accountant has to generate and send it one by one</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Payment reminder not sent on time, so collection gets delayed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>GST invoice or outstanding report shared late, creating follow-up calls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Hours wasted on manual document sharing from BUSY</span>
                  </li>
                </ul>
                <p className="mt-4">
                  Manual document delivery from BUSY is slow, error-prone, and unprofessional. Automate it with BusyNotify.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                BUSY WhatsApp Add-On for GST Invoices & Reports
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  BusyNotify transforms document delivery from BUSY:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Create voucher in BUSY → Auto-sent to WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>GST invoices delivered with PDF attachment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Payment reminders automated from BUSY</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Ledger and outstanding reports on-demand via chatbot</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Works with all BUSY versions (17/18/21)</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BUSY vs BusyNotify Comparison Section */}
      <section id="comparison" className="py-20 bg-gradient-to-b from-primary/5 via-primary/10 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why Choose <span className="gradient-text">BusyNotify</span> vs Default BUSY WhatsApp Sharing?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              <strong>BusyNotify is an automation layer/add-on for BUSY users who want more than default/manual WhatsApp sending.</strong> Compare the features:
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
                      <th className="px-6 py-4 text-left font-semibold text-red-400">BUSY Default</th>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              <strong>BusyNotify extends BUSY workflows for advanced WhatsApp automation and document delivery.</strong> Get instant delivery, PDF attachments, audit trails, and payment reminders that BUSY alone doesn't provide.
            </p>
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
              All <span className="gradient-text">BUSY Vouchers</span> Supported for WhatsApp Delivery
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Every voucher created in BUSY Accounting Software can be automatically sent via WhatsApp - GST invoices, tax invoices, delivery challans, and more
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
                      <div className="flex-1">
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
                <span className="text-primary font-medium">And many more...</span> E-Invoice references, E-Way bill alerts, Production Order, Job Work In/Out, Requisition Slip, and all other BUSY transactional vouchers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Reminders Section */}
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
              <span className="gradient-text">Payment Reminders</span> on WhatsApp from BUSY
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Automate payment collection follow-ups. Send reminders for due dates, overdue amounts, and outstanding reports directly from BUSY ledger data.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {paymentReminderFeatures.map((feature, index) => (
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 glass-card rounded-2xl p-8 text-center"
          >
            <p className="text-lg">
              <strong>Improve collection timing and reduce follow-up calls.</strong> Payment reminders from BUSY are sent automatically via WhatsApp with outstanding details and bill-wise breakup.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reports Section - SEO Optimized */}
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
              <span className="gradient-text">BUSY Reports</span> on WhatsApp
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Customers can request any report through WhatsApp chatbot - delivered instantly from BUSY Software
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
                <h3 className="text-base font-semibold mb-2 leading-tight">{report.title}</h3>
                <p className="text-sm text-muted-foreground">{report.description}</p>
                <meta itemProp="keywords" content={report.keyword} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases Section */}
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
              <span className="gradient-text">Industry Use Cases</span> for BUSY WhatsApp Integration
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              See how different industries in India are using BusyNotify to automate BUSY document delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryUseCases.map((useCase, index) => (
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
                    <p className="text-muted-foreground mb-2">{useCase.description}</p>
                    <p className="text-xs text-muted-foreground">
                      Keywords: {useCase.keywords}
                    </p>
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
              How <span className="gradient-text">BUSY WhatsApp Integration</span> Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps from voucher creation in BUSY to customer delivery on WhatsApp
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
              Powerful <span className="gradient-text">WhatsApp Features</span> for BUSY Users
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade features for reliable GST invoice and document delivery
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

      {/* WhatsApp API Providers Section */}
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
              Supported <span className="gradient-text">WhatsApp API Providers</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              BusyNotify works with official WhatsApp Business API providers. Connect your existing provider or set up a new one.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {apiProviders.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card rounded-xl px-6 py-4 text-center"
              >
                <p className="font-medium">{provider.name}</p>
                <p className="text-xs text-muted-foreground">{provider.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section className="py-20 border-y border-border">
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
                  BUSY WhatsApp API Documentation
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Want to integrate WhatsApp notifications from BUSY into your own application? 
                  Our API provides complete details on how to use WhatsApp messaging programmatically.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>RESTful API endpoints for sending messages</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Send GST invoices, vouchers, reports from BUSY</span>
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
{`// Send BUSY Invoice via WhatsApp API
POST /api/v1/whatsapp/send

{
  "phone": "+91XXXXXXXXXX",
  "type": "gst_invoice",
  "voucherNo": "INV-2024-0892",
  "message": "Your GST invoice from BUSY",
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
              Why Choose <span className="gradient-text">BusyNotify WhatsApp</span> for BUSY?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform how you share GST invoices and documents with customers
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
                🇮🇳 BUSY WhatsApp Integration - भारतीय व्यवसायों के लिए
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>BUSY Accounting Software</strong> से अब GST invoices, ledgers और payment reminders automatically WhatsApp पर भेजें।
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div className="space-y-2">
                <p className="text-primary font-medium">✅ GST Invoice Auto-Send</p>
                <p className="text-sm text-muted-foreground">Invoice बनाते ही WhatsApp पर</p>
              </div>
              <div className="space-y-2">
                <p className="text-primary font-medium">✅ Payment Reminders</p>
                <p className="text-sm text-muted-foreground">Automatic due date reminders</p>
              </div>
              <div className="space-y-2">
                <p className="text-primary font-medium">✅ Ledger on WhatsApp</p>
                <p className="text-sm text-muted-foreground">Customer तुरंत ledger पा सकते हैं</p>
              </div>
              <div className="space-y-2">
                <p className="text-primary font-medium">✅ BUSY 17/18/21 Compatible</p>
                <p className="text-sm text-muted-foreground">सभी BUSY versions के साथ</p>
              </div>
            </div>
          </motion.div>
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
              Frequently Asked Questions about <span className="gradient-text">BUSY WhatsApp Integration</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about automating BUSY Accounting Software with WhatsApp
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
              <MessageCircle className="w-8 h-8 text-green-400" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Automate GST Invoice Delivery from BUSY?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Stop manually sending invoices and reports from BUSY. Let BusyNotify automatically deliver 
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
