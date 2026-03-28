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
    question: "How does BusyNotify differ from other notification services?",
    answer: "Unlike traditional notification services that simply relay messages, BusyNotify uses AI to intelligently route, prioritize, and aggregate your alerts. We analyze patterns in your data to surface what matters and suppress what doesn't — reducing alert fatigue by up to 80%.",
  },
  {
    question: "What integrations do you support?",
    answer: "We support 40+ integrations including Slack, Microsoft Teams, Discord, WhatsApp, Email, SMS, PagerDuty, Jira, GitHub, Zapier, and custom webhooks. Our API-first approach means you can connect virtually any service.",
  },
  {
    question: "Is there a free tier?",
    answer: "Yes! Our free tier includes 1,000 notifications per month, 3 integrations, and basic analytics. It's perfect for small projects, testing, or getting started with intelligent notifications.",
  },
  {
    question: "How long does setup take?",
    answer: "Most teams are up and running in under 5 minutes. Our no-code integrations and visual rule builder make it easy to configure without engineering resources. For custom setups, we offer dedicated onboarding support.",
  },
  {
    question: "What's your pricing model?",
    answer: "We price based on notification volume, not per seat. This means your entire team can use BusyNotify without worrying about user counts. Plans start at ₹0/month and scale based on your needs.",
  },
  {
    question: "Do you offer on-premise deployment?",
    answer: "Yes, our Enterprise plan includes on-premise deployment options for organizations with strict data residency or compliance requirements. Contact our sales team to learn more.",
  },
  {
    question: "How reliable is the service?",
    answer: "We maintain 99.9%+ uptime with redundant infrastructure across multiple regions. Our average delivery time is under 50ms, and we offer SLA guarantees on our paid plans.",
  },
  {
    question: "Can I try before I buy?",
    answer: "Absolutely. All paid plans include a 14-day free trial with no credit card required. You can also start with our free tier and upgrade anytime.",
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
