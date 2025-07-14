export default class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    distanceTo(other: Point): number {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    translate(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }

    copy(x: number = this.x, y: number = this.y): Point {
        return new Point(x, y);
    }
}