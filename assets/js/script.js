// api key
var apiKey = '4592844a9d1c589bd9c6d1289e2fe7fb'

// variables
var cityInput = document.querySelector('#enterCity');
var searchBtn = document.querySelector('.searchBtn');
var clearHistory = document.querySelector('.clearHistory');
var historyContainer = document.querySelector('searchHistory');
var currentContainer = document.querySelector('.weather-container');

// current city variables
var currentCity = document.querySelector('.city');
var currentDate = document.querySelector('.current-date');
var currentIcon = document.querySelector('#wicon');
var currentTemp = document.querySelector('.temperature');
var currentHumidity = document.querySelector('.humidity');
var currentWind = document.querySelector('.wind');

// day 1
var dayOneDate = document.querySelector('.day-one-date');
var dayOneIcon = document.querySelector('.day-one-icon');
var dayOneTemp = document.querySelector('.day-one-temperature');
var dayOneHum = document.querySelector('.day-one-humidity');

// day 2
var dayTwoDate = document.querySelector('.day-two-date');
var dayTwoIcon = document.querySelector('.day-two-icon');
var dayTwoTemp = document.querySelector('.day-two-temperature');
var dayTwoHum = document.querySelector('.day-two-humidity');

// day 3
var dayThreeDate = document.querySelector('.day-three-date');
var dayThreeIcon = document.querySelector('.day-three-icon');
var dayThreeTemp = document.querySelector('.day-three-temperature');
var dayThreeHum = document.querySelector('.day-three-humidity');

// day 4
var dayFourDate = document.querySelector('.day-four-date');
var dayFourIcon = document.querySelector('.day-four-icon');
var dayFourTemp = document.querySelector('.day-four-temperature');
var dayFourHum = document.querySelector('.day-four-humidity');

// day 5
var dayFiveDate = document.querySelector('.day-five-date');
var dayFiveIcon = document.querySelector('.day-five-icon');
var dayFiveTemp = document.querySelector('.day-five-temperature');
var dayFiveHum = document.querySelector('.day-five-humidity');

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
            var iconURL = 'https://openweathermap.org/img/wn/' + iconCode + '@2x.png';
            var lat = data.coord.lat;
            var lon = data.coord.lon;

            // display current data card
            currentCity.innerHTML = data.name;

            var unixTimestamp = data.dt*1000;
    
            currentDate.innerHTML = (moment(unixTimestamp).format('MMMM Do YYYY, h:mm:ss A')) 
            
            currentIcon.src = iconURL;
            currentTemp.innerHTML = 'Temperature: ' +data.main.temp+ '°F';
            currentHumidity.innerHTML = 'Humidity: ' + data.main.humidity + '%';
            currentWind.innerHTML = 'Wind: ' +data.wind.speed + ' MPH';
            
            var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + apiKey;

            fetch(forecastURL)
            .then(function(forecastResponse) {
                forecastResponse.json()
                .then(function(forecastData) {
                    console.log(forecastData)

                    // day 1
                    var forecastUnix1 = forecastData.list[0].dt*1000;
                    dayOneDate.innerHTML = (moment(forecastUnix1).format('L'));
                    dayOneTemp.innerHTML = 'Temp: ' + forecastData.list[0].main.temp + '°F';
                    dayOneIcon.src = 'https://openweathermap.org/img/wn/' + forecastData.list[0].weather[0].icon + '.png';
                    dayOneHum.innerHTML = 'Humidity: ' + forecastData.list[0].main.humidity + '%';

                    // day 2
                    var forecastUnix2 = forecastData.list[8].dt*1000;
                    dayTwoDate.innerHTML = (moment(forecastUnix2).format('L'));
                    dayTwoTemp.innerHTML = 'Temp: ' + forecastData.list[8].main.temp + '°F';
                    dayTwoIcon.src = 'https://openweathermap.org/img/wn/' + forecastData.list[8].weather[0].icon + '.png';
                    console.log(dayOneIcon);
                    dayTwoHum.innerHTML = 'Humidity: ' + forecastData.list[8].main.humidity + '%';

                    // day 3
                    var forecastUnix3 = forecastData.list[16].dt*1000;
                    dayThreeDate.innerHTML = (moment(forecastUnix3).format('L'));
                    dayThreeTemp.innerHTML = 'Temp: ' + forecastData.list[16].main.temp + '°F';
                    dayThreeIcon.src = 'https://openweathermap.org/img/wn/' + forecastData.list[16].weather[0].icon + '.png';
                    console.log(dayOneIcon);
                    dayThreeHum.innerHTML = 'Humidity: ' + forecastData.list[16].main.humidity + '%';

                    // day 4
                    var forecastUnix4 = forecastData.list[24].dt*1000;
                    dayFourDate.innerHTML = (moment(forecastUnix4).format('L'));
                    dayFourTemp.innerHTML = 'Temp: ' + forecastData.list[24].main.temp + '°F';
                    dayFourIcon.src = 'https://openweathermap.org/img/wn/' + forecastData.list[24].weather[0].icon + '.png';
                    console.log(dayOneIcon);
                    dayFourHum.innerHTML = 'Humidity: ' + forecastData.list[24].main.humidity + '%';

                    // day 5
                    var forecastUnix5 = forecastData.list[32].dt*1000;
                    dayFiveDate.innerHTML = (moment(forecastUnix5).format('L'));
                    dayFiveTemp.innerHTML = 'Temp: ' + forecastData.list[32].main.temp + '°F';
                    dayFiveIcon.src = 'https://openweathermap.org/img/wn/' + forecastData.list[32].weather[0].icon + '.png';
                    console.log(dayOneIcon);
                    dayFiveHum.innerHTML = 'Humidity: ' + forecastData.list[32].main.humidity + '%';

                })
            })
            
        }); 
    }); 
    }

