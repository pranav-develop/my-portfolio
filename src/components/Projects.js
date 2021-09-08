import React from "react";
import endeavourImg from "./../assets/img/projects/endeavour-home.png";
import githubIcon from "./../assets/img/icons/github.png";
import backgroundImg1 from "./../assets/img/blob-scene-haikei.svg";
import backgroundImg2 from "./../assets/img/background-projcects.svg";
import backgroundImg3 from "./../assets/img/circle-scatter-haikei.svg";

function Projects() {
    return (
        <div style={{backgroundImage: `url(${backgroundImg3})`}} className={"projects vh-100"}>
            <div className={"container h-100"}>
                <div className={"d-flex justify-content-center h-100 align-items-center"}>
                    <div style={{height: window.innerHeight/1.5}} className={"w-100 px-5"}>
                        <div className={"fs-1 fw-900"}>My Projects</div>
                        <div className={"projects-container pt-5"}>
                            <div className={"each-project h-100 p-5 pt-2"}>
                                <div className={"d-flex h-100 position-relative"}>
                                    <div className={"each-project-head d-flex"}>
                                        Endeavour'21
                                        <div className={"mx-5"}>
                                            <a href="https://github.com/NishantJawla/Endeavour-web-2021" target={"_blank"} rel="noreferrer">
                                                <img src={githubIcon} width={"40px"} className={"img-fluid"} alt="github link"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={"project-desc position-absolute w-75 right-0 top-100"}>
                                        <div className={"d-flex"}>
                                            <div className={"project-img-container mt-5 rounded-3"} style={{height: "400px"}}>
                                                <img src={endeavourImg} className={"img-fluid"} alt="Endeavour img"/>
                                            </div>
                                            <div className={"scroll-indication px-2 text-center fs-6 fw-bolder text-uppercase"}>
                                                scroll
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"project-desc position-absolute w-25 top-100 left-0"}>
                                        <div>
                                            Website for an online event organized by e-Cell KIET Group of Institutions
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

export default Projects;