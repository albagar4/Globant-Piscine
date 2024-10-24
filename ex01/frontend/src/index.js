// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client' in React 18
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

// Create the root element for React 18
const root = ReactDOM.createRoot(document.getElementById("root")); // Using createRoot instead of render()

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
