// interface Rectangle {
//     width: number,
//     height: number,
//     computeArea: () => number
// }
import {Shape} from './shape'

function newRectangle(width: number, height: number): Shape {       
    return {
        computeArea: function (): number {
            return width * height
        },

        getName: function (): string {
            return "Rectangle"
        }
    }
}

export { newRectangle }
// export { newRectangle }     <-- can use this???


// interface Rectangle {
//     width: number,
//     height: number,
//     computeArea: () => number
// }

// function newRectangle(width: number, height: number): Rectangle {
//     return {
//         width,
//         height,

//         computeArea: function (): number {
//             return width * height
//         }
//     }
// }

// export { Rectangle, newRectangle }
