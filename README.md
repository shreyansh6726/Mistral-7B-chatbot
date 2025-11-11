# 🧠 Mistral 7B Web Chatbot

An interactive **AI-powered chatbot web application** built using **Mistral 7B**, an open-source large language model by [Mistral AI](https://mistral.ai).  
This project allows you to run and chat with a powerful LLM **locally on your own system**, using **Ollama** as the model runtime and a modern **React + Express.js** web interface.

---

## 🚀 Features

- ⚡ **Locally hosted AI** using [Ollama](https://ollama.com) — no API keys or internet required  
- 💬 **Interactive chat interface** built with **React.js**  
- 🔄 **Express.js backend API** that communicates with the Mistral model  
- 🌐 **REST-based architecture** for easy integration and scaling  
- 🔒 **Cross-origin support (CORS)** for seamless frontend-backend communication  
- 🧩 **Lightweight and extendable** for future LLM integrations or cloud deployment  

---

## 🧱 Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | React.js, HTML, CSS |
| Backend | Node.js, Express.js |
| AI Engine | Mistral 7B via Ollama |
| Language | JavaScript (ES6) |
| Protocol | REST API |

---

## ⚙️ System Architecture

```text
[User Interface (React)]
          ↓
[Express.js Backend API]
          ↓
[Ollama Local Server]
          ↓
[Mistral 7B Model Inference Engine]
```

## 🧱 Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | React.js, HTML, CSS |
| Backend | Node.js, Express.js |
| AI Engine | Mistral 7B via Ollama |
| Language | JavaScript (ES6) |
| Protocol | REST API |

---

## ⚙️ System Architecture

```text
[User Interface (React)]
          ↓
[Express.js Backend API]
          ↓
[Ollama Local Server]
          ↓
[Mistral 7B Model Inference Engine]

```
🧩 Prerequisites

Node.js
(v18 or later)
npm
Ollama

🧰 Setup Guide
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/mistral-7b-chatbot.git
cd mistral-7b-chatbot

2️⃣ Install and Run Ollama

Download Ollama → https://ollama.com/download

Pull the Mistral model

ollama pull mistral


This downloads the Mistral 7B model (~4.4 GB) to your local system.

Start the Ollama API server

ollama serve


It will now run at:

http://localhost:11434

3️⃣ Setup and Run the Backend (Express Server)

Initialize a Node project (creates a package.json file)

npm init -y


Install required dependencies

npm install express body-parser cors node-fetch


Make sure your package.json contains this (for ES modules):

{
  "name": "mistral-7b-chatbot",
  "version": "1.0.0",
  "type": "module",
  "main": "server.js",
  "dependencies": {
    "express": "^4.19.0",
    "body-parser": "^1.20.3",
    "cors": "^2.8.5",
    "node-fetch": "^3.3.2"
  }
}


Start your backend server

node server.js


You should see:

Server running on http://localhost:5000

4️⃣ Test the Backend API (Optional)
🪟 PowerShell:
Invoke-WebRequest -Uri "http://localhost:5000/chat" -Method POST -Headers @{ "Content-Type" = "application/json" } -Body '{"prompt":"Hello, Mistral!"}'

💻 Git Bash / CMD:
curl -X POST http://localhost:5000/chat -H "Content-Type: application/json" -d "{\"prompt\": \"Hello, Mistral!\"}"


✅ You should receive a JSON response containing the model’s reply.

5️⃣ (Optional) Setup React Frontend

If you have a client/ folder containing the React project:

cd client
npm install
npm start


This will start the web UI at:

http://localhost:3000

💬 Example Workflow

Start Ollama → ollama serve

Start Backend → node server.js

Start Frontend → npm start

Open browser → http://localhost:3000

Start chatting with Mistral 7B 🚀

🔮 Future Enhancements

🧠 Add conversation memory (context persistence)

🗂️ Integrate vector databases for knowledge-based Q&A

🎤 Voice input/output (Speech-to-Text & TTS)

⚡ Streaming responses for real-time output

☁️ Cloud deployment using GPU-backed services (RunPod, Paperspace, etc.)

🧑‍💻 Author

Your Name — Full Stack / AI Developer
🔗 GitHub: @yourusername

💬 “Built with open-source intelligence for open-source innovation.”

📜 License

This project is licensed under the MIT License — you’re free to use, modify, and distribute it with attribution.
