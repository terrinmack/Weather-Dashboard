
// api key
var apiKey = '4592844a9d1c589bd9c6d1289e2fe7fb'

// variables
var cityInputEl = document.querySelector('#enterCity');
var searchBtnEl = document.querySelector('.searchBtn');
var historyContainer = document.querySelector('.searchHistory');

// set searched city into local storage for later use
var city = localStorage.getItem('storedCity');

// var lat = localStorage.getItem('storedLat');
// var lon = localStorage.getItem('storedLon');

// current weather url
var currentURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey;

// 5-day forecast weather url
var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=' + apiKey;

// search value is stored in local storage
function recordCityData() {
    localStorage.setItem('storedCity', cityInputEl.value)
    console.log('storedCity')
  }

// search history append from local storage
for (var i = 0; i < localStorage.length; i++) {
    // create list item from local storage and append to history container
    historyContainer.append('<li>' + localStorage.getItem(localStorage.key(i)) + '</li>')
}

// current day function! use jquery so it's more organized
fetch(currentURL) 
.then(function(response) {

    $('.city').html(response.name);
    $('.current-date').html(moment(response.dt*1000).format('MMMM Do YYYY'));
    $('#wicon').attr('src', 'https://openweathermap.org/img/w/' + response.weather[0].icon + '@2x.png');
    $('.temperature').html(response.main.temp + '°F');
    $('.humidity').html(response.main.humidity + '%');
    $('.wind').html(response.wind.speed + ' MPH');
});

// forecast function! use jquery again for orgnizational purposes
function forecastData () {
    fetch(forecastURL)
    .then(function(response) {
        console.log(response)

        // day one
        $('.day-one-date').html(moment(response.list[8].dt*1000).format('L'))
        $('.#ficon1').attr('src','https://openweathermap.org/img/w/' + response.list[0].weather[0].icon + '.png')
        $('.day-one-temp').html(response.list[8].main.temp + '°F')
        $('.day-one-humidity').html(response.list[8].main.humidity + '%')

        // day two
        $('.day-two-date').html(moment(response.list[16].dt*1000).format('L'))
        $('.#ficon2').attr('src','https://openweathermap.org/img/w/' + response.list[16].weather[0].icon + '.png')
        $('.day-two-temp').html(response.list[16].main.temp + '°F')
        $('.day-two-humidity').html(response.list[16].main.humidity + '%')

        // day three
        $('.day-three-date').html(moment(response.list[24].dt*1000).format('L'))
        $('.#ficon3').attr('src','https://openweathermap.org/img/w/' + response.list[24].weather[0].icon + '.png')
        $('.day-three-temp').html(response.list[24].main.temp + '°F')
        $('.day-three-humidity').html(response.list[24].main.humidity + '%')

        // day four
        $('.day-four-date').html(moment(response.list[32].dt*1000).format('L'))
        $('.#ficon4').attr('src','https://openweathermap.org/img/w/' + response.list[32].weather[0].icon + '.png')
        $('.day-four-temp').html(response.list[32].main.temp + '°F')
        $('.day-four-humidity').html(response.list[32].main.humidity + '%')

        // day five
        $('.day-five-date').html(moment(response.list[40].dt*1000).format('L'))
        $('.#ficon5').attr('src','https://openweathermap.org/img/w/' + response.list[40].weather[0].icon + '.png')
        $('.day-five-temp').html(response.list[40].main.temp + '°F')
        $('.day-five-humidity').html(response.list[30].main.humidity + '%')
    });
}

searchBtnEl.addEventListener('click', recordCityData, forecastData);



