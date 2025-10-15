interface Project {
  name: string
  status: 'complete' | 'active' | 'planned'
  description: string
  code?: string
}

const projects: Project[] = [
  {
    name: 'Educational Content Development',
    status: 'complete',
    description: 'Creating comprehensive educational materials for Kifuliiru language learning, including numbers, mathematics, and basic vocabulary.',
    code: '10,000+ books'
  },
  {
    name: 'Mathematics Learning Resources',
    status: 'active',
    description: 'Developing culturally-relevant math problems and exercises using authentic Kifuliiru vocabulary and scenarios.',
    code: '40,000+ books targeted'
  },
  {
    name: 'Grammar and Language Structure',
    status: 'active',
    description: 'Documenting Kifuliiru grammar, verb conjugations, and sentence structures for educational purposes.',
    code: '30,000+ books'
  },
  {
    name: 'Community Publishing Platforms',
    status: 'complete',
    description: 'Digital platforms for community content creation including news, creative writing, and audio content.',
    code: '11,000+ books | Growing daily'
  },
  {
    name: 'Web Applications Suite',
    status: 'active',
    description: 'Interactive web applications for Kifuliiru language learning with exercises, pronunciation guides, and cultural content.',
    code: 'Multi-platform'
  },
  {
    name: 'Mobile Application',
    status: 'active',
    description: 'Mobile app for iOS and Android providing offline access to Kifuliiru learning resources and voice recordings.',
    code: 'Cross-platform | Offline capable'
  },
  {
    name: 'Voice Recording Collection',
    status: 'complete',
    description: 'Comprehensive collection of native speaker recordings for pronunciation, stories, and cultural narratives.',
    code: 'Native speaker validated'
  },
  {
    name: 'Integrated Learning Ecosystem',
    status: 'active',
    description: 'Connected system linking all digital platforms, voice recordings, and educational resources for seamless learning.',
    code: 'Cross-platform integration'
  },
  {
    name: 'AI Language Support',
    status: 'planned',
    description: 'Exploring AI applications for Kifuliiru language learning, translation assistance, and cultural knowledge preservation.'
  }
]

const getStatusText = (status: Project['status']) => {
  switch (status) {
    case 'complete':
      return 'Complete'
    case 'active':
      return 'In Progress'
    case 'planned':
      return 'Planned Q1 2026'
    default:
      return status
  }
}

export default function Projects() {
  return (
    <section id="projects">
      <h2>Active Projects</h2>
      <ul className="projects">
        {projects.map((project, index) => (
          <li key={index} className="project">
            <div className="project-header">
              <span className="project-name">{project.name}</span>
              <span className={`project-status status-${project.status}`}>
                {getStatusText(project.status)}
              </span>
            </div>
            <p className="project-desc">
              {project.description}
              {project.code && <><br /><code>{project.code}</code></>}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
