"use client";

import { motion } from "framer-motion";

const integrations = [
  { name: "Slack", category: "Messaging" },
  { name: "Teams", category: "Messaging" },
  { name: "Discord", category: "Messaging" },
  { name: "WhatsApp", category: "Messaging" },
  { name: "Email", category: "Messaging" },
  { name: "SMS", category: "Messaging" },
  { name: "Zapier", category: "Automation" },
  { name: "Webhooks", category: "Automation" },
  { name: "Jira", category: "Project Mgmt" },
  { name: "PagerDuty", category: "Incident" },
  { name: "GitHub", category: "Dev Tools" },
  { name: "Custom API", category: "Dev Tools" },
];

export function Integrations() {
  return (
    <section id="integrations" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-30" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-accent">Integrations</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Works with{" "}
            <span className="gradient-text">what you already use</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect your entire stack. No rip-and-replace required.
          </p>
        </motion.div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group glass-card rounded-xl p-4 text-center hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 mx-auto rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <span className="text-sm font-bold">{integration.name.charAt(0)}</span>
              </div>
              <p className="text-sm font-medium">{integration.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{integration.category}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground">
            And <span className="text-foreground font-medium">40+ more</span> integrations available
          </p>
        </motion.div>
      </div>
    </section>
  );
}
