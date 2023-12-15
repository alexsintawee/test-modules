 // Fetch countries from the server and update the DOM
 async function fetchCountries() {
    const response = await fetch('/countries');
    const countries = await response.json();

    const countriesContainer = document.getElementById('countries-container');

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.textContent = country;
        countriesContainer.appendChild(countryDiv);
    });
}

// Call the fetchCountries function when the page loads
window.onload = fetchCountries;

$(document).ready(function(){
    // JQuery Code
}); 