import React, { useEffect, useState } from "react";
import regeneratorRuntime from "regenerator-runtime";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import Daily from "./Daily";

const WeatherCard = ({ location }) => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const hour = new Date().getHours();

  function kelvinToFarenheit(f) {
    return ((f - 273.15) * 1.8 + 32).toFixed(2);
  }

  useEffect(() => {
    async function getWeather() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=57f272961cfeb25141aaf85593add01d`
        );
        const data = await res.json();

        const res2 = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=57f272961cfeb25141aaf85593add01d`
        );

        const data2 = await res2.json();
        console.log(data2);

        setIsLoading(false);
        setWeatherData({ name: data.name, ...data2 });
      } catch (error) {
        console.log(error);
        console.log("fail");
        setIsLoading(false);
        setWeatherData({
          name: "Error, city not found",
        });
      }
    }
    getWeather();
  }, [location]);

  if (!weatherData.current || isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="weatherCard">
      <h2 className="cardTitle">{weatherData.name}</h2>
      <div>
        <div>
          <img className="image" src={hour > 17 ? moon : sun} />
          <p className="description">
            {weatherData.current.weather[0].description}
          </p>
        </div>

        <div>
          <h4>{kelvinToFarenheit(Number(weatherData.current.temp))}°F</h4>
          <p>
            Feels like{" "}
            {kelvinToFarenheit(Number(weatherData.current.feels_like))}
          </p>
          <div className="extra">
            <p>Humidity {weatherData.current.humidity}</p>
          </div>
        </div>
      </div>
      <div className="dailyList">
        {weatherData.daily.map((daily) => (
          <Daily daily={daily} key={daily.dt} />
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
