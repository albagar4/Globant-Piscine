const searchInput = document.getElementById('searchInput') as HTMLInputElement;
const searchButton = document.getElementById('searchButton') as HTMLButtonElement;
const resultsDiv = document.getElementById('results') as HTMLDivElement;

const apiKey = 'API'; // Asegúrate de tener la clave de la API

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        searchPhotos(query);
    }
});

async function searchPhotos(query: string) {
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data.results);
    } catch (error) {
        console.error('Error fetching photos:', error);
    }
}

function displayResults(photos: any[]) {
    resultsDiv.innerHTML = ''; // Limpiar resultados anteriores
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.urls.small;
        resultsDiv.appendChild(img);
    });
}
