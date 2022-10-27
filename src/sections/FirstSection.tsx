import React, { useState } from "react";

import Button from '../components/Button'
import logo from '../images/transit-logo.jpg'
import firstSectionImg from '../images/first-section-img.jpg'

import '../styles/firstSection.css';
import Modal from "components/Modal";
import RequestForm from "components/RequestForm";

const FirstSection = () => {
 const [isOpen, setIsOpen] = useState(true);
    return (
        <>
        <div className="container-first">
            <div>
                <div className="logo">
                    <img src={logo} alt="logo" width='115px' height='52px'/>
                </div>
                <div className="big-text-field">
                    <p>A new tool for</p>
                    <p className="green">improving</p>
                    <p>last mile visibility</p>
                </div>
                <div className="small-text-field">
                    <p>
                        We operate in some of the world’s most challenging environments to get critical health supplies to where they are needed. 
                    </p>
                </div>
            </div>
            <div>
                <div className="action-button">
                    <Button onClick={() => setIsOpen(true)} label='Request Demo'/>
                </div>
                <div className="first-images">
                    <img src={firstSectionImg} alt='truck' width='283px' height='262px' />
                </div>
            </div>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} headerTitle='Request a Demo' headerLabel="Please fill out the form below to request your demo.">
            <RequestForm />   
            </Modal>
                }
        </>
    )
}

export default FirstSection