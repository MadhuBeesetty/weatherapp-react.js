import React from "react";

class Location extends React.Component {
  render(){
    return(
      <form onSubmit={this.props.weather}>
        City:<input type="text" name="city" placeholder="City" />
        Country:<input type="text" name="country" placeholder="Country" />
        <div>
          <input type="submit" value="check Weather" />
      </div>
      </form>
    )
  }
}

export default Location;
