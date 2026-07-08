import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import scenarios from "./data/scenarios.js" // array with JSON scenario objects, gives you everything you need to know about the scenario to do the chat

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// just a test
app.get("/", (req, res) => {
  res.json({ message: "Backend is running!" })
})

// store scenario data here to be fetched by chat client
app.get("/api/scenarios", (req, res) => {
  res.json(scenarios);
});

// find scenario by its id ex: first_date or job_interview
app.get("/api/scenarios/:id", (req, res) => {
    const scenario = scenarios.find(
        s => s.name === req.params.id
    );

    if (!scenario) {
        return res.status(404).json({
            error: "Scenario not found"
        });
    }

    res.json(scenario);
});

// start new chat
app.post("/api/chat/start", async (req, res) => {
  const { scenario } = req.body;
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})