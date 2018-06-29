import React from "react";

class Location extends React.Component {
  render(){
    return(
      <form onSubmit={this.props.weather}>
        <h1>"Building a weather app using react"</h1>
        City:<input type="text" name="city" placeholder="enter city" />
        Country:<input type="text" name="country" placeholder="enter country" />
        <input type="submit" value="check Weather" />
      </form>
    )
  }
}

export default Location;
