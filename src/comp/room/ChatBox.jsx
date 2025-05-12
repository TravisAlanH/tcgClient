import React, { useState } from "react";
import { socket } from "../../socket";

function ChatBox({ messages, roomId }) {
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("send_message", { roomId, text: input });
      setInput("");
    }
  };

  return (
    <div>
      <h3>Chat</h3>
      <div style={{ border: "1px solid gray", padding: 10, height: 150, overflowY: "auto" }}>
        {messages.map((msg, idx) => (
          <div key={idx}>💬 {msg}</div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Say something" />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatBox;
