import { useEffect, useState } from 'react'
import './App.css'
import Fashion from './components/Fashion'

function App() {
  const [weather, setWeather] = useState(null)
  const API_KEY = "c9eb97d479c1febe8a9e9190fd494be1"

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Ghaziabad&appid=${API_KEY}&units=metric`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log("Fetched data:", data);
        setWeather(data);
      })
      .catch(err => console.error("Error fetching weather:", err));
  }, []);
  return (
    <>
      {!weather ? (
        <h3>Loading...</h3>
      ) : (
        <Fashion
          city={weather.name}
          temp={weather.main.temp}
          humidity={weather.main.humidity}
          condition={weather.weather[0].main}
        />
      )}
    </>
  )
}

export default App
