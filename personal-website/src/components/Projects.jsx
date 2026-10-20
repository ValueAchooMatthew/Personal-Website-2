'use client'

import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import SearchBar from './SearchBar'

// Pairs sit side by side from tablet width up and stack into one column on phones
const row = "flex flex-wrap justify-center gap-x-6 lg:gap-x-24 gap-y-16 mb-16 md:mb-20"

export default function Projects() {

  const [search, setSearch] = useState("")

  return (
    <>
      <div className='mt-12 sm:mt-16 scroll-mt-20' id = "Projects">
        <h2 className = "text-3xl sm:text-4xl font-semibold italic">
          Personal Projects
        </h2>
        <h3 className = "text-lg sm:text-xl font-semibold italic mt-4 mb-8 sm:mb-16">
          Click on any of the cards below to take a look at some of my personal projects!
        </h3>
      </div>

      <SearchBar setSearch = {setSearch}></SearchBar>
      <div className={row}>
        <ProjectCard in_progress={false} search={search} summary={["Checks machine-generated logic proofs step by step", "Placed 5th at ProoVer 2026!"]} url={"https://github.com/ValueAchooMatthew/ProofGuard"} imgUrl={"/img/ProofGuard.svg"} title={"ProofGuard"} tags={[{"Name": "Python", "Colour": "bg-green-800"},
        {"Name": "Formal Methods", "Colour": "bg-[#674832]"}, {"Name": "Docker", "Colour": "bg-blue-500"}]}/>
        <ProjectCard in_progress={false} search={search} summary={["Create and test DFAs, NFAs, and regular expressions", "Tauri-based desktop app"]} url={"https://github.com/ValueAchooMatthew/inner-machinations"} imgUrl={"/img/Inner-Machinations.png"} title={"Inner Machinations"} tags={[{"Name": "Rust", "Colour": "bg-amber-700"},
        {"Name": "Svelte", "Colour": "bg-orange-500"}, {"Name": "Tauri", "Colour": "bg-cyan-800"}, {"Name": "SQLite", "Colour": "bg-blue-800"}]}/>

      </div>

      <div className={row}>
        <ProjectCard in_progress={false} search={search} summary={["Turns PDFs into structured LaTeX documents", "Machine learning models for text extraction"]} url={null} imgUrl={"/img/LaTeX_logo.svg"} imgClass={"w-4/5 object-contain"} title={"Text2Latex"} tags={[{"Name": "Python", "Colour": "bg-green-800"},
        {"Name": "PyTorch", "Colour": "bg-orange-600"}, {"Name": "Rust", "Colour": "bg-amber-700"}, {"Name": "Docker", "Colour": "bg-blue-500"}]}/>
        <ProjectCard in_progress={false} search = {search} summary={["Visualize your top artists on Spotify in the form of bubbles!"]} url={"https://github.com/cristallu84/SpotiSize"} imgUrl={"/img/Spotisize.PNG"} title={"Spotisize"} tags = {[{"Name": "React", "Colour": "bg-cyan-800"},
                                                                                                            {"Name": "NextJS", "Colour": "bg-black"},
                                                                                                            {"Name": "Tailwind", "Colour": "bg-blue-500"},
                                                                                                            {"Name": "APIs", "Colour": "bg-amber-600"}]}></ProjectCard>

      </div>

    </>
  )
}
