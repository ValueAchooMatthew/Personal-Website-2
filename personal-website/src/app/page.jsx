import Link from "next/link"
import Image from "next/image"

import Experience from "@/components/Experience"
import Languages from "@/components/Languages"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

export default function Home() {

  return (
    <main className="bg-[#674832] px-2 sm:px-6 lg:px-12">
      <div className="bg-[#674832] min-h-fit px-1 sm:px-8 lg:px-16 xl:px-32 relative">
      <Image width={100} height={100} className="absolute w-12 h-12 right-1 top-28 sm:w-20 sm:h-20 sm:right-4 sm:top-32 xl:w-64 xl:h-64 xl:right-36 xl:top-64" src={"/gifs/star.gif"} alt="star gif"></Image>

        <div className="text-center pt-20 pb-10 sm:py-24 relative w-fit h-fit mx-auto scroll-mt-16" id = "Home">
          <Image width={100} height={100} className="absolute w-9 h-9 -right-4 top-14 sm:w-14 sm:h-14 sm:-right-10 sm:top-16 xl:w-20 xl:h-20 xl:-right-16 xl:top-20" src={"/gifs/explosion.gif"} alt="explosion/tear-drop gif"></Image>
          <h1 className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-[#d4b894] font-bold drop-shadow-[0_10px_4px_rgba(0,0,0,0.3)]">
            Hey, I'm Matthew!

          </h1>

        </div>
        {/* Below xl the photo and caption sit side by side in the page flow; from xl up they hang to the left of the About arch */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 text-[#d4b894] drop-shadow-[0_8px_4px_rgba(0,0,0,0.3)] relative xl:block">
          <div className="relative shrink-0 w-36 sm:w-56 xl:w-80 xl:absolute xl:-left-36">
            <Image width={100} height={100} className ="absolute top-[-25%] left-[30%] z-50 w-[40%] h-auto" src={"/gifs/crown.gif"} alt="crown gif"></Image>
            <img className="w-full" src="/img/IMG_5830-modified.png" alt="Photo of Matthew"/>
          </div>
          <span className="inline-block text-lg sm:text-2xl xl:absolute xl:left-48 xl:top-12">
            (Yup, that's me!)
            <svg className="w-6 sm:w-8 inline-block mb-6 sm:mb-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"></path>
            </svg>
          </span>
        </div>
        <div className = "bg-[#d4b894] xl:p-16 p-5 sm:p-8 xl:max-w-6xl max-w-4xl mx-auto xl:rounded-t-full rounded-t-3xl border-[#302721] border-2 border-b-0 mt-10 xl:mt-36">
          <Image width={100} height={100} className="hidden 2xl:block absolute w-48 h-48 right-16 mt-60" src={"/gifs/flowers.gif"} alt="star gif"></Image>

          <h1 className = "xl:mt-16 text-5xl sm:text-6xl lg:text-[5rem] font-semibold text-center text-[#302721]">
              About me!
          </h1>
          <p className = "mt-6 sm:mt-8 text-center m-auto text-base sm:text-lg lg:text-xl max-w-3xl">
              Hello and thanks for visiting my website! My name is Matthew and I'm a Software Engineering student at McMaster University, where I'm also doing a minor in Mathematics.
              I have a great interest in all things math and computer science. I am particularly interested in mathematical analysis, formal methods, software engineering, and
              how they intersect to create better and more innovative projects. Right now I'm a Software Engineer Co-op at AMD, and alongside that I do research on automated theorem proving at McMaster.
              Plus, I am a complete music nerd and in my free-time run the <Link className="underline" href="https://cfmu.ca/show/indie-hour/" target="_blank" rel="noopener noreferrer">McMaster College Radio</Link>. Take a look around and see a few
              things about me and my passions!
          </p>
        </div>
        <Experience></Experience>
        <div className="bg-[#B3C581] text-center pb-16 sm:pb-24 pt-14 px-3 sm:px-6 rounded-t-3xl border-[#302721] border-2 border-b-0 scroll-mt-16" id = "Skills">
          <h2 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-semibold text-[#302721]">
            My skills
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-[#302721]">(at a glance :P)</p>
          <Languages></Languages>
          <Projects></Projects>

        </div>
      </div>

      <div className="w-full bg-[#D5DFA5] h-fit rounded-t-3xl border-[#302721] border-2 pb-8 px-3 scroll-mt-16" id = "Contact">
        <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-semibold text-[#302721] text-center pt-12 sm:pt-16 ">
          Get in Touch!
        </h1>

        <Contact></Contact>
      </div>


    </main>


  )
}
