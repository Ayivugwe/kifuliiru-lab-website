import type { Metadata } from 'next'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import Analytics from '@/components/Analytics'
import ClientThemeProvider from '@/components/ClientThemeProvider'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'Kifuliiru Lab | Kifuliiru Language Preservation Research',
        description: 'Kifuliiru Language Laboratory preserves the Kifuliiru language through a comprehensive digital ecosystem including websites, web apps, mobile apps, voice recordings, and 141,000+ educational materials for the Bafuliiru people of Uvira, South Kivu, DRC.',
  keywords: [
    'Kifuliiru language preservation',
    'computational linguistics',
    'endangered language documentation',
    'language revitalization technology',
    'Kifuliiru language',
    'Bafuliiru people',
    'Abafuliiru',
    'Ibufuliiru',
    'Uvira',
    'South Kivu',
    'Democratic Republic of Congo',
    'DRC',
    'Congo languages',
    'Bantu languages',
    'template-based content generation',
    'community language preservation',
    'AI for under-resourced languages',
    'Kifuliiru language preservation research',
    'indigenous language technology',
    'language documentation methods',
    'community-centered technology',
    'cultural knowledge documentation',
    'Kifuliiru language preservation laboratory',
    'Kifuliiru Language Laboratory',
    'Kifuliiru Lab methodology',
    'language laboratory methodology',
    'Wekify LLC',
    'African languages',
    'traditional languages',
    'Uvira Kifuliiru language preservation',
    'South Kivu Kifuliiru languages',
    'Congo Kifuliiru language research',
    'digital language ecosystem',
    'language learning apps',
    'mobile language apps',
    'voice recordings',
    'audio language preservation',
    'web applications',
    'connected resources',
    'language technology platform',
    'multimedia language learning',
    'offline language resources'
  ],
  authors: [{ name: 'Ayivugwe Kabemba Mukome', url: 'https://kifuliiru.org' }],
  creator: 'Kifuliiru Lab',
  publisher: 'Wekify LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kifuliiru.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Kifuliiru Lab | Kifuliiru Language Preservation Research',
    description: 'Kifuliiru Lab - Kifuliiru Language Laboratory preserving the Kifuliiru language through computational methods. Part of Wekify LLC\'s global mission to revitalize endangered languages.',
    url: 'https://kifuliiru.org',
    siteName: 'Kifuliiru Lab',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kifuliiru Lab - Indigenous Language Preservation Research',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kifuliiru Lab | Kifuliiru Language Preservation Research',
    description: 'Kifuliiru Lab - Kifuliiru Language Laboratory preserving the Kifuliiru language through computational linguistics and community engagement. Part of Wekify LLC\'s global language preservation mission.',
    images: ['/og-image.jpg'],
    creator: '@kifuliirulab',
    site: '@wekifyllc',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'Research',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/Kifuliiru-Lab-Logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Kifuliiru-Lab-Logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <LanguageProvider>
          <ClientThemeProvider>
            <StructuredData />
            <Analytics />
            {children}
          </ClientThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}