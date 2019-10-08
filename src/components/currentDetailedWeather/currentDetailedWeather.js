import React from 'react'
import TempMax from '../icons/tempMaxIcon.js'
import TempMin from '../icons/tempMinIcon.js'
import SunRise from '../icons/sunRiseIcon.js'
import SunSet from '../icons/sunSetIcon.js'
import Wind from '../icons/windIcon'
import './currentDetailedWeather.css'

const CurrentDetailedWeather = ({description, tempMax, tempMin, sunRise, sunSet, wind}) => {
  const getDatestampInHourAndMinute = (time) => {
    var date = new Date(time * 1000)
    var hours = date.getHours()
    var minutes = "0" + date.getMinutes()
    return hours + ':' + minutes.substr(-2)
    }
  const descriptionCapitalized = description.charAt(0).toUpperCase() + description.slice(1)
	return (
    <div className="currentDetailedWeather">
      <div className="description">
        D'oh! {descriptionCapitalized} today...
      </div>
      <div className="tempMax">
        <TempMax />
        {tempMax}<span>&deg;</span>
      </div>
      <div className="tempMin">
        <TempMin />
        {tempMin}<span>&deg;</span>
      </div>
      <div className="sunRise">
        <SunRise />
        {getDatestampInHourAndMinute(sunRise)}
      </div>
      <div className="sunSet">
        <SunSet />
        {getDatestampInHourAndMinute(sunSet)}
      </div>
      <div className="wind">
        <Wind />
        {wind} <span>km/h</span>
      </div>
    </div>
  )
}

export default CurrentDetailedWeather
