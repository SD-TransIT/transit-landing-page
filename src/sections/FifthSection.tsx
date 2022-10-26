import React from "react";

import phone from '../images/phone.jpg'

import '../styles/fifthSection.css';


const FifthSection = () => {

    return (
        <div className="container-fifth">
            <div className="">
                <div className="big-text-field-fifth">
                    <p>ePOD App</p>
                </div>
                <div className="small-text-field-fifth">
                    <p>
                        TransIT and ePOD can be used across donors, countries, and projects with minimal infrastructure, setup, and maintenance costs.
                    </p>
                </div>
            </div>
            <div>
                <div className="fifth-images">
                    <img src={phone} alt='phone' width='223px' height='223px' />
                </div>
            </div>
        </div>
    )
}

export default FifthSection