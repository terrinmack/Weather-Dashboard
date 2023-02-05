// api key code
var apiKey = '4592844a9d1c589bd9c6d1289e2fe7fb'

// variables
var searchFormEl = document.querySelector('.search-form');
var cityInput = document.querySelector('#enterCity');
var cityName = document.querySelector('.city-name');
var searchBtn = document.querySelector('.searchBtn');
var searchHistoryContainerEl = document.querySelector('.history-container');
var searchHistoryEl = document.querySelector('.search-history');
var currentCityEl = document.querySelector('.currentCity-container');
var forecastContainerEl = document.querySelector('.five-dayForecast');

var cityName = data.name;
var latitute = data.coord.lat;
var longitude = data.coord.lon;


// function to call the city name and get info
var getCityInfo = function (city) {
        var cityURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

        fetch(cityURL)
            .then(function(response) {
                if (response.ok) {
                    console.log(response)
                    response.json().then(function(data) {
                        console.log(data);
                        displayWeather(data, city)
                    });
                } else {
                    alert('Please enter a city name')
                }
            });
        };

// event listener for form submit