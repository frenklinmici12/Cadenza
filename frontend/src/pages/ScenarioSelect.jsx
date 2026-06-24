import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../styling/ScenarioSelect.css"

export default function ScenarioSelect() {
    const backend = import.meta.env.VITE_API_URL;

    const navigate = useNavigate();

    return (
        <>
         <nav>
            <img src="/cadenza_logo.png" alt="logo"></img>
            
            <div className="nav-links">
                <h3 onClick={() => navigate("/")}>Home</h3>
                <h3>My Profile</h3>
            </div>
        </nav>   
        
        <div className="container">
            this is the scenario slect
        </div>
        </>
    )
}
