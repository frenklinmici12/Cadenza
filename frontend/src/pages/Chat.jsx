import { useState } from "react";
import { Link } from "react-router-dom";

import "../styling/Chat.css"

export default function Home() {

    return (
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
                <p>this is the chatbox </p>
                <div className="response">
                    <input type="text" placeholder="Form your response here..."></input>
                    <button>Send</button>
                </div>
            </div>
          </div>
        </div>
    )
}
