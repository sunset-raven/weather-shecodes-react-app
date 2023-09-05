import React, { useState } from "react";
import "./styles/UnitsChange.css";

export default function UnitsChange(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

function showCelsius(event) {
  event.preventDefault();
  setUnit("celsius");
}

  if (unit === "celsius") {
    return (
      <div className="UnitsChange col-6 pe-0">
        <div className="row">
          <div className="current-temperature col-6">{props.temp}</div>
          <div className="units col-6">
            <a
              href="/"
              title="Click me to convert to Fahrenheit!"
              className="celsius"
              onClick={showFahrenheit}
            >
              °C
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="UnitsChange col-6 pe-0">
        <div className="row">
          <div className="current-temperature col-6">
            {Math.round((props.temp * 9) / 5 + 32)}
          </div>
          <div className="units col-6">
            <a
              href="/"
              title="Click me to convert to Celsius!"
              className="fahrenheit"
              onClick={showCelsius}
            >
              °F
            </a>
          </div>
        </div>
      </div>
    );
  }
}
