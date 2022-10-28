import React from "react";

type FeaturesNavButtonType = {
    onClick: (x: any) => void
    label: string
    icon: React.ReactNode
}

const FeaturesNavButton = ({onClick, label, icon}: FeaturesNavButtonType) => {
    
    return (
        <button onClick={onClick} className="features-nav">
            <p>{icon}</p>
            <p>{label}</p>
        </button>
    )
}

export default FeaturesNavButton
