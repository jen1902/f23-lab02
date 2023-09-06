// import { newRectangle, Rectangle } from "./shapes/rectangle.js";
import {Shape} from './shapes/shape'

function newRenderer(shape: Shape) {
    return {
        draw() {
            const area: number = shape.computeArea()
            const name: string = shape.getName()
            console.log("Shape drawn:" + name + "\nIts area is " + area)
        }
    }
}

export { newRenderer }