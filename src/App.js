import { Header, CurrentForecast, FiveDayForecast, Sidebar, SearchComp} from "./components";
import { useWeatherContext } from "./context/WeatherContext";
import { useState } from "react";
import "./App.css";


function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const favCities = ["New York", "London", "Tokyo"];
  const {weatherData} = useWeatherContext();

  if(!weatherData){
    return (<div>Loading....</div>);
  }

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
