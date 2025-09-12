import { useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  // TODO: set up weatherAPI
  const [weatherData, setWeatherData] = useState({ type: "cold" });

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
