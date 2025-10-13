'use client'

import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="header-content">
        <div className="header-main">
          <h1>KIFULIIRU LAB</h1>
          <p className="tagline">
            <strong>Kifuliiru Language Laboratory</strong> - 
            <strong>Kifuliiru Language Preservation</strong> Through 
            <strong> Computational Methods</strong> and 
            <strong> Community Engagement</strong>
          </p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}
