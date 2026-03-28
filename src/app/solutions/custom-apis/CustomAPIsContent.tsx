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
  Sparkles,
  XCircle,
  Globe,
  Smartphone,
  ShoppingCart,
  BarChart3,
  Server,
  Plug,
  GitBranch
} from "lucide-react";
import { Button } from "@/components/ui/button";

const freeEndpoints = [
  {
    icon: Users,
    title: "Customer Data API (BUSY Customer Endpoint)",
    description: "Access complete customer data including name, contact details, addresses, GST numbers, credit limits, and account balances. Perfect for CRM integrations and customer portals.",
    endpoint: "/api/v1/customers",
    keywords: "BUSY customer API, customer data endpoint, party master API",
  },
  {
    icon: FileText,
    title: "Invoice Data API (BUSY Bill Export)",
    description: "Retrieve detailed invoice data with item-wise breakup, quantities, rates, taxes, and payment status. Essential for order management, billing systems, and eCommerce sync.",
    endpoint: "/api/v1/bills",
    keywords: "BUSY invoice API, bill data endpoint, sales invoice export",
  },
  {
    icon: Database,
    title: "Product Data API (BUSY Item Master)",
    description: "Get complete product catalog including SKUs, descriptions, units, prices, HSN codes, and current stock levels. Ideal for e-commerce platforms and inventory systems.",
    endpoint: "/api/v1/products",
    keywords: "BUSY product API, item master endpoint, inventory data API",
  },
  {
    icon: BookOpen,
    title: "Ledger Data API (BUSY Account Statement)",
    description: "Access ledger statements with transaction details, balances, and account summaries. Critical for financial reporting, reconciliation tools, and accounting integrations.",
    endpoint: "/api/v1/ledgers",
    keywords: "BUSY ledger API, account statement endpoint, financial data API",
  },
];

const customQueryFeatures = [
  {
    icon: Cog,
    title: "Query Specification System",
    description: "Use our intuitive query builder to specify exactly what data you need. Select tables, fields, filters, and relationships visually - no complex coding required.",
  },
  {
    icon: FileCode,
    title: "SQL-Based Custom Queries",
    description: "For advanced users, write SQL-like queries directly. Full access to BUSY data structure for complex requirements and custom data transformations.",
  },
  {
    icon: Puzzle,
    title: "Integration Support",
    description: "Our team helps integrate custom APIs with your existing systems - websites, mobile apps, CRM, eCommerce platforms, and third-party software.",
  },
  {
    icon: Shield,
    title: "Secure API Access",
    description: "All API calls are authenticated with secure tokens and encrypted via HTTPS. Role-based access control ensures your data remains protected.",
  },
];

const beforeAfterComparison = [
  {
    aspect: "Data Access",
    before: "Direct database access (risky)",
    after: "Secure REST API endpoints",
  },
  {
    aspect: "Query Building",
    before: "Complex SQL knowledge required",
    after: "Ready endpoints + visual builder",
  },
  {
    aspect: "Security",
    before: "Database exposure risk",
    after: "Token-based authentication",
  },
  {
    aspect: "Integration",
    before: "Complex custom development",
    after: "Plug-and-play REST APIs",
  },
  {
    aspect: "Maintenance",
    before: "Manual query updates",
    after: "Managed & updated by us",
  },
  {
    aspect: "Documentation",
    before: "None or outdated",
    after: "Comprehensive API docs",
  },
];

const useCases = [
  {
    title: "eCommerce Integration",
    description: "Sync product catalog, inventory, and orders between BUSY and your online store. Connect to Shopify, WooCommerce, Magento, or custom platforms.",
    icon: ShoppingCart,
  },
  {
    title: "Mobile App Backend",
    description: "Power your customer-facing mobile app with real-time data from BUSY Accounting Software. Customer portal, order tracking, and account statements.",
    icon: Smartphone,
  },
  {
    title: "CRM Integration",
    description: "Connect BUSY customer data to your CRM system. Sync contacts, outstanding balances, and transaction history automatically.",
    icon: Users,
  },
  {
    title: "Custom Dashboards",
    description: "Build bespoke dashboards and reports with live data feeds from your ERP. Real-time business intelligence without manual exports.",
    icon: BarChart3,
  },
  {
    title: "Website Integration",
    description: "Display live product information, stock levels, and customer-specific pricing on your business website.",
    icon: Globe,
  },
  {
    title: "Billing Systems",
    description: "Integrate BUSY invoice data with custom billing portals, payment gateways, and automated collection systems.",
    icon: CreditCard,
  },
];

