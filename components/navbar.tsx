"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "AI Solutions", href: "#ai" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const [hasScrolled, setHasScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState<string | null>(null)

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          hasScrolled ? "glass py-3 backdrop-blur-xl" : "py-6"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 group">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-xl font-bold text-gradient">Pairwise</span>
            </motion.div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                whileHover={{ y: -2 }}
                onHoverStart={() => setActiveLink(item.name)}
                onHoverEnd={() => setActiveLink(null)}
              >
                {item.name}
                <AnimatePresence>
                  {activeLink === item.name && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-1 h-1 rounded-full bg-primary"
                      initial={{ scale: 0, x: "-50%" }}
                      animate={{ scale: 1, x: "-50%" }}
                      exit={{ scale: 0, x: "-50%" }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="relative ml-4 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px oklch(0.65 0.25 270 / 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden relative z-10 p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background decoration */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
              style={{ background: "oklch(0.65 0.25 270)" }}
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            <nav className="flex flex-col items-center justify-center h-full gap-6">
              {navigation.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-3xl font-medium text-foreground/80 hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 30, rotateX: -30 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -30, rotateX: 30 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.08,
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1, x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="mt-4 px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ 
                  duration: 0.4, 
                  delay: navigation.length * 0.08,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress indicator */}
      <ScrollProgress />
    </>
  )
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-accent to-primary origin-left z-[60]"
      style={{ scaleX }}
    />
  )
}
