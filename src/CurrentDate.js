import React from "react";

export default function CurrentDate(props) {
  if (props.date !== null) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[props.date.getDay()];
    let hour = props.date.getHours();
    let date = props.date.getDate();
    let month = props.date.getMonth();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return (
      <div>
        {date}/{month} - {day}, {hour}:{minutes}
      </div>
    );
  } else {
    return <p>Choose your destiny!</p>;
  }
}
