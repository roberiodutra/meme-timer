import React, { Component } from "react";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import MusicPlayer from "./components/MusicPlayer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      seconds: 0,
      minutes: 0,
      percent: 0,
      totalSeconds: 0,
      isHidden: false,
      imageBg: "",
      hours: 0,
      timesPlus: [600, 60, 10, 1],
    };
  }

  start = () => {
    const { running, minutes, seconds, percent } = this.state;
    const MATH_NUMBER = Math.floor(Math.random() * 62);
    const MATH_IMAGES = `url("images/image${MATH_NUMBER}.jpg")`;

    percent === 0 && this.setState({ imageBg: MATH_IMAGES });

    if (seconds === 0 && minutes === 0) return;

    if (!running) {
      this.setState(() => ({
        running: true,
        isHidden: true,
      }));
      this.timer = setInterval(this.update, 1000);
    }
  };

  update = () => {
    const { seconds, minutes, percent, totalSeconds } = this.state;

    if (seconds === 0 && minutes > 0) {
      this.setState({
        minutes: minutes - 1,
        seconds: 59,
      });
    }

    if (seconds > 0) {
      this.setState({ seconds: seconds - 1 });
    }

    if (seconds === 0 && minutes === 0) {
      this.setState(() => ({
        isHidden: false,
        totalSeconds: 0,
      }));
      return this.stop();
    }

    this.setState({ percent: percent + 100 / totalSeconds });
  };

  stop = () => {
    this.setState({ running: false });
    clearInterval(this.timer);
  };

  reset = () => {
    this.setState({
      seconds: 0,
      minutes: 0,
      percent: 0,
      totalSeconds: 0,
      isHidden: false,
    });
    clearInterval(this.timer);
  };

  plusTime = ({ target: { name, id } }) => {
    const { minutes, seconds, totalSeconds, timesPlus } = this.state;
    const namesPlus = ["+10m", "+1m", "+10s", "+1s"];
    const condition = [minutes < 90, minutes < 99];

    namesPlus.forEach((elem, i) => {
      if (elem === name && id === "plusM" && condition[i]) {
        this.setState({
          totalSeconds: totalSeconds + timesPlus[i],
          minutes: minutes + timesPlus[i] / 60,
          percent: 0,
        });
      }

      if (elem === name && id === "plusS" && condition[1]) {
        this.setState(
          {
            totalSeconds: totalSeconds + timesPlus[i],
            seconds: seconds + timesPlus[i],
          },
          this.isMinute
        );
      }
    });
  };

  isMinute = () => {
    const { minutes, seconds } = this.state;
    if (seconds > 59) {
      this.setState({
        minutes: minutes + 1,
        seconds: seconds - 60,
      });
    }
  };

  lessTime = ({ target: { name, id } }) => {
    const { minutes, seconds, totalSeconds, timesPlus } = this.state;
    const namesPlus = ["-10m", "-1m", "-10s", "-1s"];
    const conditions = [
      minutes >= 10,
      minutes >= 1,
      seconds >= 10,
      seconds > 0,
    ];

    namesPlus.forEach((elem, i) => {
      if (elem === name && id === "lessM" && conditions[i]) {
        this.setState({
          totalSeconds: totalSeconds - timesPlus[i],
          minutes: minutes - timesPlus[i] / 60,
        });
      }

      if (elem === name && id === "lessS" && conditions[i]) {
        if (seconds === 0 && minutes === 0) return;
        this.setState({
          totalSeconds: totalSeconds - timesPlus[i],
          seconds: seconds - timesPlus[i],
        });
      }
    });
  };

  render() {
    const { running, percent, isHidden, imageBg } = this.state;
    return (
      <div className={"stopwatch"}>
        <h1>Meme Timer</h1>
        <section className="display-section">
          <Display
            {...this.state}
            plusTime={this.plusTime}
            lessTime={this.lessTime}
            isHidden={isHidden}
          />
        </section>
        <div className="allButtons">
          {!running ? (
            <Buttons onClick={this.start} text="START" />
          ) : (
            <Buttons onClick={this.stop} text="STOP" />
          )}
          <Buttons onClick={this.reset} text="RESET" />
          <MusicPlayer />
        </div>
        <div id="progress">
          <div
            id="progressBar"
            style={{
              height: `${percent.toFixed(2)}%`,
              background: `${imageBg}`,
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default App;
