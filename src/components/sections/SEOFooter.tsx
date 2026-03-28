"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const seoLinks = [
  { title: "BUSY WhatsApp Integration", href: "/solutions/whatsapp-integration", description: "Auto-send invoices via WhatsApp" },
  { title: "BUSY Payment Reminder System", href: "/solutions/payment-reminder-system", description: "Automated payment reminders" },
  { title: "BUSY Reporting Dashboard", href: "/solutions/reporting-dashboard", description: "15+ reports on mobile PWA" },
  { title: "BUSY API Integration", href: "/solutions/custom-apis", description: "REST APIs for BUSY data" },
  { title: "BUSY Google Sheets Sync", href: "/solutions/google-sheet-automation", description: "Auto-sync BUSY to Sheets" },
  { title: "BUSY Chatbot", href: "/solutions/busy-accounting-software-chatbot", description: "AI chatbot for balance inquiry" },
  { title: "BUSY Credit Control", href: "/solutions/credit-line-sender", description: "Credit limit monitoring" },
  { title: "BUSY Follow-up CRM", href: "/solutions/due-follow-up-system", description: "Telecaller follow-up system" },
  { title: "BUSY Customer Map", href: "/solutions/customer-map-report", description: "Sales territory analytics" },
  { title: "BUSY LR Tracking", href: "/solutions/transportation-slip-management", description: "Transport challan management" },
];

export function SEOFooter() {
  return (
    <section className="relative py-16 border-t border-border bg-card/30">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-bold mb-2">Popular BUSY Software Automation Tools</h3>
          <p className="text-sm text-muted-foreground">Quick links to all our BUSY integration solutions</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {seoLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={link.href}
                className="group flex flex-col p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  {link.title}
                </span>
                <span className="text-xs text-muted-foreground mt-1">
                  {link.description}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional SEO Keywords */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            <strong>Keywords:</strong> BUSY Software Automation • BUSY WhatsApp Integration • BUSY Payment Reminder • BUSY API • BUSY Reporting Dashboard • BUSY Google Sheets • BUSY Chatbot • Indian Business Automation • MSME Accounting Software • GST Invoice Automation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
