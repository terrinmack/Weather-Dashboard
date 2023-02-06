
// variables
var cityInput = document.querySelector('#enterCity');
var searchBtn = document.querySelector('.searchBtn');
var historyContainer = document.querySelector('searchHistory');
var currentContainer = document.querySelector('.currentWeather');
var forecastContainer = document.querySelector('.five-day');

var currentUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInput.value + '&appid=4592844a9d1c589bd9c6d1289e2fe7fb'

var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityInput.value + '&appid=4592844a9d1c589bd9c6d1289e2fe7fb';

searchBtn.addEventListener('click', function() {
fetch(currentUrl)
    .then(function(response) {
        response.json()
        .then(function(data) {
            console.log(data);
        })
    })
})