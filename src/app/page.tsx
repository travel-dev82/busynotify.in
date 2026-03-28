import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Hero,
  SocialProof,
  ProblemSolution,
  WhatWeDo,
  Features,
  HowItWorks,
  WhoIsThisFor,
  Integrations,
  FAQ,
  CTA,
  SEOFooter,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <WhatWeDo />
        <Features />
        <HowItWorks />
        <WhoIsThisFor />
        <Integrations />
        <FAQ />
        <CTA />
        <SEOFooter />
      </div>
      
      <Footer />
    </main>
  );
}
