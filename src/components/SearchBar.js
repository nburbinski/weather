import React, { useState } from "react";

const SearchBar = ({ setLocation }) => {
  const [search, setSearch] = useState("orlando");

  return (
    <div className="search">
      <input
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? setLocation(search) : ""
        }
      ></input>
    </div>
  );
};

export default SearchBar;
