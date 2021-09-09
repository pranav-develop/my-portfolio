import React from "react";
import logo from "./../assets/img/pranav.png";

function Navbar() {
    return (
        <div className={"nav-bar position-fixed py-1 w-100"}>
            <div className={"container"}>
                <div className={"d-flex w-100 py-1 justify-content-center align-items-center"}>
                    <div className={"navbar-brand mx-2"}>
                        <img src={logo} height={"60px"} alt="logo"/>
                    </div>
                    <div className={"nav-links d-flex justify-content-end ms-auto w-75 px-5"}>
                        <a className={"text-decoration-none mx-4 px-2"} href="google.com">
                            <span className={"text-decoration-none text-uppercase fs-6 ls-2 color-black"}>Home</span>
                        </a>
                        <a className={"text-decoration-none mx-4 px-2"} href="google.com">
                            <span className={"text-decoration-none text-uppercase fs-6 ls-2 color-black"}>About</span>
                        </a>
                        <a className={"text-decoration-none mx-4 px-2"} href="google.com">
                            <span className={"text-decoration-none text-uppercase fs-6 ls-2 color-black"}>Projects</span>
                        </a>
                        <a className={"text-decoration-none mx-4 px-2"} href="google.com">
                            <span className={"text-decoration-none text-uppercase fs-6 ls-2 color-black"}>Contact</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;