import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Home() {
    const aboutRef = useRef(null);
    const homeRef = useRef(null);

    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToHome = () => {
        homeRef.current.scrollIntoView({ behavior: "smooth" });
    };


    return (
        <>
            <nav>
                <img src="/cadenza_logo.png" alt="logo"></img>
                <h3 onClick={scrollToHome}>Home</h3>
                <h3 onClick={scrollToAbout}>About</h3>
            </nav>

            <div className="Home" ref={homeRef}>
                <div className="home-left">
                    <h1>
                        Talk better.
                        Feel better.
                        Own the conversation with Cadenza.
                    </h1>
                    <button>Get Started Now!</button>
                </div>
                <div className="home-right">
                    <img src="" alt="view"></img>
                </div>
            </div>
        </>
    )
}