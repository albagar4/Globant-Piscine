import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = 3000;

// Obtener __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir archivos estáticos desde la carpeta "dist"
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.static(path.join(__dirname, '../')));

// Ruta para servir la página HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html')); // Servir tu archivo HTML
});

// Ruta para la API de Unsplash
app.get('/api/unsplash', async (req, res) => {
    const query = req.query.query;
    if (!query) { // Si no hay query, no hacer la solicitud a Unsplash
        return res.status(400).send('Query parameter is missing');
    }

    try {
        const response = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: { query: query },
            headers: {
                Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}`
            }
        });
        res.json(response.data.results);
    } catch (error) {
        console.error('Error fetching data:', error.response?.data || error.message);
        res.status(500).send('Error fetching data');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
