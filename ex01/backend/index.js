import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ticketsModel from "models.js";
// import axios from 'axios';

dotenv.config();

const app = express();
const port = 3000;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/tickets', async (req, res) => {
	try {
		const tickets = await ticketsModel.find({});
		return res.json({tickets});
	}
	catch (error) {
		console.log('Error', error);
		return res.status(500).json({ message: 'Internal server error '});
	}
});

app.post('/tickets', async (req, res) => {
	try {
		const title = req.tickets?.title;
		const description = req.tickets?.description;
		const image = req.tickets?.image;

		if (!title || !description || !image) {
			return res.status(400).json({ message: 'Bad request, title, description or image not found'});
		}
		const ticket = new ticketsModel({
			title,
			description,
			image
		});

		const save = await ticket.save();
		return res.status(201).json({ ticket: save });
	}
	catch (error) {
		console.log('Error', error);
		return res.status(500).json({ message: 'Internal server error' });
	}
});

mongoose.connect(MONGODB_URL, {
	serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
	socketTimeoutMS: 30000, // Close sockets after 5 minutes of inactivity
})
	.then(() => {
		console.log('Connection success');
		app.listen(port, () => {
			console.log(`Server listen on http://localhost:${port}`);
		});
	})
	.catch (error => {
		console.error('Connection fail', error);
	});

