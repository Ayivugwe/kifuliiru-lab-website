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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isVisible ? 'visible' : 'hidden'}`} role="banner">
      <div className="header-container">
        <div className="header-content">
          {/* Logo on the left */}
          <div className="header-logo">
            <Link href="/" className="logo-link" onClick={closeMobileMenu}>
              <div className="logo-icon">🔬</div>
              <h1 className="logo-text">KIFULIIRU LAB</h1>
            </Link>
          </div>

          {/* Desktop Navigation and Controls on the right */}
          <div className="header-right">
            {/* Desktop Navigation */}
            <nav className="nav-desktop" role="navigation" aria-label="Main navigation">
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

            {/* Controls */}
            <div className="header-controls">
              <LanguageToggle />
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-button"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`} role="navigation" aria-label="Mobile navigation">
          <a href="#about" aria-label="About Kifuliiru Lab" onClick={closeMobileMenu}>{t('nav.about')}</a>
          <a href="#cultural-context" aria-label="Kifuliiru Language and Bafuliiru People" onClick={closeMobileMenu}>{t('nav.cultural')}</a>
          <a href="#research" aria-label="Research Focus and Methodology" onClick={closeMobileMenu}>{t('nav.research')}</a>
          <a href="#digital-platforms" aria-label="Digital Ecosystem and Platforms" onClick={closeMobileMenu}>Platforms</a>
          <a href="#projects" aria-label="Active Language Preservation Projects" onClick={closeMobileMenu}>{t('nav.projects')}</a>
          <a href="#publications" aria-label="Publications and Documentation" onClick={closeMobileMenu}>{t('nav.publications')}</a>
          <Link href="/blog" aria-label="Blog and Research Updates" onClick={closeMobileMenu}>{t('nav.blog')}</Link>
          <a href="#team" aria-label="Research Team and Leadership" onClick={closeMobileMenu}>{t('nav.team')}</a>
          <a href="#contact" aria-label="Contact and Collaboration" onClick={closeMobileMenu}>{t('nav.contact')}</a>
        </nav>
      </div>
    </header>
  )
}
