import React from "react";
import { RiArrowRightLine } from 'react-icons/ri' 
type CaseStudiesTileType = {
    label: string
    image: string
    imgAlt: string
    onClick: () => void
}

const CaseStudiesTile = ({ label, image, imgAlt, onClick }: CaseStudiesTileType) => {
    return (
        <div className="tile-container">
            <div className="image-container">
                <img src={image} alt={imgAlt} width='fit' height='262px' onClick={onClick}/>
                <p className="tile-message" onClick={onClick}>{label}</p>
                <div className="tile-link" onClick={onClick}>
                    <p>View case study</p>
                    <RiArrowRightLine />
                </div>
            </div>
        </div>
    )
}

export default CaseStudiesTile
