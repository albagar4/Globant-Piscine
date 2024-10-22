const searchInput = document.getElementById('searchInput') as HTMLInputElement;
const searchButton = document.getElementById('searchButton') as HTMLButtonElement;
const resultsDiv = document.getElementById('results') as HTMLDivElement;

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim(); // Obtiene el valor del input
    if (query) { // Solo busca si hay un término introducido
        searchPhotos(query);
    } else {
        console.log('No query entered');
        resultsDiv.innerHTML = '<p>Please enter a search term</p>';
    }
});

async function searchPhotos(query: string) {
    const url = `http://localhost:3000/api/unsplash?query=${encodeURIComponent(query)}`; // Pasa el término de búsqueda al backend
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayResults(data);
    } catch (error) {
        console.error('Error fetching photos:', error);
    }
}

function displayResults(photos: any[]) {
    resultsDiv.innerHTML = '';
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.urls.small;
        resultsDiv.appendChild(img);
    });
}

