"use client"

import { motion, useInView } from "framer-motion"
import { Search, Lightbulb, Code2, Rocket } from "lucide-react"
import { useRef, useState } from "react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We dive deep into your business, goals, and target audience to understand what success looks like for you.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    description: "We craft a tailored roadmap combining design, technology, and marketing to achieve your objectives.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    icon: Code2,
    title: "Design & Development",
    description: "Our team brings your vision to life with pixel-perfect design and robust, scalable development.",
    color: "from-green-500 to-emerald-500",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Scale",
    description: "We launch your project and continue optimizing for growth, ensuring long-term success.",
    color: "from-orange-500 to-amber-500",
  },
]

export function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="process" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, oklch(0.65 0.25 270 / 0.1) 0%, oklch(0 0 0 / 0) 50%)",
            "radial-gradient(circle at 80% 50%, oklch(0.65 0.25 270 / 0.1) 0%, oklch(0 0 0 / 0) 50%)",
            "radial-gradient(circle at 20% 50%, oklch(0.65 0.25 270 / 0.1) 0%, oklch(0 0 0 / 0) 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
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
            How We Work
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our <span className="text-gradient">Process</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A proven methodology that delivers exceptional results, every time.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Animated connecting line */}
          <div className="hidden lg:block absolute top-[5.5rem] left-0 right-0 h-[2px] overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary/20 via-primary to-primary/20"
              initial={{ x: "-100%" }}
              animate={isInView ? { x: "0%" } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + index * 0.2,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="text-center"
                  whileHover={{ y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {/* Step number with glow */}
                  <motion.div
                    className="relative mx-auto w-24 h-24 rounded-2xl bg-card border border-border flex items-center justify-center mb-8 overflow-hidden"
                    whileHover={{ 
                      borderColor: "oklch(0.65 0.25 270 / 0.5)",
                      boxShadow: "0 0 30px oklch(0.65 0.25 270 / 0.3)"
                    }}
                  >
                    {/* Animated background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0`}
                      animate={{ opacity: hoveredIndex === index ? 0.2 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Rotating border effect */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="absolute top-0 left-1/2 w-8 h-[2px] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
                    </motion.div>
                    
                    <motion.span 
                      className="text-4xl font-bold text-gradient relative z-10"
                      animate={{ 
                        scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {step.number}
                    </motion.span>
                  </motion.div>
                  
                  {/* Icon with animation */}
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 relative overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"
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
                      <step.icon className="w-7 h-7 text-primary relative z-10" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-semibold mb-3"
                    animate={{ color: hoveredIndex === index ? "oklch(0.65 0.25 270)" : "oklch(0.2 0.01 260)" }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-muted-foreground text-sm leading-relaxed px-2">
                    {step.description}
                  </p>
                  
                  {/* Bottom indicator */}
                  <motion.div
                    className="w-0 h-[2px] bg-gradient-to-r from-primary to-accent mx-auto mt-6"
                    animate={{ width: hoveredIndex === index ? "60%" : "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>

                {/* Connector dot */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-[5.5rem] -right-4 w-3 h-3 rounded-full bg-primary z-10"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        "0 0 0 0 oklch(0.65 0.25 270 / 0)",
                        "0 0 0 8px oklch(0.65 0.25 270 / 0.3)",
                        "0 0 0 0 oklch(0.65 0.25 270 / 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
