import React, { Component } from "react";
import "./index.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { day: 0, hour: 0, min: 0, sec: 0 };
  }

  render() {
    return (
      <div>
        <div className="clock clock-day">{this.state.day} Days</div>
        <div className="clock clock-hour">{this.state.min} Hours</div>
        <div className="clock clock-min">{this.state.min} Minutes</div>
        <div className="clock clock-seconds">{this.state.sec} Seconds</div>
      </div>
    );
  }
}

export default Clock;