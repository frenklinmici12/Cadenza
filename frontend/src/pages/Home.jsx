import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "../styling/Home.css"

export default function Home() {
    const aboutRef = useRef(null);
    const homeRef = useRef(null);
    const howItWorksRef = useRef(null);

    const scrollToAbout = () => {
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToHome = () => {
        homeRef.current.scrollIntoView({ behavior: "smooth" });
    };
     const scrollToHowItWorks = () => {
        howItWorksRef.current.scrollIntoView({ behavior: "smooth" });
    };
   


    return (
        <>
            <nav>
                <img src="/cadenza_logo.png" alt="logo"></img>
                
                <div className="nav-links">
                    <h3 onClick={scrollToHome}>Home</h3>
                    <h3 onClick={scrollToHowItWorks}>How it Works</h3>
                    <h3 onClick={scrollToAbout}>About</h3>
                    <h3>Register</h3>
                    <h3>Sign In</h3>
                </div>
            </nav>

            <div className="Home" ref={homeRef}>
                <div className="home-left">
                    <h1>
                        Speak Better. <br/>
                        Feel Better. <br/>
                        Live to your fullest, with Cadenza.

                    </h1>
                    <button>Get Started Now!</button>
                </div>
                <div className="home-right">
                    <img src="/home_placeholder.jpg" alt="view"></img>
                </div>
            </div>

            <div className="HowItWorks" ref={howItWorksRef}>
            
            </div>

            <div className="About" ref={aboutRef}>

            </div>
        </>
    )
}

// how it works should be like 1) take quiz 2) blah blah blah
// about should be like created byf renklin mici blah blah