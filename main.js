import FragmentCanvas from "fragment-canvas";
import "./style.css";
import shader from "./sea.glsl";
// import shader from "./mango.glsl";

import { getEyeCoords } from "./perspective";

const canvas = document.getElementById("canvas-mar");

var gl = canvas.getContext("webgl", { premultipliedAlpha: false });

// Get the device pixel ratio, falling back to 1.
var dpr = window.devicePixelRatio || 1;
// Get the size of the canvas in CSS pixels.
var rect = canvas.getBoundingClientRect();
// Give the canvas pixel dimensions of their CSS
// size * the device pixel ratio.
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;

const options = {
  fragmentShader: shader,
  uniforms: {
    offset: (gl, location, time) => {
      const c = getEyeCoords();
      gl.uniform1f(location, c[0] / 150);
    },
  },
};

new FragmentCanvas(canvas, options);
