import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="container">
        <Projects />
        <Footer />
      </div>
    </>
  )
}
