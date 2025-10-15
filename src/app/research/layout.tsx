import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research | Computational Linguistics and Language Preservation',
  description: 'Explore our research methodology in computational linguistics and template-based generation for preserving the Kifuliiru language through systematic content generation.',
}

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
