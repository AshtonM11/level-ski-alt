import React, { Component } from "react";

import route from "./route";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return <div>{route} </div>;
  }
}

export default App;
