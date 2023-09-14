import React, { useEffect, useState } from 'react'
import Navbar from './conponents/Navbar'
import Searchbar from './conponents/searchbar'
import {collection, getDocs} from 'firebase/firestore'
import { db } from './config/firebase'

import ContactCard from './conponents/ContactCard'
import Modal from './conponents/Modal'

const App = () => {

const [contacts, setContacts] = useState();

const [isOpen, setOpen] = useState(false);

const onOpen = ()=> {
  setOpen(true);
}
const onClose = ()=> {
  setOpen(false);
}

useEffect(() => {

  const getContacts = async () => {
    try {
      const contactRef= collection(db, "contacts");
      
      const contactsSnapshot = await getDocs(contactRef);
    
      const contactLists = contactsSnapshot.docs.map((doc) => {
        return{
          id:doc.id,
          ...doc.data(),
        };
      });
      
      setContacts(contactLists);
      console.log(contacts);
      

    } catch (error) {
      console.log(error);
    }
  }
  getContacts();

}, []);

  return (
    <>
   
    <div className='mx-auto max-w-[370px] px-4'>
      <Navbar />
      <Searchbar onOpen={onOpen} />
      <div className='mt-4 flex gap-2 flex-col' >
        { contacts?.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
      </div>
     
    </div>
      

      <Modal isOpen={isOpen} onClose={onClose} > Hello</Modal>
    </>
    )
}

export default App