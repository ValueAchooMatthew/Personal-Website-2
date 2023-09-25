import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from "@/components/Navbar.jsx"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Matthew Farah's Personal Website",
  description: 'Personal Website for Matthew Farah',
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
