import React from "react";
import "./styles/ForecastCard.css";

import ShowForecastTemp from "./ShowForecastTemp";

export default function ForecastCard(props) {

  if (props.forecast) {
    return (
      <div className="ForecastCard container border border-black rounded">
        <div className="row g-0 justify-content-center">
          <ShowForecastTemp forecast={props.forecast[0]} />
          <ShowForecastTemp forecast={props.forecast[1]} />
          <ShowForecastTemp forecast={props.forecast[2]} />
          <ShowForecastTemp forecast={props.forecast[3]} />
          <ShowForecastTemp forecast={props.forecast[4]} />
          <ShowForecastTemp forecast={props.forecast[5]} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
