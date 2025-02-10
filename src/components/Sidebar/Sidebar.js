import React from "react";
import "./Sidebar.css";
import { X } from "lucide-react"; // Close icon
import { useWeatherContext } from "../../context/WeatherContext";

export const Sidebar = ({ isOpen, onClose}) => {
  const {favorites,setCity, clearFavorites} = useWeatherContext();

  // when a favorite city is clicked, set the city state variable to the clicked city and close the sidebar
  const handleClick = (city) => {
    setCity(city);
    onClose();
  };

  return (
    <div className={`theme sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-title">Favourite Cities</h2>
        <button className="close-btn" onClick={onClose}>
          <X className="close-icon" />
        </button>
      </div>
      <ul className="fav-list">
        {favorites.length > 0 ? (
          favorites.map((city, index) => (
            <li key={index} onClick={(e) => handleClick(city)} className="fav-item">
              {city}
            </li>
          ))
        ) : (
          <p className="no-fav">No Favorites Available</p>
        )}
      </ul>
      <button className="fav-clear-btn" onClick={clearFavorites}>Clear</button>
    </div>
  );
};