const developerFeatures = [
  {
    icon: GitBranch,
    title: "RESTful Architecture",
    description: "Standard REST API design with predictable URLs and HTTP methods. Easy to integrate with any programming language.",
  },
  {
    icon: Code,
    title: "JSON Responses",
    description: "Clean, structured JSON responses that work seamlessly with JavaScript, Python, PHP, and all modern frameworks.",
  },
  {
    icon: Shield,
    title: "Token Authentication",
    description: "Secure Bearer token authentication. Generate, rotate, and revoke API keys from your dashboard.",
  },
  {
    icon: Zap,
    title: "Fast Response Times",
    description: "Optimized queries and caching ensure sub-100ms response times for most API calls.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Real-Time Data Access",
    description: "APIs fetch live data from BUSY Software. No stale data, no manual exports - always current information.",
  },
  {
    icon: Code,
    title: "RESTful Design",
    description: "Standard REST API architecture. Easy integration with any programming language or platform - JavaScript, Python, PHP, and more.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Token-based authentication, HTTPS encryption, and rate limiting for production-ready enterprise use.",
  },
  {
    icon: Layers,
    title: "Scalable Infrastructure",
    description: "Built to handle enterprise workloads. Scale your integrations as your business grows without infrastructure worries.",
  },
];

const faqs = [
  {
    question: "Does BUSY provide API for data access?",
    answer: "BUSY Accounting Software does not provide a public REST API out of the box. BusyNotify fills this gap by offering secure REST API endpoints that connect to your BUSY database. You get ready-to-use APIs for customers, invoices, products, and ledgers without any development work.",
  },
  {
    question: "How to integrate BUSY with website using API?",
    answer: "With BusyNotify's BUSY API integration, you can connect your website to BUSY data in three steps: 1) Subscribe to the API module, 2) Get your API keys and documentation, 3) Call our REST endpoints from your website code. Display product info, sync orders, show customer balances - all in real-time.",
  },
  {
    question: "Can I fetch BUSY data programmatically via API?",
    answer: "Yes! BusyNotify provides REST API endpoints for all major BUSY data. Fetch customers, invoices, products, stock levels, ledgers, and more using standard HTTP requests. Response is in JSON format, compatible with any programming language or platform.",
  },
  {
    question: "How to connect BUSY to mobile app?",
    answer: "Use BusyNotify's REST APIs as your mobile app backend. Call our endpoints from your iOS or Android app to display customer data, order history, product catalog, and account statements. Real-time data sync without building your own API layer.",
  },
  {
    question: "Is there REST API for BUSY Accounting Software?",
    answer: "BusyNotify provides REST APIs for BUSY Accounting Software. Our endpoints follow RESTful conventions with JSON responses. We offer free endpoints for customers, bills, products, and ledgers, plus custom query development for specific data needs.",
  },
  {
    question: "Can I integrate BUSY with Shopify or WooCommerce?",
    answer: "Absolutely. Our APIs enable BUSY to eCommerce integration. Sync products and stock from BUSY to your online store, push orders from WooCommerce/Shopify back to BUSY. Build custom integrations using our REST endpoints for seamless two-way sync.",
  },
  {
    question: "What is BUSY API integration cost?",
    answer: "The API module includes four free endpoints (customers, invoices, products, ledgers) with your subscription. Custom queries for additional data are billed separately based on complexity. Contact us for a quote specific to your integration needs.",
  },
  {
    question: "Which APIs are included for free?",
    answer: "The module includes four essential APIs at no additional cost: Customer Data API, Invoice Data API, Product Data API, and Ledger Data API. These cover the most common integration needs for websites, apps, and third-party systems.",
  },
  {
    question: "What if I need data not covered by free APIs?",
    answer: "Request custom queries through our query specification system. Define exactly what data you need - specific tables, fields, filters, and transformations. Each custom query is developed and billed based on complexity.",
  },
  {
    question: "How much do custom BUSY API queries cost?",
    answer: "Custom queries are priced based on complexity and development time. Simple queries cost less than complex ones involving multiple tables or calculations. We provide a detailed quote before development begins, so you know the cost upfront.",
  },
  {
    question: "What authentication does BUSY API use?",
    answer: "All API calls require Bearer token authentication. You receive secure API keys that you include in request headers. Tokens can be rotated for security, and access can be restricted by IP address or role.",
  },
  {
    question: "Can I use these APIs for commercial applications?",
    answer: "Yes! The APIs are designed for building commercial applications - customer portals, mobile apps, SaaS products, and integrations. Use our endpoints as the data layer for your products that need BUSY data access.",
  },
  {
    question: "Is there API documentation available?",
    answer: "Yes, comprehensive documentation is provided including: endpoint descriptions, request/response formats, authentication guides, code examples in JavaScript, Python, and PHP, plus troubleshooting tips and best practices.",
  },
  {
    question: "How fast is the API response time?",
    answer: "Most API calls respond in under 100ms. We use optimized queries, connection pooling, and intelligent caching to ensure fast response times even with large datasets. Suitable for real-time applications and high-traffic integrations.",
  },
  {
    question: "Can I test the API before subscribing?",
    answer: "Yes, we offer a free demo where you can test the API endpoints with sample data. Experience the response format, authentication flow, and data structure before committing to a subscription.",
  },
  {
    question: "What programming languages are supported?",
    answer: "Since we provide standard REST APIs with JSON responses, any programming language can be used: JavaScript/Node.js, Python, PHP, Java, C#, Ruby, Go, and more. We provide code examples in popular languages to get you started quickly.",
  },
];

