import React from 'react'


function Form(props) {
	return (
		<div className="container">
			<form onSubmit={props.getWeather} autocomplete="off" id="myForm">
				<input type="text" name="city" placeholder="Enter City Name" />
				<button>Forecast</button>
				<button onClick={props.clear}>Clear</button>
			</form>
		</div>
	)
}

export default Form