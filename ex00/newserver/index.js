// Import de express
import express from 'express'
// Import de path
import path from 'path'
//Import de dotenv
import dotenv from 'dotenv'
// Crear una aplicación Express
const app = express()
// Puerto del servidor
const port = 3000

// Estas 4 líneas me dan la ruta al html, __dirname y __filename no existen en Node.js modules (Visto en stack overflow)
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Toma la información del .env
dotenv.config()
const API_KEY = process.env.UNSPLASH_API_KEY;

app.get('/', (req, res) => {
	// sendFile toma un path para leer un html
	res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/api/unsplash', async (req, res) => {
	const query = req.query;
	if (!query) {
		return res.status(400).send("No query introduced");
	}

	try {
		const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}`)
		res.json(response.data.results);
	}
	catch (error) {
		res.status(500).send('Error fetching data');
	}
})

// Arranca el servidor. Recibe el puerto y la respuesta quue da cuando se arranca correctamente
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
