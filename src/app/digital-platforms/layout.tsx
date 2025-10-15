import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Platforms | Kifuliiru Language Ecosystem',
  description: 'Discover our comprehensive digital ecosystem including websites, web applications, mobile apps, voice recordings, and connected resources for Kifuliiru language learning.',
}

export default function DigitalPlatformsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
