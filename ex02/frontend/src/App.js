import React, { useState } from "react";
import InputField from "./components/InputField";
import MapComponent from "./components/MapComponent";
import styles from "./App.module.css";
import "leaflet/dist/leaflet.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [coordinates, setCoordinates] = useState(null); // State for coordinates
  const [error, setError] = useState(null); // State for error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state
    try {
      console.log("inputValue:", inputValue);
      const response = await fetch(
        `http://localhost:5000/get_travel_info?query=${inputValue}`,
        {
          method: "GET",
        },
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("API Response:", data);

      const coords = data.split(",").map(Number); // Convert to an array of numbers

      // Check if we have valid coordinates
      if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
        setCoordinates({ lat: coords[0], lng: coords[1] }); // Set coordinates state
      } else {
        setError("Invalid coordinates received from the API."); // Handle invalid coordinates
      }

      setInputValue("");
    } catch (e) {
      console.error("Unable to send GET request", e);
      setError("Failed to fetch data. Please try again."); // Update error state
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {coordinates && <MapComponent coordinates={coordinates} />}
      <form onSubmit={handleSubmit} className={styles.form}>
        <InputField
          placeholder="What's your destination?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default App;
