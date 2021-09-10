import React from "react";
import myImg from "./../assets/img/myImg.jpg";
import aboutBackground from "./../assets/img/about-back.svg";

function About({offsetY}) {
    return (
        <div id={"about"} className={"about"} style={{height: window.innerHeight, backgroundImage: `url(${aboutBackground})`}} >
            <div className={"container h-100"}>
                <div className={"d-flex justify-content-center align-items-center px-5 h-100"}>
                    <div style={{height: window.innerHeight/1.5}} className={"row overflow-hidden"}>
                        <div className={"col-6 h-100"}>
                            <div className={"ms-auto me-4 h-100"}>
                                <div data-aos={"fade-right"} className={"my-image h-100"}>
                                    <img style={{transform: `translateY(${offsetY * 0.5})`}} src={myImg} height={"100%"} alt="my image"/>
                                </div>
                            </div>
                        </div>
                        <div className={"col-6 h-100"}>
                            <div className={"ms-4 d-flex justify-content-start align-items-center h-100"}>
                                <div className={""}>
                                    <div data-aos={"fade-down"} className={"fs-1 fw-900"}>
                                        ABOUT ME
                                    </div>
                                    <div data-aos={"fade-left"} className={"fs-5 pt-4"}>
                                        <div className={""}>
                                            I am currently Pursuing my Bachelor's Degree in Computer Science and Information Technology from KIET Group of Institutions.
                                            I am in 3rd year. <br/>
                                        </div>
                                        <div className={"pt-2"}>
                                            I am also a <span className={"fw-bold"}>Full Stack Web-Developer</span>, <span className={"fw-bold"}>Competitive Coder</span>, <span className={"fw-bold"}>Game Dev Enthusiast</span>.
                                        </div>
                                        <div className={"pt-3"}>
                                            <span className={"fw-bold"}>Languages & Frameworks:</span> C++, HTML5, CSS3, JavaScript, React, Redux, Express, NodeJs
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