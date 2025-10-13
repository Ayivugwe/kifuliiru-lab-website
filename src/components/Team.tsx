interface TeamMember {
  name: string
  role: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Ayivugwe Kabemba Mukome',
    role: 'Director & Founder\nNative Speaker, Research Lead'
  },
  {
    name: 'Technical Team',
    role: 'Software Engineering\nData Science, Platform Development'
  },
  {
    name: 'Community Advisors',
    role: 'Elder Council\nCultural Validation, Content Review'
  },
  {
    name: 'Linguistic Researchers',
    role: 'Methodology Development\nAcademic Partnerships'
  }
]

export default function Team() {
  return (
    <section id="team">
      <h2>Team</h2>
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
