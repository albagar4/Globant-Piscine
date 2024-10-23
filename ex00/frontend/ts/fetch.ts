const SERVER_URL = 'http://localhost:3000';

async function displayResults(query: string, resultsDiv: HTMLElement) {
	const response: Response = await fetch(`${SERVER_URL}/get_unsplash_urls?search=${query}`);
	const data: string[] = await response.json();

	data.forEach((result: string) => {
		const img = document.createElement('img');
		img.src = result;
		img.classList.add('result');
		resultsDiv.appendChild(img);
	});
}

const searchForm: HTMLElement = document.getElementById('search')!;
const searchInput: HTMLInputElement = searchForm['search_input'];

function handleSubmit(e: Event) {
	e.preventDefault();
	const resultsDiv: HTMLElement = document.getElementById('results');
	resultsDiv.innerHTML = '';

	const query: string = searchInput.value;
	displayResults(query, resultsDiv);
}

searchForm.addEventListener('submit', handleSubmit);

