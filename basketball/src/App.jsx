import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Display from "./Components/Display";
import Dashboard from "./Components/Dashboard";

class App extends Component {
  state = {
    ball: 0,
    strike: 0
  };

  strikeHandler = () => {
    this.state.strike + 1 > 3
      ? this.setState({
          ball: 0,
          strike: 0
        })
      : this.setState({
          ...this.state,
          strike: this.state.strike + 1
        });
  };

  ballHandler = () => {
    this.state.ball + 1 > 4
      ? this.setState({
          ball: 0,
          strike: 0
        })
      : this.setState({
          ...this.state,
          ball: this.state.ball + 1
        });
  };

  foulHandler = () => {
    if(this.state.strike < 2) {
      this.setState({
        ...this.state,
        strike: this.state.strike + 1
      })
    }
  };

  hitHandler = () => {
    this.setState({
      ball: 0,
      strike: 0
    });
  };

  render() {
    return (
      <>
        <Display ball={this.state.ball} strike={this.state.strike} />
        <Dashboard
          foulHandler={this.foulHandler}
          strikeHandler={this.strikeHandler}
          hitHandler={this.hitHandler}
          ballHandler={this.ballHandler}
        />
      </>
    );
  }
}

export default App;
