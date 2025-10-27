import { useContext } from "react";
import "../WeatherCard/WeatherCard.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";
import sunny from "../../assets/sunny.svg";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {currentTemperatureUnit === "F"
          ? weatherData.temp.F
          : weatherData.temp.C}
        &deg;{currentTemperatureUnit}
      </p>
      <img src={sunny} alt="sunny icon" className="weather-card__img" />
    </section>
  );
}

export default WeatherCard;
