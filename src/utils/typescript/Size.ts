import type Point from "./Point";

export default class Size {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    static xyDistanceBetweenPoints(pointA: Point, pointB: Point): Size {
        return new Size(
            pointA.x - pointB.x,
            pointA.y - pointB.y
        )
    }
}