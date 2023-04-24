import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Search.css";
import CardGrid from "../Components/CardGrid";
const Search = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [fullText, setFullText] = useState("Search for Ads");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setPlaceholder(placeholder + fullText[index]);
      setIndex(index + 1);
      if (index == fullText.length) {
        setPlaceholder("");
        setIndex(0);
      }
    }, 100);
  }, [index]);
  const loadResults = async (searchQuery) => {
    if (searchQuery == "") {
      setResults([]);
      return;
    }
    try {
      setLoading(true);
      setTimeout(async function () {
        const data = await axios.get(
          `http://localhost:5000/api/ads/search/${searchQuery}`
        );
        setResults(data.data.result);
        setLoading(false);
      }, 500);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <div
        className="searchContainer"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
        }}
      >
        <input
          autoFocus
          style={{
            outline: "none",
            borderRadius: "5px",
            width: "60%",
            height: "20%",
          }}
          placeholder={placeholder + "🔎"}
          onChange={(e) => {
            loadResults(e.target.value);
          }}
        />
      </div>
      {loading && <div class="loading fullwidth"></div>}
      {results.length == 0 && loading == false && (
        <div
          class="fullwidth"
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "12rem",
          }}
        >
          🔍
        </div>
      )}
      {!loading && (
        <div className="resultContainer">
          <CardGrid ads={results} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Search;
