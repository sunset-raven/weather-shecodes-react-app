import React, { useState, useRef } from "react";
import axios from "axios";
import "./styles/TemperatureCard.css";
import CurrentDate from "./CurrentDate";
// import CurrentCity from "./CurrentCity";
import ShowTemperatureCard from "./ShowTemperatureCard";
import ForecastCard from "./ForecastCard";

export default function TemperatureCard() {
  let inputRef = useRef(null);
  let [searchedCity, setSearchedCity] = useState("Select your city!");
  let [forecast, setForecast] = useState(null);
  let [weather, setWeather] = useState({
    temperature: 0,
    windSpeed: 50,
    humidity: 0,
    description: "Sunny",
    icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    date: null,
  });
  let apiKey = `9db3t643621b51990bco3eac83a0cf5a`;

  function showTemperature(response) {
    if (response.data.message === "City not found") {
      alert("City not found! Remember to search for city in english!"); 
    } else {
      setWeather({
        temperature: Math.round(response.data.temperature.current),
        windSpeed: Math.round(response.data.wind.speed),
        humidity: response.data.temperature.humidity,
        description: response.data.condition.description,
        icon: response.data.condition.icon_url,
        date: new Date(response.data.time * 1000),
      });
    }
  }

  function showForecastTemp(response) {
    setForecast(response.data.daily);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newCity = inputRef.current.value;
    setSearchedCity(newCity);
    getTemperature(newCity);
  }

  function getTemperature(city) {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(showTemperature);
    axios.get(forecastApiUrl).then(showForecastTemp);
  }

  function showLocalTemperature(event) {
    event.preventDefault();
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${latitude}&lon=${longitude}&key=${apiKey}`;
        let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}`;

        axios.get(forecastApiUrl).then(showForecastTemp);
        axios.get(apiUrl).then(showTemperature);
      });
    } else {
      return Error;
    }
  }

  return (
    <div className="TemperatureCard">
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="name-app col text-truncate">
              Weather Application
            </div>
            <div className="current-date col">
              <CurrentDate date={weather.date} />
            </div>
            <form className="search-city col row" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                title="Remember to write in english!"
                type="search"
                className="input-city col form-control text-truncate"
                placeholder="Search a city..."
              />
              <input
                type="submit"
                className="submit-city-button col-sm-2 mb-0 btn btn-dark"
                value="Search"
              />
            </form>
          </div>
        </div>
      </header>
      <h1>{searchedCity}</h1>
      <div className="current-city container text-center">
        <button
          type="button"
          className="current-position btn btn-primary"
          onClick={showLocalTemperature}
        >
          Check the temperature of your current position!
        </button>
      </div>
      <ShowTemperatureCard weather={weather} />
      <ForecastCard forecast={forecast} />
    </div>
  );
}
