document.addEventListener('DOMContentLoaded', () => {    
    const searchBtn = document.querySelector('#searchBtn');
    const clearBtn = document.querySelector('#clearBtn');
    const resultsDiv = document.querySelector('#resultsDiv');

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

searchBtn.addEventListener('click', () => {
    const query = document.querySelector('#searchIn').value.trim().toLowerCase();
    resultsDiv.innerHTML = '';
    

    let displayResults = [];

      if (query.includes('beach')) {
        displayResults = travelData.beaches;
    } else if (query.includes('temple')) {
        displayResults = travelData.temples;
    } else if (query.includes('country') || input.includes('japan')) {
        displayResults = travelData.countries;
    }

    if (displayResults.length > 0) {
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });

        displayResults.forEach(item => {
            // Updated HTML to match the new horizontal card CSS
            resultsDiv.innerHTML += `
                <ul>
                    <li>
                        <img src="${item.imageUrl}" alt="${item.name}">
                        <div>
                            <h4>${item.name}</h4>
                            <p>${item.description}</p>
                        </div>
                    </li>            
                </ul>
            `;
        });
    } else {
        resultsDiv.innerHTML = '<p style="text-align:center; font-size: 20px; padding: 40px;">No matching destinations found. Try searching for "beach", "temple", or "country".</p>';
    }
});

clearBtn.addEventListener('click', () => {
    searchIn.value = '';
    resultsDiv.innerHTML = '';
});
});
