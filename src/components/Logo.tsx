import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  onClick?: () => void
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <Link href="/" className="logo-link" onClick={onClick}>
      <div className="logo-display">
        <div className="combo-horizontal">
          <Image 
            src="/Kifuliiru-Lab-Logo.png" 
            alt="Kifuliiru Lab Logo" 
            width={70} 
            height={70}
            className="logo-svg"
          />
          <div>
            <div className="combo-text combo-text-large">KIFULIIRU <span className="lab-text">LAB</span></div>
          </div>
        </div>
      </div>
    </Link>
  )
}
