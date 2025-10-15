'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { ChevronDown, Check } from 'lucide-react'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'sw', name: 'Kiswahili', flag: '🇹🇿' },
  { code: 'flr', name: 'Kifuliiru', flag: '🇨🇩' }, // DRC flag for Kifuliiru
] as const

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  const handleLanguageChange = (langCode: 'en' | 'fr' | 'sw' | 'flr') => {
    setLanguage(langCode)
  }

  return (
    <div className="language-toggle">
      <button
        className="language-toggle-button"
        aria-label={`Current language: ${currentLanguage.name}. Hover to change language.`}
        title={`Current language: ${currentLanguage.name}`}
      >
        <span className="language-flag">{currentLanguage.flag}</span>
        <ChevronDown 
          size={14} 
          className="language-arrow"
        />
      </button>
      
      <div className="language-dropdown">
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
    </div>
  )
}
