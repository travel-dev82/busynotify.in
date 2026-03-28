"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Zap, Crown, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free Demo",
    description: "Try BusyNotify risk-free",
    price: "₹0",
    period: "for 3 days",
    icon: Zap,
    features: [
      "Full access to all features",
      "1,000 notifications",
      "3 integrations",
      "Email support",
      "Basic analytics",
      "No credit card required",
    ],
    cta: "Start Free Demo",
    popular: false,
    highlight: "Trial",
  },
  {
    name: "Basic",
    description: "Perfect for small teams and startups",
    price: "₹500",
    period: "/month",
    icon: Crown,
    features: [
      "10,000 notifications/month",
      "10 integrations",
      "Priority email support",
      "Advanced analytics",
      "Custom branding",
      "Team collaboration (up to 5 members)",
      "API access",
      "Webhook triggers",
    ],
    cta: "Get Started",
    popular: true,
    highlight: "Most Popular",
  },
  {
    name: "Standard",
    description: "For growing businesses with higher volume",
    price: "₹1,200",
    period: "/month",
    icon: Building2,
    features: [
      "50,000 notifications/month",
      "Unlimited integrations",
      "Priority support with 4hr SLA",
      "Real-time analytics dashboard",
      "Custom branding & white-label",
      "Unlimited team members",
      "Full API access",
      "Advanced webhook automation",
      "Audit logs",
      "Custom retention policies",
    ],
    cta: "Get Started",
    popular: false,
    highlight: "Best Value",
  },
];

const faqs = [
  {
    question: "What happens after my 3-day demo expires?",
    answer:
      "After your demo expires, you can choose to upgrade to a paid plan. Your data and configurations will be preserved for 7 days. You can also start a new demo with a different email if needed.",
  },
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. When upgrading, the new features are available immediately. When downgrading, changes take effect at the start of your next billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, UPI, and net banking. For Enterprise plans, we also support invoice-based payments with NET 30 terms.",
  },
  {
    question: "Is there a limit on team members?",
    answer:
      "The Basic plan includes up to 5 team members. The Standard plan includes unlimited team members. Need more on Basic? Contact us for custom add-ons.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied, contact our support team within 14 days of your purchase for a full refund.",
  },
  {
    question: "What counts as a notification?",
    answer:
      "Each alert sent through BusyNotify counts as one notification, regardless of the channel (Slack, email, SMS, etc.). Failed delivery attempts due to invalid endpoints don't count.",
  },
];

export function PricingContent() {
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
            <span className="label-accent">Pricing</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Simple, <span className="gradient-text">transparent pricing</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
              Start with a free 3-day demo. No credit card required. 
              Scale as you grow with plans designed for teams of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-16 -mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={cn(
                  "relative glass-card rounded-2xl p-8 flex flex-col",
                  plan.popular && "border-primary/50 ring-2 ring-primary/20"
                )}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full shadow-lg">
                      {plan.highlight}
                    </span>
                  </div>
                )}
                
                {!plan.popular && plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-medium bg-white/10 text-muted-foreground rounded-full">
                      {plan.highlight}
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={cn(
                      "p-2 rounded-lg",
                      plan.popular ? "bg-primary/20" : "bg-white/5"
                    )}>
                      <plan.icon className={cn(
                        "w-5 h-5",
                        plan.popular ? "text-primary" : "text-muted-foreground"
                      )} />
                    </div>
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={cn(
                        "w-4 h-4 mt-0.5 shrink-0",
                        plan.popular ? "text-primary" : "text-green-500"
                      )} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={cn("w-full", plan.popular && "glow-teal")}
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="/contact">{plan.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold">Need more?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Enterprise plans include unlimited notifications, dedicated support, 
              custom SLAs, on-premise deployment, and more. Let's talk about your needs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button size="lg" variant="ghost" asChild>
                <Link href="/solutions">View Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold">Frequently asked questions</h2>
            <p className="mt-2 text-muted-foreground">
              Everything you need to know about our pricing
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <h3 className="font-semibold text-foreground">{faq.question}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-12 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>14-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Secure payments</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
