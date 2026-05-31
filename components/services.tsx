"use client"

import { motion, useInView } from "framer-motion"
import { Globe, Palette, Bot, MessageCircle, MapPin, Rocket, ArrowRight } from "lucide-react"
import { useRef, useState } from "react"

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Premium, conversion-focused websites that tell your brand story and drive results.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Distinctive brand identities that resonate with your audience and stand out from the crowd.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Intelligent automation systems that handle customer interactions 24/7 with precision.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Automation",
    description: "Automated messaging flows that nurture leads and provide instant customer support.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: MapPin,
    title: "Local Business Growth",
    description: "Targeted strategies to dominate your local market and attract nearby customers.",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: Rocket,
    title: "International Scaling",
    description: "Global expansion strategies to take your brand to new markets and audiences.",
    gradient: "from-rose-500/20 to-red-500/20",
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "oklch(0.65 0.25 270)" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -left-40 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ background: "oklch(0.55 0.28 200)" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

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
            What We Do
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Services That <span className="text-gradient">Transform</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            From concept to execution, we deliver comprehensive solutions that elevate your brand and accelerate growth.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + index * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden h-full"
                whileHover={{ y: -8, borderColor: "oklch(0.65 0.25 270 / 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0`}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0"
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    background: hoveredIndex === index 
                      ? "radial-gradient(circle at 50% 0%, oklch(0.65 0.25 270 / 0.15) 0%, oklch(0 0 0 / 0) 50%)" 
                      : "none"
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300 relative overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        background: hoveredIndex === index 
                          ? "linear-gradient(135deg, oklch(0.65 0.25 270 / 0.3) 0%, oklch(0 0 0 / 0) 100%)"
                          : "oklch(0 0 0 / 0)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      animate={{ 
                        rotate: hoveredIndex === index ? [0, 360] : 0,
                        scale: hoveredIndex === index ? [1, 1.2, 1] : 1
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <service.icon className="w-7 h-7 text-primary relative z-10" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {service.title}
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
                    {service.description}
                  </p>
                </div>

                {/* Corner accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-20 h-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-4 right-4 w-10 h-[1px] bg-gradient-to-l from-primary to-transparent" />
                  <div className="absolute top-4 right-4 w-[1px] h-10 bg-gradient-to-b from-primary to-transparent" />
                </motion.div>

                {/* Bottom line */}
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
