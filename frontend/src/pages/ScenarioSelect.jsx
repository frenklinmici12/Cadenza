import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../styling/ScenarioSelect.css"

function Scenario({ scenario }) {
    const navigate = useNavigate();
    return (
        <div className="scenario" onClick={() => navigate("/chat/" + scenario.name)}>
            <h5>{scenario.situation}</h5>
            <p>Goal: {scenario.goal}</p>
        </div>
    )
}

export default function ScenarioSelect() {
    const backend = import.meta.env.VITE_API_URL;

    const [scenarios, setScenarios] = useState([
        {
            id: "job_interview",
            displayName: "Job Interview",
            situation: "Talking to a recruiter for SWE Internship",
            character: {
                name: "Jane",
                role: "SWE Recruiter",
                personality: "Professsional, friendly"

            },
            goal: "Make a good impression in hopes of getting the position"
        },
        {
            name: "first_date",
            displayName: "First Date",
            situation: "Dinner date with potential romantic interest.",
            character: {
                name: "Stacy",
                role: "Potential romantic interest",
                personality: "Kind, but also shy"
            },
            goal: "Make her feel comfortable with you"
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
