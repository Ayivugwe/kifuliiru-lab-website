'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function Navigation() {
  const { t } = useLanguage()
  
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <a href="#about" aria-label="About Kifuliiru Lab">{t('nav.about')}</a>
      <a href="#cultural-context" aria-label="Kifuliiru Language and Bafuliiru People">{t('nav.cultural')}</a>
      <a href="#wekify-vision" aria-label="Wekify LLC Vision for Language Preservation">{t('nav.vision')}</a>
      <a href="#research" aria-label="Research Focus and Methodology">{t('nav.research')}</a>
      <a href="#projects" aria-label="Active Language Preservation Projects">{t('nav.projects')}</a>
      <a href="#publications" aria-label="Publications and Documentation">{t('nav.publications')}</a>
      <Link href="/blog" aria-label="Blog and Research Updates">{t('nav.blog')}</Link>
      <a href="#team" aria-label="Research Team and Leadership">{t('nav.team')}</a>
      <a href="#contact" aria-label="Contact and Collaboration">{t('nav.contact')}</a>
    </nav>
  )
}
