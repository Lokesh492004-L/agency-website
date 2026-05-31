"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

const projects = [
  {
    title: "Arogya Krishi",
    category: "Agriculture Platform",
    description: "A modern agriculture-focused digital platform with clean UI and trust-focused branding.",
    url: "https://arogya-krishi-copy-dc3c0f11.base44.app/",
    tags: ["Web Design", "Branding", "UI/UX"],
    color: "from-emerald-500/20 to-teal-500/20",
    image: "/images/arogya-krishi.png",
  },
  {
    title: "Paws Elevated",
    category: "Pet Care Experience",
    description: "A premium pet-care experience designed with elegant visuals and modern storytelling.",
    url: "https://preview--paws-elevated.lovable.app/?__lovable_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9%2EeyJ1c2VyX2lkIjoiQk5UZDl3TWN0UGNrMWJEallCSm9naURxVmFsMiIsInByb2plY3RfaWQiOiJhMDA3NTc1Zi01YWE3LTRiMTgtYjkzMi02MjdiYjZlZTAwYmMiLCJhY2Nlc3NfdHlwZSI6InByb2plY3QiLCJpc3MiOiJsb3ZhYmxlLWFwaSIsInN1YiI6ImEwMDc1NzVmLTVhYTctNGIxOC1iOTMyLTYyN2JiNmVlMDBiYyIsImF1ZCI6WyJsb3ZhYmxlLWFwcCJdLCJleHAiOjE3ODA3MzA0MDQsIm5iZiI6MTc4MDEyNTYwNCwiaWF0IjoxNzgwMTI1NjA0fQ%2ERYAcPJGemNFZyj6tu-lO9KCmMv-IPyP-oL054oKr67SwdWVnJ5twNgNLDNRQPC6Nq4gyzNNUmOcy1-Xp4y7XM4qQbiF_zHK7sBA4dRPKYaBMmEMkeFYXmF083eQgWjIDGQAj-Mc4o2XkuutwCSVrEnEsh7IrPCE4561MXhzLwdHkhohxyCvqTmcS4edoJh79wFQiBymXjTJa2-5cYvwhpNOxgKBaMBKWPY1Vbp0UFsU_aHZJQZ13tH7sJOuuLIOw_Q8lI5vZZ8fNCfUWJUnEU6WnenU6CZFQKb8nBeLcBrSfgcOsFTOGrefM5Cj23At_pBwbZYyyPTbru3lpRcYvPbzqAIoLdk1sFGJUom3ivn_Fx1P79fAeaTCoSCcL2n1_u6xcKABryWJWgDv_AAhJuePFKK5IaaAPj9cjFzi4vA0D6IIuKV2_Lhqcj5lE_Z7JVAX3_7rIhW6rRrSdwWLq-gEgrsGfexc_0hJ9cSSUtPHsdq8fnk9X0JCnkQ4oZlrElrX1jNFc9FR61l-sj0yikeYDvinEpYyuh8oahScEHKmlqa--5MW9bukWLkJEbafSZSOnUHGp0rIdwr32x4XJPXK72pc79qA7G91J3vEVK49EWMQ4HHU15o2jSQVJxuLQLYkW8_buDkyCPAPmC-MMX-yfRmXP9SGclr1rZNYnVDQ",
    tags: ["Web Design", "E-commerce", "Branding"],
    color: "from-amber-500/20 to-orange-500/20",
    image: "/images/paws-elevated.png",
  },
  {
    title: "Cunning Kinship Pet Atelier",
    category: "Luxury Pet Brand",
    description: "A luxury pet atelier website crafted with immersive branding and sophisticated layouts.",
    url: "https://cunning-kinship-pet-ateliers.base44.app/",
    tags: ["Luxury Branding", "Web Design", "UI/UX"],
    color: "from-violet-500/20 to-purple-500/20",
    image: "/images/cunning-kinship.png",
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
      style={{ scale, opacity }}
    >
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative rounded-3xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-500">
          {/* Animated background gradient */}
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, oklch(0.65 0.25 270 / 0.15) 0%, oklch(0 0 0 / 0) 60%)",
            }}
          />
          
          <div className="relative p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="order-2 md:order-1">
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.1, backgroundColor: "oklch(0.65 0.25 270 / 0.2)" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.p 
                  className="text-sm text-primary/70 mb-2 uppercase tracking-wider"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {project.category}
                </motion.p>
                
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {project.description}
                </motion.p>
                
                <motion.div 
                  className="inline-flex items-center gap-2 text-primary font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ x: 5 }}
                >
                  <span>View Live Project</span>
                  <motion.div
                    animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Mockup preview with parallax */}
              <div className="order-1 md:order-2">
                <motion.div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary"
                  style={{ y }}
                  whileHover={{ y: -15, rotateY: 5, rotateX: -5 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6"
                  >
                    <motion.div
                      className="flex items-center gap-2 text-sm font-medium text-foreground"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open Project</span>
                    </motion.div>
                  </motion.div>
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(circle at 50% 100%, oklch(0.65 0.25 270 / 0.25) 0%, oklch(0 0 0 / 0) 50%)",
                    }}
                  />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%", opacity: 0 }}
                    whileHover={{ x: "100%", opacity: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                      background: "linear-gradient(90deg, oklch(0 0 0 / 0), white, oklch(0 0 0 / 0))",
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
          
          {/* Bottom border animation */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary"
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.a>
    </motion.div>
  )
}

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="work" className="py-32 relative noise overflow-hidden" ref={ref}>
      {/* Animated background orbs */}
      <motion.div
        className="absolute -left-40 top-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{ background: "oklch(0.65 0.25 270)" }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 bottom-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: "oklch(0.55 0.28 200)" }}
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, delay: 2, repeat: Infinity, ease: "easeInOut" }}
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
            Our Work
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A selection of our recent work showcasing premium design and strategic thinking.
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
