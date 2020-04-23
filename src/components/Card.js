import React, { useEffect, useState } from "react";
import regeneratorRuntime from "regenerator-runtime";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

const WeatherCard = (props) => {
  const [weatherData, setWeatherData] = useState({});

  const hour = new Date().getHours();

  function kelvinToFarenheit(f) {
    return ((f - 273.15) * 1.8 + 32).toFixed(2);
  }

  useEffect(() => {
    async function getWeather() {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.location}&APPID=57f272961cfeb25141aaf85593add01d`
      );
      const data = await res.json();
      setWeatherData(data);
      console.log(data);
    }
    getWeather();
  }, []);

  if (!weatherData.weather) {
    return <p>Loading...</p>;
  }
  return (
    <div className="weatherCard">
      <h2 className="cardTitle">{weatherData.name}</h2>
      <div>
        <img src={hour > 18 ? moon : sun} />
        <div>
          <h4>{kelvinToFarenheit(Number(weatherData.main.temp))}F</h4>
          <p>
            Feels like {kelvinToFarenheit(Number(weatherData.main.feels_like))}
          </p>
          <div className="extra">
            <p>Humidity {weatherData.main.humidity}</p>
            <p> Wind Speed {weatherData.wind.speed}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
