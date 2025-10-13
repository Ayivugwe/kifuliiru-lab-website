'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Team() {
  const { t } = useLanguage()

  const teamMembers = [
    {
      name: 'Ayivugwe Kabemba Mukome',
      role: t('team.role')
    },
    {
      name: t('team.community_advisors'),
      role: t('team.community_role')
    },
    {
      name: t('team.future_directors'),
      role: t('team.future_role')
    },
    {
      name: t('team.technical_teams'),
      role: t('team.technical_role')
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
          </div>
        ))}
      </div>
    </section>
  )
}
