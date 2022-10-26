import React from "react";
import classNames from "classnames";

type InputType = {
    isInvalid?: boolean
    isRequired?: boolean
    label: string
}

const Input = ({ isInvalid, isRequired, label }:InputType) => {

    return (
        <div className="input-container">
            <p className={classNames({'required-field': isRequired}, 'input-label')}>{label}</p>
            <input className={classNames("input", { 'input-invalid': isInvalid })}></input>
            {isInvalid ? <p className="required-message">This field is required</p> : <p className="required-message"></p>}
        </div>
        
    )
}

export default Input