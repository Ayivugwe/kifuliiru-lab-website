'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Team() {
  const { t } = useLanguage()

  const teamMembers = [
    {
      name: t('team.community_advisors'),
      role: t('team.community_role'),
      description: t('team.community_description')
    },
    {
      name: t('team.future_directors'),
      role: t('team.future_role'),
      description: t('team.future_description')
    },
    {
      name: t('team.technical_teams'),
      role: t('team.technical_role'),
      description: t('team.technical_description')
    },
    {
      name: t('team.research_partners'),
      role: t('team.research_role'),
      description: t('team.research_description')
    }
  ]

  return (
    <section id="team">
      <h2>{t('team.title')}</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="team-name">{member.name}</div>
            <div className="team-role">
              {member.role.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < member.role.split('\n').length - 1 && <br />}
                </span>
              ))}
            </div>
            <div className="team-description">{member.description}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
