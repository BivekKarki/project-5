import React, { useEffect, useState } from 'react'
import Navbar from './conponents/Navbar'
import Searchbar from './conponents/searchbar'
import {collection, getDocs, onSnapshot} from 'firebase/firestore'
import { db } from './config/firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactCard from './conponents/ContactCard'
import Modal from './conponents/Modal'
import AddAndUpdateContact from './conponents/AddAndUpdateContact'
import useDisclose from './hooks/useDisclose'
import NotFoundContact from './conponents/NotFoundContact'

const App = () => {

const [contacts, setContacts] = useState([]);

const {onClose, onOpen, isOpen} = useDisclose(false);

useEffect(() => {

  const getContacts = async () => {
    try {
      const contactRef= collection(db, "contacts");
      
      // const contactsSnapshot = await getDocs(contactRef);
    
      onSnapshot(contactRef, (snapshot)=>{
        const contactLists = snapshot.docs.map((doc) => {
          return{
            id:doc.id,
            ...doc.data(),
          };
        });
        
        setContacts(contactLists);
        // console.log(contacts);
        return contactLists
      })

      

    } catch (error) {
      console.log(error);
    }
  }
  getContacts();

}, []);

 const filterContact = (e) => {
  const value = e.target.value;

  const contactRef= collection(db, "contacts");

  onSnapshot(contactRef, (snapshot)=>{
    const contactLists = snapshot.docs.map((doc) => {
      return{
        id:doc.id,
        ...doc.data(),
      };
    });

    const filteredContact = contactLists.filter((contact)=> contact.name.toLowerCase().includes(value.toLowerCase()))
    setContacts(filteredContact);
        // console.log(contacts);
        return filteredContact
      })
}

  return (
    <>
   
    <div className='mx-auto max-w-[370px] px-4'>
      <Navbar />
      <Searchbar onOpen={onOpen} filterContact={filterContact}/>
      
      <div className='mt-4 flex gap-2 flex-col' >
        { contacts.length <= 0 ? (<NotFoundContact /> ): (contacts?.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            )))}
      </div>
     
    </div>
      
    <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />   
       <ToastContainer position='bottom-right'/>
       
       </>
    )
}

export default App;
// export { filterContact };