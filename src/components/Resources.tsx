'use client'

// import { useLanguage } from '@/contexts/LanguageContext' // Will be used for future translations

export default function Resources() {
  // const { t } = useLanguage() // Will be used for future translations
  
  return (
    <section id="resources" aria-labelledby="resources-heading">
      <h2 id="resources-heading">Resources & Documentation</h2>
      
      <div className="resources-intro">
        <p>
          Access our comprehensive collection of Kifuliiru language resources, documentation, 
          and educational materials. All resources are community-validated and designed to 
          support language learning and preservation.
        </p>
      </div>

      <div className="resources-grid">
        {/* Educational Materials */}
        <div className="resource-card">
          <div className="resource-icon">📚</div>
          <h3>Educational Materials</h3>
          <p>Comprehensive learning resources including textbooks, workbooks, and interactive materials.</p>
          <div className="resource-stats">
            <span className="resource-stat">141,000+ Books</span>
            <span className="resource-stat">Multiple Levels</span>
            <span className="resource-stat">Community Validated</span>
          </div>
          <div className="resource-links">
            <span className="resource-link-disabled">Coming Soon</span>
          </div>
        </div>

        {/* Digital Platforms */}
        <div className="resource-card">
          <div className="resource-icon">💻</div>
          <h3>Digital Platforms</h3>
          <p>Web applications, mobile apps, and online tools for interactive language learning.</p>
          <div className="resource-stats">
            <span className="resource-stat">12+ Platforms</span>
            <span className="resource-stat">Cross-Platform</span>
            <span className="resource-stat">Offline Available</span>
          </div>
          <div className="resource-links">
            <a href="/digital-platforms" className="resource-link">View Platforms</a>
          </div>
        </div>

        {/* Audio Resources */}
        <div className="resource-card">
          <div className="resource-icon">🎵</div>
          <h3>Audio Resources</h3>
          <p>Voice recordings, pronunciation guides, and audio learning materials.</p>
          <div className="resource-stats">
            <span className="resource-stat">8GB+ Audio</span>
            <span className="resource-stat">Native Speakers</span>
            <span className="resource-stat">High Quality</span>
          </div>
          <div className="resource-links">
            <span className="resource-link-disabled">Coming Soon</span>
          </div>
        </div>

        {/* Research Documentation */}
        <div className="resource-card">
          <div className="resource-icon">📄</div>
          <h3>Research Documentation</h3>
          <p>Academic papers, methodology documentation, and research findings.</p>
          <div className="resource-stats">
            <span className="resource-stat">Peer Reviewed</span>
            <span className="resource-stat">Open Access</span>
            <span className="resource-stat">Methodology</span>
          </div>
          <div className="resource-links">
            <a href="/publications" className="resource-link">View Publications</a>
          </div>
        </div>

        {/* Community Resources */}
        <div className="resource-card">
          <div className="resource-icon">👥</div>
          <h3>Community Resources</h3>
          <p>Community engagement tools, cultural context, and collaborative materials.</p>
          <div className="resource-stats">
            <span className="resource-stat">Community Driven</span>
            <span className="resource-stat">Cultural Context</span>
            <span className="resource-stat">Collaborative</span>
          </div>
          <div className="resource-links">
            <a href="/cultural-context" className="resource-link">Cultural Context</a>
            <a href="/contact" className="resource-link">Get Involved</a>
          </div>
        </div>

        {/* Technical Documentation */}
        <div className="resource-card">
          <div className="resource-icon">⚙️</div>
          <h3>Technical Documentation</h3>
          <p>API documentation, technical guides, and development resources.</p>
          <div className="resource-stats">
            <span className="resource-stat">API Available</span>
            <span className="resource-stat">Open Source</span>
            <span className="resource-stat">Developer Tools</span>
          </div>
          <div className="resource-links">
            <span className="resource-link-disabled">Coming Soon</span>
          </div>
        </div>
      </div>

      <div className="resources-footer">
        <h3>Need Help Finding Resources?</h3>
        <p>
          Our team is here to help you find the right resources for your needs. 
          Whether you're a learner, researcher, or educator, we can guide you to 
          the most appropriate materials.
        </p>
        <div className="resource-contact-links">
          <a href="/contact" className="resource-contact-link">Contact Us</a>
          <a href="/team" className="resource-contact-link">Meet the Team</a>
        </div>
      </div>
    </section>
  )
}
