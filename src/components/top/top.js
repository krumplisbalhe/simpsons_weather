import React from 'react'
import './top.css'

const Top = ({currentTemperature, currentDate}) => {
	const displayTemperature = Math.round(currentTemperature)
	const formattedDate = new Date(currentDate*1000).toLocaleDateString('en-EN', {weekday: 'long', month: 'short', day: 'numeric'})
	return (
    <div className="top">
			<div className="currentTemperature">
				{displayTemperature}<span>&deg;</span>
			</div>
			<div className="currentDate">
				<p>{formattedDate}</p>
			</div>
    </div>
  )
}

export default Top
