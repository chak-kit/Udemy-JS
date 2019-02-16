"use strict";

var searchButton = document.querySelector("button");
var searchCity = document.querySelector('#city');

searchButton.addEventListener('click', searchWeather);

let load = document.querySelector("#load");
let weatherBox = document.querySelector("#weather");
let weatherCity = weatherBox.firstElementChild;
let weatherDescription = document.querySelector('#weatherDescription');
let weatherTemperature = weatherBox.lastElementChild;


function searchWeather() {

    weatherBox.style.display="none";
    load.style.display='block';

    var cityName = searchCity.value;
    if (cityName.trim().length === 0) {
        return alert("Please enter the City Name")
    }

    let http = new XMLHttpRequest();
    var apiKey = '059cf2b6f2741f27e2b1644ca23d139d';
    http.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&apiKey=' + apiKey);
    http.onload = function () {

        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            let data = JSON.parse(http.responseText);
            let description = data.weather[0].description.toUpperCase();
            let temp = data.main.temp;
            let weather = new Weather(cityName, description);
            weather.temperature = temp;
            console.log(weather);

            setTimeout(function () {
                updateWeather(weather);
            },2000);


        } else if (http.readyState === XMLHttpRequest.DONE) {
            alert('Something went wrong')
        }
    };
    http.send()
}


function updateWeather(weather) {
    weatherCity.textContent = weather.cityName;
    weatherDescription.textContent=weather.description;
    weatherTemperature.textContent =weather.temperature;


    weatherBox.style.display="block";
    load.style.display='none';

}