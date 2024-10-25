import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server of TripRecommendator!");
});

app.get("/get_travel_info", async (req, res) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const query = req.query.query;
  const prompt = `Give me the coordinates of nice place for a trip in ${query}. DO NOT give me anything else but the coordinates`;

  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  res.json(result.response.text());
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
