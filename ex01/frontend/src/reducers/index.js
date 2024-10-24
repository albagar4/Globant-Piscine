// src/reducers/index.js
import { combineReducers } from "redux";
import counterReducer from "./counterReducer"; // Assuming counterReducer.js is in the reducers folder
import inputReducer from "./inputReducer";

export const rootReducer = combineReducers({
  counter: counterReducer, // Add other reducers here if needed
  input: inputReducer,
});
