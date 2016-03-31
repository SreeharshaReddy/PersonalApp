module.export const sqrt = Math.sqrt;
    export function square(x) {
        return x * x;
    }
module.export function diag(x, y) {
        return sqrt(square(x) + square(y));
    }
