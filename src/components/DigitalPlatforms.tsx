export default function DigitalPlatforms() {

  const platforms = [
    {
      name: 'Kifuliiru.net',
      subtitle: 'Tusome i Kifuliiru (Let\'s learn Kifuliiru)',
      description: 'Purely in Kifuliiru - our first platform where we started writing numbers one by one. Numbers from here were used to generate formulas. 100% content written by Ayivugwe Kabemba Mukome.',
      status: 'Active',
      type: 'Learning Platform'
    },
    {
      name: 'dictionary.kifuliiru.net',
      description: 'Kifuliiru dictionary and language reference.',
      status: 'Active',
      type: 'Dictionary'
    },
    {
      name: 'kifuliiru.com',
      description: 'Main Kifuliiru language website.',
      status: 'Active',
      type: 'Website'
    },
    {
      name: 'tabula.kifuliiru.com',
      description: 'Web portal/web app for admins and contributors.',
      status: 'Active',
      type: 'Web App'
    },
    {
      name: 'lola.kifuliiru.com',
      description: 'Social media platform for Kifuliiru community.',
      status: 'Active',
      type: 'Social Media'
    },
    {
      name: 'imyazi.com',
      description: 'News website in Kifuliiru (under development).',
      status: 'Development',
      type: 'News Platform'
    },
    {
      name: 'Kifuliiru Ndeto ngale',
      subtitle: 'https://ibufuliiru.wixstudio.com/kifuliiru',
      description: '100% content in Kifuliiru. Designed and content written by Ayivugwe Kabemba Mukome.',
      status: 'Active',
      type: 'Educational Site'
    },
    {
      name: 'Ibufuliiru / Tumenye Ibufuliiru',
      subtitle: 'https://ibufuliiru.wixstudio.com/ibufuliiru',
      description: '100% content in Kifuliiru. Designed and content written by Ayivugwe Kabemba Mukome.',
      status: 'Active',
      type: 'Cultural Site'
    },
    {
      name: 'Radio Ibufuliiru',
      description: 'Available on multiple platforms: Substack, Spotify, Amazon Music, Audible.com, and more.',
      status: 'Active',
      type: 'Audio Platform'
    },
    {
      name: 'Imyazi mu Kifuliiru',
      description: 'News and content in Kifuliiru on Substack.',
      status: 'Active',
      type: 'Newsletter'
    },
    {
      name: 'Kifuliiru.org',
      description: 'Official website for Kifuliiru Lab - this website.',
      status: 'Active',
      type: 'Lab Website'
    },
    {
      name: 'Kifuliiru App',
      description: 'Mobile application built with Flutter for Android and iOS. Currently in development and testing phase.',
      status: 'Development',
      type: 'Mobile App'
    }
  ]

  return (
    <section id="digital-platforms" aria-labelledby="platforms-heading">
      <h2 id="platforms-heading">Digital Ecosystem</h2>
      <p>
        Our comprehensive digital ecosystem spans <strong>12 platforms</strong> across multiple domains, 
        creating a robust infrastructure for Kifuliiru language preservation and community engagement.
      </p>
      
      <div className="platforms-grid">
        {platforms.map((platform, index) => (
          <div key={index} className="platform-card">
            <div className="platform-header">
              <h3 className="platform-name">{platform.name}</h3>
              {platform.subtitle && (
                <p className="platform-subtitle">
                  {platform.subtitle.startsWith('http') ? (
                    <a href={platform.subtitle} target="_blank" rel="noopener noreferrer">
                      {platform.subtitle}
                    </a>
                  ) : (
                    platform.subtitle
                  )}
                </p>
              )}
              <div className="platform-meta">
                <span className={`platform-status status-${platform.status.toLowerCase()}`}>
                  {platform.status}
                </span>
                <span className="platform-type">{platform.type}</span>
              </div>
            </div>
            <p className="platform-description">{platform.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
