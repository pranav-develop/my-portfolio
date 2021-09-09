import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <div className={"home"}>
            <Navbar />
            <Main />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default Home;