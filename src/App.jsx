import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Room from "./comp/room/Room";

// Component for homepage with share button
function Home() {
  const [roomUrl, setRoomUrl] = useState(null);
  const navigate = useNavigate();

  const createRoom = () => {
    const roomId = Math.random().toString(36).substring(2, 10); // simple random ID
    const fullUrl = `${window.location.origin}/room/${roomId}`;
    setRoomUrl(fullUrl);
    navigate(`/room/${roomId}`); // Optional: automatically enter the room
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome!</h2>
      <button onClick={createRoom} style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
        ➕ Start a Room
      </button>

      {roomUrl && (
        <div style={{ marginTop: "1rem" }}>
          <p>✅ Share this link:</p>
          <code style={{ background: "#eee", padding: "0.5rem", display: "block" }}>{roomUrl}</code>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
