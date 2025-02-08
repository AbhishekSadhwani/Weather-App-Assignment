import React, { useEffect, useState } from "react";
import { Moon, Sun, FileHeart } from "lucide-react"; // Icons for buttons
import "./Header.css";

export const Header = ({openSidebar }) => {
    const [darkTheme, setDarkTheme] = useState(JSON.parse(localStorage.getItem("darkTheme")) || false);

    useEffect(() => {
        localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
        document.body.classList.toggle("dark-mode", darkTheme);

    },[darkTheme]);

    return (
        <header className="theme app-header">
            <h1 className="app-title">Weather App</h1>
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
