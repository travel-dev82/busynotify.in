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
  Landmark,
  XCircle,
  Navigation,
  Building,
  Factory,
  Briefcase,
  UserCheck,
  Compass,
  Route
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Map,
    title: "Pan-India Customer Distribution Map (Location Analytics)",
    description: "See your complete customer base spread across India on a single interactive Google Map. Zoom into any state, district, or city to explore customer distribution and density.",
    keywords: "customer map India, geographic distribution, customer location tracking",
  },
  {
    icon: Landmark,
    title: "State-wise Sales & Business Overview",
    description: "Instantly see which states generate the most revenue. Compare sales, outstanding amounts, and customer count across all Indian states for territory planning.",
    keywords: "state-wise sales, regional business report, state analytics",
  },
  {
    icon: MapPin,
    title: "District-level Sales Analysis & Insights",
    description: "Drill down to district level to see exactly how much business comes from each district. Identify high-potential areas for sales expansion and territory optimization.",
    keywords: "district-wise report, local business analytics, area breakdown",
  },
  {
    icon: IndianRupee,
    title: "Outstanding Payment by Region (Geographic Collection Insights)",
    description: "Visualize outstanding payments across India on map. See which states and districts have the highest pending amounts. Prioritize collection efforts geographically.",
    keywords: "outstanding by region, pending payments region, collection analytics",
  },
  {
    icon: TrendingUp,
    title: "Product Demand Analysis by Region (Sales Trends by Location)",
    description: "Track which products sold more in which regions. Identify shifting demand patterns across geographic areas. Make informed stocking and distribution decisions.",
    keywords: "demand trends, product sales trend, market shift analysis",
  },
  {
    icon: BarChart3,
    title: "Area-wise Sales Performance Dashboard",
    description: "Compare business performance across different territories. See revenue trends, payment behavior, and growth rates for each region with visual analytics.",
    keywords: "area performance, regional comparison, territory analysis",
  },
  {
    icon: LineChart,
    title: "Historical Sales Comparisons by Territory",
    description: "Compare current performance with previous months, quarters, or years. Understand seasonal patterns and long-term trends by region for better planning.",
    keywords: "historical trends, year-over-year comparison, seasonal analysis",
  },
  {
    icon: Target,
    title: "Growth Opportunities & Market Potential",
    description: "Identify underperforming regions with high potential. Find districts where you have few customers but high average order values for expansion planning.",
    keywords: "growth opportunities, market potential, expansion planning",
  },
];

const mapFeatures = [
  {
    title: "Interactive Customer Markers",
    description: "Click any customer marker to see complete details - name, contact, outstanding, last transaction, and sales history.",
    icon: MapPin,
  },
  {
    title: "Color-coded Sales Insights",
    description: "Markers are color-coded by outstanding amount, revenue, or payment behavior. Spot geographic patterns at a glance.",
    icon: PieChart,
  },
  {
    title: "Filter by Territory Criteria",
    description: "Filter customers by outstanding range, state, district, last transaction date, or custom criteria for targeted analysis.",
    icon: Target,
  },
  {
    title: "Export Territory Reports",
    description: "Export area-wise reports to Excel or PDF. Share geographic insights with your sales team or management.",
    icon: BarChart3,
  },
];

const benefits = [
  {
    icon: Globe,
    title: "Complete Geographic Visibility",
    description: "See your entire business on one map. No more guessing where your customers and sales are concentrated.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Territory Decisions",
    description: "Make expansion, collection, and territory decisions based on real data, not intuition.",
  },
  {
    icon: Clock,
    title: "Instant Analysis",
    description: "What used to take hours in Excel now takes seconds. Instant visual geographic insights.",
  },
  {
    icon: Zap,
    title: "Identify Untapped Markets",
    description: "Discover new territories and high-potential areas you never knew existed.",
  },
];

const useCases = [
  {
    title: "Sales Territory Planning",
    description: "Assign sales representatives based on customer density and business potential in each region. Optimize territory boundaries.",
    icon: Users,
  },
  {
    title: "Collection Prioritization by Region",
    description: "Focus collection efforts on regions with highest outstanding amounts. Plan collection routes geographically.",
    icon: IndianRupee,
  },
  {
    title: "Market Expansion Planning",
    description: "Identify states or districts where you can expand with minimal competition. Find white space opportunities.",
    icon: TrendingUp,
  },
  {
    title: "Inventory & Stock Planning",
    description: "Stock products based on regional demand trends and historical patterns. Optimize distribution network.",
    icon: BarChart3,
  },
];

