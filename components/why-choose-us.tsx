"use client"

import { motion, useInView } from "framer-motion"
import { Zap, Eye, Brain, Target, Palette, HeartHandshake, ArrowRight } from "lucide-react"
import { useRef, useState } from "react"

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We move quickly without sacrificing quality, getting your project live faster.",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Eye,
    title: "Premium Visuals",
    description: "Every pixel is crafted to create stunning, memorable experiences.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Brain,
    title: "AI Expertise",
    description: "Cutting-edge AI solutions that give you a competitive advantage.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Target,
    title: "Conversion Focus",
    description: "Design that doesn&apos;t just look good but drives real business results.",
    gradient: "from-red-500/20 to-rose-500/20",
  },
  {
    icon: Palette,
    title: "Modern Branding",
    description: "Contemporary brand systems that stand out in crowded markets.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description: "We&apos;re your long-term partner, not just a one-time vendor.",
    gradient: "from-violet-500/20 to-indigo-500/20",
  },
]

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-32 relative noise overflow-hidden" ref={ref}>
      {/* Animated background */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10"
        style={{ background: "oklch(0.65 0.25 270)" }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center mb-20"
        >
          <motion.span 
            className="text-sm uppercase tracking-[0.2em] text-primary mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Why Us
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Why Choose <span className="text-gradient">Pairwise</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We combine creativity, technology, and strategy to deliver results that matter.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + index * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full overflow-hidden"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px -20px oklch(0.65 0.25 270 / 0.3)"
                }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0`}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0"
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    background: "radial-gradient(circle at 50% 0%, oklch(0.65 0.25 270 / 0.15) 0%, oklch(0 0 0 / 0) 60%)"
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors relative overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"
                      initial={{ x: "-100%", y: "100%" }}
                      animate={{ 
                        x: hoveredIndex === index ? "0%" : "-100%",
                        y: hoveredIndex === index ? "0%" : "100%"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      animate={{ 
                        rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                        scale: hoveredIndex === index ? [1, 1.2, 1] : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <reason.icon className="w-8 h-8 text-primary relative z-10" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {reason.title}
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: hoveredIndex === index ? 1 : 0,
                        x: hoveredIndex === index ? 0 : -10
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </motion.h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Corner accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-24 h-24"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-4 right-4 w-12 h-[1px] bg-gradient-to-l from-primary to-transparent" />
                  <div className="absolute top-4 right-4 w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
                </motion.div>

                {/* Bottom line animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredIndex === index ? "100%" : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
