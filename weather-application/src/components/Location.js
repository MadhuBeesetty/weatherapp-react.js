import React from "react";

class Location extends React.Component {
  render(){
    return(
      <div>
        <h1>"Building a weather app using react"</h1>
        City:<input type="text" placeholder="enter city" />
        Country:<input type="text" placeholder="enter country" />
        <input type="submit" value="check Weather" />
      </div>
    )
  }
}

export default Location;
