import React from "react";
import "./styles/ForecastCard.css";

export default function ForecastCard(props) {
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
      <div className="forecast-card container border border-black rounded">
        <div className="row g-0 justify-content-center">
          {props.forecast.map((day, index) => {
            if (index < 6) {
              return (
                <div className="col-2 text-center" key={index.toString()}>
                  <span className="forecast-day">{formatDay(day.time)}</span>
                  <br />
                  <img
                    src={day.condition.icon_url}
                    alt={day.condition.description}
                    className="forecast-img"
                  />
                  <br />
                  <span className="forecast-temp-max">
                    {Math.round(day.temperature.maximum)}°C
                  </span>{" "}
                  <span className="forecast-temp-min">
                    {Math.round(day.temperature.minimum)}°C
                  </span>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  }
}
