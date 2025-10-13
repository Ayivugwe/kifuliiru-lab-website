import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container">
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      }}>
        {/* 404 Number */}
        <div style={{
          fontSize: '8rem',
          fontWeight: 'bold',
          color: '#4a9eff',
          textShadow: '0 0 20px rgba(74, 158, 255, 0.5)',
          marginBottom: '1rem',
          fontFamily: 'Courier New, monospace',
        }}>
          404
        </div>

        {/* Error Message */}
        <h1 style={{
          fontSize: '2.5rem',
          color: '#ffffff',
          marginBottom: '1rem',
          fontWeight: '300',
        }}>
          Page Not Found
        </h1>

        {/* Kifuliiru Message */}
        <div style={{
          fontSize: '1.2rem',
          color: '#b0b0b0',
          marginBottom: '2rem',
          fontStyle: 'italic',
        }}>
          "Kifuliiru kigayamaho" — This page has wandered away
        </div>

        {/* Description */}
        <p style={{
          fontSize: '1.1rem',
          color: '#888',
          marginBottom: '3rem',
          maxWidth: '500px',
          lineHeight: '1.6',
        }}>
          The page you're looking for doesn't exist in our digital language laboratory. 
          Let's get you back to exploring Kifuliiru language preservation.
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <Link 
            href="/"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#4a9eff',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              border: '2px solid #4a9eff',
            }}
          >
            🏠 Home
          </Link>
          
          <Link 
            href="/#about"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: 'transparent',
              color: '#4a9eff',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              border: '2px solid #4a9eff',
            }}
          >
            🔬 About Lab
          </Link>
        </div>

        {/* Footer Info */}
        <div style={{
          marginTop: '4rem',
          padding: '1rem',
          borderTop: '1px solid #333',
          fontSize: '0.9rem',
          color: '#666',
        }}>
          <p style={{ margin: '0.5rem 0' }}>
            <strong>Kifuliiru Lab</strong> • A specialized language laboratory of <strong>Wekify LLC</strong>
          </p>
          <p style={{ margin: '0.5rem 0' }}>
            Preserving the Kifuliiru language through computational methods
          </p>
        </div>
      </div>
    </div>
  )
}
