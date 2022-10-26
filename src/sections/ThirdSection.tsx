import React from "react";

import thirdSectionImg from '../images/third-section-img.jpg'

import '../styles/thirdSection.css';


const ThirdSection = () => {

    return (
        <div className="container-third">
            <div className="">
                <div className="big-text-field-third">
                    <p>Transportation</p>
                    <div>
                        <p className="green">Management </p>
                        <p> System</p>
                    </div>
                </div>
                <div className="small-text-field-third">
                    <p>
                        We provide health commodity procurement services and systems strengthening technical assistance that address all elements of a comprehensive supply chain.
                    </p>
                </div>
                <div className="small-text-field-third">
                    <p>
                        We hold ourselves to a similar standard as commercial supply chains, yet we operate in some of the world’s most challenging environments to get critical health supplies to where they are needed.
                    </p>
                </div>
            </div>
            <div>
                <div className="first-images">
                    <img src={thirdSectionImg} alt='children' width='270px' height='228px' />
                </div>
            </div>
        </div>
    )
}

export default ThirdSection