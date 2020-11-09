import React from "react";
import gsap from "gsap";
import PropTypes from "prop-types";

import "./style.scss";

class Sky extends React.Component {
  constructor(props) {
    super(props);
    (this.stars = []),
      (this.state = {
        canvasWidth: window.innerWidth,
        // canvasHeight: 600,
        canvasHeight: this.props.height,
      });

    this.ref = React.createRef();

    this.randomizeNumber = this.randomizeNumber.bind(this);
    this.initCanvas = this.initCanvas.bind(this);
    this.drawStar = this.drawStar.bind(this);
    this.sparkleStars = this.sparkleStars.bind(this);
    this.drawAllStars = this.drawAllStars.bind(this);
  }

  componentDidMount() {
    let width = window.innerWidth;
    this.setState({ windowWidth: width });
    this.initCanvas();
  }

  initCanvas() {
    let canvas = this.ref.current;
    let ctx = canvas.getContext("2d");
    let canvasHeight = this.state.canvasHeight;
    let canvasWidth = this.state.canvasWidth;
    const radius = [0.5, 1, 1.5];

    for (let i = 0; i < this.props.constellation; i++) {
      let posX = this.randomizeNumber(0, canvasWidth, true);
      let posY = this.randomizeNumber(0, canvasHeight, true);
      let starSize = this.randomizeNumber(0, 3, true);
      this.stars[i] = { x: posX, y: posY, opacity: 1, size: radius[starSize] };
    }

    //defining the canvas space
    ctx.fillStyle = "transparent";

    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    setInterval(() => {
      this.drawAllStars(ctx);
    }, 1000 / 30);

    setInterval(() => {
      this.sparkleStars();
    }, 500 / 30);
  }

  drawAllStars(ctx) {
    ctx.clearRect(0, 0, this.state.canvasWidth, this.state.canvasHeight);

    for (let i = 0; i < this.props.constellation; i++) {
      this.drawStar(ctx, i);
    }
  }

  drawStar(ctx, i) {
    let star = this.stars[i];

    ctx.beginPath();
    ctx.arc(
      star.x,
      star.y,
      star.size, //radius of the circle
      0,
      2 * Math.PI
    );
    ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
    ctx.fill();
  }

  sparkleStars() {
    let i = this.randomizeNumber(0, this.props.constellation, true);
    let star = this.stars[i];

    gsap.to(star, {
      duration: 2,
      opacity: 0,
    });

    gsap.to(star, {
      duration: 2,
      delay: 2,
      opacity: 1,
    });
  }

  randomizeNumber(min, max, isInteger) {
    if (isInteger) {
      return Math.floor(Math.random() * (max - min)) + min;
    } else {
      return Math.random() * (max - min) + min;
    }
  }

  render() {
    return (
      <canvas
        id="skyCanvas"
        className="canvas"
        width={this.state.canvasWidth}
        height={this.state.canvasHeight}
        ref={this.ref}
      ></canvas>
    );
  }
}

Sky.propTypes = {
  constellation: PropTypes.number,
};

export default Sky;
