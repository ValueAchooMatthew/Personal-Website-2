import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectCard({url, imgUrl, title, tags, search}) {

  // Add summary of what I did for each project

  let display = false;
  const sorter = (ls, query)=>{
    for(let i = 0; i < ls.length; i++)
      if(ls[i].Name.toLowerCase().includes(query.trim().toLowerCase())){
        display = true
      }
    
    if(display){
      return(<div className="min-h-fit max-w-fit bg-white rounded-t-2xl pt-2 rounded-b-md mx-0 shadow-2xl hover:scale-110 transition-all duration-150">
      <Link href={url} target='_'>
          <div className="relative flex items-center justify-center overflow-hidden w-64 h-80 mx-6 mt-4">
              <Image width={1000} height={1000} className = "h-full object-cover overflow-hidden" src={imgUrl} alt='Guess that City Website'></Image>
          </div>
      </Link>
      <Link href={url}>
          <div className='text-center pt-4 max-w-xs mx-auto max-h-fit overflow-hidden text-2xl font-semibold' >
              {title}
          </div>
      </Link>
      <div className='flex justify-around py-3 px-1 max-w-full'>
          {tags.map((content, id)=>{
              return(
                <div className={`${content.Colour} rounded-full px-2 py-1 mx-0.5 max-w-full h-fit`} key = {id}>
                    <span className='text-white text-sm semibold'>
                        {content.Name}
                    </span>
                </div>

              )
          })}

      </div>  
    </div>)}else{
      return(<></>)
    }

  }

  return (

    <>
      {sorter(tags, search)}

    </>
      
  )
}
