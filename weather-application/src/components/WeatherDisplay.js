import React from "react";

class WeatherDisplay extends React.Component {
  render() {
    return(
      <div className='weather__info'>
        {this.props.city && this.props.country && <p className="weather__key"> City <span className="weather__value">{this.props.city} </span> Country <span className="weather__value">{this.props.country} </span></p>}
        {this.props.weatherType && <p className="weather__key"> Today the weather will be like mostly <span className="weather__value"> {this.props.weatherType} </span></p>}
        {this.props.temperature && <p className="weather__key"> temperature <span className="weather__value"> {this.props.temperature} </span> </p>}
        {this.props.dayMax && this.props.dayMin && <p className="weather__key"> Day Max <span className="weather__value"> {this.props.dayMax} ---- Day Min {this.props.dayMin} </span> </p>}
        {this.props.humidity && <p className="weather__key"> Humidity <span className="weather__value"> {this.props.humidity} </span> </p>}
        {this.props.windspeed && <p className="weather__key"> Wind Speed <span className="weather__value"> {this.props.windspeed} </span> </p>}
        {this.props.error && <p className="weather__key"> ERROR!! <span className="weather__value"> {this.props.error} </span> </p>}
      </div>
    )
  }
}
export default WeatherDisplay;
