import LSystem from "lindenmayer";
import { data } from "./data";

const canvas = document.getElementById("canvas");
const input = document.getElementById("iterations");
const display = document.getElementById("current");

const context = canvas.getContext("2d");

const params = new URLSearchParams(window.location.search);
const dataId = params.get("data") || "snowflake";

const lData = data[dataId];

function draw() {
  const iterations = input.valueAsNumber;
  context.restore();
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.save();
  context.translate(canvas.width / 4, canvas.height / 4);

  const l = new LSystem({
    axiom: lData.axiom,
    productions: lData.productions,
    finals: {
      "+": () => {
        context.rotate((Math.PI / 180) * lData.angle);
      },
      "-": () => {
        context.rotate((Math.PI / 180) * -lData.angle);
      },
      F: () => {
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(0, 40 / (l.iterations + 1));
        context.stroke();
        context.translate(0, 40 / (l.iterations + 1));
      },
    },
  });

  l.iterate(iterations);
  l.final();

  display.innerText = l.getString();
}

input.onchange = () => draw();
input.max = `${lData.maxIterations}`;

draw();
