import React from 'react'

export default function Languages() {
  return (

    <>
      <div className='mt-16'>
        <span className = "text-4xl font-semibold italic">
          Languages and Frameworks
        </span>
      </div>
      {/* Maybe try making it without scroll bar */}
      <div className = "max-w-5xl mt-12 h-52 bg-gray-100 rounded-3xl self-center mx-auto pb-8 snap-x flex snap-mandatory overflow-x-scroll overflow-y-hidden justify-start pt-10 gap-20">
        <div className= "snap-center self-center flex justify-center shrink-0 first:pl-20 last:pr-20">
          <img className = "w-32 hover:scale-125 duration-100" src="/img/React-icon.svg" alt="React Logo" />
        </div>
        <div className= "snap-center flex self-center justify-center pt-8 shrink-0 first:pl-20 last:pr-20">
          <img className = " w-28 hover:scale-125 duration-100 " src="/img/python.svg" alt = "Python"/>
        </div>
        <div className= "snap-center self-center flex justify-center shrink-0 first:pl-20 last:pr-20">
          <img className = "w-32 hover:scale-125 duration-100" src="/img/Java_Logo.svg" alt="Java Logo" />
        </div>
        <div className= "snap-center self-center flex justify-center shrink-0 first:pl-20 last:pr-20">
          <img className = "w-32 hover:scale-125 duration-100" src="/img/C_Programming_Language.svg" alt="C Logo" />
        </div>
        <div className= "snap-center self-center flex justify-center shrink-0 first:pl-20 last:pr-20">
          <img className = "w-32 hover:scale-125 duration-100" src="/img/Unofficial_JavaScript_logo_2.svg" alt="Javascript logo" />
        </div>
        <div className= "snap-center self-center flex justify-center shrink-0 first:pl-20 last:pr-20">
          <img className = "w-48 hover:scale-125 duration-100" src="/img/Tailwind_CSS_Logo.svg" alt="Tailwind Logo" />
        </div>
        <div className= "snap-center self-center flex justify-center shrink-0 first:pl-20 last:pr-20">
          <img className = "w-36 hover:scale-125 duration-100" src="/img/SQL.svg" alt="C Logo" />
        </div>
        <div className= "snap-center self-center flex justify-center shrink-0 first:pl-20 last:pr-20" >
          <img className = "w-[8.4rem] hover:scale-125 duration-100" src="/img/HTML5_logo_and_wordmark.svg" alt="HTML5 logo" />
        </div>
        <div className= " snap-center self-center flex justify-center shrink-0 first:pl-20 last:pr-20">
          <img className = "w-24 hover:scale-125 duration-100" src="/img/CSS3_logo_and_wordmark.svg" alt="Css3 Logo" />
        </div>
      </div>

    </>
    
  )
}