import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleFill } from 'react-icons/ri'
import { db } from '../config/firebase'


    const ContactCard = ({ contact }) => {

      const deleteContact = async (id)=> {
        try {
          await deleteDoc(doc(db,"contacts",id));
        } catch (error) {
          console.log(error);
        }
      }
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
              <IoMdTrash onClick={()=>deleteContact(contact.id)} className='text-orange-400'/>
            </div>
          </div>
    </>
  )
}

export default ContactCard