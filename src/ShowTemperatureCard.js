import React from "react";

import "./styles/ShowTemperatureCard.css"

import UnitsChange from "./UnitsChange";

export default function ShowTemperature(props) {

  if (props.weather) {
    return (
    <div className="temperature-card container border border-black rounded">
      <div className="row g-0 justify-content-center">
        <div className="today-and-photo col col-lg-3">
          <div className="row">
            <img
              className="icon img-fluid col-sm-6 col-xs-6 mx-auto"
              src={props.weather.icon}
              alt={props.weather.description}
            />
            <span className="today-card col-sm-6 col-xs-6 text-center">
              Today
            </span>
          </div>
        </div>
        <div className="current-temp-card col col-lg-6">
          <div className="row">
            <UnitsChange temp={props.weather.temperature} />
            <div className="climate-info col">
              <span>Wind speed: </span>
              <span className="wind-speed">{props.weather.windSpeed}</span>
              <span className="wind-speed-measure"> m/s</span>
              <br />
              <span>Humidity: </span>
              <span className="humidity">{props.weather.humidity}</span>
              <span>%</span>
              <br />
              <span className="weather-description">{props.weather.description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} else {
  return alert("An error occured! Insert a recognizable city!");
}
}