import {ErrorMessage, Field, Form, Formik} from 'formik';
import Modal from './Modal';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from "yup" 

const contactSchemaValidation = Yup.object().shape({
    name:Yup.string().required("name is required"),
    email:Yup.string().email("Invalid Email").required("Email is required"),
})

const AddAndUpdateContact = ({isOpen, onClose, isUpdate, contact}) => {

    const addContact = async (contact)=> {

        console.log("hellllooo "+contact)
        try{
            const contactref = collection(db, "contacts");
            await addDoc(contactref, contact);
            onClose();
            
            toast.success("Added successfully");
        }catch(error){
            console.log(error);
        }
    }

    const updateContact = async (contact,id)=> {

        console.log("hellllooo "+contact)
        try{
            const contactref = doc(db, "contacts",id);
            await updateDoc(contactref, contact);
            onClose();
            toast.success("Updated successfully");
        }catch(error){
            console.log(error);
        }
        
    }


  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} >
        
        <Formik validationSchema={contactSchemaValidation} initialValues={isUpdate ?{name:contact.name, email:contact.email}:{
            
            name:"",
            email:"",
        }}
        onSubmit={(value)=> {
            console.log(value);
            isUpdate ? 
            updateContact(value,contact.id) :
            addContact(value);
            // onClose();
        }}
        >
            <Form className='flex flex-col gap-3'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name'>Name</label>
                    <Field name="name" className="border h-10"/>
                    <div className='text-red-600 text-xs'>
                    <ErrorMessage name='name'/>
                    </div>
                </div>
                
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email'>Email</label>
                    <Field name="email"  className="border h-10"/>
                    <div className='text-red-600 text-xs'>
                        <ErrorMessage name='email'/>
                    </div>
                </div>
                <button className='bg-orange-500 px-3 py-1.5 border self-center'>{ isUpdate ? "update" : "add"} contact</button>
            </Form>
        </Formik>
   </Modal>
    </>
  )
}

export default AddAndUpdateContact