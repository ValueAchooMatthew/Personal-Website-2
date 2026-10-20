'use client'

import React, { useRef } from 'react'

// Each logo's width is tuned by eye; the second size applies from the sm breakpoint up
const logos = [
  { src: '/img/Rust.svg', alt: 'Rust logo', w: 'w-20 sm:w-30' },
  { src: '/img/React-icon.svg', alt: 'React logo', w: 'w-20 sm:w-32' },
  { src: '/img/python.svg', alt: 'Python logo', w: 'w-18 sm:w-28', pad: 'pt-5 sm:pt-8' },
  { src: '/img/Java_Logo.svg', alt: 'Java logo', w: 'w-20 sm:w-32' },
  { src: '/img/Cpp_Logo.svg', alt: 'C++ logo', w: 'w-18 sm:w-28' },
  { src: '/img/C_Programming_Language.svg', alt: 'C logo', w: 'w-20 sm:w-32' },
  { src: '/img/Unofficial_JavaScript_logo_2.svg', alt: 'JavaScript logo', w: 'w-20 sm:w-32' },
  { src: '/img/Typescript-02.svg', alt: 'TypeScript logo', w: 'w-28 sm:w-44' },
  { src: '/img/Svelte_Logo.svg', alt: 'Svelte logo', w: 'w-16 sm:w-24' },
  { src: '/img/Spring_Logo.svg', alt: 'Spring logo', w: 'w-40 sm:w-56' },
  { src: '/img/Docker_Logo.svg', alt: 'Docker logo', w: 'w-40 sm:w-56' },
  { src: '/img/Tailwind_CSS_Logo.svg.png', alt: 'Tailwind logo', w: 'w-32 sm:w-48' },
  { src: '/img/SQL.svg', alt: 'SQL logo', w: 'w-24 sm:w-36' },
  { src: '/img/HTML5_logo_and_wordmark.svg', alt: 'HTML5 logo', w: 'w-21 sm:w-[8.4rem]' },
  { src: '/img/CSS3_logo_and_wordmark.svg', alt: 'CSS3 logo', w: 'w-16 sm:w-24' },
]

export default function Languages() {

  // Click and drag scrolls the row with a mouse; touch screens already swipe it natively
  const scroller = useRef(null)
  const drag = useRef(null)

  const startDrag = (event) => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return
    const el = scroller.current
    drag.current = { x: event.clientX, left: el.scrollLeft, samples: [{ x: event.clientX, t: event.timeStamp }] }
    el.setPointerCapture(event.pointerId)
    // Snapping fights the drag, so it stays off until the row has settled after release
    el.style.scrollSnapType = 'none'
    el.style.scrollBehavior = 'auto'
  }

  const moveDrag = (event) => {
    const current = drag.current
    if (!current) return
    scroller.current.scrollLeft = current.left - (event.clientX - current.x)
    // Keep the last few pointer positions to measure the release speed
    current.samples.push({ x: event.clientX, t: event.timeStamp })
    if (current.samples.length > 5) current.samples.shift()
  }

  // Scroll position that centres the logo nearest to `left`, matching the CSS snap-center points
  const nearestLogo = (el, left) => {
    const box = el.getBoundingClientRect()
    let best = left
    let bestDistance = Infinity
    for (const child of el.children) {
      const rect = child.getBoundingClientRect()
      const centred = rect.left - box.left + el.scrollLeft + rect.width / 2 - el.clientWidth / 2
      if (Math.abs(centred - left) < bestDistance) {
        best = centred
        bestDistance = Math.abs(centred - left)
      }
    }
    return Math.max(0, Math.min(best, el.scrollWidth - el.clientWidth))
  }

  const endDrag = () => {
    const current = drag.current
    if (!current) return
    drag.current = null
    const el = scroller.current

    // Glide on in the direction of the drag (px per ms, capped), then ease onto the nearest logo
    const first = current.samples[0]
    const last = current.samples[current.samples.length - 1]
    const elapsed = last.t - first.t
    const velocity = elapsed > 0 ? Math.max(-3, Math.min(3, (first.x - last.x) / elapsed)) : 0
    el.scrollTo({ left: nearestLogo(el, el.scrollLeft + velocity * 250), behavior: 'smooth' })

    const restoreSnap = () => {
      if (drag.current) return
      el.style.scrollSnapType = ''
      el.style.scrollBehavior = ''
    }
    el.addEventListener('scrollend', restoreSnap, { once: true })
    // Browsers without the scrollend event
    setTimeout(restoreSnap, 900)
  }

  return (

    <>
      <div className='mt-12 sm:mt-16'>
        <span className = "text-3xl sm:text-4xl font-semibold italic">
          Languages and Frameworks
        </span>
      </div>
      {/* Maybe try making it without scroll bar */}
      <div ref={scroller} onPointerDown={startDrag} onPointerMove={moveDrag} onPointerUp={endDrag} onPointerCancel={endDrag}
        className = " max-w-5xl mt-8 sm:mt-12 h-36 sm:h-52 bg-gray-100 rounded-t-3xl rounded-b-md self-center mx-auto pb-6 sm:pb-8 snap-x flex snap-mandatory overflow-x-scroll overflow-y-hidden justify-start pt-6 sm:pt-10 gap-10 sm:gap-20 cursor-grab active:cursor-grabbing select-none">
        {logos.map(({ src, alt, w, pad }) => (
          <div className= {`snap-center self-center flex justify-center shrink-0 first:pl-10 sm:first:pl-20 last:pr-10 sm:last:pr-20 ${pad ?? ''}`} key={src}>
            {/* draggable={false} stops the browser pulling out a ghost copy of the logo mid-drag */}
            <img className = {`${w} hover:scale-125 duration-100`} src={src} alt={alt} draggable={false} />
          </div>
        ))}

      </div>

    </>

  )
}
