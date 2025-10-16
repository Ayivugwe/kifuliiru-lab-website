'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import Logo from './Logo'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function Header() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [aboutDropdownTimeout, setAboutDropdownTimeout] = useState<NodeJS.Timeout | null>(null)

  // Get current active section from pathname
  const getActiveSection = () => {
    if (pathname === '/') return 'about'
    return pathname.replace('/', '')
  }


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleAboutDropdownMouseEnter = () => {
    if (aboutDropdownTimeout) {
      clearTimeout(aboutDropdownTimeout)
      setAboutDropdownTimeout(null)
    }
    setIsAboutDropdownOpen(true)
  }

  const handleAboutDropdownMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsAboutDropdownOpen(false)
    }, 300) // 300ms delay
    setAboutDropdownTimeout(timeout)
  }

  const isActive = (sectionId: string) => {
    return getActiveSection() === sectionId
  }


  return (
    <header className="header" role="banner">
      <div className="header-content">
               {/* Logo */}
               <Logo onClick={closeMobileMenu} />

        {/* Navigation */}
        <nav role="navigation" aria-label="Main navigation">
        <Link 
          href="/research" 
          aria-label="Research Focus and Methodology"
          className={isActive('research') ? 'active' : ''}
        >
          {t('nav.research')}
        </Link>
        <Link 
          href="/digital-platforms" 
          aria-label="Digital Ecosystem and Platforms"
          className={isActive('digital-platforms') ? 'active' : ''}
        >
          Platforms
        </Link>
        <Link 
          href="/projects" 
          aria-label="Active Language Preservation Projects"
          className={isActive('projects') ? 'active' : ''}
        >
          {t('nav.projects')}
        </Link>
        <Link 
          href="/publications" 
          aria-label="Publications and Research Papers"
          className={isActive('publications') ? 'active' : ''}
        >
          Publications
        </Link>
        <Link 
          href="/resources" 
          aria-label="Resources and Documentation"
          className={isActive('resources') ? 'active' : ''}
        >
          Resources
        </Link>
        
        {/* About Us Dropdown */}
        <div 
          className="nav-dropdown"
          onMouseEnter={handleAboutDropdownMouseEnter}
          onMouseLeave={handleAboutDropdownMouseLeave}
        >
          <button 
            className="nav-dropdown-button"
            aria-haspopup="true"
            aria-expanded={isAboutDropdownOpen}
          >
            About Us
            <span className={`dropdown-arrow ${isAboutDropdownOpen ? 'open' : ''}`}>▼</span>
          </button>
                   <div className={`nav-dropdown-menu ${isAboutDropdownOpen ? 'open' : ''}`}>
                     <Link
                       href="/cultural-context"
                       aria-label="Kifuliiru Language and Bafuliiru People"
                       className={isActive('cultural-context') ? 'active' : ''}
                     >
                       {t('nav.cultural')}
                     </Link>
                     <Link
                       href="/team"
                       aria-label="Research Team and Leadership"
                       className={isActive('team') ? 'active' : ''}
                     >
                       {t('nav.team')}
                     </Link>
                     <Link
                       href="/contact"
                       aria-label="Contact and Collaboration"
                       className={isActive('contact') ? 'active' : ''}
                     >
                       {t('nav.contact')}
                     </Link>
                     <Link
                       href="/about"
                       aria-label="About Kifuliiru Lab"
                       className={isActive('about') ? 'active' : ''}
                     >
                       {t('nav.about')}
                     </Link>
                   </div>
        </div>
        
        <Link href="/blog" aria-label="Blog and Research Updates">{t('nav.blog')}</Link>
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
      
      {/* Mobile Navigation */}
      <nav className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`} role="navigation" aria-label="Mobile navigation">
             <div className="mobile-nav-section">
               <h3 className="mobile-nav-section-title">Research & Projects</h3>
               <Link
                 href="/research"
                 aria-label="Research Focus and Methodology"
                 onClick={closeMobileMenu}
                 className={isActive('research') ? 'active' : ''}
               >
                 {t('nav.research')}
               </Link>
               <Link
                 href="/digital-platforms"
                 aria-label="Digital Ecosystem and Platforms"
                 onClick={closeMobileMenu}
                 className={isActive('digital-platforms') ? 'active' : ''}
               >
                 Platforms
               </Link>
               <Link
                 href="/projects"
                 aria-label="Active Language Preservation Projects"
                 onClick={closeMobileMenu}
                 className={isActive('projects') ? 'active' : ''}
               >
                 {t('nav.projects')}
               </Link>
               <Link
                 href="/publications"
                 aria-label="Publications and Research Papers"
                 onClick={closeMobileMenu}
                 className={isActive('publications') ? 'active' : ''}
               >
                 Publications
               </Link>
               <Link
                 href="/resources"
                 aria-label="Resources and Documentation"
                 onClick={closeMobileMenu}
                 className={isActive('resources') ? 'active' : ''}
               >
                 Resources
               </Link>
             </div>

             <div className="mobile-nav-section">
               <h3 className="mobile-nav-section-title">About Us</h3>
               <Link
                 href="/cultural-context"
                 aria-label="Kifuliiru Language and Bafuliiru People"
                 onClick={closeMobileMenu}
                 className={isActive('cultural-context') ? 'active' : ''}
               >
                 {t('nav.cultural')}
               </Link>
               <Link
                 href="/team"
                 aria-label="Research Team and Leadership"
                 onClick={closeMobileMenu}
                 className={isActive('team') ? 'active' : ''}
               >
                 {t('nav.team')}
               </Link>
               <Link
                 href="/contact"
                 aria-label="Contact and Collaboration"
                 onClick={closeMobileMenu}
                 className={isActive('contact') ? 'active' : ''}
               >
                 {t('nav.contact')}
               </Link>
               <Link
                 href="/about"
                 aria-label="About Kifuliiru Lab"
                 onClick={closeMobileMenu}
                 className={isActive('about') ? 'active' : ''}
               >
                 {t('nav.about')}
               </Link>
             </div>
        
        <div className="mobile-nav-section">
          <h3 className="mobile-nav-section-title">Resources</h3>
          <Link href="/blog" aria-label="Blog and Research Updates" onClick={closeMobileMenu}>{t('nav.blog')}</Link>
        </div>
      </nav>
    </header>
  )
}
