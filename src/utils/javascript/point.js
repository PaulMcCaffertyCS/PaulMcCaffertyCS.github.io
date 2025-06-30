/**
 * @property {number} x X-axis based value.
 * @property {number} y Y-axis based value.
 */
class Point {
    /**
     * @param {number} x X value.
     * @param {number} y Y value.
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * @param {Point} other A different Point to get the distance to.
     * @returns {number} Distance from this Point to other Point.
     */
    distanceTo(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    /**
     * @param {number} dx Translate x by.
     * @param {number} dy Translate y by.
     */
    translate(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}

export default Point;