import React from "react";
import backgroundImg3 from "../assets/img/background-projcects.svg";
import {ReactComponent as ContactIcon} from "./../assets/img/contact-img.svg";
import { Blob } from "react-blob";

function Contact() {

    const BackgroundBlob = ({ style, props }) => (
        <Blob
            size="100vh"
            style={{
                position: "absolute",
                zIndex: 10,
                color: "white",
                ...style,
            }}
            {...props}
        />
    );
    // backgroundImage: `url(${backgroundImg3})`
    // #e8e8e8
    return (
        <div id={"contact"} style={{backgroundImage: `url(${backgroundImg3})`}} className={"contact vh-100 position-relative overflow-hidden"}>
            {BackgroundBlob({
                style: {
                    top: "-55%",
                    right: "-25%",
                    opacity: 0.8,
                    backgroundColor: "#e8e8e8",
                    fontSize: "50vh",
                },
            })}
            <div className={"container h-100"}>
                <div className={"d-flex justify-content-center h-100 align-items-center"}>
                    <div style={{height: window.innerHeight/1.5}} className={"w-100 px-5"}>
                        <div className={"fs-1 fw-900"}>Get in Touch</div>
                        <div className={"contact-container pt-5 row"}>
                            <div className={"col-6"}>
                                <div className={""}>
                                    <div className={"px-5"}>
                                        <ContactIcon />
                                    </div>
                                    <div>
                                        <span className={"fs-5 fw-bolder"}>Mail me at: </span>
                                        <span className={"px-2 fs-5"}>pranavschiller@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className={"contact-form col-6 ms-auto px-5 pt-2"}>
                                <div className={"form rounded-3 p-5"}>
                                    <div className={"py-4"}>
                                        <input className={"form-control py-3 px-3"} type="text" placeholder={"Your name"} required />
                                    </div>
                                    <div className={"py-4"}>
                                        <input className={"form-control py-3 px-3"} type="email" placeholder={"Your Email"} required />
                                    </div>
                                    <div className={"py-4"}>
                                        <textarea rows={"4"} cols={"4"} className={"form-control p-3"} placeholder={"Your message"} required />
                                    </div>
                                    <div className={"py-4"}>
                                        <button className={"btn btn-outline-secondary rounded-3 form-control py-3 fw-bolder"}>Send Me a Message</button>
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

export default Contact;