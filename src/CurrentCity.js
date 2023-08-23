import React from "react";
import "./styles/CurrentCity.css";

export default function CurrentCity() {
  return (
    <div className="CurrentCity container text-center">
      <button type="button" className="current-position btn btn-primary">
        Check the temperature of your current position!
      </button>
    </div>
  );
}
