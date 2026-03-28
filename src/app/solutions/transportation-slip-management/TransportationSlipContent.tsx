"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Truck,
  Camera,
  Cloud,
  FileText,
  MapPin,
  Upload,
  CheckCircle2,
  Zap,
  Users,
  Clock,
  MessageCircle,
  Eye,
  FolderOpen,
  Smartphone,
  Search,
  ChevronRight,
  Bot,
  Building2,
  XCircle,
  Package,
  Send,
  Building,
  Factory,
  Package2,
  Pill,
  Shirt,
  Box
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Camera,
    title: "LR Copy Capture & Upload (Transport Challan Management)",
    description: "Capture LR copies and transport challans directly through our PWA. No paperwork, no filing cabinets - instant digital storage linked to your BUSY invoices.",
    keywords: "LR copy capture, challan upload, transport document management",
  },
  {
    icon: Cloud,
    title: "Google Drive Cloud Storage (Auto-Organized)",
    description: "All LR copies and challans are automatically uploaded to Google Drive organized by invoice number. Secure cloud backup with instant access anytime.",
    keywords: "Google Drive storage, cloud challan backup, document organization",
  },
  {
    icon: Eye,
    title: "Customer Transport Tracking Portal (Self-Service Access)",
    description: "Customers can view their transport challans and LR copies directly through PWA or chatbot. They see transporter name, LR number, and dispatch details without calling your office.",
    keywords: "customer tracking portal, transport self-service, LR access",
  },
  {
    icon: Bot,
    title: "WhatsApp Chatbot for Transport Queries",
    description: "Customers ask 'Which transport for bill #1234?' on WhatsApp and get instant transporter details. 24/7 availability without staff intervention.",
    keywords: "WhatsApp transport bot, automated transport query, chatbot LR details",
  },
  {
    icon: FolderOpen,
    title: "Invoice-wise Transport Tracking (Bill-linked LR Management)",
    description: "Every transport challan is linked to its BUSY invoice number. Find any LR copy in seconds by searching the bill number.",
    keywords: "invoice-wise tracking, bill-linked LR, BUSY transport integration",
  },
  {
    icon: Smartphone,
    title: "Mobile PWA for Transport Management",
    description: "Progressive Web App works on any device - Android, iOS, desktop. No app installation needed. Capture and access challans from anywhere.",
    keywords: "PWA transport app, mobile challan management, cross-platform access",
  },
  {
    icon: Upload,
    title: "One-Click LR Upload (Under 10 Seconds)",
    description: "See all invoices in transportation menu, click an invoice, capture the challan photo, submit. Done in under 10 seconds per document.",
    keywords: "quick challan upload, fast LR capture, easy document management",
  },
  {
    icon: MapPin,
    title: "Transporter Details & Dispatch Tracking",
    description: "Store complete transporter info - name, contact, LR/GC number, dispatch date, expected delivery. Track all dispatch details in one place.",
    keywords: "transporter tracking, dispatch details, LR number management",
  },
];

const workflowSteps = [
  {
    step: 1,
    title: "View Invoices",
    description: "Open the Transportation menu in PWA. See all invoices from BUSY that need transport challan uploads.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Select Invoice",
    description: "Click on the invoice for which you want to upload the LR copy or transport challan.",
    icon: Search,
  },
  {
    step: 3,
    title: "Capture Photo",
    description: "Use your phone camera to capture a clear photo of the LR copy/transport challan.",
    icon: Camera,
  },
  {
    step: 4,
    title: "Submit & Upload",
    description: "Click submit. The challan is uploaded to Google Drive and linked to the bill number instantly.",
    icon: Upload,
  },
];

const customerWorkflow = [
  {
    step: 1,
    title: "Open PWA or Chatbot",
    description: "Customer accesses BusyNotify through PWA or WhatsApp/Telegram chatbot.",
    icon: Smartphone,
  },
  {
    step: 2,
    title: "Enter Bill Number",
    description: "Search for the specific invoice they want transport details for.",
    icon: Search,
  },
  {
    step: 3,
    title: "View Transport Details",
    description: "Instantly see transporter name, LR number, dispatch date, and download challan.",
    icon: Eye,
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Save 2+ Hours Daily",
    description: "No more searching through files for old challans. Digital and searchable - find any LR copy in seconds.",
  },
  {
    icon: Zap,
    title: "Instant Customer Access",
    description: "Customers get transport details instantly. No calls, no waiting, no manual lookups required.",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description: "Customers track shipments independently. Professional and modern transport documentation experience.",
  },
  {
    icon: Cloud,
    title: "Paperless Operations",
    description: "Go green with digital transport documentation. Save space, reduce clutter, secure cloud backup.",
  },
];

