"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "BusyNotify reduced our alert noise by 80%. Our engineers can finally focus on building instead of constantly context-switching.",
    author: "Arjun Mehta",
    role: "CTO",
    company: "TechFlow",
    avatar: "AM",
  },
  {
    quote: "The AI-powered routing is a game-changer. Critical incidents now reach the right person immediately, every time.",
    author: "Sneha Kapoor",
    role: "DevOps Lead",
    company: "ScaleUp",
    avatar: "SK",
  },
  {
    quote: "Setup took 15 minutes. Within a week, our mean time to resolution dropped by 40%. Incredible ROI.",
    author: "Rohan Gupta",
    role: "VP Engineering",
    company: "DataDriven",
    avatar: "RG",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-30" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="label-accent">Testimonials</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Loved by <span className="gradient-text">engineering teams</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-6 flex flex-col"
            >
              <div className="flex-1">
                {/* Quote icon */}
                <svg
                  className="w-8 h-8 text-primary/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
                
                <p className="text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="mt-6 flex items-center gap-3 pt-6 border-t border-border">
                <Avatar>
                  <AvatarFallback className="bg-primary/20 text-primary">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
