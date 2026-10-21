import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from "@/components/Navbar.jsx"

const inter = Inter({ subsets: ['latin'] })

const description = 'Matthew Farah is a Software Engineering student at McMaster University with a minor in Mathematics. Projects, experience, and résumé.'

export const metadata = {
  // The bare domain redirects to www, and some link-preview scrapers won't follow a redirect for images
  metadataBase: new URL('https://www.valueachoomatthew.me'),
  title: "Matthew Farah's Personal Website",
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Matthew Farah's Personal Website",
    description,
    url: '/',
    siteName: 'Matthew Farah',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

// Google takes the site name shown above search results from this, instead of the hosting domain
const siteData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Matthew Farah',
  url: 'https://www.valueachoomatthew.me/',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteData) }} />
      <Navbar></Navbar>
      {children}
      </body>
    </html>
  )
}
