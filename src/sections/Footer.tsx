import React from "react";

import logo from '../images/transit-logo.jpg'

import '../styles/footer.css';

const Footer = () => {

    return (
        <div className="container-footer">
            <div className="footer-info">
                <div>
                    <div className="logo">
                        <img src={logo} alt="logo" width='115px' height='52px'/>
                    </div>
                    <div className="footer-motto">
                        <p>Our motto here or something close to that. Sth about Transport and stuff. </p>
                    </div>
                </div>
                <div className="small-text-field-seventh">
                    <div className="small-text-field">
                        <p>Contact</p>
                        <p>Lorem Ipsum Street 23</p>
                        <p>93332 City</p>
                        <p>Country</p>
                    </div>
                    <div className="small-text-field">
                        <p>Support</p>
                        <p>Manual Guide</p>
                    </div>
                </div>
            </div>
            <div className="footer-rights">
                <div className="footer-line" />
                <div>
                    <p>Copyright TransIT 2022 All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer