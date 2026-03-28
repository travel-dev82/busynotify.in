"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Code, 
  Database, 
  Users, 
  FileText, 
  BookOpen,
  Zap,
  Settings,
  CheckCircle2,
  Clock,
  Shield,
  Layers,
  ChevronRight,
  Building2,
  Terminal,
  FileCode,
  Puzzle,
  Cog,
  CreditCard,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

const freeEndpoints = [
  {
    icon: Users,
    title: "Customer Information API",
    description: "Access complete customer data including name, contact details, addresses, GST numbers, credit limits, and account balances. Perfect for CRM integrations.",
    endpoint: "/api/v1/customers",
    keywords: "customer API, party data, customer master",
  },
  {
    icon: FileText,
    title: "Bill-by-Bill Information API",
    description: "Retrieve detailed invoice data with item-wise breakup, quantities, rates, taxes, and payment status. Essential for order management and billing systems.",
    endpoint: "/api/v1/bills",
    keywords: "invoice API, bill data, sales invoice endpoint",
  },
  {
    icon: Database,
    title: "Product Information API",
    description: "Get complete product catalog including SKUs, descriptions, units, prices, HSN codes, and current stock levels. Ideal for e-commerce and inventory systems.",
    endpoint: "/api/v1/products",
    keywords: "product API, item master, inventory data",
  },
  {
    icon: BookOpen,
    title: "Ledger Data API",
    description: "Access ledger statements with transaction details, balances, and account summaries. Critical for financial reporting and reconciliation tools.",
    endpoint: "/api/v1/ledgers",
    keywords: "ledger API, account statement, financial data",
  },
];

const customQueryFeatures = [
  {
    icon: Cog,
    title: "Query Specification System",
    description: "Use our intuitive query builder to specify exactly what data you need. Select tables, fields, filters, and relationships visually.",
  },
  {
    icon: FileCode,
    title: "SQL-Based Queries",
    description: "For advanced users, write SQL-like queries directly. Full access to Busy Software data structure for complex requirements.",
  },
  {
    icon: Puzzle,
    title: "Integration Support",
    description: "Our team helps integrate custom APIs with your existing systems - websites, apps, or third-party software.",
  },
  {
    icon: Shield,
    title: "Secure Access",
    description: "All API calls are authenticated and encrypted. Role-based access control ensures data security.",
  },
];

const useCases = [
  {
    title: "E-commerce Integration",
    description: "Sync product catalog, inventory, and orders between Busy Software and your online store.",
    icon: Terminal,
  },
  {
    title: "Mobile App Backend",
    description: "Power your customer-facing mobile app with real-time data from Busy Accounting Software.",
    icon: Zap,
  },
  {
    title: "Custom Dashboards",
    description: "Build bespoke dashboards and reports with live data feeds from your ERP.",
    icon: Database,
  },
  {
    title: "Third-Party Integrations",
    description: "Connect Busy with CRM, POS, or other business systems seamlessly.",
    icon: Layers,
  },
];

const pricingDetails = [
  {
    category: "Module Access",
    icon: Database,
    included: true,
    items: [
      "Customer Information API",
      "Bill-by-Bill Information API",
      "Product Information API",
      "Ledger Data API",
      "API Authentication & Security",
      "Documentation & Examples",
    ],
  },
  {
    category: "Custom Queries",
    icon: Code,
    included: false,
    items: [
      "Billed per query",
      "Based on complexity",
      "Development time charges",
      "Testing & validation",
      "Documentation included",
      "Ongoing support available",
    ],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Real-time Data",
    description: "APIs fetch live data from Busy Software. No stale data, no manual exports.",
  },
  {
    icon: Code,
    title: "RESTful Design",
    description: "Standard REST API architecture. Easy integration with any programming language or platform.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Token-based authentication, HTTPS encryption, and rate limiting for production use.",
  },
  {
    icon: Layers,
    title: "Scalable",
    description: "Built to handle enterprise workloads. Scale your integrations as your business grows.",
  },
];

const faqs = [
  {
    question: "What are Custom APIs for Busy Accounting Software?",
    answer: "Custom APIs are RESTful endpoints that allow you to programmatically access data from your Busy Accounting Software. You can integrate this data with websites, mobile apps, or other business systems for seamless automation.",
  },
  {
    question: "Which APIs are included for free?",
    answer: "The module includes four essential APIs at no additional cost: Customer Information API, Bill-by-Bill Information API, Product Information API, and Ledger Data API. These cover the most common integration needs.",
  },
  {
    question: "What if I need data not covered by the free APIs?",
    answer: "You can request custom queries through our query specification system. Each custom query is developed and billed separately based on complexity. Our team works with you to understand requirements and deliver the exact data you need.",
  },
  {
    question: "How much do custom queries cost?",
    answer: "Custom queries are priced based on complexity and development time. Simple queries cost less than complex ones involving multiple tables or transformations. We provide a quote before development begins.",
  },
  {
    question: "Is the module cost separate from custom query charges?",
    answer: "Yes. The base module gives you access to the four free APIs. Custom queries are billed separately as one-time development charges. You only pay for what you need beyond the included endpoints.",
  },
  {
    question: "What authentication is used?",
    answer: "All API calls require token-based authentication. You receive secure API keys that you include in request headers. Tokens can be rotated and access can be restricted by IP or role.",
  },
  {
    question: "Can I use these APIs for my website or app?",
    answer: "Absolutely. The APIs are designed for integration with websites, mobile apps, desktop applications, and third-party services. REST architecture makes them compatible with any platform.",
  },
  {
    question: "Is there API documentation available?",
    answer: "Yes, comprehensive documentation is provided including endpoint descriptions, request/response formats, authentication guides, code examples in multiple languages, and troubleshooting tips.",
  },
];

