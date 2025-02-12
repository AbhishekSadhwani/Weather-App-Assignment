import { useWeatherContext } from "../../context/WeatherContext";
import { DayCard } from "../Cards/DayCard";
import "./FiveDayForecast.css";

export const FiveDayForecast = () => {
  const {weatherData} = useWeatherContext();
  const currentDate = new Date(weatherData.current.dt *1000).toLocaleDateString();

  return (
    <section className="theme week-forecast-container">
      <h1 className={`forecast-title`}>5-Day Forecast</h1>
      <div className="forecast-grid">
        {weatherData.daily.map((dayData, index) => (
          <DayCard
            key={index}
            date=
              {new Date(dayData.dt * 1000).toLocaleDateString() !== currentDate ? 
                new Date(dayData.dt * 1000).toLocaleDateString("en-us",{
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                }) 
                : 
                "Today"
              }
            icon={<img src={`https://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`} alt={dayData.weather[0].main}/>}
            weather_condition={dayData.weather[0].description}
            highTemp={dayData.temp.max}
            LowTemp={dayData.temp.min}
          />
        ))}
      </div>
    </section>
  );
};
