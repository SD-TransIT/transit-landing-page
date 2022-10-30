import React from "react";

import emptyPhone from '../images/empty-phone.jpg'

import '../styles/fifthSection.css';

const FifthSection = () => (
    <div className="container-fifth">
        <div>
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
                <img src={emptyPhone} alt='phone' />
            </div>
        </div>
    </div>
)

export default FifthSection
