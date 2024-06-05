import './App.css'

import WeatherApp from './WeatherApp';
function App() {
  let info={
    feelsLike:43.47,
    humidity:16,
    temp:43.95,
    tempMax:44.05,
    tempMin:43.95,
    weather:"haze",
  };

  return (
    <>
      <WeatherApp/>
    </>
  )
}

export default App
