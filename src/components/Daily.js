import React from "react";

const Daily = ({ daily }) => {
  function kelvinToFarenheit(f) {
    return ((f - 273.15) * 1.8 + 32).toFixed(2);
  }

  return (
    <div className="daily">
      <p> {new Date(daily.dt * 1000).toDateString()}</p>{" "}
      <p className="dailyTemp">{kelvinToFarenheit(daily.temp.day)}°</p>
    </div>
  );
};

export default Daily;
