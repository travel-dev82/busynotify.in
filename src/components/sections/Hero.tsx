"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bot, MessageCircle, Bell, CheckCircle2, Zap, LayoutDashboard, Settings, Database, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-8"
          >
            <Settings className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Automation Platform for BUSY Accounting Software</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            Automate{" "}
            <span className="relative">
              <span className="gradient-text">BUSY Accounting Software</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-green-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>{" "}
            with WhatsApp, Payment Reminders & Reports
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            <span className="text-foreground font-medium">WhatsApp integration, payment reminders, reporting dashboards, Google Sheets sync, and API integrations.</span> Built specifically for Indian businesses using BUSY Software to improve collections, reporting, and operations.
          </motion.p>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 flex flex-wrap justify-center gap-3"
          >
            {["WhatsApp Integration", "Payment Reminders", "Reporting Dashboards", "API Integration", "Google Sheets Sync"].map((feature) => (
              <span key={feature} className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                {feature}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="glow-teal group" asChild>
              <Link href="/pricing">
                Start Free Demo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="group" asChild>
              <Link href="/solutions">
                View All Solutions
              </Link>
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Works with BUSY 17/18/21</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>WhatsApp & Telegram</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Setup in 24 Hours</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual - Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 lg:mt-24 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Glow effect behind dashboard */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent blur-2xl transform translate-y-10" />
            
            {/* Dashboard Card */}
            <div className="relative glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">BusyNotify Dashboard</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400">Connected to BUSY</span>
                  <Zap className="w-3 h-3 text-primary" />
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Stats */}
                <div className="glass-subtle rounded-xl p-4">
                  <div className="text-sm text-muted-foreground mb-1">WhatsApp Messages Sent</div>
                  <div className="text-2xl font-bold">1,247</div>
                  <div className="text-xs text-green-400 mt-1">↑ 18% from yesterday</div>
                </div>
                
                <div className="glass-subtle rounded-xl p-4">
                  <div className="text-sm text-muted-foreground mb-1">Active BUSY Customers</div>
                  <div className="text-2xl font-bold">892</div>
                  <div className="text-xs text-primary mt-1">On WhatsApp & Telegram</div>
                </div>
                
                <div className="glass-subtle rounded-xl p-4">
                  <div className="text-sm text-muted-foreground mb-1">Invoices Auto-Sent</div>
                  <div className="text-2xl font-bold">456</div>
                  <div className="text-xs text-accent mt-1">From BUSY Software</div>
                </div>
              </div>
              
              {/* Solution Icons */}
              <div className="px-6 pb-6">
                <div className="glass-subtle rounded-xl p-4">
                  <div className="text-sm text-muted-foreground mb-3">Active BUSY Automation Solutions</div>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                      <Bot className="w-4 h-4 text-primary" />
                      <span className="text-sm">BUSY Chatbot</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                      <MessageCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm">WhatsApp</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                      <Bell className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm">Payment Reminders</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                      <LayoutDashboard className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">Reports</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                      <Database className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">API</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating notification cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-1/4 glass-card rounded-lg p-3 shadow-xl hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium">WhatsApp</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">BUSY Invoice sent automatically</p>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 bottom-1/3 glass-card rounded-lg p-3 shadow-xl hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Payment Reminder</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Outstanding ₹15,000 reminder sent</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
