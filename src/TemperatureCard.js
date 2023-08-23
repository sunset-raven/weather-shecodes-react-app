import React, { useState } from "react";
import axios from "axios";
import "./styles/TemperatureCard.css";

export default function TemperatureCard() {
  let [city, setCity] = useState("");
  let [searchedCity, setSearchedCity] = useState("Select Your City!");
  let [weather, setWeather] = useState({
    temperature: 0,
    windSpeed: 50,
    humidity: 0,
    description: "Sunny",
    icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
  });

  function showTemperature(response) {
    setWeather({
      temperature: Math.round(response.data.temperature.current),
      windSpeed: Math.round(response.data.wind.speed),
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchedCity(city);
    getTemperature();
  }

  function getTemperature() {
    let apiKey = `9db3t643621b51990bco3eac83a0cf5a`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(showTemperature);
  }

  return (
    <div className="TemperatureCard">
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="name-app col text-truncate">
              Weather Application
            </div>
            <div className="current-date col"></div>
            <form className="search-city col row" onSubmit={handleSubmit}>
              <input
                onChange={updateCity}
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
      <div className="CurrentCity container text-center">
        <button type="button" className="current-position btn btn-primary">
          Check the temperature of your current position!
        </button>
      </div>
      <div className="temperature-card container border border-black rounded">
        <div className="row g-0 justify-content-center">
          <div className="today-and-photo col col-lg-3">
            <div className="row">
              <img
                className="icon img-fluid col-sm-6 col-xs-6 mx-auto"
                src={weather.icon}
                alt={weather.description}
              />
              <span className="today-card col-sm-6 col-xs-6 text-center">
                Today
              </span>
            </div>
          </div>
          <div className="current-temp-card col col-lg-6">
            <div className="row">
              <div className="current-temperature col">
                {weather.temperature}
              </div>
              <div className="units col">
                <span className="celsius">°C</span>
              </div>
              <div className="col">
                <span>Wind speed: </span>
                <span className="wind-speed">{weather.windSpeed}</span>
                <span className="wind-speed-measure"> m/s</span>
                <br />
                <span>Humidity: </span>
                <span className="humidity">{weather.humidity}</span>
                <span>%</span>
                <br />
                <span className="weather-description">
                  {weather.description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
