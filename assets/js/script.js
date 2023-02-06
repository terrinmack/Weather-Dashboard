// api key
var apiKey = '4592844a9d1c589bd9c6d1289e2fe7fb'
// variables
var cityInput = document.querySelector('#enterCity');
var searchBtn = document.querySelector('.searchBtn');
var historyContainer = document.querySelector('searchHistory');
var currentContainer = document.querySelector('.weather-container');
var forecastContainer = document.querySelector('.five-day');


searchBtn.addEventListener('click')

function cityCondition() {
    // weather api current weather data
    var currentUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInput.value +'&appid=' +apiKey;
    // weather api current weather icon

    fetch(currentUrl)
    .then(function(response) {
        response.json()
        .then(function(data) {
            console.log(data);
        })
    })
}

function currentCityResponse() {
        var iconCode = response.weather[0].icon;
        var iconURL = 'http://openweathermap.org/img/w/' + iconCode + '.png';
}