const codeExample = `// Example: Fetch Customer Data
const response = await fetch(
  'https://api.busynotify.in/v1/customers',
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    }
  }
);

const customers = await response.json();
// Returns: [{ id, name, phone, email, balance, ... }]`;

export function CustomAPIsContent() {
  return (
    <div className="flex-1 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb for SEO */}
              <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2">
                  <li><Link href="/" className="hover:text-primary">Home</Link></li>
                  <li><ChevronRight className="w-4 h-4" /></li>
                  <li><Link href="/solutions" className="hover:text-primary">Solutions</Link></li>
                  <li><ChevronRight className="w-4 h-4" /></li>
                  <li className="text-foreground">Custom APIs</li>
                </ol>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="gradient-text">Custom APIs</span>{" "}
                for Busy Accounting Software
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Access your <strong>Busy ERP data programmatically</strong>. Free endpoints for customers, 
                bills, products, and ledgers. Custom query development for specific business needs.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="glow-teal group" asChild>
                  <Link href="/pricing">
                    Start Free Demo
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#endpoints">View Free APIs</Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>4 Free Endpoints</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>RESTful Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Custom Query Support</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual - Code Example */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Terminal className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">API Request</p>
                      <p className="text-xs text-muted-foreground">REST Endpoint</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs text-green-400">200 OK</span>
                  </div>
                </div>
                
                {/* Code preview */}
                <div className="bg-black/40 rounded-xl p-4 overflow-x-auto">
                  <pre className="text-xs sm:text-sm font-mono text-green-400 whitespace-pre-wrap">
                    <code>{codeExample}</code>
                  </pre>
                </div>
                
                {/* Response preview */}
                <div className="bg-white/5 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Response Time: 45ms</span>
                  </div>
                  <div className="text-xs font-mono text-muted-foreground">
                    {`[{"id": 1, "name": "Sharma Traders", "balance": 45000}, ...]`}
                  </div>
                </div>
              </div>
              
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-card rounded-lg px-3 py-2 shadow-xl hidden lg:block"
              >
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">REST API</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Free vs Custom Section */}
      <section className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Free APIs vs <span className="gradient-text">Custom Queries</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The module includes essential APIs at no extra cost. Custom queries are billed separately.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Free APIs Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8 border-green-500/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Free APIs</h3>
                  <p className="text-sm text-muted-foreground">Included with module</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {freeEndpoints.map((endpoint, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                    <endpoint.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{endpoint.title}</p>
                      <p className="text-xs text-muted-foreground font-mono">{endpoint.endpoint}</p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 ml-auto" />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-sm text-green-400 font-medium text-center">
                  ✓ No additional cost beyond module fee
                </p>
              </div>
            </motion.div>

            {/* Custom Queries Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8 border-primary/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Custom Queries</h3>
                  <p className="text-sm text-muted-foreground">Billed separately</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Need data beyond the free endpoints? Our query system lets you specify exactly what you need:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Cog className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Specify tables, fields, and filters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileCode className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Complex joins and calculations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Validated and optimized</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Delivered as REST endpoints</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                <p className="text-sm text-primary font-medium text-center">
                  Priced per query based on complexity
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Free Endpoints Detail Section */}
      <section id="endpoints" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="gradient-text">Free API Endpoints</span> Included
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Four essential APIs come standard with your module subscription
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {freeEndpoints.map((endpoint, index) => (
              <motion.div
                key={endpoint.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 group hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors">
                    <endpoint.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{endpoint.title}</h3>
                    <p className="text-xs font-mono text-primary mb-3 bg-primary/10 px-2 py-1 rounded inline-block">
                      {endpoint.endpoint}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {endpoint.description}
                    </p>
                  </div>
                </div>
                <meta itemProp="keywords" content={endpoint.keywords} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Query Features Section */}
      <section className="py-20 border-y border-border bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Need More? <span className="gradient-text">Custom Query System</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Get exactly the data you need with our flexible query specification system
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customQueryFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Pricing Clarification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 glass-card rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Pricing Clarification</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {pricingDetails.map((section, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <section.icon className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">{section.category}</h4>
                    {section.included ? (
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Included</span>
                    ) : (
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Separate</span>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              What Can You Build with <span className="gradient-text">Custom APIs</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Power any integration that needs Busy Accounting Software data
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 flex items-start gap-4"
              >
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why Choose <span className="gradient-text">BusyNotify APIs</span>?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for developers, designed for businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Frequently Asked Questions about <span className="gradient-text">Custom APIs</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about API access for Busy Accounting Software
            </p>
          </motion.div>

          <div className="space-y-4" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card rounded-xl p-6"
                itemProp="mainEntity"
                itemScope
                itemType="https://schema.org/Question"
              >
                <h3 className="font-semibold text-lg mb-3" itemProp="name">
                  {faq.question}
                </h3>
                <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                  <p className="text-muted-foreground leading-relaxed" itemProp="text">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 md:p-12 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
              <Code className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Build Custom Integrations?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Access your Busy Accounting Software data through powerful APIs. 
              Start with free endpoints, add custom queries as needed. Start your free 3-day demo today.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="glow-teal group" asChild>
                <Link href="/pricing">
                  Start Free Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/solutions">
                  <Building2 className="mr-2 w-4 h-4" />
                  View All Solutions
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Setup in 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
