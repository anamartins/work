import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

import "./style.scss";

export default function Astronaut() {
  let ref = useRef(null);
  let Engine = Matter.Engine;
  let engine = Engine.create({});
  let Bodies = Matter.Bodies;
  let World = Matter.World;
  let Render = Matter.Render;
  let Mouse = Matter.Mouse;
  console.log("m", World);

  let canvasWidth = 100;
  let canvasHeight = 100;

  useEffect(() => {
    initCanvas();
  });

  function initCanvas() {
    let canvas = ref.current;
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(100, 100, canvasWidth, canvasHeight);

    initPhysics(canvas, ctx);
    drawAstronaut(ctx);

    //     setInterval(() => {
    //       drawAstronaut(ctx);
    //     }, 1000 / 30);
  }

  function initPhysics(canvas) {
    let render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        wireframes: true,
      },
    });
    Engine.run(engine);
    Render.run(render);
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;

    console.log("engine.world", engine.world);

    render.options.wireframeBackground = "transparent";
    render.options.background = "transparent";

    // let mouse = Mouse.create(render.canvas),
    //   mouseConstraint = MouseConstraint.create(engine, {
    //     mouse: mouse,
    //     constraint: {
    //       stiffness: 0.2,
    //       render: {
    //         visible: false,
    //       },
    //     },
    //   });
  }

  function drawAstronaut(ctx) {
    let head = Bodies.circle(canvasWidth / 2, 20, 10);
    let body = Bodies.rectangle(canvasWidth / 2, 40, 25, 40);
    let lArm = Bodies.rectangle(30, canvasHeight / 2 - 10, 20, 10);
    let rArm = Bodies.rectangle(60, canvasHeight / 2 - 10, 20, 10);
    let lLeg = Bodies.rectangle(35, canvasHeight / 2 + 20, 10, 20);
    let rLeg = Bodies.rectangle(55, canvasHeight / 2 + 20, 10, 20);

    World.add(engine.world, [head, body, lArm, rArm, lLeg, rLeg]);
  }

  return (
    <canvas
      id="astronautCanvas"
      className="astronaut"
      width="100px"
      height="100px"
      ref={ref}
    ></canvas>
  );
}
