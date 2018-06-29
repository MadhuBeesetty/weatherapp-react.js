import React from 'react';

import WeatherDisplay from "./components/WeatherDisplay"
import Location from "./components/Location"

const API_KEY = "bb5d6ae545e675fae9a1230b7f4fcd98"

class App extends React.Component {

  weather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const connect_api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await connect_api.json();
    console.log(data);
  }
  render() {
    return (
      <div >
        <Location weather={this.weather} />
        <WeatherDisplay />
      </div>
    );
  }
}

export default App;
