import type { Metadata } from 'next'
import './globals.css'

<<<<<<< HEAD
const SITE = 'https://marwan-ahmed-portfolio.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Marwan Ahmed — Senior ERP Consultant | Oracle Fusion HCM',
    template: '%s | Marwan Ahmed',
  },
  description:
    'Senior ERP Consultant and Project Manager specializing in Oracle Fusion HCM. Leading end-to-end ERP implementations across MENA — from business analysis through go-live.',
  keywords: [
    'ERP Consultant', 'Oracle Fusion HCM', 'ERP Project Manager', 'Oracle HCM Implementation',
    'Business Transformation', 'Marwan Ahmed', 'Cairo Egypt', 'MENA ERP', 'Oracle Fusion',
    'HR Digital Transformation', 'OUM Methodology', 'Oracle Visual Builder',
  ],
  authors: [{ name: 'Marwan Ahmed', url: SITE }],
  creator: 'Marwan Ahmed',
  openGraph: {
    type: 'website',
    url: SITE,
    siteName: 'Marwan Ahmed — ERP Consultant',
    title: 'Marwan Ahmed — Senior ERP Consultant | Oracle Fusion HCM',
    description:
      'Senior ERP Consultant and Project Manager. Oracle Fusion HCM specialist driving business transformation across MENA.',
    images: [{ url: `${SITE}/og.png`, width: 1200, height: 630, alt: 'Marwan Ahmed — ERP Consultant' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marwan Ahmed — Senior ERP Consultant',
    description: 'Oracle Fusion HCM Specialist & ERP Project Manager',
    images: [`${SITE}/og.png`],
  },
  alternates: { canonical: SITE },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: {},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Marwan Ahmed',
              url: SITE,
              jobTitle: 'Senior ERP Consultant',
              description:
                'ERP Consultant and Project Manager specializing in Oracle Fusion HCM implementations across MENA.',
              email: 'marwan.a.gaballah@gmail.com',
              telephone: '+20-102-896-1808',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'New Cairo',
                addressRegion: 'Cairo',
                addressCountry: 'EG',
              },
              sameAs: [
                'https://www.linkedin.com/in/marwan-ahmed-035472222/',
                SITE,
              ],
              knowsAbout: [
                'Oracle Fusion HCM', 'ERP Implementation', 'Project Management',
                'Business Analysis', 'Oracle Visual Builder', 'OUM Methodology',
              ],
            }),
          }}
        />
      </head>
=======
export const metadata: Metadata = {
  title: 'Marwan Ahmed — ERP Consultant & Oracle Fusion HCM Specialist',
  description: 'ERP Consultant and Project Manager specializing in Oracle Fusion HCM implementations. Bridging business needs with technical execution across the MENA region.',
  keywords: ['ERP Consultant', 'Oracle Fusion HCM', 'Project Manager', 'ERP Implementation', 'Cairo', 'Egypt'],
  authors: [{ name: 'Marwan Ahmed' }],
  openGraph: {
    title: 'Marwan Ahmed — ERP Consultant',
    description: 'Driving business transformation through Oracle Fusion HCM implementations.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
>>>>>>> 0fb18d05e32b70b988aee43fffd5a801e4105555
      <body>{children}</body>
    </html>
  )
}
