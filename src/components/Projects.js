import React, {useEffect, useRef} from "react";
import endeavourImg from "./../assets/img/projects/endeavour-home.png";
import githubIcon from "./../assets/img/icons/github.png";
import backgroundImg1 from "./../assets/img/blob-scene-haikei.svg";
import backgroundImg2 from "./../assets/img/background-projcects.svg";
import backgroundImg3 from "./../assets/img/circle-scatter-haikei.svg";

const EachProject = ({reverse}) => {
    return (
        <div className={"each-project p-5 m-4"}>
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
                    <div className={"col-4 " + (reverse ? " ps-0" : " pe-0")}>
                        <div data-aos={reverse ? "fade-left" : "fade-right"} className={"project-desc fs-5 " + (reverse ? " text-end" : "")}>
                            Website for an online event organized by <br/> e-Cell KIET Group of Institutions
                        </div>
                    </div>
                    <div className={"col-8 " + (reverse ? " pe-0" : " ps-0")}>
                        <div data-aos={reverse ? "fade-right" : "fade-left"} className={"project-img-container position-relative d-flex mt-5 rounded-3 " + (reverse ? " flex-row-reverse ": "")}
                             style={{height: "400px"}}>
                            <div>
                                <img src={endeavourImg} className={"img-fluid"} alt="Endeavour img"/>
                            </div>
                            <div className={"scroll-indication px-2 text-center fs-6 fw-bolder text-uppercase"}>
                                scroll
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function Projects({offsetY}) {
    const myRef = useRef(null);
    useEffect(() => {
        console.log(myRef.current);
    }, [])
    return (
        <div id={"projects"}
             ref={myRef}
             style={{backgroundImage: `url(${backgroundImg3})`, backgroundPosition: `0% ${offsetY * 0.5}%`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}
             className={"projects"}>
            <div className={"container"}>
                <div className={"p-5 mt-5"}>
                    <div className={"fs-1 pt-5 fw-900"}>My Projects</div>
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