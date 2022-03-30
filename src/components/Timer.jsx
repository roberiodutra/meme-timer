import React, { Component } from "react";

class Timer extends Component {
  addZero = (number) => {
    let value = number.toString();
    if (value.length < 2) {
      value = "0" + value;
    }
    return value;
  };

  render() {
    const { minutes, seconds } = this.props;
    return (
      <div className="timer">
        <span>{this.addZero(minutes)}:{this.addZero(seconds)}</span>
      </div>
    );
  }
}

export default Timer;
