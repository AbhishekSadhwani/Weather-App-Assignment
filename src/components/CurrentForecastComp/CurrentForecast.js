import { Clock, Droplets, Wind, Heart } from "lucide-react";
import {WeatherDetailCard} from "../Cards/WeatherDetailCard";
import { useWeatherContext } from "../../context/WeatherContext";
import "./CurrentForecast.css";

export const CurrentForecast = () => {
    const {city, weatherData,favorites, addFavorites, removeFavorites } = useWeatherContext();
    const isFav = favorites.includes(city.toLowerCase());
    // changing unix value to current date and time
    const date = new Date(weatherData.current.dt * 1000);
    const day = date.toLocaleDateString("en-US", {timeZone: weatherData.timezone,weekday: 'long'});
    const currenttime = date.toLocaleTimeString("en-US", {timeZone: weatherData.timezone,hour: '2-digit', minute: '2-digit'});

    // handling adding and removing from favorites
    const handleClick = () => {
        if(isFav){
            removeFavorites(city);
        }else{
            addFavorites(city);
        }
    };
    
    return (
        <div className="theme forecast-card">
            <div className="forecast-content">
                <div className="forecast-header">
                    <div className="location-time">
                        <div className="location">
                            <span className="city">{city}, {weatherData.country}</span>
                        </div>
                        <div className="time">
                            <Clock className="icon-small" />
                            <span>{day} {currenttime}</span>
                        </div>
                    </div>
                    <div className="favourite">
                        <button className={`favorite-btn ${isFav ? "favorited" : ""}`} onClick={handleClick}>
                            <Heart className="favorite-icon" fill={isFav ? "white" : "transparent"} />
                        </button>
                    </div>
                </div>
                <div className="temperature">
                        <span className="temp-value">{weatherData.current.temp}&deg;</span>
                        <div className="weather">
                            <img src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`} alt={weatherData.current.weather[0].main}/>
                            <p>{weatherData.current.weather[0].main}</p>
                        </div>
                </div>
                <div className="weather-details">
                    {/* <WeatherDetailCard icon={<ThermometerSun className="icon" />} label="Feels like" value={`27°`} /> */}
                    <WeatherDetailCard icon={<Droplets className="icon" />} label="Humidity" value={`${weatherData.current.humidity} %`} />
                    <WeatherDetailCard icon={<Wind className="icon" />} label="Wind" value={`${weatherData.current.wind_speed} m/s`} />
                    {/* <WeatherDetailCard icon={<Sun className="icon" />} label="UV Index" value={0} /> */}
                </div>
            </div>
        </div>
    );
};