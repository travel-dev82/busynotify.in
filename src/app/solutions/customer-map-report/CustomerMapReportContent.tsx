"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Map, 
  TrendingUp, 
  IndianRupee, 
  MapPin, 
  BarChart3,
  PieChart,
  CheckCircle2,
  Zap,
  Users,
  Clock,
  Building2,
  Globe,
  ChevronRight,
  LineChart,
  Target,
  Landmark
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Map,
    title: "All-India Customer Map",
    description: "See your complete customer base spread across India on a single interactive Google Map. Zoom into any state, district, or city to explore customer distribution.",
    keywords: "customer map India, geographic distribution, customer location",
  },
  {
    icon: Landmark,
    title: "State-wise Business Overview",
    description: "Instantly see which states generate the most business. Compare revenue, outstanding amounts, and customer count across all Indian states.",
    keywords: "state-wise sales, regional business report, state analytics",
  },
  {
    icon: MapPin,
    title: "District-level Insights",
    description: "Drill down to district level to see exactly how much business comes from each district. Identify high-potential areas for expansion.",
    keywords: "district-wise report, local business analytics, area breakdown",
  },
  {
    icon: IndianRupee,
    title: "Outstanding Payment Map",
    description: "Visualize outstanding payments across India. See which states and districts have the highest pending amounts. Prioritize collection efforts geographically.",
    keywords: "outstanding map, pending payments region, collection analytics",
  },
  {
    icon: TrendingUp,
    title: "Demand Trend Analysis",
    description: "Track which products sold more previously versus now. Identify shifting demand patterns across regions. Make informed stocking decisions.",
    keywords: "demand trends, product sales trend, market shift analysis",
  },
  {
    icon: BarChart3,
    title: "Area-wise Performance",
    description: "Compare business performance across different areas. See revenue trends, payment behavior, and growth rates for each region.",
    keywords: "area performance, regional comparison, territory analysis",
  },
  {
    icon: LineChart,
    title: "Historical Comparisons",
    description: "Compare current performance with previous months, quarters, or years. Understand seasonal patterns and long-term trends by region.",
    keywords: "historical trends, year-over-year comparison, seasonal analysis",
  },
  {
    icon: Target,
    title: "Growth Opportunities",
    description: "Identify underperforming regions with potential. Find districts where you have few customers but high average order values.",
    keywords: "growth opportunities, market potential, expansion planning",
  },
];

const mapFeatures = [
  {
    title: "Interactive Markers",
    description: "Click any customer marker to see complete details - name, contact, outstanding, last transaction, and more.",
    icon: MapPin,
  },
  {
    title: "Color-coded Insights",
    description: "Markers are color-coded by outstanding amount, revenue, or payment behavior. Spot patterns at a glance.",
    icon: PieChart,
  },
  {
    title: "Filter by Criteria",
    description: "Filter customers by outstanding range, state, district, last transaction date, or custom criteria.",
    icon: Target,
  },
  {
    title: "Export Reports",
    description: "Export area-wise reports to Excel or PDF. Share insights with your sales team or management.",
    icon: BarChart3,
  },
];

const benefits = [
  {
    icon: Globe,
    title: "Complete Visibility",
    description: "See your entire business on one map. No more guessing where your customers are concentrated.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Decisions",
    description: "Make expansion and collection decisions based on real data, not intuition.",
  },
  {
    icon: Clock,
    title: "Save Analysis Time",
    description: "What used to take hours in Excel now takes seconds. Instant visual insights.",
  },
  {
    icon: Zap,
    title: "Identify Opportunities",
    description: "Discover untapped markets and high-potential areas you never knew existed.",
  },
];

const useCases = [
  {
    title: "Sales Territory Planning",
    description: "Assign sales representatives based on customer density and business potential in each region.",
    icon: Users,
  },
  {
    title: "Collection Prioritization",
    description: "Focus collection efforts on regions with highest outstanding amounts.",
    icon: IndianRupee,
  },
  {
    title: "Market Expansion",
    description: "Identify states or districts where you can expand with minimal competition.",
    icon: TrendingUp,
  },
  {
    title: "Inventory Planning",
    description: "Stock products based on regional demand trends and historical patterns.",
    icon: BarChart3,
  },
];

