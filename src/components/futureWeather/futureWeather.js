import React from 'react'
import OneDayForecast from './oneDayForecast/oneDayForecast.js'
import './futureWeather.css'

const FutureWeather = ({futureWeather}) => {
	return (
    <div className="futureWeather">
      {futureWeather.slice(1, 6).map( (item, index) =>(
				<OneDayForecast
          date={item.date}
          key={item.date}
          index={index}
          tempMax={item.temp_max_c}
          tempMin={item.temp_min_c}
          probPrec={item.prob_precip_pct}
				/>
      ))}
    </div>
  )
}

export default FutureWeather
