import { Header, CurrentForecast, FiveDayForecast,Sidebar, SearchComp} from "./components";
import { useWeatherContext } from "./context/WeatherContext";
import { useState } from "react";
import SkeletonLoader from "./components/SkeletonLoader/skeletonLoader";
import "./App.css";


function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const {weatherData} = useWeatherContext();

  // show skeleton loader if weather data is not available
  if(!weatherData){
    return (<SkeletonLoader />);
  }

  return (
    <div className="App">
      <Header openSidebar={() => setIsSideBarOpen(true)} />
      <Sidebar isOpen={isSideBarOpen} onClose={() => setIsSideBarOpen(false)}/>
      <div className="container">
        <SearchComp />
        <CurrentForecast />
        <FiveDayForecast />
      </div>
    </div>
  );
}

export default App;
