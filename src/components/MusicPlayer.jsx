import React, { Component } from "react";
import ReactPlayer from "react-player";
import MusicButtons from "./MusicButtons";
import getMusics from "../api/getMusics";

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      songs: "",
      isPlaying: false,
    };
  }

  componentDidMount() {
    this.checkDay();
    this.tracks();
  }

  checkDay = () => {
    const day = new Date().getDay();
    if (day === 5) {
      this.setState({ url: "U6n2NcJ7rLc" });
    }
  };

  tracks = async () => {
    const videoData = [];
    let totalPages = 10;
    let nextPageToken = undefined;

    for (let i = 0; i < totalPages; i += 1) {
      const data = await getMusics(nextPageToken);
      videoData.push(...data.items);
      nextPageToken = data.nextPageToken;
    }

    this.setState({ songs: videoData });
  };

  randSong = () => {
    const { songs } = this.state;
    if (songs !== "") {
      const list = [];
      songs.forEach((item) => {
        const {
          snippet: {
            resourceId: { videoId },
          },
        } = item;
        list.push(videoId);
      });
      return list[Math.floor(Math.random() * list.length)];
    }
  };

  controls = ({ currentTarget: { name } }) => {
    const { url } = this.state;
    const isName = ["play", "pause"];
    const booleans = [true, false];

    if (name === "play" && url === "") {
      this.setState({ url: this.randSong() });
    }

    isName.forEach((elem, i) => {
      if (name === elem) {
        this.setState({ isPlaying: booleans[i] });
      }
    });

    if (name === "reload") {
      this.setState({
        url: this.randSong(),
        isPlaying: true,
      });
    }
  };

  onEnded = () => {
    const { isPlaying } = this.state;
    if (isPlaying) {
      this.setState({ url: this.randSong() });
    }
  };

  render() {
    const { isPlaying, url } = this.state;
    return (
      <div>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${url}`}
          playing={isPlaying}
          style={{ display: "none" }}
          onEnded={this.onEnded}
        />
        <MusicButtons playing={isPlaying} controls={this.controls} />
      </div>
    );
  }
}

export default MusicPlayer;
