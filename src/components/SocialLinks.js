import React from "react";
import githubIcon from "./../assets/img/icons/github.png";

function SocialLinks() {
    return (
        <div className={"social-icons position-absolute bottom-0 right-0 mx-5 px-5 py-5"}>
            <div>
                <div className={"p-3"}>
                    <a href="https://github.com/pranav-develop" target={"_blank"}>
                        <img src={githubIcon} alt="github" width={"35px"}/>
                    </a>
                </div>
                <div className={"p-3"}>
                    <a href="https://github.com/pranav-develop" target={"_blank"}>
                        <img src={githubIcon} alt="github" width={"35px"}/>
                    </a>
                </div>
                <div className={"p-3"}>
                    <a href="https://github.com/pranav-develop" target={"_blank"}>
                        <img src={githubIcon} alt="github" width={"35px"}/>
                    </a>
                </div>
                <div className={"p-3"}>
                    <a href="https://github.com/pranav-develop" target={"_blank"}>
                        <img src={githubIcon} alt="github" width={"35px"}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SocialLinks;