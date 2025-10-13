'use client'

import Header from '@/components/Header'
import About from '@/components/About'
import CulturalContext from '@/components/CulturalContext'
import WekifyVision from '@/components/WekifyVision'
import DigitalPlatforms from '@/components/DigitalPlatforms'
import Research from '@/components/Research'
import Projects from '@/components/Projects'
import Publications from '@/components/Publications'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Header />
      <About />
      <CulturalContext />
      <WekifyVision />
      <DigitalPlatforms />
      <Research />
      <Projects />
      <Publications />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}