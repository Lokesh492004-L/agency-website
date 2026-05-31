"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const navigation = {
  main: [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "AI Solutions", href: "#ai" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    { name: "Twitter", href: "https://x.com/Lokesh__4" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/sujit-nirmal/" },
  ],
}

export function Footer() {
  return (
    <footer className="py-16 border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-gradient">Pairwise</span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              Building premium digital experiences through innovative design, AI automation, and strategic thinking.
            </p>
            <a href="mailto:Pairwise111@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Pairwise111@gmail.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <motion.a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <motion.a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 mb-16">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Pairwise. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Large Pairwise branding with fade effect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mt-8"
        >
          <div className="relative overflow-hidden">
            <motion.h2 
              className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-center leading-none select-none"
              style={{
                background: "linear-gradient(180deg, oklch(0.65 0.25 270) 0%, oklch(0.55 0.28 250) 30%, transparent 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Pairwise
            </motion.h2>
            
            {/* Gradient overlay for fade effect */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(180deg, transparent 0%, transparent 40%, oklch(0.13 0.01 270) 100%)",
              }}
            />
          </div>
          
          {/* Subtle glow beneath */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 blur-3xl opacity-30"
            style={{
              background: "radial-gradient(ellipse, oklch(0.65 0.25 270) 0%, transparent 70%)",
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </footer>
  )
}
