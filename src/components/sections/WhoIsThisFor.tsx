"use client";

import { motion } from "framer-motion";
import { Store, Building, Factory, Calculator, Briefcase, ShoppingCart, Users } from "lucide-react";

const targetAudience = [
  {
    icon: Store,
    title: "Distributors",
    description: "Manage hundreds of retailers with automated payment reminders and WhatsApp communication.",
    highlight: "Improve collection rates by 30-40%",
  },
  {
    icon: Building,
    title: "Wholesalers",
    description: "Track outstanding payments, credit limits, and customer balances automatically.",
    highlight: "Reduce manual follow-ups",
  },
  {
    icon: Factory,
    title: "Manufacturers",
    description: "Integrate BUSY with websites, apps, and logistics for complete business automation.",
    highlight: "End-to-end automation",
  },
  {
    icon: Calculator,
    title: "Accountants & CAs",
    description: "Provide clients with automated reporting, dashboards, and WhatsApp integration.",
    highlight: "Better client service",
  },
  {
    icon: Briefcase,
    title: "Sales Teams",
    description: "Mobile PWA dashboards, territory maps, and customer revisit tracking.",
    highlight: "Field sales productivity",
  },
  {
    icon: ShoppingCart,
    title: "eCommerce Businesses",
    description: "Connect BUSY to online stores with APIs and real-time data sync.",
    highlight: "Multi-channel integration",
  },
];

export function WhoIsThisFor() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Target Audience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Built for <span className="gradient-text">BUSY Software Users</span> in India
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our solutions are designed for businesses of all sizes using BUSY Accounting Software.
            From MSMEs to large enterprises, we help you automate and grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudience.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <span className="text-xs text-primary font-medium">{item.highlight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats or social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Trusted by <span className="text-foreground font-semibold">100+ BUSY users</span> across India for payment collection, WhatsApp automation, and reporting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
