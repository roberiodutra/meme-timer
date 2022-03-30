import React, { Component } from "react";
import PlusTime from "./PlusTime";
import LessTime from "./LessTime";
import Timer from "./Timer";

class Display extends Component {
  render() {
    const { minutes, seconds, plusTime, lessTime, isHidden } = this.props;
    return (
      <div className="display">
        <PlusTime plusTime={plusTime} isHidden={isHidden} />
        <Timer seconds={seconds} minutes={minutes} />
        <LessTime lessTime={lessTime} isHidden={isHidden} />
      </div>
    );
  }
}

export default Display;
