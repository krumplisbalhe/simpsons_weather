import React from 'react'
import RainIcon from '../../icons/rainIcon.js'
import BartIcon from '../../icons/bartIcon.js'
import HomerIcon from '../../icons/homerIcon.js'
import LisaIcon from '../../icons/lisaIcon.js'
import MaggieIcon from '../../icons/maggieIcon.js'
import MargeIcon from '../../icons/margeIcon.js'
import './oneDayForecast.css'

const OneDayForecast = ({date, tempMax, tempMin, probPrec, index}) => {
	const getDayName = (date) => {
		const dateParts = date.split("/")
		const dateObject = new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
    return dateObject.toLocaleDateString("en-US", { weekday: 'long' })
	}
	const getIcon = (index) => {
		if (index===0) return <HomerIcon />
		if (index===1) return <MargeIcon />
		if (index===2) return <BartIcon />
		if (index===3) return <LisaIcon />
		if (index===4) return <MaggieIcon />
	}
	const dailyAverage = Math.round((tempMin+tempMax)/2)
	return (
    <div className="oneDayForecast">
			<span className="leftAligned">{getIcon(index)} {getDayName(date)}</span>
			<span>{dailyAverage}<span>&deg;</span></span>
			{probPrec}%
			<RainIcon />
    </div>
  )
}

export default OneDayForecast
