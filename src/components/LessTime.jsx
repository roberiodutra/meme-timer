import React, { Component } from "react";
import imgDown from "../system-img/down-arrow.png";

class LessTime extends Component {
  render() {
    const { lessTime, isHidden } = this.props;
    return (
      <section className="moreTime">
        <button className="plusmins" type="button" onClick={lessTime}>
          <img
            src={`${imgDown}`}
            alt="Arrow down button"
            name="-10m"
            id="lessM"
            hidden={isHidden}
          />
          <img
            src={`${imgDown}`}
            alt="Arrow down button"
            name="-1m"
            id="lessM"
            hidden={isHidden}
          />
        </button>
        <button className="plussecs" type="button" onClick={lessTime}>
          <img
            src={`${imgDown}`}
            alt="Arrow down button"
            name="-10s"
            id="lessS"
            hidden={isHidden}
          />
          <img
            src={`${imgDown}`}
            alt="Arrow down button"
            name="-1s"
            id="lessS"
            hidden={isHidden}
          />
        </button>
      </section>
    );
  }
}

export default LessTime;
