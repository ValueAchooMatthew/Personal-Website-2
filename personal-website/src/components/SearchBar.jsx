'use client'

import React from 'react'

export default function SearchBar({setSearch}) {


    const onChangeHandler = (query)=>{
        setSearch(query)
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault()

    }

    return (

      <div className="flex justify-center my-8 sm:my-12">
          <form className="rounded-3xl w-full max-w-md px-2 sm:px-8 py-2" onSubmit={onSubmitHandler} autoFocus >
              <input type="text" className='rounded-3xl h-14 sm:h-20 w-full py-2 px-4 border-black border-2 outline-hidden bg-white placeholder:text-gray-400' placeholder="Search for relevant skills..." onChange={(change)=>{onChangeHandler(change.target.value)}} />
          </form>
      </div>
    )
}
