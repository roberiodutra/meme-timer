import React, { Component } from "react";
import * as icon from "@mui/icons-material";
import { IconButton } from "@mui/material";
import SoundVolume from "./volume/SoundVolume";

class MusicButtons extends Component {
  render() {
    const { playing, controls, vol, volume } = this.props;
    return (
      <div className="soundIcons">
        {SoundVolume(vol, volume)}
        {!playing ? (
          <IconButton onClick={controls} name="play">
            <icon.PlayCircleOutline
              fontSize="medium"
              style={{ color: "#036b52" }}
            />
          </IconButton>
        ) : (
          <IconButton onClick={controls} name="pause">
            <icon.PauseCircleOutline fontSize="medium" style={{ color: "#2fc18c" }} />
          </IconButton>
        )}
        <IconButton onClick={controls} name="reload">
          <icon.Cached fontSize="medium" style={{ color: "#036b52" }} />
        </IconButton>
      </div>
    );
  }
}

export default MusicButtons;
