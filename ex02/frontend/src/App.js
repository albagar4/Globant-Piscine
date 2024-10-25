import React, { useState } from "react";
import InputField from "./components/InputField";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("inputValue", inputValue);
      const response = await fetch(
        `http://localhost:5000/get_travel_info?query=${inputValue}`, {
          method: 'GET',
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);
    } catch (e) {
      console.error("Unable to send GET request", e);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Describe your perfect journey"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ padding: "10px", fonrSize: "16px" }}
        />
        <button
          type="submit"
          style={{ marginLeft: "10px", padding: "10px" }}
        ></button>
      </form>
    </div>
  );
};

export default App;
