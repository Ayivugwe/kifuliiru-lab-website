import type { Metadata } from 'next'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  title: 'Kifuliiru Lab | Indigenous Language Preservation Research',
  description: 'Kifuliiru Lab preserves the Kifuliiru language spoken by the Bafuliiru people of Ibufuliiru in Uvira, South Kivu, DRC. Using computational linguistics and community engagement to create 141,000+ educational materials for this endangered Bantu language.',
  keywords: [
    'indigenous language preservation',
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
    'language preservation research',
    'indigenous language technology',
    'language documentation methods',
    'community-centered technology',
    'cultural knowledge documentation',
    'language preservation laboratory',
    'Wekify LLC',
    'African languages',
    'traditional languages',
    'Uvira language preservation',
    'South Kivu languages',
    'Congo language research'
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
    title: 'Kifuliiru Lab | Indigenous Language Preservation Research',
    description: 'Specialized research laboratory preserving the Kifuliiru language through computational methods. Part of Wekify LLC\'s global mission to revitalize endangered languages.',
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
    title: 'Kifuliiru Lab | Indigenous Language Preservation Research',
    description: 'Preserving the Kifuliiru language through computational linguistics and community engagement. Part of Wekify LLC\'s global language preservation mission.',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <StructuredData />
        <Analytics />
        {children}
      </body>
    </html>
  )
}