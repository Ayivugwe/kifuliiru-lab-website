import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Get in Touch with Kifuliiru Lab',
  description: 'Contact Kifuliiru Lab for collaboration, partnerships, or questions about our language preservation research and digital ecosystem.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
