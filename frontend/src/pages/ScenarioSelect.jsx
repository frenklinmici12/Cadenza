import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../styling/ScenarioSelect.css"

function Scenario({ scenario }) {
    const navigate = useNavigate();
    return (
        <div className="scenario" onClick={() => navigate("/chat/" /*+ scenario.name)*/)}>
            <h5>{scenario.situation}</h5>
            <p>Goal: {scenario.goal}</p>
        </div>
    )
}

export default function ScenarioSelect() {
    const backend = import.meta.env.VITE_API_URL;

    const [scenarios, setScenarios] = useState([
        {
            name: "Job-Interview",
            situation: "Talking to a recruitor for SWE Internship",
            goal: "Make a good impression"
        },
        {
            name: "First Date",
            situation: "Dinner date with girl.",
            goal: "Make a good impression"
        }
    ]);



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
        
        <div className="scenario-container">
            <h1>Select a Scenario</h1>

             {scenarios.map((scenario) => (
                <Scenario
                    key={scenario.name}
                    scenario={scenario}
                />
            ))}

        </div>
        </>
    )
}
