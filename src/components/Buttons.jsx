import React, { Component } from "react";

class Buttons extends Component {
  render() {
    const { onClick, text } = this.props;
    return (
      <button className="buttons" type="button" onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Buttons;
