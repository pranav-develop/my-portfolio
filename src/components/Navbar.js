import React from "react";
import {ReactComponent as Logo} from "./../assets/img/pranav.svg";
import {motion} from "framer-motion";
import {
    imgVariants,
    navLinkAnimation1,
    navLinkAnimation2,
    navLinkAnimation3
} from "./animations/Animations";


function Navbar() {

    return (
        <div className={"nav-bar position-fixed py-1 w-100"}>
            <div className={"container"}>
                <div className={"d-flex w-100 py-2 justify-content-center align-items-center"}>
                    <div className={"navbar-brand mx-2"}>
                        <a href="#top">
                            <motion.div style={{height: "45px"}} variants={imgVariants} initial={"initial"}
                                        animate={"final"}>
                                <Logo style={{width: "100%", height: "100%"}}/>
                            </motion.div>
                        </a>
                    </div>
                    <div className={"nav-links d-flex justify-content-end ms-auto w-75 px-5"}>
                        <a className={"text-decoration-none mx-4 px-2"} href="#about">
                            <motion.div variants={navLinkAnimation1}
                                        initial={"initial"} animate={"final"}
                                        className={"text-decoration-none text-uppercase fs-6 ls-2 color-black"}>About
                            </motion.div>
                        </a>
                        <a className={"text-decoration-none mx-4 px-2"} href="#projects">
                            <motion.div variants={navLinkAnimation2}
                                         initial={"initial"} animate={"final"}
                                         className={"text-decoration-none text-uppercase fs-6 ls-2 color-black"}>Projects
                            </motion.div>
                        </a>
                        <a className={"text-decoration-none mx-4 px-2"} href="#contact">
                            <motion.div variants={navLinkAnimation3}
                                         initial={"initial"} animate={"final"}
                                         className={"text-decoration-none text-uppercase fs-6 ls-2 color-black"}>Contact
                            </motion.div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;