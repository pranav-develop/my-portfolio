import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Main from "../components/Main";

function Home() {
    return (
        <div className={"home"}>
            <Main />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default Home;