import React, { useEffect, useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Access user's webcam and display it
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Webcam access denied:", err);
      });
  }, []);

  return (
    <div>
      <h3>Your Webcam</h3>
      <video ref={videoRef} autoPlay playsInline muted width="300" />
    </div>
  );
}

export default VideoPlayer;
