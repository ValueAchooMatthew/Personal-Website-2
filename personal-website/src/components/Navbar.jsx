'use client'

import React from 'react'

import { useEffect } from 'react'

const links = [
  { href: '#Home', label: 'Home' },
  { href: '#Experience', label: 'Experience' },
  { href: '#Skills', label: 'Skills' },
  { href: '#Projects', label: 'Projects' },
  { href: '#Contact', label: 'Contact Me!' },
]

export default function Navbar() {

  useEffect(()=>{
    const banner = document.getElementById("banner")
    const handleScroll = ()=>{
      if(window.scrollY > 10){
        banner.classList.add("drop-shadow-2xl")

      }else{
        banner.classList.remove("drop-shadow-2xl")
      }
    }
    window.addEventListener("scroll", handleScroll)
    return ()=>window.removeEventListener("scroll", handleScroll)

  }, [])


  return (
    <nav className="bg-[#302721] fixed w-full transition-all duration-300 flex flex-wrap py-2 px-2 gap-x-1 gap-y-1 justify-around font-semibold rounded-b-2xl sm:rounded-b-full z-50 text-[#F0EAD2] text-center text-[0.8rem] sm:text-lg lg:text-2xl" id = "banner">
      {links.map(({ href, label }) => (
        <a className = "buttonAnchors" href={href} key={href}>{label}</a>
      ))}
    </nav>
  )
}
