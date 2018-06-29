import React from 'react';

import WeatherDisplay from "./components/WeatherDisplay"
import Location from "./components/Location"

class App extends React.Component {
  render() {
    return (
      <div >
        <Location />
        <WeatherDisplay />
      </div>
    );
  }
}

export default App;
