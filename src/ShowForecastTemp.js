import React from "react";

export default function ShowForecastTemp(props) {

  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[date.getDay()];
    return day;
  }

  if (props.forecast) {
    return (
      <div className="col-2 text-center">
        <span className="forecast-day">{formatDay(props.forecast.time)}</span>
        <br />
        <img
          src={props.forecast.condition.icon_url}
          alt={props.forecast.condition.description}
          className="forecast-img"
        />
        <br />
        <span className="forecast-temp-max">
          {Math.round(props.forecast.temperature.maximum)}°C
        </span>{" "}
        <span className="forecast-temp-min">
          {Math.round(props.forecast.temperature.minimum)}°C
        </span>
      </div>
    );
  } else {
    return null;
  }
}
