import React, { Component } from "react";
import "./index.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { day: 0, hour: 0, min: 0, sec: 0 };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const sec = Math.floor((time / 1000) % 60);
    const min = Math.floor((time / 1000 / 60) % 60);
    const hour = Math.floor((time / (1000 * 60 * 60)) % 24);
    const day = Math.floor(time / (1000 * 60 * 60 * 24));

    this.setState({
      day,
      hour,
      min,
      sec,
    });
  };

  render() {
    return (
      <div>
        <div className="clock clock-day">{this.state.day} Days</div>
        <div className="clock clock-hour">{this.state.hour} Hours</div>
        <div className="clock clock-min">{this.state.min} Minutes</div>
        <div className="clock clock-seconds">{this.state.sec} Seconds</div>
      </div>
    );
  }
}

export default Clock;
