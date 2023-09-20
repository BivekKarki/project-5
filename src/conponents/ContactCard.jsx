import { deleteDoc, doc } from 'firebase/firestore'
import React, { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleFill } from 'react-icons/ri'
import { db } from '../config/firebase'
import AddAndUpdateContact from './AddAndUpdateContact'
import useDisclose from '../hooks/useDisclose'
import { toast } from 'react-toastify'


    const ContactCard = ({ contact }) => {

      const {onClose, onOpen, isOpen} = useDisclose(false);


// =====================delete contact part ==============
      const deleteContact = async (id)=> {
        try {
          await deleteDoc(doc(db,"contacts",id));
          toast.success("Deleted successfully");
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
              <RiEditCircleFill onClick={onOpen} className='cursor-pointer' />
              <IoMdTrash onClick={()=>deleteContact(contact.id)} className='text-orange-400 cursor-pointer'/>
            </div>
          </div>

          <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />
      
    </>
  )
}

export default ContactCard