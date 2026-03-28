"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Bell, Sparkles, Zap } from "lucide-react";
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
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl"
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
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Notification Infrastructure</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            Never miss a critical{" "}
            <span className="relative">
              <span className="gradient-text">business moment</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>{" "}
            — again.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            BusyNotify monitors your workflows and fires{" "}
            <span className="text-foreground font-medium">intelligent alerts</span> the moment something needs your attention. 
            No noise. Just signal.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="glow-teal group" asChild>
              <Link href="/#">
                Get Started Free
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="group" asChild>
              <Link href="/#demo">
                <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                See how it works
              </Link>
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 text-amber-500 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>Trusted by <span className="text-foreground font-medium">500+</span> teams</span>
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
                  <span className="text-sm text-muted-foreground ml-2">Dashboard</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-400">Live</span>
                  <Zap className="w-3 h-3 text-primary" />
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Stats */}
                <div className="glass-subtle rounded-xl p-4">
                  <div className="text-sm text-muted-foreground mb-1">Notifications Today</div>
                  <div className="text-2xl font-bold">2,847</div>
                  <div className="text-xs text-green-400 mt-1">↑ 12% from yesterday</div>
                </div>
                
                <div className="glass-subtle rounded-xl p-4">
                  <div className="text-sm text-muted-foreground mb-1">Delivery Rate</div>
                  <div className="text-2xl font-bold">99.8%</div>
                  <div className="text-xs text-primary mt-1">Industry-leading uptime</div>
                </div>
                
                <div className="glass-subtle rounded-xl p-4">
                  <div className="text-sm text-muted-foreground mb-1">Avg Response Time</div>
                  <div className="text-2xl font-bold">42ms</div>
                  <div className="text-xs text-accent mt-1">Lightning fast</div>
                </div>
              </div>
              
              {/* Notification Feed Preview */}
              <div className="px-6 pb-6">
                <div className="glass-subtle rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-muted-foreground">Payment received from Order #2847</span>
                    <span className="ml-auto text-xs text-muted-foreground">Just now</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-muted-foreground">Server CPU usage above 80%</span>
                    <span className="ml-auto text-xs text-muted-foreground">2m ago</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">New user signup: john@example.com</span>
                    <span className="ml-auto text-xs text-muted-foreground">5m ago</span>
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
                <Bell className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Slack</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Alert sent successfully</p>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 bottom-1/3 glass-card rounded-lg p-3 shadow-xl hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Webhook</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Trigger fired in 12ms</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
