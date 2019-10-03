import React from 'react'
import './top.css'

const Top = ({currentTemperature, currentDate}) => {
	const formattedDate = new Date(currentDate*1000).toDateString()
	return (
    <div className="Top">
			<div className="currentTemperature">
				{currentTemperature}
			</div>
			<div className="currentDate">
				<p>{formattedDate}</p>
			</div>
    </div>
  )
}

export default Top
