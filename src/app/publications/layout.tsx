import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Publications | Research Papers and Documentation',
  description: 'Browse our publications, research papers, and documentation on Kifuliiru language preservation, computational linguistics, and endangered language revitalization.',
}

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
