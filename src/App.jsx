import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="title">Countdown to Dec 25, 2017</div>
        <div>
          <div className="clock clock-day">14 Days</div>
          <div className="clock clock-hour">20 Hours</div>
          <div className="clock clock-min">10 Minutes</div>
          <div className="clock clock-seconds">40 Seconds</div>
        </div>
        <div>
          <input placeholder="New Date" />
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
