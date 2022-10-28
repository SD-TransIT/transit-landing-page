import React from 'react';

import '../styles/modal.css';

type ModalType = {
  setIsOpen: (x: boolean) => void
  children?: React.ReactNode
  headerTitle?: string
  headerLabel?: string
}

const Modal = ({ setIsOpen, children, headerTitle, headerLabel }: ModalType) => {
  return (
    <>
      <div className="modal-container" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
