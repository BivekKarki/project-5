import {Field, Form, Formik} from 'formik';
import Modal from './Modal';

const AddAndUpdateContact = ({isOpen, onClose}) => {
  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} >
        <Formik>
            <Form className='flex flex-col gap-3'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name'>Name</label>
                    <Field name="name" className="border h-10"/>
                </div>
                
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email'>Email</label>
                    <Field name="email"  className="border h-10"/>
                </div>
                <button className='bg-orange px-3 py-1.5 border self-end'>add contact</button>
            </Form>
        </Formik>
   </Modal>
    </>
  )
}

export default AddAndUpdateContact