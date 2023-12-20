import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className={"header-line"}>
                <p className={"header-line-name"}><span className={"header-line-se"}>SE</span>FM</p>
            </div>
            <div className={"header-image"}>
                <p className={"header-image-name"}>
                    Software Engineering For Managers<br />
                    <span className={"header-image-name-small"}>
                        Bridging the communication between managers and tech teams.
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Header;