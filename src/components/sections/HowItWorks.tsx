"use client";

import { motion } from "framer-motion";
import { Database, Settings, Bot, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect Busy Software",
    description: "We integrate with your Busy Accounting Software database. Works with Busy 17, 18, 21, and all versions. Setup takes just a few hours.",
    icon: Database,
  },
  {
    number: "02",
    title: "Configure Your Solutions",
    description: "Choose which solutions you need: WhatsApp integration, chatbot, payment reminders, reports dashboard, or all of them. Customize messages and schedules.",
    icon: Settings,
  },
  {
    number: "03",
    title: "Go Live & Automate",
    description: "Your customers start receiving automatic messages, can query balances via chatbot, and access reports 24/7. You save hours every day.",
    icon: Bot,
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
            <span className="gradient-text">under 24 hours</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            No technical knowledge required. We handle the complete setup for you.
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
                  <div className="inline-flex p-3 rounded-xl bg-primary/10">
                    <step.icon className="w-6 h-6 text-primary" />
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

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {[
            "No code changes needed",
            "Works with your existing Busy setup",
            "Free 3-day demo",
            "Cancel anytime",
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>{benefit}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
