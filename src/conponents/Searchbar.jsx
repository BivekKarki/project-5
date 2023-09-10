import React from 'react'
import { FiSearch } from 'react-icons/fi'
const Searchbar = () => {
  return (
    <>
        <div className='flex relative items-center'>
            <FiSearch className=' ml-1 text-white text-2xl absolute'/>
            <input 
            type='text' 
            className='flex-grow h-10 border pl-10 text-white bg-transparent border-white rounded-md' />
        </div>
    </>
  )
}

export default Searchbar