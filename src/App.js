import React, { useEffect, useState } from 'react'
import Top from './components/top/top.js'
import './App.css'

const App = () => {
  const [didMount, setDidMount] = useState(false)
  const [currentWeather, setCurrentWeather] = useState([])

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?id=2618425&units=metric&appid=afcaa866115671742fe4c24507136520")
      .then(response => response.json())
      .then(data => {
        console.log(data.dt)
        setCurrentWeather(data)
        setDidMount(true)
      })
  }, [])

  const currentTemperature = currentWeather.main ? currentWeather.main.temp : 0
  const currentDate = currentWeather.dt ? currentWeather.dt : 0

  return (
    <div className="App">
      { didMount &&
      <Top currentTemperature={currentTemperature} currentDate={currentDate} />
      }
    </div>
  )
}

export default App
