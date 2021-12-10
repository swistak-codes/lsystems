export const data = {
  island: {
    axiom: "F-F-F-F",
    productions: {
      F: "F-F+F+FF-F-F+F",
    },
    angle: 90,
    maxIterations: 8,
  },
  snowflake: {
    axiom: "F--F--F",
    productions: {
      F: "F+F--F+F",
    },
    angle: 60,
    maxIterations: 5,
  },
  dragon: {
    axiom: "FX",
    productions: {
      X: "X+YF+",
      Y: "-FX-Y",
    },
    angle: 90,
    maxIterations: 16,
  },
};
