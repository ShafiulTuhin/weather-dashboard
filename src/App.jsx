import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

import {
  WeatherProvider,
  FavouriteProvider,
  LocationProvider,
} from "./provider";

function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <div className="bg-body font-[Roboto] text-light bg-[url('../assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
            <Header />
            <main>
              <section>
                <WeatherBoard />
              </section>
            </main>
          </div>
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}

export default App;
