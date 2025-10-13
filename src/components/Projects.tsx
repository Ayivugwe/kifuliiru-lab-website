interface Project {
  name: string
  status: 'complete' | 'active' | 'planned'
  description: string
  code?: string
}

const projects: Project[] = [
  {
    name: 'Number Generation System',
    status: 'complete',
    description: 'Mathematical formulas encoding Kifuliiru number rules. Generates any number (1→∞) with 100% accuracy. 8GB training data produced. Proof of concept for template-based methodology.',
    code: '10,000+ books'
  },
  {
    name: 'Mathematics Question Generator',
    status: 'active',
    description: 'Automated generation of culturally-contextualized math problems. All operations (addition, subtraction, multiplication, division). Uses community-contributed vocabulary for authentic scenarios.',
    code: '40,000+ books targeted'
  },
  {
    name: 'Verb Conjugation System',
    status: 'active',
    description: 'Systematic documentation of 250+ verbs across all tenses and persons. Template-based sentence generation combining verbs with community-validated nouns and proper names.',
    code: '30,000+ books | 119M+ possible sentences'
  },
  {
    name: 'Community Publishing Platforms',
    status: 'complete',
    description: 'Digital infrastructure for native content creation: Imyazi (news), Tuyandike (creative writing), Blog (commentary), Radio Ibufuliiru (audio). 50+ active contributors. All content archived for book compilation.',
    code: '11,000+ books | Growing daily'
  },
  {
    name: 'Web Applications Suite',
    status: 'active',
    description: 'Comprehensive web applications for Kifuliiru language learning and practice. Interactive exercises, pronunciation guides, and cultural content. Currently in development/testing phase.',
    code: 'Multi-platform | Voice integration'
  },
  {
    name: 'Mobile Application',
    status: 'active',
    description: 'Native mobile app for iOS and Android providing offline access to Kifuliiru resources, voice recordings, and interactive learning modules. Currently in testing phase.',
    code: 'Cross-platform | Offline capable'
  },
  {
    name: 'Voice Recording System',
    status: 'complete',
    description: 'Comprehensive voice recording infrastructure capturing native speaker pronunciations, stories, and cultural narratives. All numbers and common phrases have voice recordings.',
    code: 'Native speaker validated'
  },
  {
    name: 'Connected Resource Network',
    status: 'active',
    description: 'Integrated ecosystem connecting all digital platforms, voice recordings, and educational resources. Seamless data flow between websites, apps, and community platforms.',
    code: 'Real-time sync | Cross-platform'
  },
  {
    name: 'AI Language Model Training',
    status: 'planned',
    description: 'Fine-tuning large language models on Kifuliiru corpus. Applications: conversational chatbot, translation assistance, grammar checking, cultural knowledge base. First comprehensive AI for Kifuliiru language.'
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
