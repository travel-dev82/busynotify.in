"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Bot, 
  Building2, 
  CheckCircle2,
  ChevronRight,
  Zap,
  Users,
  Clock,
  Bell,
  Phone,
  ClipboardList,
  Truck,
  Map,
  CreditCard,
  FileSpreadsheet,
  Code
} from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    id: "busy-accounting-software-chatbot",
    title: "Busy Accounting Software Chatbot",
    shortTitle: "Busy ERP Chatbot",
    description: "AI-powered chatbot for Busy Accounting Software. Automate customer queries for balance inquiries, ledgers, invoices, payment receipts, and more through WhatsApp or Telegram.",
    icon: Bot,
    features: [
      "Balance Inquiry",
      "Ledger Statements",
      "Invoice Delivery",
      "Payment Receipts",
      "Order Status",
    ],
    popular: true,
    badge: "Most Popular",
  },
  {
    id: "payment-reminder-system",
    title: "Payment Reminder System",
    shortTitle: "Payment Reminders",
    description: "24/7 automated payment reminders integrated with Busy Software. Send daily, weekly, or monthly reminders via WhatsApp and SMS. Bill-by-bill or ledger-based with full customization.",
    icon: Bell,
    features: [
      "24/7 Uptime",
      "Flexible Scheduling",
      "Bill-by-bill Statements",
      "Custom Messages",
      "Testing Mode",
    ],
    popular: false,
    badge: "Automated",
  },
  {
    id: "due-follow-up-system",
    title: "Due Follow-up System",
    shortTitle: "Follow-up Management",
    description: "Manual follow-up system for telecallers with Busy Software integration. Track pending payments, record promises, and get dual reminders for both staff and customers on promise dates.",
    icon: ClipboardList,
    features: [
      "Telecaller Dashboard",
      "Promise Date Tracking",
      "Follow-up History",
      "Dual Reminders",
      "Team Performance",
    ],
    popular: false,
    badge: "For Teams",
  },
  {
    id: "transportation-slip-management",
    title: "Transportation Slip Management",
    shortTitle: "Transport Slips",
    description: "Digital transport challan management with Google Drive integration. Upload LR copies via PWA, let customers access transport details through chatbot. Paperless logistics documentation.",
    icon: Truck,
    features: [
      "Slip Photo Capture",
      "Google Drive Upload",
      "Bill-wise Organization",
      "Customer Access",
      "Chatbot Integration",
    ],
    popular: false,
    badge: "Unique Feature",
  },
  {
    id: "customer-map-report",
    title: "Customer Map Report",
    shortTitle: "Map Analytics",
    description: "Google Maps-powered dashboard showing customer distribution across India. State-wise and district-wise business analytics, outstanding payment visualization, and demand trend analysis.",
    icon: Map,
    features: [
      "All-India Customer Map",
      "State-wise Analytics",
      "District-level Insights",
      "Outstanding Visualization",
      "Demand Trends",
    ],
    popular: false,
    badge: "Visual Analytics",
  },
  {
    id: "credit-line-sender",
    title: "Credit Line Sender",
    shortTitle: "Credit Control",
    description: "Intelligent credit management system that monitors credit limits and credit days at customer level. Automatic reminders when customers breach their credit terms.",
    icon: CreditCard,
    features: [
      "Credit Limit Monitoring",
      "Credit Days Tracking",
      "Dual Condition Check",
      "Auto Reminders",
      "Policy Enforcement",
    ],
    popular: false,
    badge: "Smart Recovery",
  },
  {
    id: "google-sheet-automation",
    title: "Google Sheet Automation",
    shortTitle: "Data Sync",
    description: "Automatically sync Busy Software data to Google Sheets with pull-based updates every 10 minutes. Free templates for customers, invoices, receipts. Custom queries available.",
    icon: FileSpreadsheet,
    features: [
      "Pull-Based Sync",
      "No API Limits",
      "Free Data Templates",
      "Custom Queries",
      "Real-time Updates",
    ],
    popular: false,
    badge: "Data Integration",
  },
  {
    id: "custom-apis",
    title: "Custom APIs",
    shortTitle: "API Integration",
    description: "RESTful APIs to access Busy Software data programmatically. Free endpoints for customers, bills, products, ledgers. Custom query development for specific integration needs.",
    icon: Code,
    features: [
      "Customer API",
      "Bill-by-Bill API",
      "Product API",
      "Ledger API",
      "Custom Queries",
    ],
    popular: false,
    badge: "For Developers",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your systems never sleep. Customers get instant responses anytime.",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "No waiting, no hold music. Information delivered in seconds.",
  },
  {
    icon: Users,
    title: "Multi-Channel",
    description: "Works with WhatsApp, Telegram, SMS, and more platforms.",
  },
  {
    icon: Building2,
    title: "Made for India",
    description: "Designed specifically for Indian businesses and accounting software.",
  },
];

export function SolutionsIndexContent() {
  return (
    <div className="flex-1 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <ol className="flex items-center justify-center gap-2">
                <li><Link href="/" className="hover:text-primary">Home</Link></li>
                <li><ChevronRight className="w-4 h-4" /></li>
                <li className="text-foreground">Solutions</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              AI-Powered <span className="gradient-text">Business Solutions</span>
            </h1>
            
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform how your business handles customer queries and payment collections. 
              Our solutions integrate with popular Indian accounting software to automate everything.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold">
              Our <span className="gradient-text">Solutions</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Choose the solution that fits your business needs
            </p>
          </motion.div>

          <div className="grid gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <solution.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{solution.title}</h3>
                      {solution.popular && (
                        <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                          {solution.badge}
                        </span>
                      )}
                      {!solution.popular && (
                        <span className="px-3 py-1 text-xs font-medium bg-white/10 text-muted-foreground rounded-full">
                          {solution.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {solution.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-sm bg-white/5 rounded-full"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="shrink-0">
                    <Button size="lg" className="glow-teal group" asChild>
                      <Link href={`/solutions/${solution.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
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
            <h2 className="text-3xl font-bold">
              Why Choose <span className="gradient-text">BusyNotify</span>?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Built specifically for Indian businesses and their unique needs
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
            <h2 className="text-2xl md:text-3xl font-bold">
              Need a Custom Solution?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              We can build custom integrations for your specific ERP or accounting software. 
              Let's discuss your requirements.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="glow-teal group" asChild>
                <Link href="/#">
                  Contact Sales
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
