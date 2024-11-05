import { useEffect, useState } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [isLoading, setIsLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const featchWeatherData = async (latitude, longitude) => {
    try {
      setIsLoading({
        ...isLoading,
        state: true,
        message: "Fetching weather data...",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      };

      setWeatherData(updateWeatherData);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading({
        ...isLoading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setError({
      state: true,
      message: "Finding Location...",
    });

    navigator.geolocation.getCurrentPosition(function (position) {
      featchWeatherData(position.coords.latitude, position.coords.longitude);
    });
  }, []);

  return {
    weatherData,
    isLoading,
    error,
  };
};

export default useWeather;