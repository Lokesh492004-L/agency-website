"use client"

import { motion } from "framer-motion"
import { Palette, Cpu, Sparkles, TrendingUp } from "lucide-react"

const highlights = [
  { icon: Palette, title: "Design + Strategy", description: "Visually stunning designs backed by strategic thinking" },
  { icon: Cpu, title: "AI + Automation", description: "Intelligent systems that work while you sleep" },
  { icon: Sparkles, title: "Branding + Conversion", description: "Memorable identities that drive results" },
  { icon: TrendingUp, title: "Creative + Performance", description: "Beautiful experiences that perform" },
]

export function About() {
  return (
    <section id="about" className="py-32 relative noise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm uppercase tracking-widest text-primary mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              A Modern Creative{" "}
              <span className="text-gradient">Technology Agency</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are a modern creative technology agency focused on helping brands build strong digital identities through premium websites, branding systems, and AI-powered automations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our approach combines cutting-edge technology with timeless design principles to create experiences that captivate audiences and drive measurable business growth.
            </p>
          </motion.div>

          {/* Right - animated cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-6 rounded-2xl glass hover:border-primary/50 transition-all duration-300"
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 5 }}
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
