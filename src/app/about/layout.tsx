import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Kifuliiru Lab | Language Preservation Research',
  description: 'Learn about Kifuliiru Lab, a specialized language preservation laboratory under Wekify LLC, dedicated to preserving and revitalizing the Kifuliiru language spoken by the Bafuliiru people.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