const faqs = [
  {
    question: "What is Customer Map Report in BusyNotify?",
    answer: "Customer Map Report is a Google Maps-powered analytics dashboard that visualizes your customer data across India. You can see customer locations, state-wise and district-wise business performance, outstanding payments by region, and demand trends - all on an interactive map.",
  },
  {
    question: "How does the customer map work?",
    answer: "We integrate with your Busy Accounting Software and plot all your customers on a Google Map based on their addresses. Each marker shows customer details when clicked. You can filter, zoom, and analyze data by state, district, or custom criteria.",
  },
  {
    question: "What data can I see on the map?",
    answer: "For each customer, you can see their location, outstanding amount, total business value, last transaction date, payment behavior, and contact details. At an aggregate level, see state-wise revenue, district-wise outstanding, and regional trends.",
  },
  {
    question: "Can I track outstanding payments by region?",
    answer: "Yes! The map color-codes regions based on outstanding amounts. You can instantly see which states or districts have the highest pending payments and prioritize collections accordingly.",
  },
  {
    question: "Does it show product-wise demand trends?",
    answer: "Absolutely. You can analyze which products sold more in which regions, compare current demand with historical trends, and identify shifting market preferences across different areas.",
  },
  {
    question: "Is this useful for sales planning?",
    answer: "Very useful. Sales managers use this to assign territories, identify high-potential areas for expansion, plan travel routes, and set region-specific targets based on actual data.",
  },
  {
    question: "Does this integrate with Busy Accounting Software?",
    answer: "Yes, Customer Map Report pulls customer data, addresses, transactions, and outstanding amounts directly from your Busy Software. The integration is seamless and automatic.",
  },
  {
    question: "Can I export the reports?",
    answer: "Yes, you can export area-wise reports, customer lists, and analytics data to Excel or PDF formats. Share with your team or use for presentations and planning meetings.",
  },
];

export function CustomerMapReportContent() {
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
                  <li className="text-foreground">Customer Map Report</li>
                </ol>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="gradient-text">Customer Map Report</span>{" "}
                - Visual Analytics Dashboard
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                See your complete customer landscape on <strong>Google Maps</strong>. State-wise business analytics, 
                district-level insights, outstanding payment visualization, and demand trend analysis - all in one powerful dashboard.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="glow-teal group" asChild>
                  <Link href="/pricing">
                    Start Free Demo
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#features">Explore Features</Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Google Maps Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>All-India Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Busy Software Integration</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-6 space-y-4">
                {/* Map mockup */}
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <Map className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Customer Map Dashboard</p>
                      <p className="text-xs text-muted-foreground">Pan India View</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Total Customers</p>
                    <p className="text-xl font-bold text-primary">2,456</p>
                  </div>
                </div>
                
                {/* Simulated map with markers */}
                <div className="relative bg-gradient-to-br from-blue-900/20 to-green-900/20 rounded-xl p-8 min-h-[200px] flex items-center justify-center">
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    {/* India map outline simplified */}
                    <div className="absolute top-4 left-8 w-3 h-3 rounded-full bg-red-500 animate-pulse" title="Delhi" />
                    <div className="absolute top-8 right-12 w-4 h-4 rounded-full bg-yellow-500 animate-pulse" title="Maharashtra" />
                    <div className="absolute top-12 left-16 w-3 h-3 rounded-full bg-green-500 animate-pulse" title="Gujarat" />
                    <div className="absolute bottom-12 left-12 w-4 h-4 rounded-full bg-blue-500 animate-pulse" title="Karnataka" />
                    <div className="absolute bottom-8 right-8 w-3 h-3 rounded-full bg-purple-500 animate-pulse" title="Tamil Nadu" />
                    <div className="absolute top-16 left-4 w-3 h-3 rounded-full bg-orange-500 animate-pulse" title="Rajasthan" />
                    <div className="absolute bottom-16 left-20 w-3 h-3 rounded-full bg-teal-500 animate-pulse" title="Telangana" />
                  </div>
                  
                  <div className="text-center z-10">
                    <Globe className="w-12 h-12 mx-auto text-muted-foreground/30" />
                    <p className="text-sm text-muted-foreground mt-2">Interactive India Map</p>
                  </div>
                </div>
                
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground">Total Business</p>
                    <p className="text-lg font-bold text-green-400">₹4.2 Cr</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground">Outstanding</p>
                    <p className="text-lg font-bold text-red-400">₹85 L</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground">States</p>
                    <p className="text-lg font-bold text-primary">18</p>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass-card rounded-lg px-3 py-2 shadow-xl hidden lg:block"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">+15% Growth</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Flying Blind Without Geographic Insights?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Most businesses struggle to answer these critical questions:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Which state generates the most revenue?"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Where are our highest outstanding payments concentrated?"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Which districts should we expand to next?"
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    "Are product preferences changing by region?"
                  </li>
                </ul>
                <p className="mt-4">
                  Without visual analytics, you're making business decisions based on gut feeling instead of data.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                See Your Business Like Never Before
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Customer Map Report transforms your data into actionable insights:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Complete customer visibility on one map</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>State and district-wise business breakdown</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Outstanding payments visualized geographically</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>Demand trends and market shift analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Powerful <span className="gradient-text">Map Analytics</span> Features
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to understand your customer geography and make smarter decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 group hover:border-primary/30 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <meta itemProp="keywords" content={feature.keywords} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Features Section */}
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
              Interactive <span className="gradient-text">Map Features</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Powered by Google Maps for the best mapping experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mapFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
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
              How Businesses Use <span className="gradient-text">Customer Map Report</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical applications that drive real business value
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
              Why Businesses Choose <span className="gradient-text">Customer Map Report</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform complex data into clear, actionable visual insights
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
              Frequently Asked Questions about <span className="gradient-text">Customer Map Report</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about geographic business analytics
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
              <Map className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Visualize Your Business Data?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              See your customers, outstanding payments, and demand trends on an interactive map. 
              Make data-driven decisions with geographic insights. Start your free 3-day demo today.
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
