import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Benefits } from '@/components/benefits'
import { BeforeAfter } from '@/components/before-after'
import { HowItWorks } from '@/components/how-it-works'
import { Gallery } from '@/components/gallery'
import { TargetAudience } from '@/components/target-audience'
import { Comparison } from '@/components/comparison'
import { Testimonials } from '@/components/testimonials'
import { Pricing } from '@/components/pricing'
import { Faq } from '@/components/faq'
import { FinalCta } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <BeforeAfter />
        <HowItWorks />
        <Gallery />
        <TargetAudience />
        <Comparison />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
