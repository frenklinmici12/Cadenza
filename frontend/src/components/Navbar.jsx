import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import supabase from "../lib/supabase";

import "../styling/Navbar.css"

export default function Navbar({ props }) {
    const { user } = useAuth();

    return (
        <nav>
            <img src="/cadenza_logo.png" alt="logo"></img>
            
            <div className="nav-links">
                <h3 >Home</h3>
                <h3 >How it Works</h3>
                <h3 >About</h3>
                {user ? (
                    <h3
                        onClick={async () => {
                            await supabase.auth.signOut();
                            console.log("logged out");
                        }}
                    >
                        Logout
                    </h3>
                ) : (
                    <h3 onClick={() => navigate("/auth")}>
                        Sign In
                    </h3>
                )}
            </div>
        </nav>
    );
}

/*
 <nav>
            <img src="/cadenza_logo.png" alt="logo"></img>
            
            <div className="nav-links">
                <h3 onClick={props.scrollToHome}>Home</h3>
                <h3 onClick={scrollToHowItWorks}>How it Works</h3>
                <h3 onClick={scrollToAbout}>About</h3>
                {user ? (
                    <h3
                        onClick={async () => {
                            await supabase.auth.signOut();
                            console.log("logged out");
                        }}
                    >
                        Logout
                    </h3>
                ) : (
                    <h3 onClick={() => navigate("/auth")}>
                        Sign In
                    </h3>
                )}
            </div>
        </nav>*/