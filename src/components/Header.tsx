'use client'

import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const { t } = useLanguage()
  
  return (
    <header className="header" role="banner">
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
    </header>
  )
}
