import "../WeatherCard/WeatherCard.css";
import sunny from "../../assets/sunny.svg";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F}&deg; F</p>
      <img src={sunny} alt="sunny icon" className="weather-card__img" />
    </section>
  );
}

export default WeatherCard;
