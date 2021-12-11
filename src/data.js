export const data = {
  island: {
    axiom: "F-F-F-F",
    productions: {
      F: "F-F+F+FF-F-F+F",
    },
    angle: 90,
    maxIterations: 7,
    redraw: false,
    start: [6, 6],
  },
  snowflake: {
    axiom: "F--F--F",
    productions: {
      F: "F+F--F+F",
    },
    angle: 60,
    maxIterations: 5,
    redraw: false,
    start: [4, 18],
  },
  dragon: {
    axiom: "FX",
    productions: {
      X: "X+YF+",
      Y: "-FX-Y",
    },
    angle: 90,
    maxIterations: 16,
    redraw: false,
    start: [6, 6],
  },
  plant1: {
    axiom: "F",
    productions: {
      F: "F[+F]F[-F]F",
    },
    angle: 25.7,
    maxIterations: 7,
    redraw: false,
    start: [2, 100],
  },
  plant2: {
    axiom: "F",
    productions: {
      F: "F[+F]F[-F][F]",
    },
    angle: 20,
    maxIterations: 7,
    redraw: false,
    start: [2, 100],
  },
  plant3: {
    axiom: "F",
    productions: {
      F: "FF-[-F+F+F]+[+F-F-F]",
    },
    angle: 22.5,
    maxIterations: 7,
    redraw: false,
    start: [2, 100],
  },
  plant4: {
    axiom: "X",
    productions: {
      X: "F[+X]F[-X]+X",
      F: "FF",
    },
    angle: 20,
    maxIterations: 7,
    redraw: false,
    start: [2, 100],
  },
  plant5: {
    axiom: "X",
    productions: {
      X: "F[+X][-X]FX",
      F: "FF",
    },
    angle: 25.7,
    maxIterations: 7,
    redraw: false,
    start: [2, 100],
  },
  plant6: {
    axiom: "X",
    productions: {
      X: "F-[[X]+X]+F[+FX]-X",
      F: "FF",
    },
    angle: 22.5,
    maxIterations: 7,
    redraw: false,
    start: [2, 100],
  },
  stochastic1: {
    axiom: "F",
    productions: {
      F: {
        successors: [
          { weight: 33, successor: "F[+F]F[-F]F" },
          { weight: 33, successor: "F[+F]F" },
          { weight: 34, successor: "F[-F]F" },
        ],
      },
    },
    angle: 25.7,
    maxIterations: 7,
    redraw: true,
    start: [2, 100],
  },
  stochastic2: {
    axiom: "X",
    productions: {
      X: {
        successors: [
          { weight: 70, successor: "FF-[[X]+X]+F[+FX]-X" },
          { weight: 30, successor: "FF-[X+]+FF[-FX]-XF" },
        ],
      },
      F: {
        successors: [
          { weight: 75, successor: "F" },
          { weight: 15, successor: "FF" },
          { weight: 10, successor: "FF+" },
        ],
      },
    },
    angle: 22.5,
    maxIterations: 7,
    redraw: true,
    start: [2, 3],
  },
};
