// import { getWeatherIcons } from "../constants/weatherIcons";
import { Sun } from "lucide-react";
import { DayCard } from "../Cards/DayCard";
import "./FiveDayForecast.css";

export const FiveDayForecast = () => {
  return (
    <section className="theme week-forecast-container">
      <h1 className={`forecast-title`}>5-Day Forecast</h1>
      <div className="forecast-grid">
        {/* {weatherdata.daily.map((dayData, index) => ( */}
          <DayCard
            // key={index}
            date="Sat,Feb 8"
            icon={<Sun />}
            weather_condition="Sunny"
            highTemp={24}
            LowTemp={21}
          />
        {/* ))} */}
        <DayCard
            // key={index}
            date="Sat,Feb 8"
            icon={<Sun />}
            weather_condition="Sunny"
            highTemp={24}
            LowTemp={21}
          />
          <DayCard
            // key={index}
            date="Sat,Feb 8"
            icon={<Sun />}
            weather_condition="Sunny"
            highTemp={24}
            LowTemp={21}
          />
          <DayCard
            // key={index}
            date="Sat,Feb 8"
            icon={<Sun />}
            weather_condition="Sunny"
            highTemp={24}
            LowTemp={21}
          />
          <DayCard
            // key={index}
            date="Sat,Feb 8"
            icon={<Sun />}
            weather_condition="Sunny"
            highTemp={24}
            LowTemp={21}
          />
      </div>
    </section>
  );
};
