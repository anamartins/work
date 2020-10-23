import React from "react";
import gsap from "gsap";
import PropTypes from "prop-types";
import "./style.scss";

class Sky extends React.Component {
  constructor(props) {
    super(props);
    (this.stars = []),
      (this.shootingStars = [
        {
          x: this.randomizeNumber(0, window.innerWidth, false),
          y: 0,
          opacity: 1,
          size: 1,
          length: 10,
          angle: this.randomizeNumber(Math.PI / 6, (5 * Math.PI) / 6, false),
        },
      ]),
      (this.state = {
        canvasWidth: window.innerWidth,
        canvasHeight: 600,
      });

    this.ref = React.createRef();

    this.randomizeNumber = this.randomizeNumber.bind(this);
    this.initCanvas = this.initCanvas.bind(this);
    this.drawStar = this.drawStar.bind(this);
    this.sparkleStars = this.sparkleStars.bind(this);
    this.drawAllStars = this.drawAllStars.bind(this);
    this.drawShootingStar = this.drawShootingStar.bind(this);
    this.shootStar = this.shootStar.bind(this);
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

    // setInterval(() => {
    //   this.shootStar();
    // });

    this.shootStar();
  }

  drawAllStars(ctx) {
    let shootingStarsNumber = this.shootingStars.length;
    ctx.clearRect(0, 0, this.state.canvasWidth, this.state.canvasHeight);
    for (let i = 0; i < shootingStarsNumber; i++) {
      this.drawShootingStar(ctx, i);
    }
    for (let i = 0; i < this.props.constellation; i++) {
      this.drawStar(ctx, i);
    }
  }

  drawShootingStar(ctx, i) {
    let shootingStar = this.shootingStars[i];
    ctx.beginPath();
    ctx.arc(
      shootingStar.x,
      shootingStar.y,
      shootingStar.size, //radius of the circle
      0,
      2 * Math.PI
    );
    ctx.fillStyle = `rgba(255, 255, 255, ${shootingStar.opacity})`;
    ctx.fill();

    let xPositionTo =
      shootingStar.x - shootingStar.length * Math.cos(shootingStar.angle);
    let yPositionTo =
      shootingStar.y - shootingStar.length * Math.sin(shootingStar.angle);

    ctx.moveTo(shootingStar.x, shootingStar.y);
    ctx.lineTo(xPositionTo, yPositionTo);

    ctx.strokeStyle = `rgba(255, 255, 255, ${shootingStar.opacity})`;
    ctx.stroke();
    // console.log("s", shootingStar);
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

  shootStar() {
    let shootingStar = this.shootingStars[0];
    let mult = 1;

    if (shootingStar.angle > Math.PI / 4) {
      mult = -1;
    }

    gsap.to(shootingStar, {
      duration: 4,
      ease: "sine.in",
      x:
        shootingStar.x -
        this.randomizeNumber(100, this.state.canvasWidth, false) *
          Math.cos(shootingStar.angle) *
          mult,
      y:
        shootingStar.y -
        this.randomizeNumber(100, this.state.canvasHeight, false) *
          Math.sin(shootingStar.angle) *
          mult,
      size: shootingStar.size,
      length: shootingStar.length + 10,
    });
    gsap.to(shootingStar, {
      duration: 1,
      delay: 4,
      size: shootingStar.size + 1,
      length: 0,
    });
    gsap.to(shootingStar, {
      duration: 1,
      delay: 5,
      opacity: 0,
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
