import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Route to handle chat
app.post("/chat", async (req, res) => {
  const userPrompt = req.body.prompt;

  // Send request to local Ollama server
  const response = await fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "mistral",
      prompt: userPrompt,
    }),
  });

  const data = await response.json();
  res.json({ reply: data.response });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
