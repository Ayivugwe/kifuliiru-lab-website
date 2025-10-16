import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PublicationsPage() {
  return (
    <>
      <Header />
      <div className="container">
        <section id="publications">
          <h2>Publications & Research Papers</h2>
          <div className="coming-soon-section">
            <div className="coming-soon-content">
              <h3>Coming Soon</h3>
              <p>
                We are currently preparing comprehensive research publications and academic papers 
                documenting our work in Kifuliiru language preservation. Our upcoming publications will include:
              </p>
              
              <div className="upcoming-publications">
                <div className="publication-category">
                  <h4>📄 Research Papers</h4>
                  <ul>
                    <li>Computational linguistics approaches to endangered language preservation</li>
                    <li>Community-centered language revitalization methodologies</li>
                    <li>Digital platform effectiveness in language learning</li>
                    <li>Cultural context preservation in language documentation</li>
                  </ul>
                </div>
                
                <div className="publication-category">
                  <h4>📚 Academic Publications</h4>
                  <ul>
                    <li>Peer-reviewed journal articles</li>
                    <li>Conference proceedings and presentations</li>
                    <li>Methodology documentation and case studies</li>
                    <li>Collaborative research with academic institutions</li>
                  </ul>
                </div>
                
                <div className="publication-category">
                  <h4>📖 Community Resources</h4>
                  <ul>
                    <li>Language learning guides and manuals</li>
                    <li>Cultural documentation and oral history preservation</li>
                    <li>Educational material development frameworks</li>
                    <li>Community engagement best practices</li>
                  </ul>
                </div>
              </div>
              
              <div className="publication-timeline">
                <p><strong>Expected Timeline:</strong> First publications will be available in Q2 2025</p>
                <p><strong>Stay Updated:</strong> Follow our progress on <a href="https://lola.kifuliiru.com" target="_blank" rel="noopener noreferrer">Lola Social</a> or <a href="/contact">contact us</a> for updates.</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
