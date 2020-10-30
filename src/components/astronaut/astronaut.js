import React, { useEffect, useRef } from "react";
import Matter, { Common, MouseConstraint, Composites, Runner } from "matter-js";

import "./style.scss";

export default function Astronaut() {
  let ref = useRef(null);
  let Engine = Matter.Engine;
  let engine = Engine.create();
  let Bodies = Matter.Bodies;
  let Body = Matter.Body;
  let Constraint = Matter.Constraint;
  let Composite = Matter.Composite;
  // let Composites = Matter.Composites;

  let World = Matter.World;
  let Render = Matter.Render;
  let Mouse = Matter.Mouse;

  // let canvasWidth = (window.innerWidth * 2) / 3;
  let canvasWidth = window.innerWidth;

  let canvasHeight = 500;

  let x = 700;
  let y = 100;

  let scale = 1;

  useEffect(() => {
    initCanvas();
  });

  function initCanvas() {
    let canvas = ref.current;

    initPhysics(canvas);
    initAstronaut();
  }

  function initPhysics(canvas) {
    let render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        wireframes: false,
      },
    });
    Engine.run(engine);
    Render.run(render);
    engine.world.gravity.y = -0.003;
    engine.world.gravity.x = -0.001;

    // render.options.wireframeBackground = "transparent";

    initMouse(render);

    render.options.background = "transparent";
  }

  function initAstronaut() {
    let headOptions = Common.extend({
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

    let chestOptions = Common.extend({
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

    let leftArmOptions = Common.extend({
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

    let leftLowerArmOptions = Common.extend({}, leftArmOptions, {
      label: "left-arm-lower",
      render: {
        fillStyle: "#E59B12",
      },
    });

    let rightArmOptions = Common.extend({
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

    let rightLowerArmOptions = Common.extend({}, rightArmOptions, {
      label: "right-arm-lower",
      render: {
        fillStyle: "#E59B12",
      },
    });

    let leftLegOptions = Common.extend({
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

    let leftLowerLegOptions = Common.extend({}, leftLegOptions, {
      label: "left-leg-lower",
      render: {
        fillStyle: "#E59B12",
      },
    });

    let rightLegOptions = Common.extend({
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

    let rightLowerLegOptions = Common.extend({}, rightLegOptions, {
      label: "right-leg-lower",
      render: {
        fillStyle: "#E59B12",
      },
    });

    let head = Bodies.rectangle(
      x,
      y - 60 * scale,
      34 * scale,
      40 * scale,
      headOptions
    );
    let chest = Bodies.rectangle(x, y, 55 * scale, 80 * scale, chestOptions);
    let rightUpperArm = Bodies.rectangle(
      x + 39 * scale,
      y - 15 * scale,
      20 * scale,
      40 * scale,
      rightArmOptions
    );
    let rightLowerArm = Bodies.rectangle(
      x + 39 * scale,
      y + 25 * scale,
      20 * scale,
      60 * scale,
      rightLowerArmOptions
    );
    let leftUpperArm = Bodies.rectangle(
      x - 39 * scale,
      y - 15 * scale,
      20 * scale,
      40 * scale,
      leftArmOptions
    );
    let leftLowerArm = Bodies.rectangle(
      x - 39 * scale,
      y + 25 * scale,
      20 * scale,
      60 * scale,
      leftLowerArmOptions
    );
    let leftUpperLeg = Bodies.rectangle(
      x - 20 * scale,
      y + 57 * scale,
      20 * scale,
      40 * scale,
      leftLegOptions
    );
    let leftLowerLeg = Bodies.rectangle(
      x - 20 * scale,
      y + 97 * scale,
      20 * scale,
      60 * scale,
      leftLowerLegOptions
    );
    let rightUpperLeg = Bodies.rectangle(
      x + 20 * scale,
      y + 57 * scale,
      20 * scale,
      40 * scale,
      rightLegOptions
    );
    let rightLowerLeg = Bodies.rectangle(
      x + 20 * scale,
      y + 97 * scale,
      20 * scale,
      60 * scale,
      rightLowerLegOptions
    );

    let chestToRightUpperArm = Constraint.create({
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
      stiffness: 1,
    });

    let chestToLeftUpperArm = Constraint.create({
      bodyA: chest,
      bodyB: leftUpperArm,

      pointA: {
        x: -24 * scale,
        y: -23 * scale,
      },
      pointB: {
        x: 0,
        y: -8 * scale,
      },
      stiffness: 1,
    });

    let chestToLeftUpperLeg = Constraint.create({
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
      stiffness: 1,
    });

    let chestToRightUpperLeg = Constraint.create({
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
      stiffness: 1,
    });

    let upperToLowerRightArm = Constraint.create({
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
      stiffness: 1,
    });

    let upperToLowerLeftArm = Constraint.create({
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
      stiffness: 1,
    });

    let upperToLowerLeftLeg = Constraint.create({
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
      stiffness: 1,
    });

    let upperToLowerRightLeg = Constraint.create({
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
      stiffness: 1,
    });

    let headConstraint = Constraint.create({
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
      stiffness: 1,
      render: {
        visible: false,
      },
    });

    // let legToLeg = Constraint.create({
    //   bodyA: leftLowerLeg,
    //   bodyB: rightLowerLeg,
    //   stiffness: 0.02,
    // });

    let astronaut = Composite.create({
      bodies: [
        // chest,
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
        headConstraint,
        upperToLowerLeftLeg,
        upperToLowerRightLeg,
        chestToLeftUpperLeg,
        chestToRightUpperLeg,
        // legToLeg,
      ],
    });
    World.add(engine.world, [astronaut]);

    // console.log("c", upperToLowerLeftArm);
    console.log("c", chest);
    console.log("h", head);

    console.log("a", astronaut);

    let spaceshipOptions = Common.extend({
      label: "spaceship",
      isStatic: true,
      collisionFilter: {
        group: -2,
      },

      render: {
        fillStyle: "#FFFFFF",
      },
    });

    let spaceship = Bodies.rectangle(
      x - 200 * scale,
      y + 100 * scale,
      15 * scale,
      15 * scale,
      spaceshipOptions
    );

    // World.add(engine.world, [spaceship]);
    console.log("s", spaceship);

    // World.add(engine.world, [square]);

    var bridge = Composites.stack(60, 90, 5, 1, 0, 0, function (x, y) {
      return Bodies.rectangle(x - 20, y, 53, 5, {
        collisionFilter: {
          // group: Body.nextGroup(true),
          group: -2,
        },
        isStatic: false,

        chamfer: 5,
        density: 0.005,
        frictionAir: 0.6,
        render: {
          fillStyle: "#575375",
        },
      });
    });

    Composites.chain(bridge, 0.3, 0, -0.3, 0, {
      stiffness: 0.2,
      length: 2,
      render: {
        visible: true,
      },
    });
    console.log("br", bridge);

    World.add(engine.world, [
      bridge,
      chest,
      spaceship,

      Constraint.create({
        bodyA: spaceship,
        bodyB: bridge.bodies[0],
        pointB: { x: -25, y: 0 },
        length: 0,
        stiffness: 0.9,
      }),
      Constraint.create({
        bodyA: chest,
        bodyB: bridge.bodies[bridge.bodies.length - 1],
        pointB: { x: 25, y: 0 },
        length: 2,
        stiffness: 0,
      }),
    ]);
  }

  function initMouse(render) {
    let mouse = Mouse.create(render.canvas);
    // console.log("mouse", mouse);

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
