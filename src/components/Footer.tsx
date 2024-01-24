import React from "react";
import {Copyright} from "./components";
import './Footer.css';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className={"footer-row"}>
                <div className={"footer-column"}>
                    <h2>About</h2>
                    <p>
                        At SEFM, our founders, tech enthusiasts with a blend of technology and business expertise, are dedicated to empowering leaders through personalized mentorship and interactive workshops. Their innovative spirit seamlessly integrates technical insights into managerial roles, fostering effective decision-making in today's dynamic business landscape.
                    </p>
                </div>
                <div className={"footer-column"}>
                    <h2>Contact</h2>
                    <p>
                        📧E-Mail: <a href={"mailto:seformanagers@gmail.com"}>seformanagers@gmail.com</a><br />
                        📞Telephone: +49 160 93808103<br />
                        🏠Address: Chen, Südstraße 3, 74072 Heilbronn<br />
                    </p>
                </div>
                <div className={"footer-column footer-column-last"}>
                    <h2>Links</h2>
                    <p><Link to={"/legal"}>Legal | Impressum</Link></p>
                    <p><Copyright name={"Software Engineering For Managers"} startYear={2023} /></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;