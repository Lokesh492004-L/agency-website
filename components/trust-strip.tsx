"use client"

import { motion } from "framer-motion"
import { Briefcase, Globe, Cpu, Users } from "lucide-react"

const stats = [
  { icon: Briefcase, value: "25+", label: "Projects Delivered" },
  { icon: Globe, value: "10+", label: "Industries Served" },
  { icon: Cpu, value: "AI", label: "Automation Experts" },
  { icon: Users, value: "Global", label: "Client Reach" },
]

const logos = [
  "TechCorp", "InnovateLab", "FutureScale", "GrowthAI", "BrandForge", "NextGen", "ScaleUp", "DigiPro"
]

export function TrustStrip() {
  return (
    <section className="py-16 border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Trusted by growing brands
          </p>
        </motion.div>

        {/* Animated marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 text-2xl font-bold text-muted-foreground/30 hover:text-muted-foreground/50 transition-colors whitespace-nowrap"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
