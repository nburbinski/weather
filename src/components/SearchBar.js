import React from "react";

const SearchBar = ({ location, setLocation }) => {
  return (
    <div className="search">
      <input
        value={location}
        onChange={({ target }) => setLocation(target.value)}
      ></input>
    </div>
  );
};

export default SearchBar;
