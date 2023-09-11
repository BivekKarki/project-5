import React, { useEffect, useState } from 'react'
import Navbar from './conponents/Navbar'
import Searchbar from './conponents/searchbar'
import {collection, getDocs} from 'firebase/firestore'
import { db } from './config/firebase'

const App = () => {

const [contacts, setContacts] = useState();

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
      // console.log(contactLists);

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
      <Searchbar/>
      <div className=''>
        {contacts.map((contact) => (
          <div key={contact.id}></div>
        ))}
      </div>
    </div>
      
    </>
    )
}

export default App