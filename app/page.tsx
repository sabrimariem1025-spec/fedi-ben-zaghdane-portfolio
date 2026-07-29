import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Expertise } from '@/components/expertise'
import { CaseStudies } from '@/components/case-studies'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Expertise />
      <CaseStudies />
      <Skills />
      <Contact />
    </main>
  )
}
