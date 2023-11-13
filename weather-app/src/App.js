import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import debounce from "lodash-es/debounce";
import WeatherCard from "./components/WeatherCard";
import NavBar from "./components/Navbar";
import Loading from "./components/Loading";
import Search from "./components/Search";

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const App = () => {
  const searchTimeout = 1000;
  const [location, setLocation] = React.useState("Newcastle Upon Tyne");
  const [error, setError] = React.useState(null);
  const [forecast, setForecast] = React.useState([]);
  const [weather, setWeather] = React.useState({});
  const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);
  const [units, setUnits] = React.useState("metric");

  const debounceSearch = React.useMemo(
    () =>
      debounce((searchTerm) => {
        setDebouncedSearchTerm(searchTerm);
      }, searchTimeout),
    []
  );

  const handleLocationChange = (e) => {
    if (e.target.value) {
      setIsSearching(true);
    }
    debounceSearch(e.target.value);
  };

  const handleUnitsChange = (newUnits) => {
    setUnits(newUnits);
  };

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      setLocation(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, isSearching]);

  React.useEffect(() => {
    fetchForecast(location, units)
      .then((forecast) => {
        setError(null);
        setIsSearching(false);
        setForecast(forecast);
      })
      .catch((err) => {
        setIsSearching(false);
        setError(err);
      });
  }, [location, units]);

  React.useEffect(() => {
    fetchWeather(location, units)
      .then((weather) => {
        setError(null);
        setIsSearching(false);
        setWeather(weather);
      })
      .catch((err) => {
        setIsSearching(false);
        setError(err);
      });
  }, [location, units]);

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            {(weather && Object.keys(weather).length) ||
            (forecast && Object.keys(forecast).length) ? (
              <main>
                <div className="mx-auto w-5/6 md:w-full 2xl:max-w-7xl xl:max-w-6xl">
                  <Search
                    location={location}
                    error={error}
                    isSearching={isSearching}
                    onLocationChange={handleLocationChange}
                  />
                  <WeatherCard
                    forecast={forecast}
                    weather={weather}
                    units={units}
                    onUnitsChange={handleUnitsChange}
                  />
                </div>
              </main>
            ) : (
              <Loading />
            )}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

async function fetchForecast(location, units) {
  const response = await window.fetch(
    `${apiUrl}/forecast/?q=${location}&units=${units}&APPID=${apiKey}`
  );
  const forecast = await response.json();
  if (response.ok) {
    if (Object.entries(forecast).length) {
      return forecast.list
        .filter((f) => f.dt_txt.match(/09:00:00/))
        .map(mapDataToWeatherInterface);
    }
  } else {
    const error = new Error(`Cannot find "${location}"`);
    return Promise.reject(error);
  }
}

async function fetchWeather(location, units) {
  const response = await window.fetch(
    `${apiUrl}/weather/?q=${location}&units=${units}&APPID=${apiKey}`
  );
  const weather = await response.json();
  if (response.ok) {
    if (Object.entries(weather).length) {
      return mapDataToWeatherInterface(weather);
    }
  } else {
    const error = new Error(`Cannot find "${location}"`);
    return Promise.reject(error);
  }
}

function mapDataToWeatherInterface(data) {
  const mapped = {
    location: data.name,
    condition: data.cod,
    country: data.sys.country,
    date: data.dt * 1000,
    description: data.weather[0].description,
    feels_like: Math.round(data.main.feels_like),
    humidity: data.main.humidity,
    icon_id: data.weather[0].id,
    sunrise: data.sys.sunrise * 1000,
    sunset: data.sys.sunset * 1000,
    temperature: Math.round(data.main.temp),
    timezone: data.timezone / 3600,
    wind_speed: Math.round(data.wind.speed * 3.6),
  };

  if (data.dt_txt) {
    mapped.dt_txt = data.dt_txt;
  }

  if (data.weather[0].icon) {
    mapped.icon = data.weather[0].icon;
  }

  if (data.main.temp_min && data.main.temp_max) {
    mapped.max = Math.round(data.main.temp_max);
    mapped.min = Math.round(data.main.temp_min);
  }

  Object.entries(mapped).map(
    ([key, value]) => value === undefined && delete mapped[key]
  );
  return mapped;
}

export default App;
