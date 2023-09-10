import React from 'react'

const Searchbar = () => {
  return (
    <>
        <div className='flex'>
            <input 
            type='text' 
            className='flex-grow h-10 border p-2 text-white bg-transparent border-white rounded-md' />
        </div>
    </>
  )
}

export default Searchbar