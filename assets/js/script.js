// api key code
var apiKey = '4592844a9d1c589bd9c6d1289e2fe7fb'

// variables


var cityURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;
var cityName = data.name;
var latitute = data.coord.lat;
var longitude = data.coord.lon;


// function to call the city name and get info
    
function getWeather(city) {
    fetch(cityURL)
    .then (function(response) {
        console.log(response);
        response.json().then(function (data) {
            console.log(data);
            displayWeather(data, city);
        });
    })
}