import React, { ForwardedRef, forwardRef } from "react";
import classNames from "classnames";

type TextFieldType = {
    isInvalid?: boolean
    isRequired?: boolean
    label: string
    name?: string
    placeholder: string
    onChange?: any
}

const TextField = forwardRef(({ isInvalid, isRequired, label, placeholder, name, onChange }:TextFieldType, ref: ForwardedRef<HTMLTextAreaElement>) => (
    <div className="text-field-container">
        <p className={classNames({'required-field': isRequired}, 'input-label')}>{label}</p>
        <textarea
            className={classNames("text-field", { 'text-field-invalid': isInvalid })}
            placeholder={placeholder}
            name={name}
            ref={ref}
            onChange={onChange}
        />
        {isInvalid ? <p className="required-message">This field is required</p> : <p className="required-message"></p>}
    </div>
))

export default TextField
