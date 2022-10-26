import React from "react";

type ButtonType = {
    onClick: () => void
    disabled?: boolean
    label: string
}

const Button = ({ onClick, disabled, label }: ButtonType) => {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className='button'
        >
            {label}
        </button>
    )
}

export default Button