const beforeAfterComparison = [
  {
    aspect: "Business Analysis",
    before: "Excel reports, manual analysis",
    after: "Visual dashboard, instant insights",
  },
  {
    aspect: "Territory Planning",
    before: "Guess-based expansion",
    after: "Data-driven territory decisions",
  },
  {
    aspect: "Regional Visibility",
    before: "No regional clarity",
    after: "State/district level insights",
  },
  {
    aspect: "Outstanding Tracking",
    before: "Spreadsheet lists only",
    after: "Geographic collection map",
  },
  {
    aspect: "Market Opportunities",
    before: "Unknown untapped areas",
    after: "Visible growth opportunities",
  },
  {
    aspect: "Sales Team Planning",
    before: "Arbitrary territory assignment",
    after: "Density-based territory allocation",
  },
];

const whoShouldUse = [
  { role: "Sales Managers", desc: "Plan territories and track team performance by region", icon: Users },
  { role: "Distributors", desc: "Understand customer spread and plan delivery routes", icon: Building },
  { role: "Territory Managers", desc: "Monitor area performance and identify gaps", icon: MapPin },
  { role: "FMCG Companies", desc: "Track distribution penetration across regions", icon: BarChart3 },
  { role: "Manufacturers", desc: "Identify dealer density and market coverage", icon: Factory },
  { role: "Business Owners", desc: "Make informed expansion and investment decisions", icon: Briefcase },
  { role: "MSMEs", desc: "Understand customer geography without expensive BI tools", icon: Building2 },
  { role: "Sales Teams", desc: "Plan routes and prioritize visits by potential", icon: UserCheck },
];

