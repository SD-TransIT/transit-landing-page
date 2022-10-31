import React, { useState } from "react";

import Button from "components/Button";

import '../styles/seventhSection.css';
import Modal from "components/Modal";
import RequestForm from "components/RequestForm";
import RequestSuccessMessage from "components/RequestSuccessMessage";

const SeventhSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isRequestComplete, setIsRequestComplete] = useState(true)

    return (
        <>
            <div className="container-seventh">
                <div className="big-text-field-seventh">
                    <p>Let’s<span>Talk</span></p>
                </div>
                <div className="small-text-field-seventh">
                    <p>
                        Find out how you can gain higher transparency, 
                        reduce your costs, and improve your organization.
                    </p>
                </div>
                <div className="action-button-seventh">
                    <Button onClick={() => setIsOpen(true)} label='Request Demo' type='button' />
                </div>
            </div>
            {isOpen &&
                <Modal setIsOpen={setIsOpen}>
                    {isRequestComplete ? <RequestForm setIsOpen={setIsOpen}/> : <RequestSuccessMessage setIsOpen={setIsOpen} /> }
                </Modal>
            }
        </>
    )
}

export default SeventhSection
