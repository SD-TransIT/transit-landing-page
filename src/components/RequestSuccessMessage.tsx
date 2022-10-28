import React from "react";

import { RiCloseLine } from "react-icons/ri";

import succesRequest from '../images/succes-request.jpg'

type RequestSuccessMessageType = {
  setIsOpen: (x: boolean) => void
}

const RequestSuccessMessage = ({ setIsOpen }: RequestSuccessMessageType) => {

    return (
      <>
        <div className="modal-header text-left">
          <RiCloseLine className='modal-close-btn' onClick={() => setIsOpen(false)}/>
        </div>
        <div className="modal-succes-container">
          <div>
            <img src={succesRequest} alt='success request'/>
          </div>
          <div className="big-text-field-success-modal">
            <p>Thank you for <span>your request</span></p>
          </div>
          <div className="small-text-field-success-modal">
            <p>
              We will contact you to schedule a demo at a date and time that suits you best.
            </p>
          </div>
        </div>
      </>
    )
}

export default RequestSuccessMessage
