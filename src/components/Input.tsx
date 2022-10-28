import React, { ForwardedRef, forwardRef } from "react";
import classNames from "classnames";

type InputType = {
    isInvalid?: boolean
    isRequired?: boolean
    label: string
    name?: string
    placeholder: string
    type: string
    id?: string
    onChange?: any
}

const Input = forwardRef((
    { isInvalid, isRequired, label, placeholder, type, name, id, onChange, ...props }: InputType,
    ref: ForwardedRef<HTMLInputElement>) => {

    return (
        <div className="input-container">
            <p className={classNames({'required-field': isRequired}, 'input-label')}>{label}</p>
            <input
                className={classNames("input", { 'input-invalid': isInvalid })}
                placeholder={placeholder}
                type={type}
                name={name}
                ref={ref}
                id={id}
                onChange={onChange}
            />
            {isInvalid ? <p className="required-message">This field is required</p> : <p className="required-message"></p>}
        </div>
        
    )
})

export default Input
