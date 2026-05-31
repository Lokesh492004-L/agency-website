"use client"

import { motion, useInView } from "framer-motion"
import { ShieldCheck, Zap, Users, BarChart3, Clock, HeartHandshake } from "lucide-react"
import { useRef } from "react"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Proven Results",
    description: "Every strategy we implement is backed by data and a track record of measurable success for our clients.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description: "We move quickly without cutting corners — delivering high-quality work on timelines that keep your business moving.",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "A focused team of designers, strategists, and engineers committed to your brand's growth from day one.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: BarChart3,
    title: "Growth-Oriented",
    description: "Every decision we make is tied to your bottom line — we build for impact, not just aesthetics.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Clock,
    title: "Always Available",
    description: "Our AI-powered systems and responsive team ensure you're never left waiting for support or updates.",
    gradient: "from-rose-500/20 to-red-500/20",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description: "We don't just deliver a project and disappear — we grow alongside your brand as a trusted partner.",
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
]

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="why-choose-us" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Animated background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "oklch(0.65 0.25 270)" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-40 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ background: "oklch(0.55 0.28 200)" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 7, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section heading */}
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
            Built to <span className="text-gradient">Deliver</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Choosing the right partner is everything. Here's what sets us apart and why brands trust us to drive their growth.
          </motion.p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="group relative"
            >
              <motion.div
                className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden h-full"
                whileHover={{ y: -8, borderColor: "oklch(0.65 0.25 270 / 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
                />

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <reason.icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-4 right-4 w-10 h-[1px] bg-gradient-to-l from-primary to-transparent" />
                  <div className="absolute top-4 right-4 w-[1px] h-10 bg-gradient-to-b from-primary to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
