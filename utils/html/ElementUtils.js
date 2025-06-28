import Point from "../javascript/Point.js";

/**
 * @param {HTMLElement} element Element to update position of.
 * @param {Point} newPosition Point object of the new position for the element.
 */
function updatePosition(element, newPosition) {
    element.style.left = `${newPosition.x}px`;
    element.style.top = `${newPosition.y}px`;
}

export { updatePosition };