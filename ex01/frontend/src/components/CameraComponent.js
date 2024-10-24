import React, { useRef, useState } from "react";
import styles from "./CameraComponent.module.css";

const CameraComponent = ({ onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [imageData, setImageData] = useState(null);
  const [stream, setStream] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(null);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = mediaStream;
      videoRef.current.play();
      setStream(mediaStream);
      setIsCameraActive(true);
    } catch (error) {
      console.error("Error trying to access camera", error);
    }
  };
  const stopCamera = () => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setStream(null);
      setIsCameraActive(false);
    }
  };

  const toggleCamera = () => {
    if (isCameraActive) {
      stopCamera();
    } else {
      startCamera();
    }
  };
  const capturePhoto = () => {
    if (!isCameraActive) return;
    const context = canvasRef.current.getContext("2d");
    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;
    context.drawImage(
      videoRef.current,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height,
    );

    const image = canvasRef.current.toDataURL("image/png"); // Guardar la imagen en base64
    setImageData(image);
    if (onCapture) onCapture(image);
  };
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button type="button" className={styles.button} onClick={toggleCamera}>
          {isCameraActive ? "Stop Camera" : "Activate Camera"}
        </button>
        <button type="button" className={styles.button} onClick={capturePhoto}>
          Take photo
        </button>
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      <video ref={videoRef} className={styles.video}></video>
    </div>
  );
};
export default CameraComponent;
