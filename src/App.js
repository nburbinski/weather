import React, { useState } from "react";
import { render } from "react-dom";

import WeatherCard from "./components/Card";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [location, setLocation] = useState("orlando,florida");
  const date = new Date().toDateString();

  return (
    <>
      <SearchBar location={location} setLocation={setLocation} />
      <h1 onClick={() => {}}>{date}</h1>
      <WeatherCard location={location} />
    </>
  );
};

render(React.createElement(App), document.getElementById("root"));
