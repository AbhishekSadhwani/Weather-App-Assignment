import { createContext, useContext, useEffect, useReducer } from "react";
import { WeatherReducer } from "../reducer/WeatherReducer";
import { toast } from "react-toastify";

// initial state variables
const initialState = {
    weatherData:null,
    city: localStorage.getItem("lastCity") || "Jaipur",
    favorites: JSON.parse(localStorage.getItem("favorites")) || []
};

// creating weather context
const WeatherContext = createContext(initialState);


// creating context Provider which will wrap our app so that state is available to all components
export const WeatherProvider = ({children}) => {
    // accessing reducer
    const [state,dispatch] = useReducer(WeatherReducer, initialState);

    // function to fetch weather from API
    useEffect(() => {
        const fetchWeather = async () => {
            try{
                // fetching lat and lon for city
                const geoResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${state.city}&limit=1&appid=${process.env.REACT_APP_API_KEY}`);
                const geoData = await geoResponse.json();
                
                if(geoData.length === 0){
                    throw new Error('City not found');
                }
                const {lat,lon} = geoData[0];
    
                const weatherResponse = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
            
                if(!weatherResponse.ok){
                    throw new Error('City not found');
                }
                
                const new_data = await weatherResponse.json();
                
                const dailyData = new_data.daily.slice(0,5);

                dispatch({
                    type:"SET_WEATHER_DATA",
                    payload:{
                        weatherData:{...new_data,daily:dailyData,state:geoData[0].state,country:geoData[0].country}
                    }
                });
                
    
            }catch(error){
                toast.error(error.message, {position:"top-right",style:{width:"250px",borderRadius:"10px"} ,closeButton:true, autoClose:3000});
                
            };
        
        };

        fetchWeather();

    },[state.city]);

    
    // function to set city value when user searches
    const setCity = (cityname) => {
        localStorage.setItem("lastCity", cityname);
        dispatch({
            type:"SET_CITY",
            payload:{
                city:cityname
            }
        })
    };

    // function to add favorites to list on user action
    const addFavorites = (cityname) => {
        if(!state.favorites.includes(cityname)){
            const updatedList = state.favorites.concat(cityname.toLowerCase());
            localStorage.setItem("favorites", JSON.stringify(updatedList));
            dispatch({
                type:"ADD_FAVORITES",
                payload:{
                    favorites: updatedList
                }
            });
        }
    };

    // function to remove a city from favorites 
    const removeFavorites = (cityname) => {
        // getting an updated list after removing the city
        const updatedList = state.favorites.filter(city => city.toLowerCase() !== cityname.toLowerCase());
        // storing the updated list in localstorage of user
        localStorage.setItem("favorites", JSON.stringify(updatedList));
        dispatch({
            type:"REMOVE_FAVORITE",
            payload:{
                favorites:updatedList
            }
        });
    };

    // function to empty the favorites list when user performs action
    const clearFavorites = () => {
        // update the list in localStorage
        localStorage.setItem("favorites", JSON.stringify([]));
        dispatch({
            type:"CLEAR_FAVORITES",
            payload:{
                favorites:[]
            }
        })
    };

    const value = {
        city: state.city,
        weatherData: state.weatherData,
        favorites:state.favorites,
        setCity,
        addFavorites,
        removeFavorites,
        clearFavorites
    };

    return (
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    );
};


// creating a method to use the context so that we just import this method in components and use the context
export const useWeatherContext = () => {
    const context = useContext(WeatherContext);
    return context
};