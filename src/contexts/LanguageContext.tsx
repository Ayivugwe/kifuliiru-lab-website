'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type Language = 'en' | 'fr' | 'sw' | 'kf'

type TranslationKey = 
  | 'header.title' | 'header.tagline'
  | 'nav.about' | 'nav.cultural' | 'nav.vision' | 'nav.research' | 'nav.projects' | 'nav.publications' | 'nav.team' | 'nav.contact'
  | 'about.title' | 'about.description1' | 'about.description2'
  | 'stats.books' | 'stats.data' | 'stats.validated' | 'stats.platforms' | 'stats.voice' | 'stats.founded'
  | 'cultural.title' | 'cultural.language_people' | 'cultural.geographical' | 'cultural.situation' | 'cultural.significance' | 'cultural.saying'
  | 'vision.title' | 'vision.mission' | 'vision.kifuliiru_lab' | 'vision.future_labs' | 'vision.scalable'
  | 'research.title' | 'research.question' | 'research.methodology' | 'research.validation' | 'research.hypothesis'
  | 'projects.title' | 'projects.web_apps' | 'projects.mobile_app' | 'projects.voice_recording' | 'projects.connected' | 'projects.template_generation' | 'projects.community_platform' | 'projects.quality_assurance' | 'projects.scalability'
  | 'publications.title' | 'publications.template_methodology' | 'publications.meta'
  | 'team.title' | 'team.lead' | 'team.role'
  | 'contact.title' | 'contact.description' | 'contact.website' | 'contact.email' | 'contact.partnerships' | 'contact.parent' | 'contact.research_interests'
  | 'footer.text'
  | '404.title' | '404.message' | '404.description' | '404.home' | '404.about' | '404.footer1' | '404.footer2'

