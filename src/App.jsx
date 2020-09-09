import React, { Component } from "react";
import Clock from "./Clock";
import { Form, FormControl, Button } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "", newDeadline: "" };
  }

  componentWillMount() {
    const curYear = new Date().getFullYear();

    this.setState({
      deadline: "Dec 25, " + curYear,
    });
  }

  changeDeadline = () => {
    this.setState({ deadline: this.state.newDeadline });
  };

  render() {
    return (
      <div className="app">
        <div className="title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <div className="alignCenter">
          <Form>
            <FormControl
              type="date"
              className="deadlineInput"
              placeholder="New Date"
              onChange={(event) =>
                this.setState({ newDeadline: event.target.value })
              }
            />
            <Button onClick={this.changeDeadline}>Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;
