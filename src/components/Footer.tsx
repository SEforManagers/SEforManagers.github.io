import React from "react";
import {Copyright} from "./components";
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className={"footer-row"}>
                <div className={"footer-column"}>
                    <h2>About</h2>
                    <p>tbd</p>
                </div>
                <div className={"footer-column"}>
                    <h2>Contact</h2>
                    <p>tbd</p>
                </div>
                <div className={"footer-column footer-column-last"}>
                    <h2>Links</h2>
                    <p><Copyright name={"Software Engineering For Managers"} startYear={2023} /></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;