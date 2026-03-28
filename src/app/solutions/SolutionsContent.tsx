"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Bell, Zap, Shield, BarChart3, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    icon: Shield,
    title: "Incident Management",
    description:
      "Route critical incidents to the right on-call engineer instantly. Reduce MTTR by up to 60% with intelligent alert prioritization.",
    features: ["Smart escalation", "On-call scheduling", "Incident deduplication"],
  },
  {
    icon: Zap,
    title: "DevOps Automation",
    description:
      "Connect your CI/CD pipeline and get notified about deployments, failures, and performance anomalies in real-time.",
    features: ["Deployment alerts", "Performance monitoring", "Error tracking"],
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Keep your team in sync with automated notifications for project updates, mentions, and important deadlines.",
    features: ["Slack integration", "Team routing", "Digest mode"],
  },
  {
    icon: Globe,
    title: "Customer Experience",
    description:
      "Respond to customer issues faster with real-time alerts from support tickets, feedback forms, and social mentions.",
    features: ["Ticket routing", "SLA monitoring", "Sentiment alerts"],
  },
];

const features = [
  {
    title: "Multi-channel Delivery",
    description: "Send notifications via Slack, Teams, Email, SMS, WhatsApp, and more.",
  },
  {
    title: "AI-Powered Routing",
    description: "Machine learning optimizes who receives which alerts and when.",
  },
  {
    title: "Smart Aggregation",
    description: "Group related alerts to reduce noise and highlight patterns.",
  },
  {
    title: "Custom Workflows",
    description: "Build sophisticated notification flows with our visual builder.",
  },
  {
    title: "Real-time Analytics",
    description: "Track delivery rates, response times, and team performance.",
  },
  {
    title: "Enterprise Security",
    description: "SOC 2 compliant with SSO, audit logs, and data encryption.",
  },
];

export function SolutionsContent() {
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
            <span className="label-accent">Solutions</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Built for teams that{" "}
              <span className="gradient-text">can't afford to miss</span>{" "}
              critical moments
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're a startup or enterprise, BusyNotify adapts to your workflow.
              Stop drowning in alerts. Start responding to what matters.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="glow-teal group" asChild>
                <Link href="/#">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="label-accent">Use Cases</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
              Built for your team's unique needs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 group hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{useCase.title}</h3>
                    <p className="mt-2 text-muted-foreground">{useCase.description}</p>
                    <ul className="mt-4 space-y-2">
                      {useCase.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 border-t border-border">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="label-accent">Features</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight">
              Everything you need in one platform
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-12"
          >
            <Bell className="w-12 h-12 mx-auto text-primary mb-6" />
            <h2 className="text-3xl font-bold">Ready to transform your notifications?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start your free trial today. No credit card required.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="glow-teal group" asChild>
                <Link href="/#">
                  Get Started Free
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#">Talk to Sales</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
