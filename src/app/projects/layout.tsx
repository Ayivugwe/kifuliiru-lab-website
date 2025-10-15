import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Active Language Preservation Projects',
  description: 'View our active language preservation projects including educational materials, digital resources, and community engagement initiatives for the Kifuliiru language.',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
