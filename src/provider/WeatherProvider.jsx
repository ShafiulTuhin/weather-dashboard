import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

// eslint-disable-next-line react/prop-types
const WeatherProvider = ({ children }) => {
  const { weatherData, isLoading, error } = useWeather();
  return (
    <WeatherContext.Provider value={{ weatherData, isLoading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
