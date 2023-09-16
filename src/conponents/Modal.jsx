import React from 'react'
// import { AiOutlinePlusClose } from 'react-icons/ai'

const Modal = ({onClose, isOpen, children}) => {
  return (
    <>
  
        { isOpen && 
        <div className='min-h-[200px] max-w-[80%] p-4 bg-white '>
          <div className='flex '>
            
            <AiOutlinePlusClose onClick={onClose} className="text-2xl justify-end"  />
          </div>
        </div> 
        }
    </>
  )
};

export default Modal;