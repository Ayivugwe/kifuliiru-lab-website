'use client'

import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function Header() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const scrollDifference = Math.abs(currentScrollY - lastScrollY)
          
          // Only update if there's significant scroll movement (prevents jittery behavior)
          if (scrollDifference > 5) {
            if (currentScrollY < 10) {
              // Always show when at the top
              setIsVisible(true)
            } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
              // Scrolling down and past 80px - hide header
              setIsVisible(false)
            } else if (currentScrollY < lastScrollY) {
              // Scrolling up - show header
              setIsVisible(true)
            }
            
            setLastScrollY(currentScrollY)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`} role="banner">
      <div className="header-container">
        <div className="header-content">
          <div className="header-main">
            <Link href="/" className="logo-link">
              <h1 className="logo-brackets">[ KIFULIIRU LAB ]</h1>
            </Link>
            <p className="tagline">
              <strong>Kifuliiru Language Laboratory</strong> - 
              <strong> Language Preservation</strong> Through 
              <strong> Computational Methods</strong>
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
          <a href="#research" aria-label="Research Focus and Methodology">{t('nav.research')}</a>
          <a href="#digital-platforms" aria-label="Digital Ecosystem and Platforms">Platforms</a>
          <a href="#projects" aria-label="Active Language Preservation Projects">{t('nav.projects')}</a>
          <a href="#publications" aria-label="Publications and Documentation">{t('nav.publications')}</a>
          <Link href="/blog" aria-label="Blog and Research Updates">{t('nav.blog')}</Link>
          <a href="#team" aria-label="Research Team and Leadership">{t('nav.team')}</a>
          <a href="#contact" aria-label="Contact and Collaboration">{t('nav.contact')}</a>
        </nav>
      </div>
    </header>
  )
}
