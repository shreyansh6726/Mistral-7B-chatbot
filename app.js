import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    const res = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    });

    const data = await res.json();
    setMessages([...messages, { user: input, bot: data.reply }]);
    setInput("");
  };

  return (
    <div className="chat-container">
      <h2>Mistral 7B Chatbot 💬</h2>
      <div className="chat-box">
        {messages.map((m, i) => (
          <p key={i}>
            <b>You:</b> {m.user}
            <br />
            <b>Bot:</b> {m.bot}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
