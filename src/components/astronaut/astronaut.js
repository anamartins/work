import React, { useEffect, useRef } from "react";
import Matter, { Common, MouseConstraint } from "matter-js";

import "./style.scss";

export default function Astronaut() {
  let ref = useRef(null);
  let Engine = Matter.Engine;
  let engine = Engine.create();
  let Bodies = Matter.Bodies;
  let Body = Matter.Body;
  let Constraint = Matter.Constraint;
  let Composite = Matter.Composite;
  let Composites = Matter.Composites;

  let World = Matter.World;
  let Render = Matter.Render;
  let Mouse = Matter.Mouse;

  let canvasWidth = window.innerWidth;
  let canvasHeight = 250;

  let x = 800;
  let y = 100;

  let scale = 1;

  useEffect(() => {
    initCanvas();
  });

  function initCanvas() {
    let canvas = ref.current;

    initPhysics(canvas);
    initAstronaut();

    // setInterval(() => {
    //   drawAstronaut(ctx);
    // }, 1000 / 30);
  }

  function initPhysics(canvas) {
    let render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        // wireframes: true,
      },
    });
    Engine.run(engine);
    Render.run(render);
    engine.world.gravity.y = 0;

    render.options.wireframeBackground = "transparent";

    initMouse(render);

    // render.options.background = "transparent";
  }

  function initAstronaut() {
    var headOptions = Common.extend({
      label: "head",
      collisionFilter: {
        group: Body.nextGroup(true),
      },
      chamfer: {
        radius: [15 * scale, 15 * scale, 15 * scale, 15 * scale],
      },
      render: {
        fillStyle: "#FFBC42",
      },
    });

    var chestOptions = Common.extend({
      label: "chest",
      collisionFilter: {
        group: Body.nextGroup(true),
      },
      chamfer: {
        radius: [20 * scale, 20 * scale, 26 * scale, 26 * scale],
      },
      render: {
        fillStyle: "#E0A423",
      },
    });

    var leftArmOptions = Common.extend({
      label: "left-arm",
      collisionFilter: {
        group: Body.nextGroup(true),
      },
      chamfer: {
        radius: 10 * scale,
      },
      render: {
        fillStyle: "#FFBC42",
      },
    });

    var leftLowerArmOptions = Common.extend({}, leftArmOptions, {
      label: "left-arm-lower",
      render: {
        fillStyle: "#E59B12",
      },
    });

    var rightArmOptions = Common.extend({
      label: "right-arm",
      collisionFilter: {
        group: Body.nextGroup(true),
      },
      chamfer: {
        radius: 10 * scale,
      },
      render: {
        fillStyle: "#FFBC42",
      },
    });

    var rightLowerArmOptions = Common.extend({}, rightArmOptions, {
      label: "right-arm-lower",
      render: {
        fillStyle: "#E59B12",
      },
    });

    var leftLegOptions = Common.extend({
      label: "left-leg",
      collisionFilter: {
        group: Body.nextGroup(true),
      },
      chamfer: {
        radius: 10 * scale,
      },
      render: {
        fillStyle: "#FFBC42",
      },
    });

    var leftLowerLegOptions = Common.extend({}, leftLegOptions, {
      label: "left-leg-lower",
      render: {
        fillStyle: "#E59B12",
      },
    });

    var rightLegOptions = Common.extend({
      label: "right-leg",
      collisionFilter: {
        group: Body.nextGroup(true),
      },
      chamfer: {
        radius: 10 * scale,
      },
      render: {
        fillStyle: "#FFBC42",
      },
    });

    var rightLowerLegOptions = Common.extend({}, rightLegOptions, {
      label: "right-leg-lower",
      render: {
        fillStyle: "#E59B12",
      },
    });

    var head = Bodies.rectangle(
      x,
      y - 60 * scale,
      34 * scale,
      40 * scale,
      headOptions
    );
    var chest = Bodies.rectangle(x, y, 55 * scale, 80 * scale, chestOptions);
    var rightUpperArm = Bodies.rectangle(
      x + 39 * scale,
      y - 15 * scale,
      20 * scale,
      40 * scale,
      rightArmOptions
    );
    var rightLowerArm = Bodies.rectangle(
      x + 39 * scale,
      y + 25 * scale,
      20 * scale,
      60 * scale,
      rightLowerArmOptions
    );
    var leftUpperArm = Bodies.rectangle(
      x - 39 * scale,
      y - 15 * scale,
      20 * scale,
      40 * scale,
      leftArmOptions
    );
    var leftLowerArm = Bodies.rectangle(
      x - 39 * scale,
      y + 25 * scale,
      20 * scale,
      60 * scale,
      leftLowerArmOptions
    );
    var leftUpperLeg = Bodies.rectangle(
      x - 20 * scale,
      y + 57 * scale,
      20 * scale,
      40 * scale,
      leftLegOptions
    );
    var leftLowerLeg = Bodies.rectangle(
      x - 20 * scale,
      y + 97 * scale,
      20 * scale,
      60 * scale,
      leftLowerLegOptions
    );
    var rightUpperLeg = Bodies.rectangle(
      x + 20 * scale,
      y + 57 * scale,
      20 * scale,
      40 * scale,
      rightLegOptions
    );
    var rightLowerLeg = Bodies.rectangle(
      x + 20 * scale,
      y + 97 * scale,
      20 * scale,
      60 * scale,
      rightLowerLegOptions
    );

    var chestToRightUpperArm = Constraint.create({
      bodyA: chest,
      pointA: {
        x: 24 * scale,
        y: -23 * scale,
      },
      pointB: {
        x: 0,
        y: -8 * scale,
      },
      bodyB: rightUpperArm,
      stiffness: 0.6,
    });

    var chestToLeftUpperArm = Constraint.create({
      bodyA: chest,
      pointA: {
        x: -24 * scale,
        y: -23 * scale,
      },
      pointB: {
        x: 0,
        y: -8 * scale,
      },
      bodyB: leftUpperArm,
      stiffness: 0.6,
    });

    var chestToLeftUpperLeg = Constraint.create({
      bodyA: chest,
      pointA: {
        x: -10 * scale,
        y: 30 * scale,
      },
      pointB: {
        x: 0,
        y: -10 * scale,
      },
      bodyB: leftUpperLeg,
      stiffness: 0.6,
    });

    var chestToRightUpperLeg = Constraint.create({
      bodyA: chest,
      pointA: {
        x: 10 * scale,
        y: 30 * scale,
      },
      pointB: {
        x: 0,
        y: -10 * scale,
      },
      bodyB: rightUpperLeg,
      stiffness: 0.6,
    });

    var upperToLowerRightArm = Constraint.create({
      bodyA: rightUpperArm,
      bodyB: rightLowerArm,
      pointA: {
        x: 0,
        y: 15 * scale,
      },
      pointB: {
        x: 0,
        y: -25 * scale,
      },
      stiffness: 0.6,
    });

    var upperToLowerLeftArm = Constraint.create({
      bodyA: leftUpperArm,
      bodyB: leftLowerArm,
      pointA: {
        x: 0,
        y: 15 * scale,
      },
      pointB: {
        x: 0,
        y: -25 * scale,
      },
      stiffness: 0.6,
    });

    var upperToLowerLeftLeg = Constraint.create({
      bodyA: leftUpperLeg,
      bodyB: leftLowerLeg,
      pointA: {
        x: 0,
        y: 20 * scale,
      },
      pointB: {
        x: 0,
        y: -20 * scale,
      },
      stiffness: 0.6,
    });

    var upperToLowerRightLeg = Constraint.create({
      bodyA: rightUpperLeg,
      bodyB: rightLowerLeg,
      pointA: {
        x: 0,
        y: 20 * scale,
      },
      pointB: {
        x: 0,
        y: -20 * scale,
      },
      stiffness: 0.6,
    });

    var headContraint = Constraint.create({
      bodyA: head,
      pointA: {
        x: 0,
        y: 25 * scale,
      },
      pointB: {
        x: 0,
        y: -35 * scale,
      },
      bodyB: chest,
      stiffness: 0.6,
    });

    var legToLeg = Constraint.create({
      bodyA: leftLowerLeg,
      bodyB: rightLowerLeg,
      stiffness: 0.01,
    });

    var person = Composite.create({
      bodies: [
        chest,
        head,
        leftLowerArm,
        leftUpperArm,
        rightLowerArm,
        rightUpperArm,
        leftLowerLeg,
        rightLowerLeg,
        leftUpperLeg,
        rightUpperLeg,
      ],
      constraints: [
        upperToLowerLeftArm,
        upperToLowerRightArm,
        chestToLeftUpperArm,
        chestToRightUpperArm,
        headContraint,
        upperToLowerLeftLeg,
        upperToLowerRightLeg,
        chestToLeftUpperLeg,
        chestToRightUpperLeg,
      ],
    });

    World.add(engine.world, [person]);
  }

  function initMouse(render) {
    let mouse = Mouse.create(render.canvas);
    console.log("mouse", mouse);

    let mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.6,
        length: 0,
        angularStiffness: 0,
        render: {
          visible: false,
        },
      },
    });

    World.add(engine.world, mouseConstraint);
  }

  return <canvas id="astronautCanvas" className="astronaut" ref={ref}></canvas>;
}
