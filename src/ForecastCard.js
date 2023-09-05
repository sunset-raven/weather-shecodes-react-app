import React from "react";
import "./styles/ForecastCard.css";

import ShowForecastTemp from "./ShowForecastTemp";

export default function ForecastCard(props) {
  if (props.forecast) {
    return (
      <div className="ForecastCard container border border-black rounded">
        <div className="row g-0 justify-content-center">
          {props.forecast.map((day, index) => {
            if (index < 6) {
              return <ShowForecastTemp forecast={day} key={index}/>;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
