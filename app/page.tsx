import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { AIShowcase } from "@/components/ai-showcase"
import { Process } from "@/components/process"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <AIShowcase />
      <Process />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </main>
  )
}
