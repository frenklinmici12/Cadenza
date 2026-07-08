import { useState } from "react";
import supabase from "../lib/supabase";
import { useNavigate } from "react-router-dom";

import "../styling/Auth.css"

export default function Auth() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const signUp = async () => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            console.log(error.message);
        } else {
            console.log("User created:", data);
            alert("Register Successful")
            navigate("/");
        }
    };


    const login = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.log(error.message);
        } else {
            console.log("Logged in:", data);
            alert("Login Successful!")
            navigate("/");
        }
    };


    return (
       <>
        <nav>
            <img src="/cadenza_logo.png" alt="logo"></img>
                
            <div className="nav-links">
                <h3 onClick={() => navigate("/")}>Return to Home</h3>
            </div>
        </nav>
   
        <div className="auth-content">
            <div className="log-in">
                <input 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={login}>
                    Login
                </button>
            </div>

            <div className="register">
                <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

                <button onClick={signUp}>
                    Sign Up
                </button>
            </div>

        </div>     
       </>
    );
}


