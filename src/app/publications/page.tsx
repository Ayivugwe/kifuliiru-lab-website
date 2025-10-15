import Header from '@/components/Header'
import Publications from '@/components/Publications'
import Footer from '@/components/Footer'

export default function PublicationsPage() {
  return (
    <>
      <Header />
      <div className="container">
        <Publications />
        <Footer />
      </div>
    </>
  )
}
