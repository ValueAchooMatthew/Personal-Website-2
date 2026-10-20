import React from 'react'

// Each logo's width is tuned by eye; the second size applies from the sm breakpoint up
const logos = [
  { src: '/img/Rust.svg', alt: 'Rust logo', w: 'w-20 sm:w-[7.5rem]' },
  { src: '/img/React-icon.svg', alt: 'React logo', w: 'w-20 sm:w-32' },
  { src: '/img/python.svg', alt: 'Python logo', w: 'w-[4.5rem] sm:w-28', pad: 'pt-5 sm:pt-8' },
  { src: '/img/Java_Logo.svg', alt: 'Java logo', w: 'w-20 sm:w-32' },
  { src: '/img/Cpp_Logo.svg', alt: 'C++ logo', w: 'w-[4.5rem] sm:w-28' },
  { src: '/img/C_Programming_Language.svg', alt: 'C logo', w: 'w-20 sm:w-32' },
  { src: '/img/Unofficial_JavaScript_logo_2.svg', alt: 'JavaScript logo', w: 'w-20 sm:w-32' },
  { src: '/img/Typescript-02.svg', alt: 'TypeScript logo', w: 'w-28 sm:w-44' },
  { src: '/img/Svelte_Logo.svg', alt: 'Svelte logo', w: 'w-16 sm:w-24' },
  { src: '/img/Spring_Logo.svg', alt: 'Spring logo', w: 'w-40 sm:w-56' },
  { src: '/img/Docker_Logo.svg', alt: 'Docker logo', w: 'w-40 sm:w-56' },
  { src: '/img/Tailwind_CSS_Logo.svg.png', alt: 'Tailwind logo', w: 'w-32 sm:w-48' },
  { src: '/img/SQL.svg', alt: 'SQL logo', w: 'w-24 sm:w-36' },
  { src: '/img/HTML5_logo_and_wordmark.svg', alt: 'HTML5 logo', w: 'w-[5.25rem] sm:w-[8.4rem]' },
  { src: '/img/CSS3_logo_and_wordmark.svg', alt: 'CSS3 logo', w: 'w-16 sm:w-24' },
]

export default function Languages() {
  return (

    <>
      <div className='mt-12 sm:mt-16'>
        <span className = "text-3xl sm:text-4xl font-semibold italic">
          Languages and Frameworks
        </span>
      </div>
      {/* Maybe try making it without scroll bar */}
      <div className = " max-w-5xl mt-8 sm:mt-12 h-36 sm:h-52 bg-gray-100 rounded-t-3xl rounded-b-md self-center mx-auto pb-6 sm:pb-8 snap-x flex snap-mandatory overflow-x-scroll overflow-y-hidden justify-start pt-6 sm:pt-10 gap-10 sm:gap-20">
        {logos.map(({ src, alt, w, pad }) => (
          <div className= {`snap-center self-center flex justify-center shrink-0 first:pl-10 sm:first:pl-20 last:pr-10 sm:last:pr-20 ${pad ?? ''}`} key={src}>
            <img className = {`${w} hover:scale-125 duration-100`} src={src} alt={alt} />
          </div>
        ))}

      </div>

    </>

  )
}
