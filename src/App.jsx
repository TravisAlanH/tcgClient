import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Room from "./comp/room/Room";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/" element={<div>Welcome! Share your link to start a room.</div>} />
      </Routes>
    </Router>
  );
}

export default App;