const beforeAfterComparison = [
  {
    aspect: "Document Storage",
    before: "Paper files, filing cabinets",
    after: "Google Drive cloud storage",
  },
  {
    aspect: "Finding Old Challans",
    before: "Manual search through files",
    after: "Instant search by bill number",
  },
  {
    aspect: "Customer Queries",
    before: "Phone calls to office",
    after: "Self-service via PWA/chatbot",
  },
  {
    aspect: "LR Copy Access",
    before: "Staff has to locate and share",
    after: "Customer downloads instantly",
  },
  {
    aspect: "Document Safety",
    before: "Can be lost, damaged, misplaced",
    after: "Secure cloud backup always",
  },
  {
    aspect: "Transporter Info",
    before: "Scattered in registers/bills",
    after: "Centralized with each invoice",
  },
];

const industries = [
  { name: "Trading Companies", icon: Building },
  { name: "Manufacturing Units", icon: Factory },
  { name: "Distribution Houses", icon: Package },
  { name: "Wholesale Businesses", icon: Package2 },
  { name: "Logistics Companies", icon: Truck },
  { name: "Pharma Distribution", icon: Pill },
  { name: "FMCG Distributors", icon: Box },
  { name: "Textile Merchants", icon: Shirt },
];

const useCases = [
  {
    title: "Traders & Distributors",
    description: "Track LR copies for every shipment. Customers check transporter details without calling your office.",
    icon: Package,
  },
  {
    title: "Manufacturers",
    description: "Manage transport documentation for factory dispatches. All challans linked to sales invoices.",
    icon: Factory,
  },
  {
    title: "Logistics Companies",
    description: "Centralize all LR copies and transport documents. Easy access for customers and staff.",
    icon: Truck,
  },
  {
    title: "Pharma & FMCG",
    description: "Critical for compliance - maintain digital records of all transport challans with easy retrieval.",
    icon: Pill,
  },
];

