"use client";

import { motion } from "framer-motion";
import { Plug, Settings, Bell } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect your tools",
    description: "Integrate with Slack, Teams, Email, SMS, and 40+ other services in minutes. Our no-code integrations make setup a breeze.",
    icon: Plug,
    gradient: "from-primary/20 to-primary/5",
  },
  {
    number: "02",
    title: "Define your rules",
    description: "Use our visual rule builder to create smart notification policies. Set conditions, priorities, and routing logic without writing code.",
    icon: Settings,
    gradient: "from-accent/20 to-accent/5",
  },
  {
    number: "03",
    title: "Get notified. Instantly.",
    description: "When something important happens, the right people get notified on the right channel — in milliseconds. No delays, no missed alerts.",
    icon: Bell,
    gradient: "from-green-500/20 to-green-500/5",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-accent">How It Works</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Up and running in{" "}
            <span className="gradient-text">under 5 minutes</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            No complex setup. No lengthy onboarding. Just connect, configure, and go.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}
              
              <div className="relative glass-card rounded-2xl p-8 h-full group hover:border-primary/30 transition-colors">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${step.gradient}`}>
                    <step.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>
                
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
