import SearchComp from "./components/SearchComp/SearchComp"; 
import "./App.css";
import { CurrentForecast } from "./components/CurrentForecastComp/CurrentForecast";
import { FiveDayForecast } from "./components/FiveDayForecastComp/FiveDayForecast";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const favCities = ["New York", "London", "Tokyo"];

  return (
    <div className="App">
      <Header openSidebar={() => setIsSideBarOpen(true)} />
      <Sidebar isOpen={isSideBarOpen} onClose={() => setIsSideBarOpen(false)} fav_cities={favCities} />
      <div className="container">
        <SearchComp />
        <CurrentForecast />
        <FiveDayForecast />
      </div>
    </div>
  );
}

export default App;
