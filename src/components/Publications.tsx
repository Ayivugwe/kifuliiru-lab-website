interface Publication {
  title: string
  meta: string
}

const publications: Publication[] = [
  {
    title: '"Kifuliiru Complete Content Ecosystem: From Zero to 141,000+ Books"',
    meta: 'Technical Report • October 2025 • Kifuliiru Lab'
  },
  {
    title: '"Template-Based Content Generation for Indigenous Languages" (In Preparation)',
    meta: 'Research Paper • Computational Linguistics • Expected 2026'
  },
  {
    title: '"Dual-Track Methodology: Systematic + Community Approaches" (In Preparation)',
    meta: 'Methodology Paper • Language Preservation • Expected 2026'
  },
  {
    title: 'Open Source: Template Libraries & Generation Systems',
    meta: 'GitHub Repository • Available for other language communities'
  }
]

export default function Publications() {
  return (
    <section id="publications">
      <h2>Publications & Documentation</h2>
      
      {publications.map((publication, index) => (
        <div key={index} className="publication">
          <div className="publication-title">
            {publication.title}
          </div>
          <div className="publication-meta">
            {publication.meta}
          </div>
        </div>
      ))}
    </section>
  )
}
