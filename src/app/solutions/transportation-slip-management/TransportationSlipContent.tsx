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
  Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Truck,
    title: "Transport Slip Capture",
    description: "When goods are transported, capture the transport slip photo directly through our progressive web app. No paperwork, no filing cabinets.",
    keywords: "transport slip capture, LR photo, challan image",
  },
  {
    icon: Cloud,
    title: "Google Drive Integration",
    description: "Slips are automatically uploaded to your Google Drive organized by bill number. Access your transport documents anytime, anywhere.",
    keywords: "Google Drive upload, cloud storage, document backup",
  },
  {
    icon: Eye,
    title: "Customer Access Portal",
    description: "Customers can view their transport slips directly through the PWA. They know exactly which transporter was used for each bill.",
    keywords: "customer portal, transport tracking, bill lookup",
  },
  {
    icon: Bot,
    title: "Chatbot Integration",
    description: "Customers can ask our chatbot 'Which transport for bill #1234?' and instantly get transporter details. 24/7 availability without calling your office.",
    keywords: "chatbot transport query, automated response, WhatsApp transport",
  },
  {
    icon: FolderOpen,
    title: "Bill-wise Organization",
    description: "Every transport slip is linked to its invoice number. Find any challan in seconds by searching the bill number.",
    keywords: "bill-wise slip, invoice challan, organized documents",
  },
  {
    icon: Smartphone,
    title: "Mobile-First PWA",
    description: "Our progressive web app works on any device - Android, iOS, or desktop. No app installation required.",
    keywords: "PWA app, mobile challan, cross-platform",
  },
  {
    icon: Upload,
    title: "One-Click Upload",
    description: "See all invoices in the transportation menu, click an invoice, capture the slip photo, and submit. Done in under 10 seconds.",
    keywords: "quick upload, easy capture, fast processing",
  },
  {
    icon: MapPin,
    title: "Transporter Details",
    description: "Store complete transporter information - name, contact, LR number, and delivery details. Everything in one place.",
    keywords: "transporter info, LR details, delivery tracking",
  },
];

const workflowSteps = [
  {
    step: 1,
    title: "View Invoices",
    description: "Open the Transportation menu in our PWA. See all invoices that need transport slip uploads.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Select Invoice",
    description: "Click on the invoice for which you want to upload the transport slip.",
    icon: Search,
  },
  {
    step: 3,
    title: "Capture Photo",
    description: "Use your phone camera to capture a clear photo of the transport challan/LR copy.",
    icon: Camera,
  },
  {
    step: 4,
    title: "Submit & Upload",
    description: "Click submit. The slip is uploaded to Google Drive and linked to the bill number instantly.",
    icon: Upload,
  },
];

const customerWorkflow = [
  {
    step: 1,
    title: "Open PWA or Chatbot",
    description: "Customer accesses BusyNotify through our PWA or WhatsApp/Telegram chatbot.",
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
    title: "View Transport Slip",
    description: "Instantly see the transporter name, LR number, and download the slip.",
    icon: Eye,
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Save 2+ Hours Daily",
    description: "No more searching through files for old challans. Everything is digital and searchable.",
  },
  {
    icon: Zap,
    title: "Instant Access",
    description: "Customers get transport details in seconds. No calls, no waiting, no manual lookups.",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description: "Customers can track their shipments independently. Professional and modern experience.",
  },
  {
    icon: Cloud,
    title: "Paperless Operations",
    description: "Go green with digital transport documentation. Save space, save trees, save time.",
  },
];

const industries = [
  "Trading Companies",
  "Manufacturing Units",
  "Distribution Houses",
  "Wholesale Businesses",
  "Logistics Companies",
  "Pharma Distribution",
  "FMCG Distributors",
  "Textile Merchants",
];

const faqs = [
  {
    question: "What is Transportation Slip Management in BusyNotify?",
    answer: "Transportation Slip Management is a digital solution that lets you capture, store, and share transport challans/LR copies with your customers. When goods are dispatched, you upload the transport slip through our PWA, which gets saved to Google Drive and becomes instantly accessible to your customers.",
  },
  {
    question: "How does the transport slip upload work?",
    answer: "Simply open our PWA, go to the Transportation menu, see all pending invoices, click on an invoice, capture the transport slip photo, and submit. The slip is automatically uploaded to your Google Drive folder organized by bill number.",
  },
  {
    question: "Can my customers access transport slips?",
    answer: "Yes! Customers can access their transport slips through our PWA or by asking the chatbot. They simply search their bill number and can view transporter details, LR number, and download the slip image.",
  },
  {
    question: "Does this integrate with Busy Accounting Software?",
    answer: "Absolutely. Transportation Slip Management pulls invoice data directly from your Busy Software. The slips are linked to bill numbers from Busy, ensuring complete integration with your existing workflow.",
  },
  {
    question: "Where are the transport slips stored?",
    answer: "All transport slips are stored in your Google Drive account. We create an organized folder structure by bill number, making it easy to find any document. You maintain full ownership of your data.",
  },
  {
    question: "Is the PWA mobile-friendly?",
    answer: "Yes, our Progressive Web App is designed mobile-first. It works on any smartphone - Android or iOS - without needing to download an app from the app store. Just open in browser and use.",
  },
  {
    question: "How quickly can customers see transport details?",
    answer: "Instantly. Once you upload a transport slip, it's immediately available to your customer. They can access it 24/7 through the PWA or chatbot without calling your office.",
  },
  {
    question: "What transport information is captured?",
    answer: "You can capture the complete challan image, plus we store transporter name, contact number, LR/GC number, dispatch date, expected delivery date, and any special instructions.",
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
                  <li className="text-foreground">Transportation Slip Management</li>
                </ol>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="gradient-text">Transportation Slip Management</span>{" "}
                System for Indian Businesses
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Digitally manage your <strong>transport challans and LR copies</strong>. Upload slips to Google Drive, 
                let customers access transport details via PWA or chatbot. A unique feature that transforms your logistics documentation.
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
                  <span>Google Drive Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>PWA + Chatbot Access</span>
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
                {/* Upload mockup */}
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Truck className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Transportation Upload</p>
                    <p className="text-xs text-muted-foreground">Bill #INV-2024-0892</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-xl p-4 border border-dashed border-border text-center">
                    <Camera className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">Capture Transport Slip</p>
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
                Still Managing Transport Slips in Files and Folders?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Every business that ships goods faces these problems daily:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Customer calling to ask which transporter was used"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Can't find the LR copy when there's a delivery issue"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Paper challans getting lost or damaged"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Hours wasted searching through files for old slips"
                  </li>
                </ul>
                <p className="mt-4">
                  The transport documentation chaos wastes time and frustrates customers. There's a better way.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Digital Transport Documentation Made Simple
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  BusyNotify transforms how you handle transport challans:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Capture slips with your phone - no scanning needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Auto-upload to Google Drive organized by bill</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Customers access slips without calling you</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Chatbot answers transport queries 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
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
              How <span className="gradient-text">Transportation Slip Upload</span> Works
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
                      <p className="text-xs text-primary mt-2">📎 View Transport Slip</p>
                    </div>
                  </div>
                </div>
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
              Everything you need to manage transportation slips digitally
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
              Why Businesses Love <span className="gradient-text">Transportation Slip Management</span>
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
              Any business that transports goods can benefit from digital slip management
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
              Frequently Asked Questions about <span className="gradient-text">Transportation Slip Management</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about digital transport documentation
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
              <Truck className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Go Paperless with Transport Documentation?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Join hundreds of Indian businesses already using BusyNotify to manage transport slips digitally. 
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
