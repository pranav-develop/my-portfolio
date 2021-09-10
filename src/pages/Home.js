import React, {useEffect, useState} from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {
        AOS.init({ duration: 2000, easing: "ease-out-cubic" });
        AOS.refresh();
    }, [])

    return (
        <div className={"home"}>
            <Navbar />
            <Main />
            <About />
            <Projects />
            <Contact />
            {/*<SocialLinks />*/}
        </div>
    );
}

export default Home;