import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleFill } from 'react-icons/ri'


    const ContactCard = ({ contact }) => {
  return (
    <>
         

      <div key={contact.id} className='bg-yellow-200 p-2 rounded-lg flex items-center justify-between'>
            <div className='flex gap-2'>
              <BiUserCircle className='text-orange-400 text-4xl'/>
              <div className=''>
                <h2 className='text-medium'>{contact.name}</h2>
                <p className='text-sm'>{contact.email}</p>
              </div>
            </div>
            <div className='flex text-3xl'>
              <RiEditCircleFill />
              <IoMdTrash className='text-orange-400'/>
            </div>
          </div>
    </>
  )
}

export default ContactCard