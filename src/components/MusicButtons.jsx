import React, { Component } from "react";
import * as icon from "@mui/icons-material";
import { IconButton } from "@mui/material";
import SoundVolume from "./volume/SoundVolume";

class MusicButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volDisplay: "none",
    };
  }

  volumeEnter = () => {
    this.setState({ volDisplay: "block" });
  };

  volumeLeave = () => {
    this.setState({ volDisplay: "none" });
  };

  render() {
    const { playing, controls, vol } = this.props;
    const { volDisplay } = this.state;
    return (
      <div
        className="soundIcons"
        onMouseEnter={this.volumeEnter}
        onMouseLeave={this.volumeLeave}
      >
        {!playing ? (
          <IconButton onClick={controls} name="play">
            <icon.VolumeUpOutlined
              fontSize="large"
              style={{ color: "#036b52" }}
            />
          </IconButton>
        ) : (
          <IconButton onClick={controls} name="pause">
            <icon.VolumeOff fontSize="large" style={{ color: "#2fc18c" }} />
          </IconButton>
        )}
        <IconButton onClick={controls} name="reload">
          <icon.Cached fontSize="large" style={{ color: "#036b52" }} />
        </IconButton>
        {SoundVolume(vol, volDisplay)}
      </div>
    );
  }
}

export default MusicButtons;
