import { Search } from 'lucide-react';
import { useState } from 'react';
import { useWeatherContext } from '../../context/WeatherContext';
import "./SearchComp.css";


export const SearchComp = () => {
    const [inputCity, setInputCity] = useState("");
    const {setCity} = useWeatherContext();


    // hanlde form submit and set value of city state variable using the setCity function
    const handleSubmit = async (event) => {
        event.preventDefault();

        // if city is empty then raise error
        try{
            if(inputCity.trim() === ""){
                throw new Error("Please enter a location to search");
            }

            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputCity}&limit=1&appid=${process.env.REACT_APP_API_KEY}`);
            const data = await response.json();

            console.log(data);
            if(data.length !== 0){
                setCity(inputCity);
                setInputCity("");
            }
            else{
                setInputCity("");
                throw new Error("City not Found");
            }
        }catch(error){
            console.log(error);
            // toast.error("Please enter a location to search", {position:toastPosition,style:{width:"250px",borderRadius:"10px"} ,closeButton:true, autoClose:3000});
        }

    };
    

    return (
        <div className="theme search-container">
            <div className="search-box">
                <Search className="search-icon" />
                <form onSubmit={handleSubmit} className="search-form">
                    <input 
                        className="search-input" 
                        placeholder="Search location..." 
                        type="text" 
                        name="city"
                        value={inputCity}
                        onChange={(e) => setInputCity(e.target.value)} 
                    />
                </form>
            </div>
        </div>
    );
};
