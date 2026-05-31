"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const testimonials = [
  {
    quote: "Working with this agency completely transformed our online presence. The attention to detail and strategic approach exceeded all expectations.",
    author: "Sarah Chen",
    role: "Founder, Pet Brand",
    rating: 5,
  },
  {
    quote: "The AI automation systems saved us hours of manual work every week. Our customer response time went from hours to seconds.",
    author: "Michael Torres",
    role: "Local Business Owner",
    rating: 5,
  },
  {
    quote: "The website design looked world-class and premium. Our conversion rates increased by 40% within the first month.",
    author: "David Park",
    role: "Startup Founder",
    rating: 5,
  },
  {
    quote: "They understood our vision perfectly and delivered beyond what we imagined. Truly a partner, not just a vendor.",
    author: "Emma Wilson",
    role: "Marketing Director",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10"
        style={{ background: "oklch(0.65 0.25 270)" }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
            Testimonials
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + index * 0.15,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div 
                className={`h-full p-8 rounded-2xl glass overflow-hidden relative ${
                  index === currentIndex ? 'border-primary/30' : ''
                }`}
                whileHover={{ 
                  y: -10,
                  borderColor: "oklch(0.65 0.25 270 / 0.5)",
                  boxShadow: "0 20px 40px -20px oklch(0.65 0.25 270 / 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0"
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    background: "radial-gradient(circle at 50% 0%, oklch(0.65 0.25 270 / 0.1) 0%, oklch(0 0 0 / 0) 60%)"
                  }}
                  transition={{ duration: 0.4 }}
                />

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                </motion.div>
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + i * 0.05 }}
                    >
                      <motion.div
                        animate={{ 
                          scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                          rotate: hoveredIndex === index ? [0, 10, -10, 0] : 0
                        }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                      >
                        <Star className="w-4 h-4 fill-primary text-primary" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.p 
                  className="text-lg mb-6 leading-relaxed relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </motion.p>
                
                <motion.div 
                  className="flex items-center gap-4 relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="text-lg font-semibold text-primary relative z-10">
                      {testimonial.author[0]}
                    </span>
                  </motion.div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </motion.div>

                {/* Highlight indicator for active */}
                <AnimatePresence>
                  {index === currentIndex && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-accent"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      exit={{ width: "0%", opacity: 0 }}
                      transition={{ duration: 5, ease: "linear" }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Carousel indicators */}
        <motion.div 
          className="flex justify-center gap-3 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-3 h-3 rounded-full transition-colors overflow-hidden ${
                index === currentIndex ? 'bg-primary' : 'bg-primary/30'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 bg-accent"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{ borderRadius: "50%" }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
