import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Projects without a public link (url = null) render the same card, just not clickable
function MaybeLink({ url, children }) {
  if (!url) return <>{children}</>
  return <Link href={url} target='_blank' rel='noopener noreferrer'>{children}</Link>
}

export default function ProjectCard({url, imgUrl, imgClass = "h-full object-cover", title, summary, tags, search, in_progress}) {

  // Add summary of what I did for each project

  let display = false;
  const sorter = (ls, query)=>{
    for(let i = 0; i < ls.length; i++)
      if(ls[i].Name.toLowerCase().includes(query.trim().toLowerCase())){
        display = true
      }

    if(display){
      return(<div className="min-h-fit w-72 lg:w-80 max-w-full bg-white rounded-t-2xl pt-2 rounded-b-md mx-0 shadow-2xl hover:scale-110 transition-all duration-150">
      <MaybeLink url={url}>
          <div className="relative flex items-center justify-center overflow-hidden w-64 max-w-[85%] h-80 mx-auto mt-4">
              <Image width={1000} height={1000} className = {`${imgClass} overflow-hidden`} src={imgUrl} alt={`${title} preview`}></Image>
          </div>
      </MaybeLink>
      <MaybeLink url={url}>
          <div className='text-center pt-4 max-w-xs mx-auto max-h-fit overflow-hidden text-2xl font-semibold' >
              {title}
          </div>
      </MaybeLink>
      <div className='pt-1 max-w-xs mx-auto max-h-fit overflow-hidden px-4'>
        {summary}
      </div>
      <div className='flex flex-wrap justify-around gap-y-1 py-3 px-1 max-w-full'>
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
      {in_progress ? <div className=' bg-green-500 text-white text-center py-0.5'>
        In progress
      </div>:<></>}
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
