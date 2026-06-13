import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../styling/Chat.css"

export default function Chat() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState(["hi there!", "hi"]); // placeholder chat value 

    const navigate = useNavigate();

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
                    <input type="text" placeholder="Form your response here..."></input>
                    <button>Send</button>
                </div>
            </div>
          </div>
        </div>
        </>
    )
}
