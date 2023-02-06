// api key
var apiKey = '4592844a9d1c589bd9c6d1289e2fe7fb'
// variables
var cityInput = document.querySelector('#enterCity');
var searchBtn = document.querySelector('.searchBtn');
var historyContainer = document.querySelector('searchHistory');
var currentContainer = document.querySelector('.weather-container');
var forecastContainer = document.querySelector('.five-day');

// fetching data via the search button
searchBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var currentUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityInput.value +'&appid=' +apiKey;

    console.log(cityInput.value)
fetch(currentUrl)
    .then(function(response) {
        response.json()
        .then(function(data) {
            console.log(data);
        })
    })
})



