interface Resource {
  title: string
  description: string
  type: string
  status: 'available' | 'in-development' | 'planned'
  url?: string
}

const resources: Resource[] = [
  {
    title: 'Digital Platform Documentation',
    description: 'Comprehensive guides for all 12+ Kifuliiru digital platforms, including user manuals, technical specifications, and integration guides.',
    type: 'Documentation',
    status: 'available',
    url: 'https://docs.kifuliiru.org'
  },
  {
    title: 'Template-Based Content Generation Methodology',
    description: 'Detailed methodology for creating educational content at scale using computational linguistics and community validation.',
    type: 'Methodology Guide',
    status: 'available',
    url: 'https://methodology.kifuliiru.org'
  },
  {
    title: 'Community Validation Framework',
    description: 'Process documentation for community-led content validation, ensuring cultural accuracy and linguistic authenticity.',
    type: 'Framework',
    status: 'available'
  },
  {
    title: 'Kifuliiru Language Data Repository',
    description: 'Open access repository containing 8GB+ of validated Kifuliiru language data, including audio recordings, text corpora, and educational materials.',
    type: 'Data Repository',
    status: 'available',
    url: 'https://data.kifuliiru.org'
  },
  {
    title: 'Platform Integration APIs',
    description: 'Technical APIs and integration tools for connecting Kifuliiru language resources across different platforms and applications.',
    type: 'Technical Resources',
    status: 'in-development'
  },
  {
    title: 'Community Engagement Toolkit',
    description: 'Resources and tools for other language communities to implement similar preservation methodologies.',
    type: 'Toolkit',
    status: 'planned'
  }
]

export default function Publications() {
  return (
    <section id="publications">
      <h2>Resources & Documentation</h2>
      <p className="resources-intro">
        Access comprehensive documentation, methodologies, and resources developed through our Kifuliiru language preservation work. 
        These practical resources support both current users and future language preservation efforts.
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
