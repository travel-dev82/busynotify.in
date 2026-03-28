"use client";

import { motion } from "framer-motion";
import { MessageCircle, Send, FileSpreadsheet, Map, Bot, Database, Globe, Smartphone } from "lucide-react";

const integrations = [
  { name: "WhatsApp Business", icon: MessageCircle, color: "text-green-400" },
  { name: "Telegram", icon: Send, color: "text-blue-400" },
  { name: "Google Sheets", icon: FileSpreadsheet, color: "text-green-500" },
  { name: "Google Maps", icon: Map, color: "text-red-400" },
  { name: "Google Drive", icon: Database, color: "text-yellow-400" },
  { name: "REST APIs", icon: Bot, color: "text-purple-400" },
  { name: "Web Portal", icon: Globe, color: "text-primary" },
  { name: "PWA App", icon: Smartphone, color: "text-orange-400" },
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
            Connects with{" "}
            <span className="gradient-text">tools you already use</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Built-in integrations with popular platforms. Your customers get information where they prefer.
          </p>
        </motion.div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
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
                <integration.icon className={`w-5 h-5 ${integration.color}`} />
              </div>
              <p className="text-xs font-medium">{integration.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3">
            <Database className="w-5 h-5 text-primary" />
            <span className="text-sm">
              <span className="font-semibold">Core Integration:</span> Busy Accounting Software (17, 18, 21+)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
