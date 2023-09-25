import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  return (

    <>
      <span className="flex text-3xl justify-center mt-12 font-semibold ">
        Email: matthewtamerfarah@gmail.com
      </span>

      <div className="flex text-3xl justify-center mt-6 font-semibold gap-12">
        <Link className='flex items-center' href="https://github.com/ValueAchooMatthew" target='_'><Image className='w-6 h-6 inline-block rounded-md ' width={100} height={100} src={"/img/Github.png"} alt='github'></Image>Github</Link>
        <Link className='flex items-center' href="https://www.linkedin.com/in/matthewtfarah/" target='_'><Image className='w-6 h-6 inline-block rounded-md ' width={100} height={100} src={"/img/LinkedIn.png"} alt='linkedin'></Image>LinkedIn</Link>

      </div>
      
      <div className="flex text-3xl justify-center mt-6 font-semibold gap-12">
        <Link href="/05-05-2023 Resume.pdf" target='_'>📄Résumé</Link>
      </div>
    </>

  )
}
