import Point from "../typescript/Point";

function updatePosition(element: HTMLElement, point: Point) {
    // element.style.position = "absolute";
    element.style.left = `${point.x}px`;
    element.style.top = `${point.y}px`;
}

export { updatePosition };