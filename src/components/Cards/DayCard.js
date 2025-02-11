import React from "react";
import "./DayCard.css";

export const DayCard = ({ date, icon, weather_condition, highTemp, LowTemp }) => {
  return (
    <div className="theme day-card">
      <div className="day-card-content">
        <span className="day-card-date">{date}</span>
        <div className="day-card-icon">{icon}</div>
        <span className="day-card-condition">{weather_condition}</span>
        <div className="day-card-temps">
          <span className="day-card-high">{Math.round(highTemp)}&deg; /</span>
          <span className="day-card-low">{Math.round(LowTemp)}&deg;</span>
        </div>
      </div>
    </div>
  );
};
