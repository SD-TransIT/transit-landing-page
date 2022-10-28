import React from "react";

import CaseStudiesTile from "components/CaseStudiesTile";
import mobilePhone from '../images/mobile-phone.jpg'

import '../styles/caseStudiesSection.css';


const CaseStudiesSection = () => {

    const caseStudies = [
        {
            img: mobilePhone,
            description: 'TransIT case that should be viewed on the next page',
            imgAlt: 'mobile phone'
        },
        {
            img: mobilePhone,
            description: 'TransIT case that should be viewed on the next page',
            imgAlt: 'mobile phone'
        },
        {
            img: mobilePhone,
            description: 'TransIT case that should be viewed on the next page',
            imgAlt: 'mobile phone'
        },
    ]

    return (
        <div className="container-case-studies">
            <div className="big-text-field-case-studies">
                <p>Case Studies</p>
            </div>
            <div>
                {caseStudies.map((caseStudie, idx) => (
                    <div className="container-case-studies-img" key={idx}>
                        <CaseStudiesTile
                            label={caseStudie.description}
                            image={caseStudie.img}
                            imgAlt={caseStudie.imgAlt}
                            onClick={() => {}}
                            />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CaseStudiesSection
