import React from "react";
import "./Home.css";
import graduation from "./graduation.svg";
import rocket from "./rocket.svg";
import handshake from "./handshake.svg";
import speechBubble from "./speech-bubble.svg"
import gears from "./gears.svg"
import puzzle from "./puzzle.svg"


function Home() {
    return (
        <div className="home">
            <h2 className={"home-heading"}>Our Solution</h2>
            <div className={"home-boxes"}>
                <div className={"home-box"}>
                    <div className={"home-box-icon"}>
                        <img src={graduation} alt={"Graduation"} />
                    </div>
                    <div className={"home-box-text"}>
                        <h2>Teaching</h2>
                        Our workshops empower managers with comprehensive technological insights, simplifying complex concepts for practical understanding. These sessions foster a deeper grasp of technical workflows, enabling effective communication and decision-making.
                    </div>
                </div>
                <div className={"home-box"}>
                    <div className={"home-box-icon"}>
                        <img src={rocket} alt={"Rocket"} />
                    </div>
                    <div className={"home-box-text"}>
                        <h2>Improvement</h2>
                        We foster continuous enhancement of managerial skills in technology adoption. Through interactive activities, we refine their approach to handling technical aspects, ensuring seamless integration into their leadership roles.
                    </div>
                </div>
                <div className={"home-box"}>
                    <div className={"home-box-icon"}>
                        <img src={handshake} alt={"Handshake"} />
                    </div>
                    <div className={"home-box-text"}>
                        <h2>Guidance</h2>
                        Our personalized mentorship provides ongoing support, guiding managers through the realm of technology. This mentorship strengthens their confidence in implementing technical solutions.
                    </div>
                </div>
                <div className={"home-box"}>
                    <div className={"home-box-icon"}>
                        <img src={gears} alt={"Gears"} />
                    </div>
                    <div className={"home-box-text"}>
                        <h2>Problem Solving</h2>
                        This symbolizes our focus on problem-solving strategies, helping managers dissect technical challenges into manageable solutions. We emphasize innovative approaches to tackle technological hurdles effectively.
                    </div>
                </div>
                <div className={"home-box"}>
                    <div className={"home-box-icon"}>
                        <img src={speechBubble} alt={"Speech Bubble"} />
                    </div>
                    <div className={"home-box-text"}>
                        <h2>Explanation</h2>
                        Representing our commitment to effective communication, this symbolizes our efforts to streamline technical information flow. We facilitate clearer communication channels between managers and tech teams.
                    </div>
                </div>
                <div className={"home-box"}>
                    <div className={"home-box-icon"}>
                        <img src={puzzle} alt={"Puzzle"} />
                    </div>
                    <div className={"home-box-text"}>
                        <h2>Efficient Integration</h2>
                        Highlighting our aim for seamless integration, this signifies our support in merging technical insights into managerial practices. We facilitate a harmonious synergy between technology and leadership.
                    </div>
                </div>
            </div>

            <hr />
            <p>If you are interested in a partnership to develop a prototype of our workshop for your needs, please do not hesitate to contact us.</p>
        </div>
    );
}

export default Home;
