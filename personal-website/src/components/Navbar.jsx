'use client'

import React from 'react'

import { useEffect } from 'react'

export default function Navbar() {

  const handleScroll = ()=>{

      if(window.scrollY > 10){
        banner.classList.add("drop-shadow-2xl")

      }else{
        banner.classList.remove("drop-shadow-2xl")
      }
  }

  useEffect(()=>{
    const banner = document.getElementById("banner")
    window.addEventListener("scroll", ()=>{handleScroll()})
    return (window.removeEventListener("scroll", ()=>{handleScroll}))
  
  }, [])
  
  
  return (
    <div className="bg-[#302721] fixed w-full transition-all duration-300 flex py-2 justify-around font-semibold rounded-b-full z-50 text-[#F0EAD2] text-center text-2xl" id = "banner">
      <a className = "buttonAnchors" href='#Home'>Home</a>
      <a className = "buttonAnchors ml-20" href="#Skills">Skills</a>
      <a className = "buttonAnchors" href="#Contact">Contact Me!</a>
    </div>
  )
}
