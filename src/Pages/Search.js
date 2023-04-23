import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  return (
    <React.Fragment>
      <div className="searchContainer">
        <input
          placeholder="enter search query"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div className="resultContainer">
        {results.map((result, key) => (
          <div></div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Search;
