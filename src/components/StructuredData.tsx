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
        "description": "Specialized research laboratory preserving the Kifuliiru language through computational methods and community engagement.",
        "foundingDate": "2021",
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
            "addressCountry": "CD"
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
          "Endangered Language Documentation",
          "AI for Under-resourced Languages"
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
          "AI for Under-resourced Languages"
        ],
        "foundingDate": "2021",
        "description": "Research laboratory developing scalable methodologies for indigenous language documentation and preservation through computational methods."
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
        "description": "Native Speaker and Research Lead at Kifuliiru Lab",
        "knowsAbout": [
          "Kifuliiru Language",
          "Indigenous Language Preservation",
          "Computational Linguistics",
          "Community Engagement"
        ]
      },
      {
        "@type": "ResearchProject",
        "name": "Kifuliiru Language Preservation Project",
        "description": "Comprehensive project to preserve and revitalize the Kifuliiru language through computational methods and community engagement.",
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
