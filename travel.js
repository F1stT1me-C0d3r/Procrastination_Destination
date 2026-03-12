let travelData = { beaches: [], temples: [], countries: [] };

fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        travelData.beaches = data.beaches;
        travelData.temples = data.temples;
        // Flatten the cities from each country into a single array to match the expected format
        travelData.countries = data.countries.flatMap(country => country.cities);
    })
    .catch(error => console.error('Error fetching travel data:', error));

const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const resultsDiv = document.getElementById('results');

searchBtn.addEventListener('click', () => {
    const query = document.getElementById('searchIn').value.toLowerCase();
    resultsDiv.innerHTML = '';

    let displayResults = [];
});

clearBtn.addEventListener('click', () => {});

