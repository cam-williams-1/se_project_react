import { useContext } from "react";
import "../WeatherCard/WeatherCard.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";
import sunny from "../../assets/sunny.svg";
import rain from "../../assets/rain.svg";
import storm from "../../assets/storm.svg";
import cloudy from "../../assets/cloudy.svg";
import snow from "../../assets/snow.svg";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const currentWeatherCondition = weatherData.condition;

  function weatherCondition() {
    if (currentWeatherCondition === "Rain") {
      return rain;
    } else if (currentWeatherCondition === "Clouds") {
      return cloudy;
    } else if (currentWeatherCondition === "Snow") {
      return snow;
    } else if (currentWeatherCondition === "Storm") {
      return storm;
    } else {
      return sunny;
    }
  }

  // Can't finish this functionality becuse of figma design limitations
  const isSunUp = () => {
    if (weatherData.isDay) {
      return; // some logic for day time
    } else {
      return; // some logic for night time
    }
  };

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {currentTemperatureUnit === "F"
          ? weatherData.temp.F
          : weatherData.temp.C}
        &deg;{currentTemperatureUnit}
      </p>
      <img
        src={weatherCondition()}
        alt="weather icon"
        className="weather-card__img"
      />
    </section>
  );
}

export default WeatherCard;
