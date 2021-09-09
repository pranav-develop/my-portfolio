import React from "react";
import {ReactComponent as MainImg} from "./../assets/img/main-img.svg";
import "./SvgStyles.css";

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
                            <div className={""}>
                                <div className={"waving-hand-emoji fw-900"}>👋</div>
                                <div className={"fs-1 fw-900"}>Hi There...</div>
                                <div className={"fs-3 fw-bolder pt-3"}>I am Pranav Shukla</div>
                                <div className={"pt-3"}>Student & Full Stack Web developer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;