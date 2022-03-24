import React, { Component } from "react";
import * as icon from "@mui/icons-material";
import { IconButton } from "@mui/material";

class MusicButtons extends Component {
  render() {
    const { playing, controls } = this.props;
    return (
      <div className="soundIcons">
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
      </div>
    );
  }
}

export default MusicButtons;
