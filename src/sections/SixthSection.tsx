import React from "react";

import { RiCheckFill } from "react-icons/ri"

import '../styles/sixthSection.css';


const SixthSection = () => {

    const benefits = [
        { label: 'Reduction of donor costs' },
        { label: 'Improving functionality and services for end beneficiaries' },
        { label: 'Greater transparency to all supply chain stakeholders.' },
        { label: 'Saving Money For The Future' },
        { label: 'Increases efficiency in processes' },
    ]

    return (
        <div className="container-sixth">
            <div>
                <div className="big-text-field-sixth">
                    <p><span>Key Benefits</span> of Transportation Management System
                    </p>
                </div>
            </div>
            <div>
                {benefits.map((benefit, idx) => (
                    <div className="small-text-field-sixth" key={idx}>
                        <div className="checkmark">
                            <RiCheckFill />
                        </div>
                        <p key={idx}>{benefit.label}</p>
                    </div>
                ))}
                </div>
            </div>
    )
}

export default SixthSection
