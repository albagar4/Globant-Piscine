import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 5000;

app.use(
	cors()
);

app.get('/', (req, res) => {
	res.send('Server of TripRecommendator!');
});

app.get('/get_travel_info', async (req, res) => {
	const query = req.query.query;
	const api_key = process.env.GEMINI_API;
	const prompt = `Hi, I'd like to go on a trip to ${query}. Can you give me some recommendations?`;
	const url = `https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5:generateText?key=${api_key}`;
  
	try {
	  const response = await fetch(url, {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			model: "gemini-1.5",
			prompt: prompt
		})
	  });
  
	  if (!response.ok) {
		throw new Error(`Failed to fetch recommendations: ${response.statusText}`);
	  }
  
	  const data = await response.json();
	  const recommendations = data.candidates[0]?.output?.split('\n') || ["No recommendations found."];
  
	  res.json(recommendations);
  
	} catch (error) {
	  console.error("Error fetching data from Google API:", error);
	  res.status(500).send({ error: "Failed to fetch recommendations" });
	}
  });
  

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});