const codeExample = `// Example: Fetch Customer Data from BUSY
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
                  <li className="text-foreground">BUSY API Integration</li>
                </ol>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="gradient-text">BUSY API Integration</span> for Developers (Access ERP Data via REST APIs)
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Access <strong>BUSY Accounting Software data via REST APIs</strong>. Build integrations for websites, 
                mobile apps, CRM, and eCommerce using real-time customer, invoice, product, and ledger data. 
                Free endpoints included.
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
                  <span>RESTful JSON APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Token Authentication</span>
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
                      <p className="font-medium">BUSY API Request</p>
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

      {/* Problem Awareness Section */}
      <section className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="text-red-400">❗ Challenges</span> Without BUSY API Integration
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Businesses using BUSY Software face these integration roadblocks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { problem: "No direct API from BUSY", impact: "Cannot connect apps or websites" },
              { problem: "Difficult to connect with websites", impact: "Manual data transfer only" },
              { problem: "Manual data export required", impact: "Hours wasted on repetitive tasks" },
              { problem: "No real-time data sync", impact: "Data always outdated" },
              { problem: "Complex database access", impact: "Requires technical expertise" },
              { problem: "No integration documentation", impact: "Development delays and errors" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-5 border-l-4 border-red-400/50"
              >
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{item.problem}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSY API Solution Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              🔌 <span className="gradient-text">BUSY API Integration</span> Made Simple
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready-to-use REST APIs for your BUSY ERP data - no development complexity
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Ready-to-Use Endpoints
                </h3>
                <p className="text-muted-foreground">
                  Four free API endpoints for customers, invoices, products, and ledgers. 
                  Start integrating immediately without any development work.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Real-Time Data Access
                </h3>
                <p className="text-muted-foreground">
                  APIs fetch live data from your BUSY database. Always current information 
                  for your website, app, or integration.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Secure & Authenticated
                </h3>
                <p className="text-muted-foreground">
                  Token-based authentication with HTTPS encryption. Your data stays 
                  protected while being accessible to authorized integrations.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4">API Dashboard Preview</h3>
              <div className="space-y-3">
                {[
                  { endpoint: "/v1/customers", status: "Active", calls: "12.4K" },
                  { endpoint: "/v1/bills", status: "Active", calls: "8.7K" },
                  { endpoint: "/v1/products", status: "Active", calls: "15.2K" },
                  { endpoint: "/v1/ledgers", status: "Active", calls: "6.1K" },
                ].map((api, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
                    <div>
                      <p className="font-mono text-sm text-primary">{api.endpoint}</p>
                      <p className="text-xs text-muted-foreground">{api.calls} calls/month</p>
                    </div>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                      {api.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before vs After Comparison */}
      <section className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              ⚖️ <span className="text-red-400">BUSY Database Access</span> vs <span className="gradient-text">BusyNotify APIs</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Why developers choose our API layer over direct database access
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full glass-card rounded-2xl overflow-hidden">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold">Aspect</th>
                  <th className="text-left p-4 font-semibold text-red-400">Direct DB Access</th>
                  <th className="text-left p-4 font-semibold text-green-400">BusyNotify APIs</th>
                </tr>
              </thead>
              <tbody>
                {beforeAfterComparison.map((row, index) => (
                  <tr key={index} className="border-b border-border/50 last:border-0">
                    <td className="p-4 font-medium">{row.aspect}</td>
                    <td className="p-4 text-muted-foreground">{row.before}</td>
                    <td className="p-4 text-green-400">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              <span className="gradient-text">Free BUSY API Endpoints</span> (Customer, Invoice, Product, Ledger)
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

      {/* Developer SEO Block */}
      <section className="py-20 border-y border-border bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              👨‍💻 <span className="gradient-text">BUSY API for Developers</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything developers need to integrate BUSY data into their applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {developerFeatures.map((feature, index) => (
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
        </div>
      </section>

      {/* Custom Query Features Section */}
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
              Need More? <span className="gradient-text">Custom BUSY API Development</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Get exactly the data you need with our advanced data integration system
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
        </div>
      </section>

      {/* Use Cases Section */}
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
              💼 What You Can Build with <span className="gradient-text">BUSY APIs</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Power any integration that needs BUSY Accounting Software data
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Choose <span className="gradient-text">BusyNotify BUSY APIs</span>?
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
      <section id="faq" className="py-20 border-y border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Frequently Asked Questions about <span className="gradient-text">BUSY API Integration</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about accessing BUSY data via REST APIs
            </p>
          </motion.div>

          <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2" itemScope itemType="https://schema.org/FAQPage">
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
              Ready to Integrate BUSY with Your Applications?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Access BUSY Accounting Software data through powerful REST APIs. 
              Start with free endpoints, add custom queries as needed. 
              Build websites, apps, and integrations with live ERP data.
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
