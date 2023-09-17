import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({onClose, isOpen, children}) => {
  return createPortal (
    <>
  
        { isOpen && (
        <>
        <div className='m-auto relative z-50  min-h-[200px] max-w-[60%] p-4 bg-white '>
          <div className='flex justify-end'>
            
            <AiOutlineClose onClick={onClose} className="text-2xl "  />
          </div>
          <children />
        </div> 
        <div onClick={onClose} className='absolute top-0 z-40 backdrop-blur w-screen h-screen' />
      </>
      )}
    </>
  ,document.getElementById("modal-root")
  )};

export default Modal;