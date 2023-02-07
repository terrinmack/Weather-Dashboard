// api key
var apiKey = '4592844a9d1c589bd9c6d1289e2fe7fb'

// variables
var cityInput = document.querySelector('#enterCity');
var searchBtn = document.ququerySelectorerySelector('.searchBtn');
var clearHistory = document.querySelector('.clearHistory');
var historyContainer = document.querySelector('searchHistory');
var currentContainer = document.querySelector('.weather-container');
var today = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');

// current city variables
var currentCity = document.querySelector('.city');
var currentDate = document.querySelector('.current-date');
var currentIcon = document.querySelector('#wicon');
var currentTemp = document.querySelector('.temperature');
var currentHumidity = document.querySelector('.humidity');
var currentWind = document.querySelector('.wind');

// day 1
var dayOneDate = document.querySelector('.day-one-date');
var dayOneDate = document.querySelector('.day-one-icon');
var dayOneDate = document.querySelector('.day-one-temperature');
var dayOneDate = document.querySelector('.day-one-humidity');

// day 2
var dayTwoDate = document.querySelector('.day-two-date');
var dayTwoDate = document.querySelector('.day-two-icon');
var dayTwoDate = document.querySelector('.day-two-temperature');
var dayTwoDate = document.querySelector('.day-two-humidity');

// day 3
var dayThreeDate = document.querySelector('.day-three-date');
var dayThreeDate = document.querySelector('.day-three-icon');
var dayThreeDate = document.querySelector('.day-three-temperature');
var dayThreeDate = document.querySelector('.day-three-humidity');

// day 4
var dayFourDate = document.querySelector('.day-four-date');
var dayFourDate = document.querySelector('.day-four-icon');
var dayFourDate = document.querySelector('.day-four-temperature');
var dayFourDate = document.querySelector('.day-four-humidity');

// day 5
var dayFiveDate = document.querySelector('.day-five-date');
var dayFiveDate = document.querySelector('.day-five-icon');
var dayFiveDate = document.querySelector('.day-five-temperature');
var dayFiveDate = document.querySelector('.day-five-humidity');

searchBtn.addEventListener('click', cityCondition);

// main search page function
function cityCondition(event) {
    event.preventDefault()
    // weather api current weather data
    var currentUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityInput.value +'&units=imperial&appid=' + apiKey;
    // weather api current weather icon

    fetch(currentUrl)
    .then(function(response) {
        response.json()
        .then(function(data) {
            console.log(data);

            var iconCode = data.weather[0].icon;
            var iconURL = 'https://openweathermap.org/img/w/' + iconCode + '.png';

            // display current data card
            currentCity.innerHTML = data.name;
            currentIcon.src = iconURL;
            currentTemp.innerHTML = 'Temperature: ' +data.main.temp+ '°F';
            currentHumidity.innerHTML = 'Humidity: ' + data.main.humidity + '%';
            currentWind.innerHTML = 'Wind: ' +data.wind.speed + ' MPH';

            // display 5-day forecast cards

        });
    });
    }

