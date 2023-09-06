import { newRenderer } from "./renderer.js"
// import { Rectangle, newRectangle } from "./shapes/rectangle.js";
import {Shape} from './shapes/shape'
import { newRectangle } from "./shapes/rectangle.js";
import { newCircle } from "./shapes/circle.js";

// const rectangle: Rectangle = newRectangle(2, 3)
const rectangle: Shape = newRectangle(2, 3)
const circle: Shape = newCircle(3)

const renderer = newRenderer(circle)
renderer.draw();