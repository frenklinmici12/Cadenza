import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../styling/Chat.css"

export default function Chat() {
    const backend = import.meta.env.VITE_API_URL;
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState(["hi there!", "hi"]); // placeholder chat value 

    const navigate = useNavigate();

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

        setInput("");

        const data = await response.json();

        setMessages(prev => [
            ...prev,
            { sender: "user", text: userMessage },
            { sender: "ai", text: data.reply }
        ]);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMessage();
            console.log("hi");
        }
    }

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
            <ul>
                <li>Setting is x.</li>
                <li>You are talking to y.</li>
                <li>Your goal is z.</li>
            </ul>
            <br/><br/><br/><br/>

            <h2>Feedback:</h2>
            <ul>
                <li>Be more confident!</li>
                <li>Perhaps make a joke to lighten the mood!</li>
            </ul>
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
