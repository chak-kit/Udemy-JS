"use strict";

var searchButton = document.querySelector("button");
var searchCity = document.querySelector('#city');

searchButton.addEventListener('click', searchWeather);

function searchWeather(){
    var cityName = searchCity.value;
    if (cityName.trim().length === 0){
 return alert ("Please enter the City Name")
    }
        let xhr = new XMLHttpRequest();
        var apiKey ='059cf2b6f2741f27e2b1644ca23d139d';
        var open =('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName);
        xhr.onreadyStatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE && xtr.status===200){

            } else if( xhr.readyState === XMLHttpRequest.DONE){
                alert('Something went wrong')
            }
        }
    }
