import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { socket } from "../../socket";
import ShareButton from "./ShareButton";
import VideoPlayer from "./VideoPlayer";
import ChatBox from "./ChatBox";

function Room() {
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(null);

  useEffect(() => {
    socket.emit("join_room", roomId);

    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data.text]);
    });

    socket.on("button_clicked", (id) => {
      setButtonClicked(`User ${id} clicked the button`);
    });

    return () => {
      socket.off("receive_message");
      socket.off("button_clicked");
    };
  }, [roomId]);

  const sendTestButton = () => {
    socket.emit("button_click", roomId);
  };

  return (
    <div>
      <h2>Room: {roomId}</h2>
      <ShareButton roomId={roomId} />
      <VideoPlayer />
      <ChatBox messages={messages} roomId={roomId} />
      <button onClick={sendTestButton}>Click Me</button>
      {buttonClicked && <p>{buttonClicked}</p>}
    </div>
  );
}

export default Room;
