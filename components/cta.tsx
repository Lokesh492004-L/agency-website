"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight, Sparkles, Zap } from "lucide-react"
import { useRef } from "react"

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-25"
          style={{
            background: "radial-gradient(circle, oklch(0.65 0.25 270) 0%, oklch(0 0 0 / 0) 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-25"
          style={{
            background: "radial-gradient(circle, oklch(0.55 0.28 250) 0%, oklch(0 0 0 / 0) 70%)",
          }}
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -80, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative inline-block p-8 md:p-16 rounded-3xl glass overflow-hidden"
          >
            {/* Animated border gradient */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "linear-gradient(90deg, oklch(0.65 0.25 270 / 0), oklch(0.65 0.25 270 / 0.5), oklch(0.65 0.25 270 / 0))",
                backgroundSize: "200% 100%",
              }}
              animate={{
                backgroundPosition: ["200% 0", "-200% 0"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-sm text-primary font-medium">Let&apos;s Create Together</span>
              </motion.div>

              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Ready to Build a Brand{" "}
                <motion.span 
                  className="text-gradient inline-block"
                  animate={{ 
                    backgroundSize: ["100%", "200%", "100%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  That Stands Out?
                </motion.span>
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Let&apos;s create something extraordinary together. Book a discovery call and let&apos;s discuss how we can transform your digital presence.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.a
                  href="#"
                  className="group relative px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium overflow-hidden inline-flex items-center gap-2"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 40px oklch(0.65 0.25 270 / 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Book a Call</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{
                      background: "linear-gradient(90deg, oklch(0 0 0 / 0), rgba(255,255,255,0.3), oklch(0 0 0 / 0))",
                    }}
                  />
                </motion.a>
                
                <motion.a
                  href="#"
                  className="relative px-8 py-4 rounded-full border border-border font-medium overflow-hidden inline-flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Start Your Project</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap className="w-4 h-4 text-primary" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ borderRadius: "9999px" }}
                  />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
