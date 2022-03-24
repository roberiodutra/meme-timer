import React, { Component } from "react";
import PlusTime from "./PlusTime";
import LessTime from "./LessTime";

class Display extends Component {
  Timer = (number) => {
    let value = number.toString();
    if (value.length < 2) {
      value = "0" + value;
    }
    return value;
  };

  render() {
    const { minutes, seconds, plusTime, lessTime, isHidden } = this.props;
    return (
      <div className={"display"}>
        <PlusTime plusTime={plusTime} isHidden={isHidden} />
        <span id="timer">
          {this.Timer(minutes)}:{this.Timer(seconds)}
        </span>
        <LessTime lessTime={lessTime} isHidden={isHidden} />
      </div>
    );
  }
}

export default Display;
