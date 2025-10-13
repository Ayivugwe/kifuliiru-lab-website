import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

export default function SEOHead({
  title = 'Kifuliiru Lab | Indigenous Language Preservation Research',
  description = 'Kifuliiru Lab specializes in computational linguistics and template-based generation for indigenous language preservation. Part of Wekify LLC\'s mission to revitalize endangered languages worldwide.',
  keywords = [
    'indigenous language preservation',
    'computational linguistics',
    'endangered language documentation',
    'language revitalization technology',
    'Kifuliiru language',
    'template-based content generation',
    'community language preservation',
    'AI for under-resourced languages'
  ],
  canonical = 'https://kifuliiru.org',
  ogImage = '/og-image.jpg',
  noindex = false
}: SEOHeadProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonical} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Kifuliiru Lab" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content="@kifuliirulab" />
      <meta property="twitter:site" content="@wekifyllc" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Ayivugwe Kabemba Mukome" />
      <meta name="publisher" content="Wekify LLC" />
      <meta name="copyright" content="Wekify LLC" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#4a9eff" />
      <meta name="msapplication-TileColor" content="#0a0a0a" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      
      {/* Structured Data will be added by StructuredData component */}
    </Head>
  )
}
