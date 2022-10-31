import React from "react";

import logo from '../images/logo.jpg'

import '../styles/footer.css';

const Footer = () => (
    <div className="container-footer">
        <div className="footer-info">
            <div>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="footer-motto">
                    <p>
                        Transportation Management System
                        A new tool for improving last mile visibility.
                    </p>
                </div>
            </div>
            <div className="small-text-field-footer">
                <div className="small-text-field-footer">
                    <p>Contact</p>
                    <p>Lorem Ipsum Street 23</p>
                    <p>93332 City</p>
                    <p>Country</p>
                </div>
                <div className="small-text-field-footer">
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

export default Footer
