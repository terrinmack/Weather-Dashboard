// api key code
var apiKey = '4592844a9d1c589bd9c6d1289e2fe7fb'

// variables
var cityInput = document.querySelector('#enterCity');
var searchBtn = document.querySelector('.searchBtn');
var searchHistoryContainerEl = document.querySelector('.history-container');
var searchHistoryEl = document.querySelector('.search-history');
var currentCityEl = document.querySelector('.currentCity-container')
var forecastContainerEl = document.querySelector('.five-dayForecast');

// search function
var formSubmitHandler = function(event) {
    event.preventDefault();

    var cityName = cityInput.value.trim();

    if (cityName) {
        getCityInfo(cityName);

        currentCityEl.innerHTML = '';
        cityInput.value = '';
    } else {
        alert('Please enter a city name')
    }
};

var getCityInfo = function (city) {
        var cityURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

        fetch(cityURL).then(function(response) {
            response.json().then(function(data){
                console.log(data);

                var cityName = data.name;
                var latitute = data.coord.lat;
                var longitude = data.coord.lon;
            })
        })
    }