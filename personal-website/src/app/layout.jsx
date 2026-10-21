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
  openGraph: {
    title: "Matthew Farah's Personal Website",
    description,
    url: '/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
      <Navbar></Navbar>
      {children}
      </body>
    </html>
  )
}
