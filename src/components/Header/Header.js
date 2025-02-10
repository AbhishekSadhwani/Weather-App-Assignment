import React, { useEffect, useState } from "react";
import { Moon, Sun, FileHeart } from "lucide-react"; // Icons for buttons
import "./Header.css";

export const Header = ({openSidebar }) => {
    // creating a state variable to handle the theme of the app
    const [darkTheme, setDarkTheme] = useState(JSON.parse(localStorage.getItem("darkTheme")) || false);
    
    // using useEffect to toggle between light and dark theme whenever the value of darkTheme changes
    useEffect(() => {
        localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
        document.body.classList.toggle("dark-mode", darkTheme);

    },[darkTheme]);

    return (
        <header className="theme app-header">
            <a className="app-title" href="/">Weather App</a>
            <div className="header-buttons">
                <button className="header-btn fav-city" onClick={openSidebar}>
                    <span className="btn-text">Favourite Cities</span> 
                    <FileHeart className="header-icon" />
                </button>
                <button className="header-btn" onClick={() => setDarkTheme(!darkTheme)}>
                    {darkTheme ? <Sun className="header-icon" /> : <Moon className="header-icon" />}
                </button>
            </div>
        </header>
    );
};
