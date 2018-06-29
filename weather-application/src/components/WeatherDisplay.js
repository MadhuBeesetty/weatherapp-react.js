import React from "react";

class WeatherDisplay extends React.Component {
  render() {
    return(
      <div>
        <p> City {this.props.city}</p>
        <p> Country {this.props.country}</p>
        <p> Today the weather will be like mostly {this.props.weatherType}</p>
        <p> temperature {this.props.temperature}</p>
        <p> Day Max {this.props.dayMax} ---- Day Min {this.props.dayMin}</p>
        <p> Humidity {this.props.humidity}</p>
        <p> Wind Speed {this.props.windspeed}</p>
      </div>
    )
  }
}

export default WeatherDisplay;
