import {Shape} from './shape'

function newCircle(radius: number): Shape {
    return {
        computeArea: function (): number {
            return Math.PI * radius * radius
        },

        getName: function (): string {
            return "Circle"
        }
    }
}

export { newCircle }
