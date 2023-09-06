import {Shape} from './shape'

function newSquare(sideLen: number): Shape {
    return {
        computeArea: function (): number {
            return sideLen * sideLen
        },

        getName: function (): string {
            return "Square"
        }
    }
}

export { newSquare }