import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cultural Context | Kifuliiru Language and Bafuliiru People',
  description: 'Discover the cultural significance of the Kifuliiru language and the Bafuliiru people of Ibufuliiru in Uvira, South Kivu, Democratic Republic of Congo.',
}

export default function CulturalContextLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
