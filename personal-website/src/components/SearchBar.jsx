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

      <div className="flex justify-center my-12">
          <form className="gray-100, rounded-3xl h-20 w-fit px-8 py-2" onSubmit={onSubmitHandler} autoFocus >
              <input type="text" className='rounded-3xl h-20 w-96 py-2 px-4 border-black border-2 outline-none' placeholder="Search for relevant skills..." onChange={(change)=>{onChangeHandler(change.target.value)}} />
          </form>
      </div>
    )
}