const faqs = [
  {
    question: "What is LR tracking system for BUSY Software?",
    answer: "LR (Lorry Receipt) tracking system for BUSY is a digital solution that captures, stores, and manages transport challans/LR copies linked to your BUSY invoices. You can upload LR photos via PWA, store them on Google Drive, and let customers access transport details through chatbot or portal - all integrated with BUSY Accounting Software.",
  },
  {
    question: "How to manage transport challans digitally for BUSY invoices?",
    answer: "With BusyNotify's transport challan management, simply open the PWA, select the invoice from BUSY, capture the challan photo, and upload. The challan is automatically stored on Google Drive organized by bill number and becomes instantly accessible to customers via PWA or WhatsApp chatbot.",
  },
  {
    question: "Can I track dispatch details from BUSY Accounting Software?",
    answer: "Yes! BusyNotify integrates directly with BUSY to show all invoices needing transport documentation. Upload LR copies for each dispatch, and track transporter name, LR number, dispatch date, and delivery status - all linked to your BUSY invoices.",
  },
  {
    question: "How to store LR copies online securely?",
    answer: "All LR copies are stored on your Google Drive account with organized folder structure by bill number. You maintain full ownership of your data. Google Drive provides secure cloud storage with automatic backup, accessible from anywhere.",
  },
  {
    question: "Can customers see transport details without calling office?",
    answer: "Absolutely! Customers can access their transport details 24/7 through our PWA portal or WhatsApp chatbot. They simply enter their bill number to see transporter name, LR number, dispatch date, and download the challan copy - no phone calls needed.",
  },
  {
    question: "How to reduce transport-related customer calls?",
    answer: "By providing self-service access through PWA and chatbot, customers get instant transport information without calling. They can check which transporter was used, LR number, and download challan copies anytime - reducing 'which transport?' calls by 80%+.",
  },
  {
    question: "What transport information is captured in the system?",
    answer: "The system captures complete transport details: transporter name, contact number, LR/GC number, dispatch date, expected delivery date, destination, vehicle number, and full challan image. All linked to the invoice number from BUSY.",
  },
  {
    question: "Does this integrate with BUSY Accounting Software?",
    answer: "Yes, Transportation Slip Management pulls invoice data directly from BUSY Software. All challans are linked to bill numbers from BUSY, ensuring complete integration with your existing accounting workflow.",
  },
  {
    question: "Is the PWA mobile-friendly for transport challan capture?",
    answer: "Yes, our Progressive Web App is designed mobile-first. It works on any smartphone - Android or iOS - without app installation. Simply open in browser and use to capture and access challans from anywhere.",
  },
  {
    question: "How quickly can customers access transport details after upload?",
    answer: "Instantly. Once you upload a transport challan, it's immediately available to customers. They can access transporter details 24/7 through PWA or chatbot without any delay or calling your office.",
  },
  {
    question: "What is the difference between LR and transport challan?",
    answer: "LR (Lorry Receipt) is issued by transporters when they receive goods for shipment. Transport challan is a broader term for any transport document. Both can be captured and managed in our system - we support all types of transport documentation including LR, GC (Goods Consignment), and delivery challans.",
  },
  {
    question: "Can I share transport details on WhatsApp to customers?",
    answer: "Yes! When customers message on WhatsApp asking about their shipment, our chatbot automatically provides transporter name, LR number, dispatch date, and challan link. You can also manually share transport details through WhatsApp integration.",
  },
  {
    question: "How does the chatbot answer transport queries?",
    answer: "Customers simply message 'Transport for bill INV-1234' on WhatsApp/Telegram. The chatbot instantly retrieves and responds with complete transport details - transporter name, LR number, dispatch date, and link to view/download the challan image.",
  },
  {
    question: "Is this suitable for logistics and transport companies?",
    answer: "Absolutely! Logistics companies benefit greatly as they deal with high volumes of LR copies and transport documents. The system centralizes all challans, provides easy customer access, and maintains digital records for compliance.",
  },
  {
    question: "What industries benefit most from LR tracking system?",
    answer: "Trading companies, manufacturers, distributors, pharma companies, FMCG distributors, textile merchants, and any business that regularly ships goods through transporters benefit from organized LR tracking and customer self-service access.",
  },
  {
    question: "Can I search old transport challans by bill number?",
    answer: "Yes! Every challan is linked to its invoice number from BUSY. Simply search by bill number to instantly find the LR copy, transporter details, and dispatch information - even for challans from months or years ago.",
  },
  {
    question: "How much time does digital challan management save?",
    answer: "Businesses typically save 2+ hours daily that was previously spent searching for old challans, answering customer calls about transport details, and manually managing paper files. Instant search and customer self-service dramatically reduce document management overhead.",
  },
  {
    question: "Is there a limit on number of challans I can upload?",
    answer: "Storage depends on your Google Drive space. Since challans are stored on your Google Drive, you have full control over storage capacity. Most businesses can store years of transport documents within standard Drive capacity.",
  },
];

