"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  Rocket,
  Settings,
  MessageCircle,
  IndianRupee,
  LayoutDashboard,
  Code,
  FileSpreadsheet,
  Users,
  Truck,
  MapPin,
  Target,
  Lightbulb,
  TrendingUp,
  Shield,
  HeadphonesIcon,
  Building2,
  Store,
  Factory,
  ShoppingCart,
  Briefcase,
  Calculator,
  CheckCircle2,
  ArrowRight,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const challenges = [
  { icon: MessageCircle, text: "Sending invoices manually" },
  { icon: IndianRupee, text: "Following up for payments" },
  { icon: FileSpreadsheet, text: "Exporting reports repeatedly" },
  { icon: LayoutDashboard, text: "Lack of real-time dashboards" },
  { icon: Code, text: "No direct API or integrations" },
];

const solutions = [
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "Automatically send invoices, reports, and updates",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: IndianRupee,
    title: "Payment Reminder System",
    description: "Improve collections with automated reminders",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: LayoutDashboard,
    title: "Reporting Dashboard",
    description: "Access reports anytime from mobile or web",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Code,
    title: "API Integration",
    description: "Connect BUSY with websites, apps, and other systems",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: FileSpreadsheet,
    title: "Google Sheets Sync",
    description: "Real-time data export and reporting",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Users,
    title: "Follow-up CRM",
    description: "Manage customer communication and collections",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Truck,
    title: "LR & Transport Tracking",
    description: "Digitize logistics and dispatch processes",
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
];

const indianFeatures = [
  { icon: CheckCircle2, text: "GST-ready workflows" },
  { icon: MessageCircle, text: "WhatsApp-first communication" },
  { icon: Building2, text: "Support for MSMEs, distributors, wholesalers, and manufacturers" },
  { icon: Settings, text: "Works with BUSY versions 17, 18, 21 and above" },
];

const missions = [
  { icon: Zap, text: "Reducing manual work" },
  { icon: IndianRupee, text: "Improving payment collection" },
  { icon: LayoutDashboard, text: "Enabling real-time insights" },
  { icon: Code, text: "Connecting systems seamlessly" },
];

const whyChooseUs = [
  {
    icon: Target,
    title: "Built Exclusively for BUSY",
    description: "Every solution is designed specifically for BUSY Accounting Software users.",
  },
  {
    icon: Settings,
    title: "Easy Setup",
    description: "No technical knowledge required. We handle everything for you.",
  },
  {
    icon: Shield,
    title: "Secure Data Handling",
    description: "Your data stays on your system. We never store sensitive information.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Solutions that grow with your business needs.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Direct WhatsApp support for quick setup and troubleshooting.",
  },
];

const industries = [
  { icon: Store, name: "Distributors" },
  { icon: Building2, name: "Wholesalers" },
  { icon: Factory, name: "Manufacturers" },
  { icon: ShoppingCart, name: "Retail Businesses" },
  { icon: Briefcase, name: "Service Providers" },
  { icon: Calculator, name: "Accountants & CA Firms" },
];

export function AboutContent() {
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
                <li className="text-foreground">About Us</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-medium">Our Story</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              About <span className="gradient-text">BusyNotify</span>
            </h1>

            <p className="mt-6 text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              BusyNotify is a dedicated automation platform built specifically for businesses using{" "}
              <strong>BUSY Accounting Software</strong>. Our mission is simple — to help Indian businesses 
              automate manual work, improve efficiency, and grow faster with modern tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">What We Do</h2>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                <strong>BUSY is powerful for accounting</strong>, but many businesses still struggle with 
                manual processes. BusyNotify solves these challenges by adding automation, communication, 
                and integration capabilities to BUSY Software.
              </p>

              <div className="space-y-3">
                {challenges.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
                  >
                    <item.icon className="w-5 h-5 text-red-400" />
                    <span className="text-muted-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-green-500/20 rounded-3xl blur-3xl" />
              <div className="relative glass-card rounded-3xl p-8">
                <p className="text-2xl font-semibold text-center gradient-text">
                  We transform BUSY into a fully automated business system
                </p>
                <div className="mt-6 flex justify-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-16 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Settings className="w-4 h-4" />
              <span className="text-sm font-medium">Our Solutions</span>
            </div>
            <h2 className="text-3xl font-bold">
              Complete Ecosystem of <span className="gradient-text">Automation Tools</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We provide a complete ecosystem of automation tools for BUSY users
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-5 hover:border-primary/30 transition-colors"
              >
                <div className={`w-10 h-10 rounded-lg ${solution.bgColor} flex items-center justify-center mb-3`}>
                  <solution.icon className={`w-5 h-5 ${solution.color}`} />
                </div>
                <h3 className="font-semibold mb-1">{solution.title}</h3>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Indian Businesses Section */}
      <section className="py-16 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {indianFeatures.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5"
                  >
                    <item.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">
                  🇮🇳 Built for <span className="gradient-text">Indian Businesses</span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                BusyNotify is designed specifically for the Indian market. We understand how Indian 
                businesses operate — and we build solutions that fit your daily workflow.
              </p>

              <div className="glass-card rounded-xl p-6">
                <p className="text-primary font-medium">
                  From GST compliance to WhatsApp communication, every feature is built with Indian 
                  businesses in mind.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">Our Mission</span>
            </div>
            <h2 className="text-3xl font-bold">
              Transform BUSY into a <span className="gradient-text">Fully Automated System</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              To transform BUSY Accounting Software into a fully automated business system by:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {missions.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-card/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Lightbulb className="w-4 h-4" />
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl font-bold">
              Why Choose <span className="gradient-text">BusyNotify</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Who We Serve</span>
            </div>
            <h2 className="text-3xl font-bold">
              Trusted by Businesses <span className="gradient-text">Across Industries</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              BusyNotify is trusted by businesses across India
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-sm">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 bg-gradient-to-b from-card/50 to-background border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Our Vision</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Leading Automation Platform for <span className="gradient-text">BUSY Software</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We aim to become the leading automation platform for BUSY Accounting Software, 
              helping thousands of businesses across India operate smarter, faster, and more efficiently.
            </p>
          </motion.div>
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
              Let&apos;s Work <span className="gradient-text">Together</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Whether you&apos;re looking to automate your operations or scale your business, 
              BusyNotify is here to help. Get started today and experience the power of automation.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="glow-teal group" asChild>
                <Link href="/pricing">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
