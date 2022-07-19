import React, { Component } from "react";

import loading from "./loading.gif";

class Loading extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="Spinner" style={{height : "100px",width:"130px"}}/>
      </div>
    );
  }
}

export default Loading;