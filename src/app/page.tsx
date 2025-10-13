import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import About from '@/components/About'
import WekifyVision from '@/components/WekifyVision'
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
      <Navigation />
      <About />
      <WekifyVision />
      <Research />
      <Projects />
      <Publications />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}