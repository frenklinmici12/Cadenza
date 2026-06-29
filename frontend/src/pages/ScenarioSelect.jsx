import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../styling/ScenarioSelect.css"

function Scenario({ scenario }) {
    const navigate = useNavigate();
    return (
        <div className="scenario" onClick={() => navigate("/chat/" + scenario.name)}>
            <h5>{scenario.situation}</h5>
            <p>With: {scenario.character.name + " | " + scenario.character.role + " | Personality: " + scenario.character.personality}</p>
            <p>Goal: {scenario.goal}</p>
        </div>
    )
}

export default function ScenarioSelect() {
    const [scenarios, setScenarios] = useState([]);

    const navigate = useNavigate();

    //fetch from backend
    const fetchScenarios = async () => {
        const backend = import.meta.env.VITE_API_URL //where our backend lives
     
        try {
            const res = await fetch(backend + "/api/scenarios");
            const data = await res.json();
            setScenarios(data);
        } catch (err) {
            console.log("Error fetching scenarios: ", err);
        }
    }

    //fetch API data from backend
    useEffect(() => {
        fetchScenarios();
    }, [])


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
