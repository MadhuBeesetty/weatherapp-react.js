import React from 'react';

import WeatherDisplay from "./components/WeatherDisplay"
import Location from "./components/Location"

const API_KEY = "bb5d6ae545e675fae9a1230b7f4fcd98"

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    windspeed: undefined,
    weatherType: undefined,
    dayMax : undefined,
    dayMin : undefined,
    error : undefined
  }
  weather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const connect_api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await connect_api.json();
    if(city && country){
      console.log(data);
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        weatherType: data.weather[0].main,
        dayMax: data.main.temp_max,
        dayMin: data.main.temp_min
      })
    }else{
      this.setState({
    error : "city or country not found"
      });
      }
  }
  render() {
    return (
      <div >
        <Location weather={this.weather} />
        <WeatherDisplay 
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          dayMax={this.state.dayMax}
          dayMin={this.state.dayMin}
          humidity={this.state.humidity}
          windspeed={this.state.windspeed}
          weatherType={this.state.weatherType}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
