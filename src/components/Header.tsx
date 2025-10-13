'use client'

import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 10) {
        // Always show when at the top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide header
        setIsVisible(false)
      } else {
        // Scrolling up - show header
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`} role="banner">
      <div className="header-content">
        <div className="header-main">
          <h1>{t('header.title')}</h1>
          <p className="tagline">
            <strong>Kifuliiru Language Laboratory</strong> - 
            <strong>Kifuliiru Language Preservation</strong> Through 
            <strong> Computational Methods</strong> and 
            <strong> Community Engagement</strong>
          </p>
        </div>
        <div className="header-controls">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
      
      {/* Navigation inside header */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <a href="#about" aria-label="About Kifuliiru Lab">{t('nav.about')}</a>
        <a href="#cultural-context" aria-label="Kifuliiru Language and Bafuliiru People">{t('nav.cultural')}</a>
        <a href="#wekify-vision" aria-label="Wekify LLC Vision for Language Preservation">{t('nav.vision')}</a>
        <a href="#research" aria-label="Research Focus and Methodology">{t('nav.research')}</a>
        <a href="#projects" aria-label="Active Language Preservation Projects">{t('nav.projects')}</a>
        <a href="#publications" aria-label="Publications and Documentation">{t('nav.publications')}</a>
        <a href="#team" aria-label="Research Team and Leadership">{t('nav.team')}</a>
        <a href="#contact" aria-label="Contact and Collaboration">{t('nav.contact')}</a>
      </nav>
    </header>
  )
}
