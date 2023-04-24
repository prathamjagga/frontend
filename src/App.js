import { Routes, Route } from "react-router-dom";
import React from "react";

import "./Styles/Global.css";

import Search from "./Pages/Search";
import Header from "./Components/Header";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" Component={Search} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
