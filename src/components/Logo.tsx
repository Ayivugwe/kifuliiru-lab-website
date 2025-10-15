import Link from 'next/link'

interface LogoProps {
  onClick?: () => void
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <Link href="/" className="logo-link" onClick={onClick}>
      <div className="logo-display">
        <div className="combo-horizontal">
          <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="12" fill="#1a365d"/>
            <path d="M 15 50 Q 25 30, 35 50 T 55 50 T 75 50 L 85 50" 
                  fill="none" stroke="#3182ce" strokeWidth="3" strokeLinecap="round"/>
            <path d="M 15 50 Q 25 70, 35 50 T 55 50 T 75 50 L 85 50" 
                  fill="none" stroke="#ed8936" strokeWidth="3" strokeLinecap="round" opacity="0.8"/>
            <circle cx="50" cy="50" r="6" fill="white"/>
          </svg>
          <div>
            <div className="combo-text combo-text-large">KIFULIIRU <span className="lab-text">LAB</span></div>
          </div>
        </div>
      </div>
    </Link>
  )
}
