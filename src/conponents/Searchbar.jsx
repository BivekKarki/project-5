import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { AiOutlinePlusCircle } from 'react-icons/ai'
// import { filterContact } from '../App'
const Searchbar = ({onOpen, filterContact} ) => {
  
  return (
    <>
    <div className='flex gap-2'>
        <div className='flex relative items-center flex-grow'>
            <FiSearch className=' ml-1 text-white text-2xl absolute'/>
            <input 
            onChange={filterContact}
            type='text' 
            className='flex-grow h-10 border pl-10 text-white bg-transparent border-white rounded-md' />
        </div>
        
            <AiOutlinePlusCircle onClick={onOpen} className="text-4xl cursor-pointer text-white"/>
        
      </div>
    </>
  )
}

export default Searchbar