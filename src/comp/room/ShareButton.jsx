import React from "react";

function ShareButton({ roomId }) {
  const handleShare = () => {
    const shareURL = `${window.location.origin}/room/${roomId}`;
    navigator.clipboard
      .writeText(shareURL)
      .then(() => alert("Room link copied to clipboard!"))
      .catch((err) => console.error("Failed to copy:", err));
  };

  return <button onClick={handleShare}>🔗 Copy Room Link</button>;
}

export default ShareButton;
