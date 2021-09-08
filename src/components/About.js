import React from "react";
import myImg from "./../assets/img/myImg.jpg";

function About() {
    return (
        <div className={"about"} style={{height: window.innerHeight}}>
            <div className={"container h-100"}>
                <div className={"d-flex justify-content-center align-items-center px-5 h-100"}>
                    <div style={{height: window.innerHeight/1.5}} className={"row overflow-hidden"}>
                        <div className={"col-6 h-100"}>
                            <div className={"ms-auto me-4 h-100"}>
                                <div className={"my-image h-100"}>
                                    <img src={myImg} height={"100%"} alt="my image"/>
                                </div>
                            </div>
                        </div>
                        <div className={"col-6 h-100"}>
                            <div className={"ms-4 d-flex justify-content-start align-items-center h-100"}>
                                <div className={""}>
                                    <div className={"fs-1 fw-900"}>
                                        ABOUT ME
                                    </div>
                                    <div className={" pt-4"}>
                                        <div className={""}>
                                            I am currently Pursuing my Bachelor's Degree in Computer Science and Information Technology from KIET Group of Institutions.
                                            I am currently in my 3rd year. <br/>
                                            I am also a Full Stack Web-Developer.
                                        </div>
                                        <div className={"pt-3"}>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;