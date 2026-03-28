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
  Clock
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
  // Future solutions can be added here
  // {
  //   id: "tally-erp-chatbot",
  //   title: "Tally ERP Chatbot",
  //   ...
  // },
];

const benefits = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your chatbot never sleeps. Customers get instant responses anytime.",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "No waiting, no hold music. Information delivered in seconds.",
  },
  {
    icon: Users,
    title: "Multi-Channel",
    description: "Works with WhatsApp, Telegram, and more platforms.",
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
              Transform how your business handles customer queries. Our AI chatbots integrate 
              with popular Indian accounting software to automate responses 24/7.
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
              We can build custom chatbot integrations for your specific ERP or accounting software. 
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
