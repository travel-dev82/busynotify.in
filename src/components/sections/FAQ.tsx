"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is BusyNotify?",
    answer: "BusyNotify is an automation platform built specifically for Busy Accounting Software users in India. We provide WhatsApp integration, AI chatbot, payment reminders, reporting dashboards, and more — all connected to your Busy Software database.",
  },
  {
    question: "Which Busy Software versions are supported?",
    answer: "BusyNotify works with all major Busy Accounting Software versions including Busy 17, Busy 18, Busy 21, and the latest releases. We support both single-user and multi-user editions.",
  },
  {
    question: "How does the WhatsApp integration work?",
    answer: "When you create any voucher in Busy (invoice, receipt, order, etc.), BusyNotify automatically sends it to your customer's WhatsApp within seconds. You can customize messages, include PDFs, and track delivery status.",
  },
  {
    question: "What can the AI chatbot do?",
    answer: "Our chatbot connects to your Busy Software and answers customer queries 24/7 via WhatsApp or Telegram. Customers can check balances, download ledgers, get invoices, check order status, and more — without calling your office.",
  },
  {
    question: "Is my Busy Software data secure?",
    answer: "Absolutely. We use enterprise-grade encryption and never store your accounting data on external servers. The system only reads data on-demand with proper authentication. We comply with Indian data protection guidelines.",
  },
  {
    question: "How much does it cost?",
    answer: "Pricing starts at just ₹500/month for basic plans. We offer a free 3-day demo so you can test the service before committing. Plans scale based on features and query volume.",
  },
  {
    question: "How long does setup take?",
    answer: "Most businesses are up and running within 24 hours. Our team handles the complete integration with your Busy Software. You just need to share your Busy access details and we do the rest.",
  },
  {
    question: "Can I try before I buy?",
    answer: "Yes! We offer a free 3-day demo with no credit card required. You can test WhatsApp integration, chatbot, and other features with real data from your Busy Software.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-accent">FAQ</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know about BusyNotify
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
