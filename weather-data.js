"use strict";

class Weather{

    constructor(cityName, description) {
        this._temperature = "";
        this._cityName = cityName;
        this._description = description;
    }

    get cityName() {
        return this._cityName;
    }

    set cityName(value) {
        this._cityName = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get temperature() {
        return this._temperature;
    }

    set temperature(value) {
        this._temperature = (value * 1.8 + 32).toFixed(2) + 'F.';
    }
}










// function WeatherOldStyle(cityName, description) {
//     this.cityName = cityName;
//     this.description = description;
//     this._temperature = "";
// }
//
// Object.defineProperty(Weather.prototype, 'temperature', {
//     get: function () {
//         return this._temperature;
//     },
//     set: function (value) {
//         this._temperature = (value * 1.8 + 32).toFixed(2) + 'F.';
//     }
// });