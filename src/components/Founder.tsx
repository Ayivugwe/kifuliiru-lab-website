'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Founder() {
  const { t } = useLanguage()

  const founderDetails = [
    {
      title: t('founder.background'),
      content: t('founder.background_content')
    },
    {
      title: t('founder.expertise'),
      content: t('founder.expertise_content')
    },
    {
      title: t('founder.vision'),
      content: t('founder.vision_content')
    },
    {
      title: t('founder.achievements'),
      content: t('founder.achievements_content')
    }
  ]

  return (
    <section id="founder" aria-labelledby="founder-heading">
      <h2 id="founder-heading">{t('founder.title')}</h2>
      <p className="founder-intro">
        {t('founder.intro')}
      </p>
      
      <div className="founder-grid">
        {founderDetails.map((detail, index) => (
          <div key={index} className="founder-card">
            <h3 className="founder-card-title">{detail.title}</h3>
            <p className="founder-card-content">{detail.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
