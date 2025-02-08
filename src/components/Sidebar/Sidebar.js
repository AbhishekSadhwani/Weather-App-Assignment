import React from "react";
import "./Sidebar.css";
import { X } from "lucide-react"; // Close icon

export const Sidebar = ({ isOpen, onClose, fav_cities }) => {
  return (
    <div className={`theme sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-title">Favourite Cities</h2>
        <button className="close-btn" onClick={onClose}>
          <X className="close-icon" />
        </button>
      </div>
      <ul className="fav-list">
        {fav_cities.length > 0 ? (
          fav_cities.map((city, index) => (
            <li key={index} className="fav-item">
              {city}
            </li>
          ))
        ) : (
          <p className="no-fav">No history available</p>
        )}
      </ul>
    </div>
  );
};
