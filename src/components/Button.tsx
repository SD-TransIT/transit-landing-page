import React from "react";

type ButtonType = {
    onClick?: () => void
    disabled?: boolean
    label: string
    type:  "button" | "submit" | "reset" | undefined
}

const Button = ({ onClick, disabled, label, type }: ButtonType) => {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className='button'
            type={type}
        >
            {label}
        </button>
    )
}

export default Button
