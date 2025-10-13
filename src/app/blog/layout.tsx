import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
