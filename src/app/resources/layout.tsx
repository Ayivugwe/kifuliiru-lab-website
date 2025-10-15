import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources & Documentation | Kifuliiru Language Learning Materials',
  description: 'Access comprehensive Kifuliiru language resources including educational materials, digital platforms, audio resources, research documentation, and community tools for language learning and preservation.',
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
