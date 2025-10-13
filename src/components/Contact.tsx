'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  
  return (
    <section id="contact">
      <h2>{t('contact.title')}</h2>
      <p>
        {t('contact.description')}
      </p>

      <div className="contact-links">
        <div className="terminal-line">{t('contact.website')}: <a href="https://kifuliiru.org">kifuliiru.org</a></div>
        <div className="terminal-line">{t('contact.email')}: kifuliiru@gmail.com</div>
        <div className="terminal-line">{t('contact.partnerships')}: wekify@gmail.com</div>
        <div className="terminal-line">{t('contact.parent')}: <a href="https://wekify.com">Wekify LLC</a></div>
      </div>

      <p style={{ marginTop: '30px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <strong>{t('contact.research_interests')}:</strong> Template-based generation • Computational linguistics • 
        Kifuliiru language preservation • Language laboratory methodology • Community-centered technology • AI for under-resourced 
        languages • Cultural knowledge documentation
      </p>
    </section>
  )
}
