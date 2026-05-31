"use client"

import { motion, useInView } from "framer-motion"
import { Bot, MessageSquare, Workflow, HeadphonesIcon, Zap, Sparkles, ArrowRight } from "lucide-react"
import { useRef, useState } from "react"

const features = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Intelligent virtual assistants that handle complex queries and tasks autonomously.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description: "Automated conversations that nurture leads and provide instant support.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamlined processes that eliminate manual tasks and boost productivity.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support AI",
    description: "24/7 intelligent support that resolves issues faster than ever.",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: Zap,
    title: "Lead Generation",
    description: "Automated systems that capture and qualify leads while you sleep.",
    gradient: "from-rose-500/20 to-red-500/20",
  },
]

export function AIShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="ai" className="py-32 relative noise overflow-hidden" ref={ref}>
      {/* Animated background orbs */}
      <motion.div
        className="absolute -left-40 top-1/4 w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{ background: "oklch(0.65 0.25 270)" }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 bottom-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
        style={{ background: "oklch(0.55 0.28 200)" }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm text-primary font-medium">AI Solutions</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            The Future of <span className="text-gradient">Automation</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Harness the power of AI to automate your business processes and deliver exceptional customer experiences.
          </motion.p>
        </motion.div>

        {/* Feature cards in bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + index * 0.1,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <motion.div
                className="group p-6 rounded-2xl glass hover:border-primary/50 transition-all duration-300 h-full relative overflow-hidden"
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px -20px oklch(0.65 0.25 270 / 0.3)"
                }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0`}
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
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors relative overflow-hidden"
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
                        rotate: hoveredIndex === index ? [0, 360] : 0,
                        scale: hoveredIndex === index ? [1, 1.2, 1] : 1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-7 h-7 text-primary relative z-10" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2"
                  >
                    {feature.title}
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
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
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

        {/* Central AI Visualization - Enhanced */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mb-20"
        >
          <div className="relative w-72 h-72">
            {/* Outer glow */}
            <motion.div
              className="absolute inset-0 rounded-full blur-2xl opacity-30"
              style={{ background: "oklch(0.65 0.25 270)" }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Rotating rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            
            <motion.div
              className="absolute inset-6 rounded-full border-2 border-accent/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <motion.div
                className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
              />
            </motion.div>
            
            <motion.div
              className="absolute inset-12 rounded-full border-2 border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Center core */}
            <motion.div
              className="absolute inset-[4.5rem] rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center backdrop-blur-sm border border-primary/20"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 0 oklch(0.65 0.25 270 / 0)",
                  "0 0 30px 10px oklch(0.65 0.25 270 / 0.3)",
                  "0 0 0 0 oklch(0.65 0.25 270 / 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Bot className="w-12 h-12 text-primary" />
              </motion.div>
            </motion.div>
            
            {/* Connection dots with pulse effect */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const top = 50 + 45 * Math.sin((angle * Math.PI) / 180)
              const left = 50 + 45 * Math.cos((angle * Math.PI) / 180)
              return (
                <motion.div
                  key={angle}
                  className="absolute"
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    className="w-4 h-4 rounded-full bg-primary/60"
                    animate={{ 
                      scale: [1, 1.8, 1],
                      opacity: [0.6, 1, 0.6],
                      boxShadow: [
                        "0 0 0 0 oklch(0.65 0.25 270 / 0)",
                        "0 0 15px 5px oklch(0.65 0.25 270 / 0.4)",
                        "0 0 0 0 oklch(0.65 0.25 270 / 0)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.3,
                      ease: "easeInOut" 
                    }}
                  />
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Dashboard mockup - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div 
            className="relative rounded-3xl overflow-hidden border border-border bg-card p-4 md:p-8"
            whileHover={{ 
              borderColor: "oklch(0.65 0.25 270 / 0.3)",
              boxShadow: "0 30px 60px -20px oklch(0.65 0.25 270 / 0.2)"
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            
            <div className="relative">
              {/* Mockup header */}
              <div className="flex items-center gap-2 mb-6">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-red-500/70"
                  whileHover={{ scale: 1.3 }}
                />
                <motion.div 
                  className="w-3 h-3 rounded-full bg-yellow-500/70"
                  whileHover={{ scale: 1.3 }}
                />
                <motion.div 
                  className="w-3 h-3 rounded-full bg-green-500/70"
                  whileHover={{ scale: 1.3 }}
                />
                <div className="flex-1 ml-4 h-8 rounded-lg bg-secondary" />
              </div>
              
              {/* Mockup content */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-4">
                  <motion.div 
                    className="h-32 rounded-xl bg-secondary/50 flex items-center justify-center overflow-hidden relative"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="text-center relative z-10">
                      <motion.p 
                        className="text-3xl font-bold text-gradient"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        1,234
                      </motion.p>
                      <p className="text-sm text-muted-foreground">Conversations Today</p>
                    </div>
                  </motion.div>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      className="h-24 rounded-xl bg-secondary/50 p-4 relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-xl font-semibold text-gradient">98%</p>
                      <p className="text-xs text-muted-foreground">Resolution Rate</p>
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-primary/50"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "98%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                      />
                    </motion.div>
                    <motion.div 
                      className="h-24 rounded-xl bg-secondary/50 p-4 relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-xl font-semibold text-gradient">{"<"}2s</p>
                      <p className="text-xs text-muted-foreground">Response Time</p>
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-accent/50"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                      />
                    </motion.div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i} 
                      className="h-[4.5rem] rounded-xl bg-secondary/30 p-3 flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1 + i * 0.15 }}
                      whileHover={{ scale: 1.02, backgroundColor: "oklch(0.2 0 0 / 0.5)" }}
                    >
                      <motion.div 
                        className="w-8 h-8 rounded-full bg-primary/20"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                      <div className="flex-1 space-y-1">
                        <div className="h-2 w-20 rounded bg-secondary" />
                        <div className="h-2 w-12 rounded bg-secondary/50" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
