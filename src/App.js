import React, { useEffect, useState, Fragment } from 'react'
import {HashRouter as Router, Route, Redirect} from 'react-router-dom'
import Top from './components/top/top.js'
import Nav from './components/nav/nav.js'
import FutureWeather from './components/futureWeather/futureWeather.js'
import CurrentDetailedWeather from './components/currentDetailedWeather/currentDetailedWeather.js'
import {getBackgroundGif} from './components/giphys/giphy.js'
import Loading from './components/loading/loading.js'
import './App.css'

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({})
  const [futureWeather, setFutureWeather] = useState({})

  useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?id=2618425&units=metric&appid=afcaa866115671742fe4c24507136520")
      .then(response => response.json())
      .then(data => {
        setCurrentWeather({
          loaded: true,
          currentTemperature: data.main.temp,
          currentDate: data.dt,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          tempMax: data.main.temp_max,
          tempMin: data.main.temp_min,
          sunRise: data.sys.sunrise,
          sunSet: data.sys.sunset,
          wind: data.wind.speed,
        })
      })
  }, [])

  useEffect(() => {
    fetch("http://api.weatherunlocked.com/api/forecast/55.676,12.568?app_id=d1c412bb&app_key=0cddddb94a1715880ae41a727a584d30")
      .then(response => response.json())
      .then(data => {
        setFutureWeather({
          loaded: true,
          days: data.Days
        })
      })
  }, [])

  return (
    <Fragment>
      {currentWeather.loaded && futureWeather.loaded ?
        <Router>
          <Route exact path="/">
            <Redirect to="/forecast" />
          </Route>
          <div
            className="app"
          >
            <div
              className="giphyBackground"
              style={{backgroundImage:`url(${getBackgroundGif(currentWeather.currentTemperature, currentWeather.description)})`}}
            >
              <Top
                currentTemperature={currentWeather.currentTemperature}
                currentDate={currentWeather.currentDate}
              />
              <Nav />
            </div>
            <Route
              path="/forecast"
              render={() => <FutureWeather futureWeather={futureWeather.days}/>}
            />
            <Route
              path="/today"
              render={() =>
                <CurrentDetailedWeather
                  description={currentWeather.description}
                  humidity={currentWeather.humidity}
                  tempMax={currentWeather.tempMax}
                  tempMin= {currentWeather.tempMin}
                  sunRise={currentWeather.sunRise}
                  sunSet={currentWeather.sunSet}
                  wind={currentWeather.wind}
                />
              }
            />
          </div>
        </Router>
      :
        <Loading />
      }
    </Fragment>
  )
}

export default App
