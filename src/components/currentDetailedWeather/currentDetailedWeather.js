import React from 'react'
import './currentDetailedWeather.css'

const CurrentDetailedWeather = ({description, humidity, tempMax, tempMin, sunRise, sunSet, wind}) => {
	return (
    <div className="currentDetailedWeather">
      {description}
      {humidity}
    </div>
  )
}

export default CurrentDetailedWeather
