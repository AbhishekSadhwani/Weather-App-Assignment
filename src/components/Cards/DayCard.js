import React from "react";
import "./DayCard.css";

export const DayCard = ({ bg, date, icon, weather_condition, highTemp, LowTemp }) => {
  return (
    <div className={`theme day-card`}>
      <div className="day-card-left">
        <span className="day-card-date">{date}</span>
        <div className="day-card-icon">{icon}</div>
        <span className="day-card-condition">{weather_condition}</span>
      </div>
      <div className="day-card-right">
        <span className="day-card-high">{highTemp}&deg;</span>
        <span className="day-card-low">{LowTemp}&deg;</span>
      </div>
    </div>
  );
};
