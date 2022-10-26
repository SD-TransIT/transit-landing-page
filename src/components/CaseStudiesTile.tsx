import React from "react";
import { RiArrowRightLine } from 'react-icons/ri' 
type CaseStudiesTileType = {
    label: string
}

const CaseStudiesTile = ({ label }: CaseStudiesTileType) => {
    return (
        <div className="tile-container">
            <div className="image-container"></div>
            <p className="tile-message">{label}</p>
            <div className="tile-link">
                <p>View case study</p>
                <RiArrowRightLine />
            </div>
        </div>
    )
}

export default CaseStudiesTile