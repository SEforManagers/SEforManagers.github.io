import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

type HeaderProps = {
    isHome?: boolean;
}

function Header({isHome} : HeaderProps) {
    return (
        <div className="header">
            <div className={"header-line"}>
                <Link to={"/"}>
                <p className={"header-line-name"}><span className={"header-line-se"}>SE</span>FM</p>
            </Link>
            </div>
            {isHome ? <div className={"header-image"}>
                <p className={"header-image-name"}>
                    Software Engineering For Managers<br />
                    <span className={"header-image-name-small"}>
                        Bridging the communication between managers and tech teams.
                    </span>
                </p>
            </div> : <></>}
        </div>
    );
}

export default Header;