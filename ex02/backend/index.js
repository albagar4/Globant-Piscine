import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const port = 4242;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server of TripRecommendator!");
});

app.get("/get_travel_info", async (req, res) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const query = req.query.query;
  const prompt = `Give me some activities suggestions based on this information: ${query}. DO NOT give me anything else but the suggestions. Format the suggestions in a nice HTML so that I can output it with innerHTML. Always give me a nice title before the suggestions.`;

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  res.json(result.response.text());
});

app.get("/get_map_coordinates", async (req, res) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const query = req.query.query;
  const prompt = `Give me the coordinates of nice place for a trip in ${query}. DO NOT give me anything else but the coordinates, which should look like this: 40.4168, -3.7038 `;

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  res.json(result.response.text());
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