type Translations = Record<TranslationKey, string>

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation data
const translations: Record<Language, Translations> = {
  en: {
    // Header
    'header.title': 'KIFULIIRU LAB',
    'header.tagline': 'Kifuliiru Language Laboratory - Kifuliiru Language Preservation Through Computational Methods and Community Engagement',
    
    // Navigation
    'nav.about': 'About',
    'nav.cultural': 'Language & People',
    'nav.vision': 'Wekify Vision',
    'nav.research': 'Research',
    'nav.projects': 'Projects',
    'nav.publications': 'Publications',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    
    // About
    'about.title': 'About Kifuliiru Lab',
    'about.description1': 'Kifuliiru Lab is a specialized Kifuliiru language preservation laboratory under Wekify LLC, dedicated to preserving and revitalizing the Kifuliiru language spoken by the Bafuliiru people of Ibufuliiru in Uvira, South Kivu, Democratic Republic of Congo. Through computational linguistics and template-based generation methods, our lab works directly with the Bafuliiru community to create comprehensive educational resources in their native language.',
    'about.description2': 'Our lab\'s work demonstrates that systematic content generation, when paired with native speaker validation from the Bafuliiru community, can produce educational materials at unprecedented scale—transforming the Kifuliiru language from minimal documentation to a comprehensive digital language ecosystem including websites, web applications, mobile apps, voice recordings, and connected resources. This Kifuliiru Lab methodology will be replicated across other language laboratories as Wekify expands to serve additional endangered languages and their communities.',
    
    // Stats
    'stats.books': 'Books Generated',
    'stats.data': 'Training Data',
    'stats.validated': 'Community Validated',
    'stats.platforms': 'Digital Platforms',
    'stats.voice': 'Recordings Available',
    'stats.founded': 'Founded',
    
    // Cultural Context
    'cultural.title': 'Kifuliiru Language & Bafuliiru People',
    'cultural.language_people': 'Language & People',
    'cultural.geographical': 'Geographical & Political Hierarchy',
    'cultural.situation': 'Current Situation of Kifuliiru',
    'cultural.significance': 'Cultural Significance',
    'cultural.saying': '"Kifuliiru kigayamaho" — "Kifuliiru will shine" — This traditional saying reflects the Bafuliiru people\'s hope and determination to preserve their language and cultural identity for future generations.',
    
    // Wekify Vision
    'vision.title': 'Wekify LLC Vision',
    'vision.mission': 'Our Mission',
    'vision.kifuliiru_lab': 'Kifuliiru Lab',
    'vision.future_labs': 'Future Language Laboratories',
    'vision.scalable': 'Scalable Framework',
    
    // Research
    'research.title': 'Research Focus',
    'research.question': 'Primary Question',
    'research.methodology': 'Methodology',
    'research.validation': 'Validation',
    'research.hypothesis': 'Hypothesis',
    
    // Projects
    'projects.title': 'Active Projects',
    'projects.web_apps': 'Web Applications Suite',
    'projects.mobile_app': 'Mobile Application',
    'projects.voice_recording': 'Voice Recording System',
    'projects.connected': 'Connected Resource Network',
    'projects.template_generation': 'Template-Based Content Generation',
    'projects.community_platform': 'Community Validation Platform',
    'projects.quality_assurance': 'Quality Assurance System',
    'projects.scalability': 'Scalability Framework',
    
    // Publications
    'publications.title': 'Publications',
    'publications.template_methodology': 'Template-Based Generation for Under-Resourced Languages: A Case Study of Kifuliiru',
    'publications.meta': 'Technical Report • October 2025 • Kifuliiru Lab',
    
    // Team
    'team.title': 'Team',
    'team.lead': 'Research Lead',
    'team.role': 'Native Speaker of Kifuliiru and Research Lead at Kifuliiru Lab, member of the Bafuliiru people from Ibufuliiru in Uvira, South Kivu, specializing in Kifuliiru language preservation',
    
    // Contact
    'contact.title': 'Contact & Collaboration',
    'contact.description': 'We welcome collaboration with researchers, institutions, and language communities interested in establishing their own language laboratories under the Wekify LLC framework. Our proven Kifuliiru Lab methodology can be adapted for any endangered language.',
    'contact.website': 'Website',
    'contact.email': 'Email',
    'contact.partnerships': 'New Language Labs',
    'contact.parent': 'Parent Company',
    'contact.research_interests': 'Research Interests',
    
    // Footer
    'footer.text': 'KIFULIIRU LAB • A specialized language laboratory of Wekify LLC',
    
    // 404 Page
    '404.title': 'Page Not Found',
    '404.message': '"Kifuliiru kigayamaho" — This page has wandered away',
    '404.description': 'The page you\'re looking for doesn\'t exist in our digital language laboratory. Let\'s get you back to exploring Kifuliiru language preservation.',
    '404.home': '🏠 Home',
    '404.about': '🔬 About Lab',
    '404.footer1': 'Kifuliiru Lab • A specialized language laboratory of Wekify LLC',
    '404.footer2': 'Preserving the Kifuliiru language through computational methods',
  },
  
  fr: {
    // Header
    'header.title': 'LABORATOIRE KIFULIIRU',
    'header.tagline': 'Laboratoire de Langue Kifuliiru - Préservation de la Langue Kifuliiru par des Méthodes Computationnelles et l\'Engagement Communautaire',
    
    // Navigation
    'nav.about': 'À Propos',
    'nav.cultural': 'Langue & Peuple',
    'nav.vision': 'Vision Wekify',
    'nav.research': 'Recherche',
    'nav.projects': 'Projets',
    'nav.publications': 'Publications',
    'nav.team': 'Équipe',
    'nav.contact': 'Contact',
    
    // About
    'about.title': 'À Propos du Laboratoire Kifuliiru',
    'about.description1': 'Le Laboratoire Kifuliiru est un laboratoire spécialisé de préservation de la langue Kifuliiru sous Wekify LLC, dédié à la préservation et à la revitalisation de la langue Kifuliiru parlée par le peuple Bafuliiru d\'Ibufuliiru à Uvira, Sud-Kivu, République Démocratique du Congo. Grâce à la linguistique computationnelle et aux méthodes de génération basées sur des modèles, notre laboratoire travaille directement avec la communauté Bafuliiru pour créer des ressources éducatives complètes dans leur langue maternelle.',
    'about.description2': 'Le travail de notre laboratoire démontre que la génération systématique de contenu, associée à la validation des locuteurs natifs de la communauté Bafuliiru, peut produire des matériels éducatifs à une échelle sans précédent—transformant la langue Kifuliiru d\'une documentation minimale en un écosystème linguistique numérique complet incluant des sites web, des applications web, des applications mobiles, des enregistrements vocaux et des ressources connectées. Cette méthodologie du Laboratoire Kifuliiru sera répliquée dans d\'autres laboratoires linguistiques alors que Wekify s\'étend pour servir d\'autres langues en danger et leurs communautés.',
    
    // Stats
    'stats.books': 'Livres Générés',
    'stats.data': 'Données d\'Entraînement',
    'stats.validated': 'Validé par la Communauté',
    'stats.platforms': 'Plateformes Numériques',
    'stats.voice': 'Enregistrements Disponibles',
    'stats.founded': 'Fondé',
    
    // Cultural Context
    'cultural.title': 'Langue Kifuliiru & Peuple Bafuliiru',
    'cultural.language_people': 'Langue & Peuple',
    'cultural.geographical': 'Hiérarchie Géographique & Politique',
    'cultural.situation': 'Situation Actuelle du Kifuliiru',
    'cultural.significance': 'Signification Culturelle',
    'cultural.saying': '"Kifuliiru kigayamaho" — "Le Kifuliiru brillera" — Ce dicton traditionnel reflète l\'espoir et la détermination du peuple Bafuliiru de préserver leur langue et leur identité culturelle pour les générations futures.',
    
    // Wekify Vision
    'vision.title': 'Vision Wekify LLC',
    'vision.mission': 'Notre Mission',
    'vision.kifuliiru_lab': 'Laboratoire Kifuliiru',
    'vision.future_labs': 'Futurs Laboratoires Linguistiques',
    'vision.scalable': 'Cadre Évolutif',
    
    // Research
    'research.title': 'Focus de Recherche',
    'research.question': 'Question Principale',
    'research.methodology': 'Méthodologie',
    'research.validation': 'Validation',
    'research.hypothesis': 'Hypothèse',
    
    // Projects
    'projects.title': 'Projets Actifs',
    'projects.web_apps': 'Suite d\'Applications Web',
    'projects.mobile_app': 'Application Mobile',
    'projects.voice_recording': 'Système d\'Enregistrement Vocal',
    'projects.connected': 'Réseau de Ressources Connectées',
    'projects.template_generation': 'Génération de Contenu Basée sur des Modèles',
    'projects.community_platform': 'Plateforme de Validation Communautaire',
    'projects.quality_assurance': 'Système d\'Assurance Qualité',
    'projects.scalability': 'Cadre d\'Évolutivité',
    
    // Publications
    'publications.title': 'Publications',
    'publications.template_methodology': 'Génération Basée sur des Modèles pour les Langues Sous-Représentées : Une Étude de Cas du Kifuliiru',
    'publications.meta': 'Rapport Technique • Octobre 2025 • Laboratoire Kifuliiru',
    
    // Team
    'team.title': 'Équipe',
    'team.lead': 'Chef de Recherche',
    'team.role': 'Locuteur Natif du Kifuliiru et Chef de Recherche au Laboratoire Kifuliiru, membre du peuple Bafuliiru d\'Ibufuliiru à Uvira, Sud-Kivu, spécialisé dans la préservation de la langue Kifuliiru',
    
    // Contact
    'contact.title': 'Contact & Collaboration',
    'contact.description': 'Nous accueillons la collaboration avec des chercheurs, des institutions et des communautés linguistiques intéressées par l\'établissement de leurs propres laboratoires linguistiques sous le cadre Wekify LLC. Notre méthodologie éprouvée du Laboratoire Kifuliiru peut être adaptée à toute langue en danger.',
    'contact.website': 'Site Web',
    'contact.email': 'Email',
    'contact.partnerships': 'Nouveaux Laboratoires Linguistiques',
    'contact.parent': 'Société Mère',
    'contact.research_interests': 'Intérêts de Recherche',
    
    // Footer
    'footer.text': 'LABORATOIRE KIFULIIRU • Un laboratoire linguistique spécialisé de Wekify LLC',
    
    // 404 Page
    '404.title': 'Page Non Trouvée',
    '404.message': '"Kifuliiru kigayamaho" — Cette page s\'est égarée',
    '404.description': 'La page que vous recherchez n\'existe pas dans notre laboratoire linguistique numérique. Revenons à l\'exploration de la préservation de la langue Kifuliiru.',
    '404.home': '🏠 Accueil',
    '404.about': '🔬 À Propos du Lab',
    '404.footer1': 'Laboratoire Kifuliiru • Un laboratoire linguistique spécialisé de Wekify LLC',
    '404.footer2': 'Préservation de la langue Kifuliiru par des méthodes computationnelles',
  },
  
  sw: {
    // Header
    'header.title': 'LABORATORI YA KIFULIIRU',
    'header.tagline': 'Laboratori ya Lugha ya Kifuliiru - Kuhifadhi Lugha ya Kifuliiru kupitia Mbinu za Hesabu na Ushiriki wa Jamii',
    
    // Navigation
    'nav.about': 'Kuhusu',
    'nav.cultural': 'Lugha & Watu',
    'nav.vision': 'Maono ya Wekify',
    'nav.research': 'Utafiti',
    'nav.projects': 'Miradi',
    'nav.publications': 'Machapisho',
    'nav.team': 'Timu',
    'nav.contact': 'Mawasiliano',
    
    // About
    'about.title': 'Kuhusu Laboratori ya Kifuliiru',
    'about.description1': 'Laboratori ya Kifuliiru ni maabara maalum ya kuhifadhi lugha ya Kifuliiru chini ya Wekify LLC, inayojitolea kuhifadhi na kuirejesha lugha ya Kifuliiru inayozungumzwa na watu wa Bafuliiru wa Ibufuliiru huko Uvira, Kivu Kusini, Jamhuri ya Kidemokrasia ya Kongo. Kupitia isimu ya hesabu na mbinu za uzalishaji wa kiolezo, maabara yetu inafanya kazi moja kwa moja na jamii ya Bafuliiru kuunda rasilimali za elimu kamili katika lugha yao ya asili.',
    'about.description2': 'Kazi ya maabara yetu inaonyesha kwamba uzalishaji wa maudhui wa kimfumo, unapounganishwa na uthibitisho wa wazungumzaji wa asili kutoka jamii ya Bafuliiru, unaweza kutoa vifaa vya elimu kwa kiwango cha juu zaidi—kubadilisha lugha ya Kifuliiru kutoka kwa hati kidogo hadi mfumo wa lugha wa kidijitali unaojumuisha tovuti, programu za wavuti, programu za simu, rekodi za sauti, na rasilimali zilizounganishwa. Mbinu hii ya Laboratori ya Kifuliiru itarudiwa katika maabara zingine za lugha Wekify inapopanua kuhudumia lugha zingine zilizo hatarini na jamii zao.',
    
    // Stats
    'stats.books': 'Vitabu Vilizozalishwa',
    'stats.data': 'Data ya Mafunzo',
    'stats.validated': 'Imethibitishwa na Jamii',
    'stats.platforms': 'Jukwaa za Kidijitali',
    'stats.voice': 'Rekodi Zinazopatikana',
    'stats.founded': 'Iliundwa',
    
    // Cultural Context
    'cultural.title': 'Lugha ya Kifuliiru & Watu wa Bafuliiru',
    'cultural.language_people': 'Lugha & Watu',
    'cultural.geographical': 'Mpangilio wa Kijiografia & Kisiasa',
    'cultural.situation': 'Hali ya Sasa ya Kifuliiru',
    'cultural.significance': 'Maana ya Kitamaduni',
    'cultural.saying': '"Kifuliiru kigayamaho" — "Kifuliiru kitang\'aa" — Mithali hii ya kitamaduni inaonyesha matumaini na azimio la watu wa Bafuliiru kuhifadhi lugha yao na utambulisho wao wa kitamaduni kwa vizazi vijavyo.',
    
    // Wekify Vision
    'vision.title': 'Maono ya Wekify LLC',
    'vision.mission': 'Dhamira Yetu',
    'vision.kifuliiru_lab': 'Laboratori ya Kifuliiru',
    'vision.future_labs': 'Maabara za Lugha za Baadaye',
    'vision.scalable': 'Mfumo wa Kupanuka',
    
    // Research
    'research.title': 'Lengo la Utafiti',
    'research.question': 'Swali la Msingi',
    'research.methodology': 'Mbinu',
    'research.validation': 'Uthibitisho',
    'research.hypothesis': 'Nadharia',
    
    // Projects
    'projects.title': 'Miradi ya Kufanya',
    'projects.web_apps': 'Seti ya Programu za Wavuti',
    'projects.mobile_app': 'Programu ya Simu',
    'projects.voice_recording': 'Mfumo wa Kurekodi Sauti',
    'projects.connected': 'Mtandao wa Rasilimali Zilizounganishwa',
    'projects.template_generation': 'Uzalishaji wa Maudhui wa Kiolezo',
    'projects.community_platform': 'Jukwaa la Uthibitisho wa Jamii',
    'projects.quality_assurance': 'Mfumo wa Hakikisho la Ubora',
    'projects.scalability': 'Mfumo wa Kupanuka',
    
    // Publications
    'publications.title': 'Machapisho',
    'publications.template_methodology': 'Uzalishaji wa Kiolezo kwa Lugha Zisizo na Rasilimali: Uchunguzi wa Kifuliiru',
    'publications.meta': 'Ripoti ya Kiufundi • Oktoba 2025 • Laboratori ya Kifuliiru',
    
    // Team
    'team.title': 'Timu',
    'team.lead': 'Mkurugenzi wa Utafiti',
    'team.role': 'Mzungumzaji wa Asili wa Kifuliiru na Mkurugenzi wa Utafiti katika Laboratori ya Kifuliiru, mwanachama wa watu wa Bafuliiru wa Ibufuliiru huko Uvira, Kivu Kusini, mtaalamu wa kuhifadhi lugha ya Kifuliiru',
    
    // Contact
    'contact.title': 'Mawasiliano & Ushirikiano',
    'contact.description': 'Tunakaribisha ushirikiano na watafiti, taasisi, na jamii za lugha zinazopenda kuanzisha maabara zao za lugha chini ya mfumo wa Wekify LLC. Mbinu yetu ya kuthibitishwa ya Laboratori ya Kifuliiru inaweza kubadilishwa kwa lugha yoyote iliyo hatarini.',
    'contact.website': 'Tovuti',
    'contact.email': 'Barua pepe',
    'contact.partnerships': 'Maabara Mpya za Lugha',
    'contact.parent': 'Kampuni ya Mzazi',
    'contact.research_interests': 'Maslahi ya Utafiti',
    
    // Footer
    'footer.text': 'LABORATORI YA KIFULIIRU • Maabara maalum ya lugha ya Wekify LLC',
    
    // 404 Page
    '404.title': 'Ukurasa Haupatikani',
    '404.message': '"Kifuliiru kigayamaho" — Ukurasa huu umepotea',
    '404.description': 'Ukurasa unaoutafuta haupo katika maabara yetu ya lugha ya kidijitali. Turudi kuchunguza kuhifadhi lugha ya Kifuliiru.',
    '404.home': '🏠 Nyumbani',
    '404.about': '🔬 Kuhusu Lab',
    '404.footer1': 'Laboratori ya Kifuliiru • Maabara maalum ya lugha ya Wekify LLC',
    '404.footer2': 'Kuhifadhi lugha ya Kifuliiru kupitia mbinu za hesabu',
  },
  
  kf: {
    // Kifuliiru translations (keeping in English for now as requested)
    'header.title': 'KIFULIIRU LAB',
    'header.tagline': 'Kifuliiru Language Laboratory - Kifuliiru Language Preservation Through Computational Methods and Community Engagement',
    
    // Navigation
    'nav.about': 'About',
    'nav.cultural': 'Language & People',
    'nav.vision': 'Wekify Vision',
    'nav.research': 'Research',
    'nav.projects': 'Projects',
    'nav.publications': 'Publications',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    
    // About
    'about.title': 'About Kifuliiru Lab',
    'about.description1': 'Kifuliiru Lab is a specialized Kifuliiru language preservation laboratory under Wekify LLC, dedicated to preserving and revitalizing the Kifuliiru language spoken by the Bafuliiru people of Ibufuliiru in Uvira, South Kivu, Democratic Republic of Congo. Through computational linguistics and template-based generation methods, our lab works directly with the Bafuliiru community to create comprehensive educational resources in their native language.',
    'about.description2': 'Our lab\'s work demonstrates that systematic content generation, when paired with native speaker validation from the Bafuliiru community, can produce educational materials at unprecedented scale—transforming the Kifuliiru language from minimal documentation to a comprehensive digital language ecosystem including websites, web applications, mobile apps, voice recordings, and connected resources. This Kifuliiru Lab methodology will be replicated across other language laboratories as Wekify expands to serve additional endangered languages and their communities.',
    
    // Stats
    'stats.books': 'Books Generated',
    'stats.data': 'Training Data',
    'stats.validated': 'Community Validated',
    'stats.platforms': 'Digital Platforms',
    'stats.voice': 'Recordings Available',
    'stats.founded': 'Founded',
    
    // Cultural Context
    'cultural.title': 'Kifuliiru Language & Bafuliiru People',
    'cultural.language_people': 'Language & People',
    'cultural.geographical': 'Geographical & Political Hierarchy',
    'cultural.situation': 'Current Situation of Kifuliiru',
    'cultural.significance': 'Cultural Significance',
    'cultural.saying': '"Kifuliiru kigayamaho" — "Kifuliiru will shine" — This traditional saying reflects the Bafuliiru people\'s hope and determination to preserve their language and cultural identity for future generations.',
    
    // Wekify Vision
    'vision.title': 'Wekify LLC Vision',
    'vision.mission': 'Our Mission',
    'vision.kifuliiru_lab': 'Kifuliiru Lab',
    'vision.future_labs': 'Future Language Laboratories',
    'vision.scalable': 'Scalable Framework',
    
    // Research
    'research.title': 'Research Focus',
    'research.question': 'Primary Question',
    'research.methodology': 'Methodology',
    'research.validation': 'Validation',
    'research.hypothesis': 'Hypothesis',
    
    // Projects
    'projects.title': 'Active Projects',
    'projects.web_apps': 'Web Applications Suite',
    'projects.mobile_app': 'Mobile Application',
    'projects.voice_recording': 'Voice Recording System',
    'projects.connected': 'Connected Resource Network',
    'projects.template_generation': 'Template-Based Content Generation',
    'projects.community_platform': 'Community Validation Platform',
    'projects.quality_assurance': 'Quality Assurance System',
    'projects.scalability': 'Scalability Framework',
    
    // Publications
    'publications.title': 'Publications',
    'publications.template_methodology': 'Template-Based Generation for Under-Resourced Languages: A Case Study of Kifuliiru',
    'publications.meta': 'Technical Report • October 2025 • Kifuliiru Lab',
    
    // Team
    'team.title': 'Team',
    'team.lead': 'Research Lead',
    'team.role': 'Native Speaker of Kifuliiru and Research Lead at Kifuliiru Lab, member of the Bafuliiru people from Ibufuliiru in Uvira, South Kivu, specializing in Kifuliiru language preservation',
    
    // Contact
    'contact.title': 'Contact & Collaboration',
    'contact.description': 'We welcome collaboration with researchers, institutions, and language communities interested in establishing their own language laboratories under the Wekify LLC framework. Our proven Kifuliiru Lab methodology can be adapted for any endangered language.',
    'contact.website': 'Website',
    'contact.email': 'Email',
    'contact.partnerships': 'New Language Labs',
    'contact.parent': 'Parent Company',
    'contact.research_interests': 'Research Interests',
    
    // Footer
    'footer.text': 'KIFULIIRU LAB • A specialized language laboratory of Wekify LLC',
    
    // 404 Page
    '404.title': 'Page Not Found',
    '404.message': '"Kifuliiru kigayamaho" — This page has wandered away',
    '404.description': 'The page you\'re looking for doesn\'t exist in our digital language laboratory. Let\'s get you back to exploring Kifuliiru language preservation.',
    '404.home': '🏠 Home',
    '404.about': '🔬 About Lab',
    '404.footer1': 'Kifuliiru Lab • A specialized language laboratory of Wekify LLC',
    '404.footer2': 'Preserving the Kifuliiru language through computational methods',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get language from localStorage or default to English
    const savedLanguage = localStorage.getItem('kifuliiru-language') as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('kifuliiru-language', language)
    }
  }, [language, mounted])

  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] || translations['en'][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    // Return default language for SSR
    return { 
      language: 'en' as Language, 
      setLanguage: () => {}, 
      t: (key: TranslationKey) => translations['en'][key] || key 
    }
  }
  return context
}
