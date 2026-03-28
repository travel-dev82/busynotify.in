"use client";

import { motion } from "framer-motion";
import { 
  Bell, 
  Route, 
  Settings2, 
  BarChart3, 
  Webhook, 
  Code2,
  ArrowUpRight
} from "lucide-react";

const features = [
  {
    title: "Multi-channel Notifications",
    description: "Deliver alerts via Slack, Teams, Email, SMS, WhatsApp, and more from a single platform.",
    icon: Bell,
    wide: true,
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Smart Routing",
    description: "AI-powered routing ensures the right person gets the right alert at the right time.",
    icon: Route,
    gradient: "from-accent/20 to-accent/5",
  },
  {
    title: "Rules Engine",
    description: "Create sophisticated notification rules with our intuitive visual builder.",
    icon: Settings2,
    gradient: "from-green-500/20 to-green-500/5",
  },
  {
    title: "Real-time Dashboard",
    description: "Monitor all your notifications in one place with live status updates.",
    icon: BarChart3,
    gradient: "from-purple-500/20 to-purple-500/5",
  },
  {
    title: "Webhook Triggers",
    description: "Connect any service via webhooks. Build custom integrations in minutes.",
    icon: Webhook,
    wide: true,
    gradient: "from-pink-500/20 to-pink-500/5",
  },
  {
    title: "API-First",
    description: "RESTful API with comprehensive docs. SDKs for all major languages.",
    icon: Code2,
    gradient: "from-cyan-500/20 to-cyan-500/5",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-accent">Features</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything you need for{" "}
            <span className="gradient-text">intelligent alerts</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete notification infrastructure that scales with your business.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 ${
                feature.wide ? "md:col-span-2 lg:col-span-1" : ""
              } ${feature.wide && index === 4 ? "lg:col-span-2" : ""}`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
