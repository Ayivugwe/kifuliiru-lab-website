'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  
  return (
    <section id="about" aria-labelledby="about-heading">
      <h2 id="about-heading">{t('about.title')}</h2>
      <p>
        <strong>Kifuliiru Lab</strong> is a specialized <strong>Kifuliiru language preservation laboratory</strong> under <strong>Wekify LLC</strong>, dedicated to preserving and 
        revitalizing the <strong>Kifuliiru language</strong> spoken by the <strong>Bafuliiru people </strong> 
        of  <strong> Ibufuliiru in Uvira, South Kivu</strong>, Democratic Republic of Congo. Through <strong>computational  </strong> 
        and <strong>template-based generation</strong> methods, our lab works directly with the Bafuliiru community 
        to create comprehensive educational resources in their native language.
      </p>
      <p>
        Our lab's work demonstrates that <strong>systematic content generation</strong>, when paired with 
        <strong> native speaker validation</strong> from the Bafuliiru community, can produce 
        <strong> educational materials</strong> at unprecedented scale—transforming the Kifuliiru language 
        from minimal documentation to a comprehensive <strong>digital language ecosystem</strong> including 
        <strong> websites, web applications, mobile apps, voice recordings, and connected resources</strong>. 
        All platforms and content have been <strong>created by Ayivugwe Kabemba Mukome</strong>, with some utilizing 
        AI assistance as a development tool while ensuring authentic cultural and linguistic preservation through native speaker expertise. This <strong>Kifuliiru Lab methodology </strong> 
        will be replicated across other <strong>language laboratories</strong> as Wekify expands to serve additional 
        <strong> endangered languages </strong> and their communities.
      </p>

      {/* Stats */}
      <div className="stats">
        <div className="stat">
          <span className="stat-number">141,000+</span>
          <span className="stat-label">Books (Projected)</span>
        </div>
        <div className="stat">
          <span className="stat-number">8GB</span>
          <span className="stat-label">{t('stats.data')}</span>
        </div>
        <div className="stat">
          <span className="stat-number">100%</span>
          <span className="stat-label">{t('stats.validated')}</span>
        </div>
        <div className="stat">
          <span className="stat-number">12+</span>
          <span className="stat-label">{t('stats.platforms')}</span>
        </div>
        <div className="stat">
          <span className="stat-number">Voice</span>
          <span className="stat-label">{t('stats.voice')}</span>
        </div>
        <div className="stat">
          <span className="stat-number">2025</span>
          <span className="stat-label">{t('stats.founded')}</span>
        </div>
      </div>
    </section>
  )
}
