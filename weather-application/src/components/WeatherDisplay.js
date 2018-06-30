import React from "react";

class WeatherDisplay extends React.Component {
  render() {
    return(
      <div>
        {this.props.city && this.props.country && <p> City {this.props.city} Country {this.props.country}</p>}
        {this.props.weatherType && <p> Today the weather will be like mostly {this.props.weatherType}</p>}
        {this.props.temperature && <p> temperature {this.props.temperature}</p>}
        {this.props.dayMax && this.props.dayMin && <p> Day Max {this.props.dayMax} ---- Day Min {this.props.dayMin}</p>}
        {this.props.humidity && <p> Humidity {this.props.humidity}</p>}
        {this.props.windspeed && <p> Wind Speed {this.props.windspeed}</p>}
        {this.props.error && <p> ERROR!! {this.props.error}</p>}
      </div>
    )
  }
}

export default WeatherDisplay;
