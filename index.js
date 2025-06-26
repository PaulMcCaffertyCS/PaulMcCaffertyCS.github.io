// import Point from "utils/javascript/Point";

function boop() {
    alert("Boop!");
}

/**
 * @param {HTMLElement} element Element desired to move.
 * @param {Point} newLocation New location the element should go to.
 */
function moveElement(element, newLocation) {
    element.style.position = "absolute";
    element.style.left = `${newLocation.x}px`;
    element.style.top = `${newLocation.y}px`;
}

/**
 * @param {HTMLElement|null} element Element for width/height, else null to just get a random Point in the Window.
 * @returns {Point} A Point object containing the (x, y) location.
 */
function getRandomLocationOnScreen(element) {
    var maxX;
    var maxY;
    if (element == null) {
        maxX = window.innerWidth;
        maxY = window.innerHeight;
    } else {
        maxX = window.innerWidth - element.offsetWidth;
        maxY = window.innerHeight - element.offsetHeight;
    }
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    return new Point(randomX, randomY);
}

function moveButton() {
    const button = document.getElementById("booperton");
    const randomLocation = getRandomLocationOnScreen(button);
    moveElement(button, randomLocation);
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("booperton");
    button.addEventListener("mouseover", moveButton);
})