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
        } else if (query.includes('country') || query.includes('japan') || query.includes('australia') || query.includes('india')) {
            displayResults = travelData.countries;
        } else if (query === '')  {
            alert('Please enter a valid search term like "beach", "temple", or "country".');
            return; // Prevents the search from executing with an empty query
        }

        if (displayResults.length > 0) {
            window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });

            
            // Updated HTML to match the new horizontal card CSS
            resultsDiv.innerHTML = displayResults.map(item => `
                <ul>
                    <li>
                        <img src="${item.imageUrl}" alt="${item.name}">
                        <div>
                            <h4>${item.name}</h4>
                            <p>${item.description}</p>
                            <button>Info...</button>
                        </div>
                    </li>       
                </ul>
            `).join('');
        } else {
            resultsDiv.innerHTML = '<p>No results found. Please try searching for "beach", "temple", or "country".</p>';
        }
    });

    clearBtn.addEventListener('click', () => {
        document.querySelector('#searchIn').value = '';
        resultsDiv.innerHTML = '';
    });
});
