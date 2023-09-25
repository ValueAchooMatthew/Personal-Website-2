'use client'

import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import SearchBar from './SearchBar'

export default function Projects() {

  const [search, setSearch] = useState("")

  return (
    <>
      <div className='mt-16'>
        <h2 className = "text-4xl font-semibold italic">
          Personal Projects
        </h2>
        <h3 className = "text-xl font-semibold italic mt-4 mb-16">
          Click on any of the cards below to take a look at some of my personal projects!
        </h3>
      </div>

      <SearchBar setSearch = {setSearch}></SearchBar>

      <div className="flex justify-center mb-20 gap-24">
        <ProjectCard search = {search} url={"https://github.com/cristallu84/SpotiSize"} imgUrl={"/img/Spotisize.PNG"} title={"Spotisize"} tags = {[{"Name": "React", "Colour": "bg-cyan-800"},
                                                                                                            {"Name": "NextJS", "Colour": "bg-black"},
                                                                                                            {"Name": "Tailwind", "Colour": "bg-blue-500"},
                                                                                                            {"Name": "APIs", "Colour": "bg-amber-600"}]}></ProjectCard>
        <ProjectCard search = {search} url={"https://guess-that-city.vercel.app/"} imgUrl={"/img/Guess-That-City.PNG"} title={"Guess That City"} tags = {[{"Name": "React", "Colour": "bg-cyan-800"},
                                                                                                            {"Name": "NextJS", "Colour": "bg-black"},
                                                                                                            {"Name": "Tailwind", "Colour": "bg-blue-500"},
                                                                                                            {"Name": "APIs", "Colour": "bg-amber-600"}]}></ProjectCard>

      </div>

      <div className="flex justify-center gap-24">

        <ProjectCard search = {search} url={"https://valueachoomatthew.github.io/Stack-Sandwich/"} imgUrl={"/img/My Stackwich.PNG"} title={"My Stackwich"} tags = {[{"Name": "JavaScript", "Colour": "bg-red-800"},
                                                                                                            {"Name": "Tailwind", "Colour": "bg-blue-500"}]}></ProjectCard>

        <ProjectCard search = {search} url={"https://github.com/ValueAchooMatthew/AI-For-Alzheimers"} imgUrl={"/img/AI-for-Alzheimer's.PNG"} title={"AI for Alzheimer's"} tags = {[{"Name": "Python", "Colour": "bg-green-800"},
                                                                                                            {"Name": "PyTorch", "Colour": "bg-orange-600"}]}></ProjectCard>

      </div>

    </>
  )
}
