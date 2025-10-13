'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useState } from 'react'
import { ChevronDown, Check, Globe } from 'lucide-react'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'sw', name: 'Kiswahili', flag: '🇹🇿' },
  { code: 'flr', name: 'Kifuliiru', flag: '🇨🇩' }, // DRC flag for Kifuliiru
] as const

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  const handleLanguageChange = (langCode: 'en' | 'fr' | 'sw' | 'flr') => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="language-toggle">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="language-toggle-button"
        aria-label={`Current language: ${currentLanguage.name}. Click to change language.`}
        title={`Current language: ${currentLanguage.name}`}
      >
        <div className="language-content">
          <span className="language-flag">{currentLanguage.flag}</span>
          <span className="language-name">{currentLanguage.name}</span>
        </div>
        <ChevronDown 
          size={16} 
          className={`language-arrow ${isOpen ? 'rotated' : ''}`}
        />
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          <div className="language-dropdown-header">
            <Globe size={16} />
            <span>Select Language</span>
          </div>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`language-option ${language === lang.code ? 'active' : ''}`}
              aria-label={`Switch to ${lang.name}`}
            >
              <div className="language-option-content">
                <span className="language-flag">{lang.flag}</span>
                <span className="language-name">{lang.name}</span>
              </div>
              {language === lang.code && (
                <Check size={16} className="checkmark" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
