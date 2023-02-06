// api key code
var apiKey = '4592844a9d1c589bd9c6d1289e2fe7fb'

// variables
var cityInput = document.querySelector('#enterCity');
var searchBtn = document.querySelector('.searchBtn');
var historyContainer = document.querySelector('searchHistory');
var currentContainer = document.querySelector('.currentWeather');
var forecastContainer = document.querySelector('.five-day');

var currentUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey;


