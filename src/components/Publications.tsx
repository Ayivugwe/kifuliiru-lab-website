interface Resource {
  title: string
  description: string
  type: string
  status: 'available' | 'in-development' | 'planned'
  url?: string
}

const resources: Resource[] = [
  {
    title: 'Kifuliiru Language Research',
    description: 'Research papers and studies on Kifuliiru language structure, grammar, and cultural significance.',
    type: 'Research Paper',
    status: 'in-development'
  },
  {
    title: 'Community Engagement Resources',
    description: 'Resources for engaging with the Bafuliiru community in language preservation efforts.',
    type: 'Community Resources',
    status: 'in-development'
  },
  {
    title: 'Digital Platform Documentation',
    description: 'User guides and documentation for our Kifuliiru language learning platforms.',
    type: 'Documentation',
    status: 'in-development'
  },
  {
    title: 'Language Learning Materials',
    description: 'Educational materials and resources for learning the Kifuliiru language.',
    type: 'Educational Resources',
    status: 'in-development'
  }
]

export default function Publications() {
  return (
    <section id="publications">
      <h2>Resources & Documentation</h2>
      <p className="resources-intro">
        We are currently developing comprehensive documentation, methodologies, and resources through our Kifuliiru language preservation work. 
        These resources will support both current users and future language preservation efforts.
      </p>
      
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div key={index} className={`resource-card ${resource.status}`}>
            <div className="resource-header">
              <h3 className="resource-title">{resource.title}</h3>
              <div className="resource-type">{resource.type}</div>
            </div>
            <p className="resource-description">{resource.description}</p>
            <div className="resource-footer">
              <span className={`resource-status status-${resource.status}`}>
                {resource.status === 'available' ? 'Available' : 
                 resource.status === 'in-development' ? 'In Development' : 'Planned'}
              </span>
              {resource.url && (
                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-link">
                  Access Resource →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
