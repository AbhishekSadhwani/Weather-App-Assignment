import "./WeatherDetailCard.css";

export const WeatherDetailCard = ({ icon, label, value }) => {
  return (
    <div className="theme weather-detail-card">
      <div className="icon-container">{icon}</div>
      <div className="detail-info">
        <div className="detail-label">{label}</div>
        <div className="detail-value">{value}</div>
      </div>
    </div>
  );
};

