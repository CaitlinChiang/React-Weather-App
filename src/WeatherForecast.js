import React, { Component } from 'react'
import Form from './components/form'
import Display from './components/display'


const API_KEY = "49249287985daf09d5f0eec2116f6b01"

class WeatherForecast extends Component {
	state = {
		city: "",
		country: "",
		temp: "",
		humidity: "",
		windSpeed: "",

		visible: false
	}

	getWeather = async (event) => {
		event.preventDefault();
		const city = event.target.elements.city.value
		const weatherApi_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
		const weatherInfo = await weatherApi_call.json()
		try {
			this.setState({
				city: weatherInfo.name,
				country: weatherInfo.sys.country,
				temp: weatherInfo.main.temp,
				humidity: weatherInfo.main.humidity,
				windSpeed: weatherInfo.wind.speed,

				visible: true
			})
		} catch {
			alert("Please Enter a Valid City.")
		}
	}

	clear = (event) => {
		event.preventDefault();
		this.setState({ visible: false })
		document.getElementById("myForm").reset()
	}

	render() {
		return (
			<div>
				<Form getWeather={this.getWeather} clear={this.clear} />
				{this.state.visible ? <Display info={this.state} /> : null }
			</div>
		)
	}
}

export default WeatherForecast