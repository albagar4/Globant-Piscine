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
	const query = req.query['query'];
	const api_key = process.env.GEMINI_API;
	const response = await fetch(`https://gemini.google.com/app?query=${query}&client_id=${api_key}`);
	const data = await response.json();

	let toSend = data;
	console.log("toSend", toSend);

	return res.send(toSend);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});