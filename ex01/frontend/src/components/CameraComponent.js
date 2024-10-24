import React, { useRef, useState } from "react";
import styles from "./CameraComponent.module.css";

const CameraComponent = () => {
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
  };
  // Función para subir la foto capturada al backend
  const handleSubmit = async () => {
    if (imageData) {
      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ image: imageData }),
        });
        const result = await response.json();
        console.log("Successfuly uploaded photo", result);
      } catch (error) {
        console.error("Error trying to upload photo", error);
      }
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={toggleCamera}>
          {isCameraActive ? "Stop Camera" : "Activate Camera"}
        </button>
        <button className={styles.button} onClick={capturePhoto}>
          Take photo
        </button>
        <button className={styles.button} onClick={handleSubmit}>
          Upload photo
        </button>
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      {imageData && (
        <img src={imageData} alt="captured" className={styles.capturedImage} />
      )}
      <video ref={videoRef} className={styles.video}></video>
    </div>
  );
};
export default CameraComponent;
