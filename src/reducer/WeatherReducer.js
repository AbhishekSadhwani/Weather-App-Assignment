export const WeatherReducer = (state,action) => {
    const {type, payload} = action;

    switch (type) {
        case "SET_WEATHER_DATA":
            return {...state,weatherData:payload.weatherData};
        
        case "SET_CITY":
            return {...state,city:payload.city};
        
        case "ADD_FAVORITES":
            return {...state,favorites:payload.favorites};
        
        case "REMOVE_FAVORITE":
            return {...state,favorites:payload.favorites};

        case "CLEAR_FAVORITES":
            return {...state,favorites:payload.favorites};

        default:
            throw new Error("No case found");
    }
};