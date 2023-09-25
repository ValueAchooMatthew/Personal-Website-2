import Image from "next/image"
import Link from "next/link"

import Languages from "@/components/Languages"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

export default function Home() {

  return (
    <main className="bg-[#674832] px-12">
      <div className="bg-[#674832] min-h-fit px-32 relative">
        <div className="text-center py-24 relative w-fit h-fit mx-auto" id = "Home">
          <iframe className="absolute w-20 h-20 lg:-right-16 top-20 right-32" src="https://giphy.com/embed/kggH7ehwwcmKvHly5k" width="480" height="424" frameBorder="0" allowFullScreen></iframe>
          <h1 className="text-[5.5rem] text-[#d4b894] font-bold drop-shadow-[0_10px_4px_rgba(0,0,0,0.3)]">
            Hey, I'm Matthew!

          </h1>

        </div>
        <div className="my-18 text-[#d4b894] drop-shadow-[0_8px_4px_rgba(0,0,0,0.3)] relative ">
          <iframe className ="absolute -top-20 z-50 -left-12  w-32 h-32 " src="https://giphy.com/embed/KLUBM6BUVeZFFmkH84" width="480" height="480" frameBorder="0"  allowFullScreen></iframe>
          <img className="w-80 inline-block mx-12 absolute -left-48" src="/img/IMG_5830-modified.png" alt=""/>
          <span className="inline-block text-2xl absolute left-48 top-12">
            (Yup, that's me!)
            <svg className="w-8 inline-block mb-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"></path>
            </svg>
          </span>
        </div>
        <div className = "bg-[#d4b894] xl:p-16 p-4 xl:max-w-6xl max-w-4xl mx-auto xl:rounded-t-full rounded-t-3xl border-[#302721] border-2 border-b-0 mt-36">
          <h1 className = "xl:mt-16 text-[5rem] font-semibold text-center text-[#302721]">
              About me!
          </h1>
          <p className = "mt-8 text-center m-auto text-xl max-w-3xl">
              Hello and thanks for visiting my website! My name is Matthew and I'm a second year software engineering student at McMaster University.
              I have a great interest for all things math and computer science, and am a complete music nerd. Take a look around and see a few
              things about me and my passions!
          </p>
        </div>
        <div className="bg-[#B3C581] text-center pb-24 pt-14 rounded-t-3xl border-[#302721] border-2 border-b-0" id = "Skills">
          <span className="text-[4.5rem] font-semibold text-[#302721]">
            My skills <p className="text-2xl">(at a glance :P) </p>
          </span>
          <Languages></Languages>
          <Projects></Projects>

        </div>
      </div>
      
      <div className="w-full bg-[#D5DFA5] h-fit rounded-t-3xl border-[#302721] border-2  pb-12" id = "Contact">
        <h1 className="text-[4.5rem] font-semibold text-[#302721] text-center pt-16 ">
          Get in Touch!
        </h1>

        <Contact></Contact>
      </div>


    </main>
    

  )
}
