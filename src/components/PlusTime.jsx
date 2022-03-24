import React, { Component } from "react";
import imgUP from "../system-img/up-arrow.png";

class PlusTime extends Component {
  render() {
    const { plusTime, isHidden } = this.props;
    return (
      <section className="moreTime">
        <button className="plusmins" type="button" onClick={plusTime}>
          <img
            src={`${imgUP}`}
            alt="Arrow up button"
            name="+10m"
            id="plusM"
            hidden={isHidden}
          />
          <img
            src={`${imgUP}`}
            alt="Arrow up button"
            name="+1m"
            id="plusM"
            hidden={isHidden}
          />
        </button>
        <button className="plussecs" type="button" onClick={plusTime}>
          <img
            src={`${imgUP}`}
            alt="Arrow up button"
            name="+10s"
            id="plusS"
            hidden={isHidden}
          />
          <img
            src={`${imgUP}`}
            alt="Arrow up button"
            name="+1s"
            id="plusS"
            hidden={isHidden}
          />
        </button>
      </section>
    );
  }
}

export default PlusTime;
