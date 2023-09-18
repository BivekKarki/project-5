import {Field, Form, Formik} from 'formik';
import Modal from './Modal';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

const AddAndUpdateContact = ({isOpen, onClose}) => {

    const addContact = async (contact)=> {

        console.log("hellllooo "+contact)
        try{
            const contactref = collection(db, "contacts");
            await addDoc(contactref, contact);
        }catch(error){
            console.log(error);
        }
        
    }


  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} >
        
        <Formik initialValues={{
            name:"",
            email:"",
        }}
        onSubmit={(value)=> {
            console.log(value);
            addContact(value);
            // onClose();
        }}
        >
            <Form className='flex flex-col gap-3'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name'>Name</label>
                    <Field name="name" className="border h-10"/>
                </div>
                
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email'>Email</label>
                    <Field name="email"  className="border h-10"/>
                </div>
                <button className='bg-orange-500 px-3 py-1.5 border self-center'>add contact</button>
            </Form>
        </Formik>
   </Modal>
    </>
  )
}

export default AddAndUpdateContact