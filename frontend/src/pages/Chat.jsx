import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

import "../styling/Chat.css"

export default function Chat() {
    const backend = import.meta.env.VITE_API_URL;
    const { scenarioName } = useParams(); // something like job_interview or first_date
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState(["hi there!", "hi"]); // placeholder chat value 
    const [scenario, setScenario] = useState(null);
    const [feedback, setFeedback] = useState(["nothing yet", "lol"]);
    

    const navigate = useNavigate();

    //fetch from backend
    const fetchScenario = async () => {
        const backend = import.meta.env.VITE_API_URL //where our backend lives
     
        try {
            const res = await fetch(backend + "/api/scenarios/" + scenarioName);
            const data = await res.json();
            
            // do stuff
            setScenario(data);
        } catch (err) {
            console.log("Error fetching scenarios: ", err);
        }
    }

    //fetch API data from backend
    useEffect(() => {
        fetchScenario();
    }, [scenarioName]);

    // WIP
    const sendMessage = async () => {
        const response = await fetch(backend + "/api/chat", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            message: input,
            }),
        });

        const userMessage = input;
        console.log(userMessage);

        setInput("");

        const data = await response.json();

        setMessages(prev => [
            ...prev,
            { sender: "user", text: userMessage},
            { sender: "ai", text: data.reply }
        ]);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMessage();
            console.log("hi");
        }
    }

    if (!scenario) return (<div>Loading...</div>);


    return (
        <>
         <nav>
            <img src="/cadenza_logo.png" alt="logo"></img>
            
            <div className="nav-links">
                <h3 onClick={() => navigate("/")}>Home</h3>
                <h3>My Profile</h3>
                <h3>Exit Scenario</h3>
            </div>
        </nav>
       
        <div className="container">
       
          <div className="scenario-info">
            <h2>Scenario Info:</h2>
            <p className="item">Situation: {" " + scenario.situation}</p>
            <p className="item">With: {scenario.character.name + " | " + scenario.character.role + " | Personality: " + scenario.character.personality}</p>
            <p className="item">Goal: {" " + scenario.goal}</p>
            <br/>

            <h2>Feedback:</h2>
            {feedback.map((feedback, i) => (
                <p key={i} className="item">{feedback}</p>
            ))}
          </div>
          <div className="right-side">
            <h1>Discussion Title</h1>
            <div className="chatbox">
                <div className="messages">
                    {messages.map((msg, i) => (
                        <div key={i} className="msg">
                            {msg}
                        </div>
                    ))}
                </div>
                <div className="response">
                    <input value={input} type="text" placeholder="Form your response here..." onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => handleKeyDown(e)}></input>
                    <button onClick={() => sendMessage()}>Send</button>
                </div>
            </div>
          </div>
        </div>
        </>
    )
}
