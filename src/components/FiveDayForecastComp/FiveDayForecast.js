import { useWeatherContext } from "../../context/WeatherContext";
import { DayCard } from "../Cards/DayCard";
import "./FiveDayForecast.css";

export const FiveDayForecast = () => {
  const {weatherData} = useWeatherContext();
  return (
    <section className="theme week-forecast-container">
      <h1 className={`forecast-title`}>5-Day Forecast</h1>
      <div className="forecast-grid">
        {weatherData.daily.map((dayData, index) => (
          <DayCard
            key={index}
            date="Sat,Feb 8"
            icon={<img src={`https://openweathermap.org/img/wn/${dayData.weather[0].icon}.png`} alt={dayData.weather[0].main}/>}
            weather_condition={dayData.weather[0].description}
            highTemp={dayData.temp.max}
            LowTemp={dayData.temp.min}
          />
        ))}
      </div>
    </section>
  );
};
