import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team | Research Team and Leadership',
  description: 'Meet our research team and leadership at Kifuliiru Lab, including Ayivugwe Kabemba Mukome and our community partners in language preservation.',
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
