import { MapPin, Clock, ThermometerSun, Droplets, Wind, Sun, Heart } from "lucide-react";
import "./CurrentForecast.css";
import {WeatherDetailCard} from "../Cards/WeatherDetailCard"; // Ensure this component is imported
import { useState } from "react";

export const CurrentForecast = () => {
    const [isFav, setIsFav] = useState(false);

    const handleClick = () => {
        setIsFav(!isFav);
    };


    return (
        <div className="theme forecast-card">
            <div className="forecast-content">
                <div className="forecast-header">
                    <div className="location-time">
                        <div className="location">
                            {/* <MapPin className="icon" /> */}
                            <span className="city">Jaipur, India</span>
                        </div>
                        <div className="time">
                            <Clock className="icon-small" />
                            <span>Saturday 5:23 PM</span>
                        </div>
                    </div>
                    <div className="favourite">
                        <button className={`favorite-btn ${isFav ? "favorited" : ""}`} onClick={handleClick}>
                            <Heart className="favorite-icon" fill={isFav ? "white" : "transparent"} />
                        </button>
                    </div>
                </div>
                <div className="temperature">
                        <span className="temp-value">24&deg;</span>
                        <div className="weather">
                            <p>Sunny</p>
                        </div>
                </div>
                <div className="weather-details">
                    <WeatherDetailCard icon={<ThermometerSun className="icon" />} label="Feels like" value={`27°`} />
                    <WeatherDetailCard icon={<Droplets className="icon" />} label="Humidity" value={`60%`} />
                    <WeatherDetailCard icon={<Wind className="icon" />} label="Wind" value={`12m/s`} />
                    <WeatherDetailCard icon={<Sun className="icon" />} label="UV Index" value={0} />
                </div>
            </div>
        </div>
    );
};