import React from "react";
import {ReactComponent as MainImg} from "./../assets/img/main-img.svg";
import "./SvgStyles.css";
import {motion} from "framer-motion";
import {helloAnimation} from "./animations/Animations";

function Main(){
    return (
        <div id={"top"} className={"main vh-100"}>
            <div className={"container h-100"}>
                <div className={"row h-100"}>
                    <div className={"col-6 h-100"}>
                        <div className={"p-5 d-flex justify-content-end h-100 align-items-center"}>
                            <MainImg />
                        </div>
                    </div>
                    <div className={"col-6 h-100"}>
                        <div className={"h-100 p-5 d-flex justify-content-center align-items-center"}>
                            <motion.div className={""} initial={{}} animate={{transition: {staggerChildren: 1}}}>
                                <div className={"waving-hand-emoji fw-900"}>👋</div>
                                <motion.div variants={helloAnimation} initial={"initial"} animate={"final"} className={"fs-1 fw-900"}>Hi There...</motion.div>
                                <motion.div variants={helloAnimation} initial={"initial"} animate={"final"} className={"fs-3 fw-bolder pt-3"}>I'm Pranav Shukla</motion.div>
                                <div className={"pt-3"}>Student & Full Stack Web developer</div>
                                <div className={"call-to-action pt-4"}>
                                    <div className={"d-flex"}>
                                        <button className={"btn btn-outline-secondary py-2 px-4 me-2"}>Contact Me</button>
                                        <button className={"btn btn-outline-secondary py-2 px-4 fw-bolder ms-2"}>Download CV</button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;