import React from 'react'
import Navbar from './conponents/Navbar'
import Searchbar from './conponents/searchbar'


const App = () => {
  return (
    <>
    <div className='mx-auto max-w-[370px] px-4'>
      <Navbar />
      <Searchbar/>
      
    </div>
      
    </>
    )
}

export default App