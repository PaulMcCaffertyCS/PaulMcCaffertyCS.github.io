function inverse(number: number): number {
    return -1 * number;
}

/**
 * If the provided value is above top or below bottom, then it will return the relative constraint.
 * 
 * @param {number} value Number to be constrained.
 * @param {number} top Upper constraint. Must be provided.
 * @param {number} bottom Lower constraint. Defaults to keeping it constrained to 0.
 */
function keepWithinRange(value: number, top: number, bottom: number = 0): number {
    if (value > top) return top;
    if (value < bottom) return bottom;
    return value;
}

export { inverse, keepWithinRange };