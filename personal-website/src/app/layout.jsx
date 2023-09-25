'use client'

import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from "@/components/Navbar.jsx"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