export function TransportationSlipContent() {
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
                  <li className="text-foreground">LR & Transport Challan Tracking</li>
                </ol>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="gradient-text">LR & Transport Challan</span>{" "}
                Tracking System for BUSY (Dispatch Management Software)
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Track <strong>transport challans, LR copies, and dispatch details</strong> directly from BUSY Accounting Software. 
                Upload LR slips to Google Drive, share transport info with customers on WhatsApp, and manage logistics documents 
                digitally using mobile PWA and chatbot access.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="glow-teal group" asChild>
                  <Link href="/pricing">
                    Start Free Demo
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#workflow">See How It Works</Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>LR Copy Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Google Drive Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>WhatsApp Chatbot</span>
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
                {/* Upload mockup */}
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Truck className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">LR Copy Upload</p>
                    <p className="text-xs text-muted-foreground">Bill #INV-2024-0892</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-xl p-4 border border-dashed border-border text-center">
                    <Camera className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">Capture LR / Transport Challan</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Transporter:</span>
                      <span className="font-medium">ABC Transport Co.</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">LR Number:</span>
                      <span className="font-medium">LR-45678</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Destination:</span>
                      <span className="font-medium">Mumbai, MH</span>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    <Upload className="mr-2 w-4 h-4" />
                    Upload to Google Drive
                  </Button>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-card rounded-lg px-3 py-2 shadow-xl hidden lg:block"
              >
                <div className="flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Cloud Synced</span>
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
              <span className="text-red-400">❗ Problems</span> in Transport & LR Management
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Every business that ships goods faces these daily challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { problem: "LR copies get lost or damaged", impact: "No proof when delivery issues arise" },
              { problem: "Customers keep calling for transporter details", impact: "Staff time wasted on repetitive queries" },
              { problem: "No centralized tracking of challans", impact: "Documents scattered across files" },
              { problem: "Hard to find old dispatch records", impact: "Hours spent searching for past challans" },
              { problem: "Manual file storage is inefficient", impact: "Office space wasted on filing cabinets" },
              { problem: "No quick way to share LR copies", impact: "Slow response to customer requests" },
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
              See the transformation in your transport documentation workflow
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

      {/* Track Dispatch Section */}
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
                📦 Track Dispatch & Transport Details from <span className="gradient-text">BUSY</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Every invoice in BUSY can have linked transport details. Track transporter name, LR number, 
                dispatch date, and delivery status - all connected to your accounting data.
              </p>
              <ul className="space-y-3">
                {[
                  "Invoice-linked transport tracking from BUSY",
                  "Dispatch details with LR/GC number",
                  "Transporter contact information stored",
                  "Expected delivery date tracking",
                  "Quick search by bill number",
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
                <FileText className="w-5 h-5 text-primary" />
                Dispatch Details - INV-2024-0892
              </h3>
              <div className="space-y-3 bg-white/5 rounded-xl p-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transporter:</span>
                  <span className="font-medium">ABC Transport Co.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">LR Number:</span>
                  <span className="font-medium">LR-45678</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dispatch Date:</span>
                  <span className="font-medium">15 Jan 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Destination:</span>
                  <span className="font-medium">Mumbai, MH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="text-green-400">In Transit</span>
                </div>
              </div>
              <Button className="w-full mt-4" variant="outline">
                <Eye className="mr-2 w-4 h-4" />
                View LR Copy
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Manage LR Copies Section */}
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
              📄 Manage <span className="gradient-text">LR Copies & Transport Challans</span> Digitally
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Your complete digital transport document management system for BUSY Software
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Capture</h3>
              <p className="text-sm text-muted-foreground">
                Take photos of LR copies and transport challans using your phone camera through PWA
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Cloud className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Store</h3>
              <p className="text-sm text-muted-foreground">
                Auto-upload to Google Drive with organized folder structure by invoice number
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Access</h3>
              <p className="text-sm text-muted-foreground">
                Instant access for you and customers via PWA portal or WhatsApp chatbot
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              How <span className="gradient-text">LR Copy Upload</span> Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Upload transport challans in under 10 seconds. Simple, fast, and paperless.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector line */}
                {index < workflowSteps.length - 1 && (
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

      {/* WhatsApp Transport Details Section */}
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
              📲 Share Transport Details with Customers on <span className="gradient-text">WhatsApp</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Customers get instant transport information via WhatsApp chatbot - no manual intervention needed
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                {[
                  { title: "Automated Responses", desc: "Chatbot instantly provides transport details when customer asks" },
                  { title: "24/7 Availability", desc: "Customers can check transport info anytime without calling office" },
                  { title: "LR Copy Sharing", desc: "Send LR copy link directly on WhatsApp chat" },
                  { title: "Reduce Support Calls", desc: "80%+ reduction in 'which transport?' calls" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <Send className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp Chat</p>
                    <p className="text-xs text-green-400">Online</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-primary/20 rounded-2xl rounded-br-sm px-4 py-2 max-w-xs">
                      <p className="text-sm">Transport for bill INV-0892?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-white/5 rounded-2xl rounded-bl-sm px-4 py-3 max-w-sm space-y-2">
                      <p className="text-sm font-medium">🚚 Transport Details</p>
                      <p className="text-sm text-muted-foreground">Bill: INV-2024-0892</p>
                      <p className="text-sm"><strong>Transporter:</strong> ABC Transport Co.</p>
                      <p className="text-sm"><strong>LR No:</strong> LR-45678</p>
                      <p className="text-sm"><strong>Dispatch:</strong> 15 Jan 2024</p>
                      <p className="text-xs text-primary mt-2">📎 View LR Copy</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Access Section */}
      <section className="py-20 border-y border-border bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Customers Can Access Transport Details <span className="gradient-text">24/7</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your customers don't need to call and ask "Which transport did you use?" anymore. 
                They get complete transport information through our PWA or chatbot - anytime, anywhere.
              </p>
              
              <div className="space-y-4">
                {customerWorkflow.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <step.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-primary" />
                Customer Portal Access
              </h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-2">Search Bill Number</p>
                  <div className="bg-background rounded-lg p-3 flex items-center gap-2">
                    <Search className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">INV-2024-0892</span>
                  </div>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium">Transport Details Found</span>
                  </div>
                  <div className="text-sm space-y-1">
                    <p><strong>Transporter:</strong> ABC Transport</p>
                    <p><strong>LR:</strong> LR-45678</p>
                    <p><strong>Date:</strong> 15 Jan 2024</p>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  <Eye className="mr-2 w-4 h-4" />
                  Download LR Copy
                </Button>
              </div>
            </motion.div>
          </div>
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
              Powerful <span className="gradient-text">Transport Documentation</span> Features
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage LR copies and transport challans digitally
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
                <meta itemProp="keywords" content={feature.keywords} />
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why Businesses Love <span className="gradient-text">LR & Challan Tracking</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Real benefits that save time and improve customer experience
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

      {/* Who Should Use This Section */}
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
              👥 Who Should Use <span className="gradient-text">LR & Transport Tracking</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Perfect for businesses using transport and dispatch operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Use Case Section */}
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
              🚚 <span className="gradient-text">Logistics & Dispatch Management</span> Made Easy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Streamline your logistics operations with digital document tracking
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Track Shipments
                </h3>
                <p className="text-muted-foreground">
                  Every shipment's transport details are captured and linked to the invoice. 
                  Know which transporter, which LR, and when dispatched - all in one place.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <FolderOpen className="w-5 h-5 text-primary" />
                  Manage Documents
                </h3>
                <p className="text-muted-foreground">
                  All LR copies and challans stored digitally on Google Drive. 
                  No more searching through files - instant access by bill number.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Reduce Calls
                </h3>
                <p className="text-muted-foreground">
                  Customers get transport info via self-service portal and chatbot. 
                  Dramatically reduce "which transport?" phone calls.
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
              <h3 className="text-lg font-semibold mb-4">Logistics Dashboard View</h3>
              <div className="space-y-3">
                {[
                  { bill: "INV-0891", transporter: "XYZ Logistics", lr: "LR-12345", status: "Delivered" },
                  { bill: "INV-0892", transporter: "ABC Transport", lr: "LR-45678", status: "In Transit" },
                  { bill: "INV-0893", transporter: "Fast Cargo", lr: "LR-90123", status: "Dispatched" },
                  { bill: "INV-0894", transporter: "Road Express", lr: "LR-45601", status: "Pending" },
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{item.bill}</p>
                      <p className="text-xs text-muted-foreground">{item.transporter}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-medium">{item.lr}</p>
                      <p className={`text-xs ${item.status === 'Delivered' ? 'text-green-400' : item.status === 'In Transit' ? 'text-yellow-400' : item.status === 'Dispatched' ? 'text-blue-400' : 'text-muted-foreground'}`}>
                        {item.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
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
              Perfect for <span className="gradient-text">Indian Businesses</span> That Ship Products
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Any business that transports goods benefits from digital LR tracking
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card rounded-xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <industry.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 border-y border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Frequently Asked Questions about <span className="gradient-text">LR & Transport Tracking</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about digital transport documentation
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
              <Truck className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Digitize Your LR & Transport Documentation?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Join Indian businesses using BusyNotify for LR tracking, challan management, and customer self-service. 
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
