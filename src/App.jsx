import React, { Component } from "react";
import Clock from "./Clock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "December 25, 2020" };
  }

  changeDeadline = () => {
    this.setState({ deadline: this.state.newDeadline });
  };

  render() {
    return (
      <div className="app">
        <div className="title">Countdown to {this.state.deadline}</div>
        <Clock />
        <div>
          <input
            placeholder="New Date"
            onChange={(event) =>
              this.setState({ newDeadline: event.target.value })
            }
          />
          <button onClick={this.changeDeadline}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
