var apiKey = '4592844a9d1c589bd9c6d1289e2fe7fb'

// variables
var cityInputEl = document.querySelector('#enterCity');
var searchBtnEl = document.querySelector('.searchBtn');
var historyContainer = document.querySelector('.searchHistory');
var searchHistory = [];

function currentCondition() {
    var city = cityInputEl.value;

    // current weather url
    var currentURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey;

    // 5-day forecast weather url
    var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=' + apiKey;

    fetch(currentURL).then(function(data) {
        data.json().then(function(cityWeatherResponse) {
            // console.log(cityWeatherResponse)

            $('.city').html(cityWeatherResponse.name);
            $('.current-date').html(moment(cityWeatherResponse.dt*1000).format('MMMM Do YYYY'));
            $('#wicon').attr('src', 'https://openweathermap.org/img/wn/' + cityWeatherResponse.weather[0].icon + '@2x.png');
            $('.temperature').html('Temp: ' + cityWeatherResponse.main.temp + '°F');
            $('.humidity').html('Humidity: ' + cityWeatherResponse.main.humidity + '%');
            $('.wind').html('Wind: ' + cityWeatherResponse.wind.speed + ' MPH');
            
        })
        // city weather response fetch end
        
    })
    // data end

    fetch(forecastURL).then(function(forecastData) {
        forecastData.json().then(function(forecastWeatherResponse) {
            // console.log(forecastWeatherResponse)

            // day one
            $('.day-one-date').html(moment(forecastWeatherResponse.list[0].dt*1000).format('L'))
            $('#ficon1').attr('src','https://openweathermap.org/img/wn/' + forecastWeatherResponse.list[0].weather[0].icon + '.png')
            $('.day-one-temp').html('Temp: ' + forecastWeatherResponse.list[0].main.temp + '°F')
            $('.day-one-humidity').html('Humidity: ' + forecastWeatherResponse.list[0].main.humidity + '%')

            // day two
            $('.day-two-date').html(moment(forecastWeatherResponse.list[8].dt*1000).format('L'))
            $('#ficon2').attr('src','https://openweathermap.org/img/wn/' + forecastWeatherResponse.list[8].weather[0].icon + '.png')
            $('.day-two-temp').html('Temp: ' + forecastWeatherResponse.list[8].main.temp + '°F')
            $('.day-two-humidity').html('Humidity: ' + forecastWeatherResponse.list[8].main.humidity + '%')

            // day three
            $('.day-three-date').html(moment(forecastWeatherResponse.list[16].dt*1000).format('L'))
            $('#ficon3').attr('src','https://openweathermap.org/img/wn/' + forecastWeatherResponse.list[16].weather[0].icon + '.png')
            $('.day-three-temp').html('Temp: ' + forecastWeatherResponse.list[16].main.temp + '°F')
            $('.day-three-humidity').html('Humidity: ' + forecastWeatherResponse.list[16].main.humidity + '%')

            // day four
            $('.day-four-date').html(moment(forecastWeatherResponse.list[24].dt*1000).format('L'))
            $('#ficon4').attr('src','https://openweathermap.org/img/wn/' + forecastWeatherResponse.list[24].weather[0].icon + '.png')
            $('.day-four-temp').html('Temp: ' + forecastWeatherResponse.list[24].main.temp + '°F')
            $('.day-four-humidity').html('Humidity: ' + forecastWeatherResponse.list[24].main.humidity + '%')

            // day five
            $('.day-five-date').html(moment(forecastWeatherResponse.list[32].dt*1000).format('L'))
            $('#ficon5').attr('src','https://openweathermap.org/img/wn/' + forecastWeatherResponse.list[32].weather[0].icon + '.png')
            $('.day-five-temp').html('Temp: ' + forecastWeatherResponse.list[32].main.temp + '°F')
            $('.day-five-humidity').html('Humidity: ' + forecastWeatherResponse.list[30].main.humidity + '%')

        })
        // forecast weather response fetch end
    });
    
    // forecast data end

// currentCondition function end
}


// search button event listener
searchBtnEl.addEventListener('click', function (event) {
    event.preventDefault();

    var list = document.createElement('li');
    list.classList.add('list-group-item');

    var city = cityInputEl.value;
            list.innerHTML = city;
            historyContainer.append(list); 
            searchHistory.push(city);
                localStorage.setItem('search-history', JSON.stringify(searchHistory));
                console.log(searchHistory);
        });


// when page loads, the last searched item appears on the page via local storage
$(document).ready(function() {
    var history = localStorage.getItem('search-history');
    if (history) {
        var lastSearchedIndex = history.length - 1;
        var lastSearchedCity = history[lastSearchedIndex];
        currentCondition(lastSearchedCity);    
    }
});

// when user clicks a list item, the currentCondition function loads that city/item
$(document).on("click", ".list-group-item", function() {
    var cityItem = $(this).text();
    console.log(cityItem);
    currentCondition(cityItem);
});
