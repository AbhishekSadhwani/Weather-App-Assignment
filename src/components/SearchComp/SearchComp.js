import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useWeatherContext } from '../../context/WeatherContext';
import { toast } from 'react-toastify';
import "./SearchComp.css";


export const SearchComp = () => {
    const [inputCity, setInputCity] = useState("");
    const [citySuggestions, setCitySuggestions] = useState([]);
    const {setCity} = useWeatherContext();

    // fetching city suggestions as the user types in the input field
    useEffect(() => {
        const fetchCitySuggestion = async () => {
            // if inputCity is too short don't make the request
            if(inputCity.length <= 2){
                setCitySuggestions([]);
                return;
            }
            try{
                const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${inputCity}&limit=5&appid=${process.env.REACT_APP_API_KEY}`);
                const data = await response.json();
                setCitySuggestions(data);
            }catch(error){
                toast.error(error.message, {position:'top-right',style:{width:"250px",borderRadius:"10px"} ,closeButton:true, autoClose:3000});
            };

        };

        // debouncing the api call, adding delay of 500ms when user types so that no. of api calls are reduced
        const timer = setTimeout(fetchCitySuggestion,500);
        // removing the timer before the next api call
        return () => clearTimeout(timer);

    },[inputCity]);



    // hanlde form submit and set value of city state variable using the setCity function
    const handleSubmit = async () => {

        // if user enters a city with wrong spelling or city not found then show error message
        try{
            // if the input is empty then show error message
            if(inputCity.trim() === ""){
                throw new Error("Please enter a location to search");
            }

            // checking the if the city exists or not
            const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${inputCity}&limit=1&appid=${process.env.REACT_APP_API_KEY}`);
            const data = await response.json();

            // console.log(data);
            if(data.length !== 0){
                setCity(inputCity);
                setInputCity("");
                setCitySuggestions([]);
                
            }
            else{
                setInputCity("");
                throw new Error("City not Found.Check Spelling");
            }
        }catch(error){
            toast.error(error.message, {position:'top-right',style:{width:"250px",borderRadius:"10px"} ,closeButton:true, autoClose:3000});
        }

    };
    
    // funciton to handle the selection of city from the suggestions
    const handleSelectCity = (city) => {
        setInputCity("");
        setCity(city.name);
        setCitySuggestions([]);
    };


    return (
        <div className="theme search-container">
            <div className="search-box">
                <input 
                    className="search-input" 
                    placeholder="Search location..." 
                    type="text" 
                    name="city"
                    value={inputCity}
                    onChange={(e) => setInputCity(e.target.value)}
                    autoComplete='off'
                />
                <button onClick={handleSubmit} type='submit'><Search className="search-icon" /></button>

                {citySuggestions.length > 0 && (
                    <ul className="suggestions-dropdown">
                        {citySuggestions.map((city, index) => (
                            <li key={index} onClick ={() => handleSelectCity(city)} > 
                                {city.name}, {city.state}, {city.country}
                            </li>
                        ))}
                    </ul>
                )}

            </div>
        </div>
    );
};
