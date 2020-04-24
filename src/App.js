import React from 'react'
import Header from './components/header'
import WeatherForecast from './WeatherForecast'


function App() {
    return (
        <div className="content">
            <Header />
            <WeatherForecast />
        </div>
    )
}

export default App