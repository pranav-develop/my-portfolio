import React, {useEffect, useState} from "react";
import endeavourImg from "./../assets/img/projects/endeavour-home.png";
import githubIcon from "./../assets/img/icons/github.png";
import backgroundImg1 from "./../assets/img/blob-scene-haikei.svg";
import backgroundImg2 from "./../assets/img/background-projcects.svg";
import backgroundImg3 from "./../assets/img/circle-scatter-haikei.svg";

const EachProject = ({reverse}) => {

    const setInitalValue = () => {
        if(window.innerWidth <= 576) return "250";
        if(window.innerWidth <= 1200) return "300";
        return "400";
    };

    return (
        <div className={"each-project p-0 p-md-5 my-4 mx-2 mx-xl-4"}>
            <div className="project-head">
                <div
                    data-aos={reverse ? "fade-left" : "fade-right"}
                    className={"each-project-head d-flex align-items-center p-0 m-0 " + (reverse ? " flex-row-reverse" : "")}>
                    <span>Endeavour'21</span>
                    <div className={"mx-5"}>
                        <a href="https://github.com/NishantJawla/Endeavour-web-2021" target={"_blank"}
                           rel="noreferrer">
                            <img src={githubIcon} width={"40px"} className={"img-fluid"}
                                 alt="github link"/>
                        </a>
                    </div>
                </div>
                {/*<div className={"project-desc fs-5 p-0 m-0"}>*/}
                {/*    Website for an online event organized by <br/> e-Cell KIET Group of Institutions*/}
                {/*</div>*/}
                <div className={"row " + (reverse ? " flex-row-reverse" : "")}>
                    <div className={"col-12 col-sm-10 col-lg-4" + (reverse ? " ps-0" : " pe-0")}>
                        <div data-aos={reverse ? "fade-left" : "fade-right"} className={"project-desc fs-5 " + (reverse ? " text-end" : "")}>
                            Website for an online event organized by e-Cell KIET Group of Institutions
                        </div>
                    </div>
                    <div className={"col-12 col-lg-8 " + (reverse ? " pe-0" : " ps-0")}>
                        <div data-aos={reverse ? "fade-right" : "fade-left"} className={"project-img-container position-relative d-flex mt-5 rounded-3 " + (reverse ? " flex-row-reverse ": "")}
                             style={{height: `${setInitalValue()}px`}}>
                            <div>
                                <img src={endeavourImg} className={"img-fluid"} alt="Endeavour img"/>
                            </div>
                            <div className={"scroll-indication d-none d-sm-block px-2 text-center fs-6 fw-bolder text-uppercase"}>
                                scroll
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function Projects() {
    return (
        <div id={"projects vw-100"}
             style={{backgroundImage: `url(${backgroundImg3})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
             className={"projects"}>
            <div className={"container"}>
                <div className={"py-5 px-2 px-xl-5 mt-5"}>
                    <div data-aos={"fade-up"} className={"fs-1 pt-0 pt-sm-5 fw-900"}>My Projects</div>
                    <div className={"projects-container"}>
                        <EachProject/>
                        <EachProject reverse={true}/>
                        <EachProject/>
                        <EachProject reverse={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;