import React from 'react'


function convertC(x) {
	return (x - 273.15).toFixed(2)
}

function convertF(x) {
	return ((x - 273.15) * 9/5 + 32).toFixed(2)
}

function Display(props) {
	return (
		<div className="infoDisplay">
			<p><span>Location:</span> {props.info.city}, {props.info.country}</p>
			<p><span>Temperature:</span> {convertC(props.info.temp)}°C / {convertF(props.info.temp)}°F</p>
			<p><span>Humidity:</span> {props.info.humidity}%</p>
			<p><span>Wind Speed:</span> {props.info.windSpeed}m/s</p>
		</div>
	)
}

export default Display