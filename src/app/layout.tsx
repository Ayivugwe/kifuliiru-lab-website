import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kifuliiru Lab | Indigenous Language Preservation Research',
  description: 'Kifuliiru Lab is a research subsidiary of Wekify LLC developing scalable methodologies for indigenous language documentation and preservation through computational methods.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}