const faqs = [
  {
    question: "What is sales territory management for BUSY Software?",
    answer: "Sales territory management for BUSY is a Google Maps-powered analytics dashboard that visualizes your customer data across India. You can see customer locations, state-wise and district-wise sales performance, outstanding payments by region, and demand trends - all on an interactive map integrated with BUSY Accounting Software.",
  },
  {
    question: "How to analyze sales by location using BUSY data?",
    answer: "With BusyNotify's Sales Territory Dashboard, your BUSY customer data is automatically plotted on Google Maps. You can see state-wise revenue, district-wise sales, customer density, and outstanding by region. Filter by any criteria, zoom into areas, and export reports for detailed analysis.",
  },
  {
    question: "Can I see region-wise sales in BUSY Accounting Software?",
    answer: "While BUSY provides basic reports, BusyNotify's Sales Territory Dashboard adds powerful geographic visualization. See all your BUSY customers on a map, analyze state-wise and district-wise business performance, and identify regional trends that spreadsheets can't reveal.",
  },
  {
    question: "How to track customers on map for sales planning?",
    answer: "Our dashboard plots all your BUSY customers on Google Maps based on their addresses. Click any marker to see customer details. Filter by outstanding amount, last transaction date, or region. Use this for route planning, territory assignment, and identifying coverage gaps.",
  },
  {
    question: "How to plan sales territories using customer data?",
    answer: "The Sales Territory Dashboard shows customer density, revenue potential, and outstanding by region. Use this to assign territories based on actual business potential, balance workload across sales reps, identify under-served areas, and plan expansion into new markets.",
  },
  {
    question: "Can I see outstanding payments by state or district?",
    answer: "Absolutely! The dashboard visualizes outstanding payments geographically. Color-coded markers show which states and districts have the highest pending amounts. Filter by outstanding range to prioritize collection efforts by region.",
  },
  {
    question: "What is customer location tracking for businesses?",
    answer: "Customer location tracking visualizes where your customers are geographically distributed. See customer density, identify clusters, find coverage gaps, and understand which areas generate the most business - essential for territory planning and market expansion.",
  },
  {
    question: "Does this help with sales territory mapping?",
    answer: "Yes, it's specifically designed for sales territory mapping. See customer distribution, revenue by region, and outstanding concentration. Use this data to define territories, assign sales reps, and set region-specific targets based on actual potential.",
  },
  {
    question: "What data can I see on the sales map?",
    answer: "For each customer, you can see location, outstanding amount, total business value, last transaction date, payment behavior, and contact details. At aggregate level, see state-wise revenue, district-wise outstanding, regional trends, and growth opportunities.",
  },
  {
    question: "Is this useful for geographic sales analysis?",
    answer: "Very useful. The dashboard transforms your BUSY data into geographic insights - which states perform best, where outstanding is concentrated, which districts have growth potential, and how demand varies by region. Essential for regional sales strategy.",
  },
  {
    question: "Does this integrate with BUSY Accounting Software?",
    answer: "Yes, the Sales Territory Dashboard pulls customer data, addresses, transactions, and outstanding amounts directly from your BUSY Software. The integration is seamless and automatic - no manual data entry required.",
  },
  {
    question: "Can I export territory reports for my sales team?",
    answer: "Yes, you can export area-wise reports, customer lists, and geographic analytics data to Excel or PDF formats. Share with your sales team for route planning, territory management, and regional strategy meetings.",
  },
  {
    question: "How does demand trend analysis by region work?",
    answer: "Track which products sold more in which regions over time. Compare current demand with historical trends. Identify shifting market preferences across different geographic areas. Make informed stocking and distribution decisions.",
  },
  {
    question: "Can this help with sales route planning?",
    answer: "Yes. See customer locations on map, filter by outstanding or business value, and plan optimal visit routes. Sales reps can see which customers to visit in an area and prioritize by payment status or business potential.",
  },
  {
    question: "What industries benefit from sales territory analytics?",
    answer: "Trading companies, distributors, manufacturers, FMCG companies, pharma distributors, textile businesses, and any company with geographically dispersed customers benefit from territory analytics and location-based business insights.",
  },
  {
    question: "How quickly can I see geographic insights?",
    answer: "Instantly. Once your BUSY data is synced, all geographic visualizations are available immediately. Filter, zoom, and analyze in seconds - no waiting for reports to generate or data to process.",
  },
  {
    question: "Is district-wise sales analysis available?",
    answer: "Yes! Drill down from India view to state to district level. See exactly how much business comes from each district, compare performance, identify high-potential districts, and plan micro-market strategies.",
  },
  {
    question: "Can I identify new market opportunities?",
    answer: "Absolutely. The Growth Opportunities feature identifies underperforming regions with potential - districts where you have few customers but high average order values, or states with low competition but good market size.",
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
                  <li className="text-foreground">Sales Territory Dashboard</li>
                </ol>
              </nav>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="gradient-text">BUSY Sales Territory & Customer Map</span>{" "}
                Dashboard (Location-Based Analytics)
              </h1>
              
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                Visualize your <strong>customers, sales, and outstanding payments by location</strong> using a 
                Google Maps-based dashboard integrated with BUSY Accounting Software. Analyze state-wise, 
                district-wise, and area-wise business performance in real-time for smarter decisions.
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
                  <span>Territory Planning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>Google Maps Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>BUSY Integration</span>
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
                      <p className="font-medium">Sales Territory Dashboard</p>
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
                    <p className="text-xs text-muted-foreground">Total Sales</p>
                    <p className="text-lg font-bold text-green-400">₹4.2 Cr</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground">Outstanding</p>
                    <p className="text-lg font-bold text-red-400">₹85 L</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-xs text-muted-foreground">Territories</p>
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
              <span className="text-red-400">❗ Problems</span> Without Location-Based Insights
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Most businesses lack geographic visibility into their data
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { problem: "Don't know which region performs best", impact: "Can't optimize sales efforts" },
              { problem: "Poor territory planning", impact: "Uneven workload and missed opportunities" },
              { problem: "Uneven sales coverage", impact: "Some areas over-served, others ignored" },
              { problem: "No visibility of outstanding by region", impact: "Collection efforts not prioritized" },
              { problem: "Expansion decisions based on guess", impact: "Risky investments without data" },
              { problem: "Can't identify untapped markets", impact: "Missing growth opportunities" },
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

      {/* Before vs After Comparison */}
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
              <span className="text-red-400">Without Map Dashboard</span> vs <span className="gradient-text">With BusyNotify</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Transform how you understand and plan your business geography
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full glass-card rounded-2xl overflow-hidden">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold">Aspect</th>
                  <th className="text-left p-4 font-semibold text-red-400">Without Map Dashboard</th>
                  <th className="text-left p-4 font-semibold text-green-400">With BusyNotify</th>
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

      {/* Customer Location & Sales Territory Analysis */}
      <section className="py-20 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                📍 Customer Location & <span className="gradient-text">Sales Territory Analysis</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Understand where your customers are, where your sales come from, and which areas 
                are strong or weak. Essential insights for territory planning and market expansion.
              </p>
              <ul className="space-y-3">
                {[
                  "See customer density across India",
                  "Identify high-performing regions",
                  "Find under-served territories",
                  "Discover coverage gaps",
                  "Plan market expansion strategically",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-primary" />
                Territory Performance View
              </h3>
              <div className="space-y-3">
                {[
                  { state: "Maharashtra", customers: 456, revenue: "₹1.2 Cr", growth: "+18%" },
                  { state: "Gujarat", customers: 312, revenue: "₹85 L", growth: "+12%" },
                  { state: "Karnataka", customers: 289, revenue: "₹72 L", growth: "+8%" },
                  { state: "Delhi NCR", customers: 245, revenue: "₹65 L", growth: "+15%" },
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.state}</p>
                      <p className="text-xs text-muted-foreground">{item.customers} customers</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{item.revenue}</p>
                      <p className="text-xs text-green-400">{item.growth}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Region-wise Sales & Outstanding Dashboard */}
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
              💰 Region-wise Sales & <span className="gradient-text">Outstanding Dashboard</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              See which regions generate revenue and where your pending payments are concentrated
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Top Revenue Regions
              </h3>
              <div className="space-y-3">
                {[
                  { region: "Maharashtra", value: "₹1.2 Cr", percent: 28 },
                  { region: "Gujarat", value: "₹85 L", percent: 20 },
                  { region: "Karnataka", value: "₹72 L", percent: 17 },
                  { region: "Delhi NCR", value: "₹65 L", percent: 15 },
                ].map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{item.region}</span>
                      <span className="font-medium">{item.value}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: `${item.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <IndianRupee className="w-5 h-5 text-red-400" />
                Highest Outstanding Regions
              </h3>
              <div className="space-y-3">
                {[
                  { region: "Uttar Pradesh", value: "₹22 L", percent: 26 },
                  { region: "Rajasthan", value: "₹18 L", percent: 21 },
                  { region: "Madhya Pradesh", value: "₹15 L", percent: 18 },
                  { region: "Bihar", value: "₹12 L", percent: 14 },
                ].map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>{item.region}</span>
                      <span className="font-medium">{item.value}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-red-400 rounded-full" style={{ width: `${item.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Geographic Business Analytics Section */}
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
              📈 <span className="gradient-text">Geographic Business Analytics</span> for BUSY Users
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful insights that transform how you understand and grow your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Customer Distribution", desc: "See where customers are concentrated across India", icon: Users },
              { title: "Revenue Mapping", desc: "Visualize which regions generate most revenue", icon: TrendingUp },
              { title: "Collection Analytics", desc: "Identify regions with payment issues", icon: IndianRupee },
              { title: "Growth Potential", desc: "Find untapped markets and opportunities", icon: Target },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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
              Powerful <span className="gradient-text">Sales Territory Analytics</span> Features
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
              Powered by Google Maps for the best territory visualization experience
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

      {/* Who Should Use This Section */}
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
              👥 Built for <span className="gradient-text">Sales Teams & Business Owners</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Anyone who needs to understand their customer geography and plan strategically
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {whoShouldUse.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card rounded-xl p-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{item.role}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Territory Planning Section */}
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
              🧭 <span className="gradient-text">Sales Territory Planning</span> Made Easy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Assign territories, plan routes, identify new markets, and optimize your sales team
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Assign Territories by Potential
                </h3>
                <p className="text-muted-foreground">
                  Balance workloads by assigning territories based on customer density, revenue potential, 
                  and outstanding amounts. Ensure fair distribution of opportunities.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Route className="w-5 h-5 text-primary" />
                  Plan Sales Routes
                </h3>
                <p className="text-muted-foreground">
                  Optimize travel routes by seeing customer locations on map. Prioritize visits by 
                  outstanding amount or business potential. Reduce travel time, increase coverage.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-primary" />
                  Identify New Markets
                </h3>
                <p className="text-muted-foreground">
                  Find districts with high potential but low coverage. Discover white space 
                  opportunities where competitors are weak but demand exists.
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
              <h3 className="text-lg font-semibold mb-4">Territory Assignment View</h3>
              <div className="space-y-3">
                {[
                  { rep: "Amit Sharma", territory: "North Region", customers: 245, revenue: "₹62 L" },
                  { rep: "Priya Patel", territory: "West Region", customers: 312, revenue: "₹85 L" },
                  { rep: "Rahul Kumar", territory: "South Region", customers: 289, revenue: "₹72 L" },
                  { rep: "Sneha Gupta", territory: "East Region", customers: 178, revenue: "₹45 L" },
                ].map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3 flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.rep}</p>
                      <p className="text-xs text-muted-foreground">{item.territory}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{item.revenue}</p>
                      <p className="text-xs text-muted-foreground">{item.customers} customers</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
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
              How Businesses Use <span className="gradient-text">Sales Territory Dashboard</span>
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
              Why Businesses Choose <span className="gradient-text">Sales Territory Analytics</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform complex data into clear, actionable geographic insights
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
              Frequently Asked Questions about <span className="gradient-text">Sales Territory Analytics</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know about geographic business analytics
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
              <Map className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to Visualize Your Sales Territory?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              See your customers, sales, outstanding payments, and demand trends on an interactive map. 
              Make data-driven territory decisions. Start your free 3-day demo today.
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
