import React from "react";

import Button from "components/Button";

import '../styles/seventhSection.css';

const SeventhSection = () => {

    return (
        <div className="container-seventh">
            <div className="big-text-field-seventh">
                <p>
                    Let’s
                    <span>Talk</span>
                </p>
            </div>
            <div className="small-text-field-seventh">
                <p>Get in touch with us to start keeping your employees</p>
                <p>
                    <span>email@email.com</span>
                </p>
            </div>
            <div className="action-button-seventh">
                <Button onClick={() => {}} label='Request Demo' />
            </div>
        </div>
    )
}

export default SeventhSection