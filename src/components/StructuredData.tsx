export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kifuliiru.org/#organization",
        "name": "Kifuliiru Lab",
        "alternateName": "Kifuliiru Language Laboratory",
        "url": "https://kifuliiru.org",
        "logo": {
          "@type": "ImageObject",
          "url": "https://kifuliiru.org/logo.png",
          "width": 300,
          "height": 300
        },
        "description": "Specialized research laboratory preserving the Kifuliiru language through a comprehensive digital ecosystem including websites, web apps, mobile apps, voice recordings, and educational materials for the Bafuliiru people of Ibufuliiru in Uvira, South Kivu, Democratic Republic of Congo.",
        "foundingDate": "2025-10",
        "parentOrganization": {
          "@type": "Organization",
          "name": "Wekify LLC",
          "url": "https://wekify.com"
        },
        "address": [
          {
            "@type": "PostalAddress",
            "addressLocality": "Spokane",
            "addressRegion": "WA",
            "addressCountry": "US"
          },
          {
            "@type": "PostalAddress",
            "addressLocality": "Uvira",
            "addressRegion": "South Kivu",
            "addressCountry": "CD",
            "description": "Primary research location - Ibufuliiru, Bafuliiru homeland"
          }
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-XXX-XXX-XXXX",
            "contactType": "general",
            "email": "lab@kifuliiru.org"
          },
          {
            "@type": "ContactPoint",
            "contactType": "partnerships",
            "email": "partnerships@wekify.com"
          }
        ],
        "sameAs": [
          "https://wekify.com",
          "https://github.com/Ayivugwe/kifuliiru-lab-website"
        ],
        "areaServed": {
          "@type": "Place",
          "name": "Global"
        },
        "knowsAbout": [
          "Indigenous Language Preservation",
          "Computational Linguistics",
          "Template-based Content Generation",
          "Community Language Engagement",
          "Kifuliiru Language",
          "Bafuliiru People",
          "Ibufuliiru",
          "Uvira",
          "South Kivu",
          "Democratic Republic of Congo",
          "Bantu Languages",
          "Endangered Language Documentation",
          "AI for Under-resourced Languages",
          "Digital Language Ecosystem",
          "Mobile Language Applications",
          "Voice Recording Technology",
          "Web Application Development",
          "Multimedia Language Learning"
        ]
      },
      {
        "@type": "ResearchOrganization",
        "@id": "https://kifuliiru.org/#research-org",
        "name": "Kifuliiru Lab",
        "parentOrganization": {
          "@type": "Organization",
          "name": "Wekify LLC"
        },
        "researchArea": [
          "Computational Linguistics",
          "Indigenous Language Preservation",
          "Template-based Content Generation",
          "Community-centered Technology",
          "AI for Under-resourced Languages",
          "Kifuliiru Language Studies",
          "Bafuliiru Community Engagement",
          "Bantu Language Documentation",
          "Digital Language Ecosystem Development",
          "Mobile Language Application Design",
          "Voice Recording and Audio Preservation",
          "Web Application Architecture",
          "Multimedia Language Learning Systems"
        ],
        "foundingDate": "2025-10",
        "description": "Research laboratory developing comprehensive digital ecosystems for indigenous language preservation including websites, web apps, mobile apps, voice recordings, and educational materials, specifically focused on the Kifuliiru language and Bafuliiru community in Uvira, South Kivu, DRC."
      },
      {
        "@type": "WebSite",
        "@id": "https://kifuliiru.org/#website",
        "url": "https://kifuliiru.org",
        "name": "Kifuliiru Lab",
        "description": "Indigenous Language Preservation Research Laboratory",
        "publisher": {
          "@id": "https://kifuliiru.org/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://kifuliiru.org/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://kifuliiru.org/#webpage",
        "url": "https://kifuliiru.org",
        "name": "Kifuliiru Lab | Indigenous Language Preservation Research",
        "isPartOf": {
          "@id": "https://kifuliiru.org/#website"
        },
        "about": {
          "@id": "https://kifuliiru.org/#organization"
        },
        "description": "Specialized research laboratory preserving the Kifuliiru language through computational methods. Part of Wekify LLC's global mission to revitalize endangered languages.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://kifuliiru.org"
            }
          ]
        }
      },
      {
        "@type": "Person",
        "@id": "https://kifuliiru.org/#person",
        "name": "Ayivugwe Kabemba Mukome",
        "jobTitle": "Director & Founder",
        "worksFor": {
          "@id": "https://kifuliiru.org/#organization"
        },
        "description": "Native Speaker of Kifuliiru and Research Lead at Kifuliiru Lab, member of the Bafuliiru people from Ibufuliiru in Uvira, South Kivu",
        "knowsAbout": [
          "Kifuliiru Language",
          "Bafuliiru Culture",
          "Ibufuliiru",
          "Indigenous Language Preservation",
          "Computational Linguistics",
          "Community Engagement"
        ]
      },
      {
        "@type": "ResearchProject",
        "name": "Kifuliiru Language Preservation Project",
        "description": "Comprehensive project to preserve and revitalize the Kifuliiru language spoken by the Bafuliiru people of Ibufuliiru in Uvira, South Kivu, Democratic Republic of Congo, through computational methods and community engagement.",
        "funder": {
          "@type": "Organization",
          "name": "Wekify LLC"
        },
        "member": {
          "@type": "Person",
          "name": "Ayivugwe Kabemba Mukome"
        },
        "startDate": "2021",
        "researchArea": "Indigenous Language Preservation"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
