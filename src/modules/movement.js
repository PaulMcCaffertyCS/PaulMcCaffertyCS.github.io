import { updatePosition } from "../utils/html/element-utils.js";
import Point from "../utils/javascript/point.js";

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

/**
 * @param {HTMLElement} element Element to move.
 */
function randomElementLocation(element) {
    const randomLocation = getRandomLocationOnScreen(element);
    updatePosition(button, randomLocation);
}

/**
 * @param {MouseEvent} event Evnet for mouse movement - "mouseover" event.
 * @param {HTMLElement} element Element to chase.
 */
function chaseElement(event, element) {
    const mouseLocation = new Point(event.clientX, event.clientY);
    const elementRect = element.getBoundingClientRect();
    const elementLocation = new Point(
        elementRect.left + (elementRect.width / 2),
        elementRect.top + (elementRect.height / 2)
    );
    
    const distanceX = elementLocation.x - mouseLocation.x;
    const distanceY = elementLocation.y - mouseLocation.y;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const closestDistanceAllowed = 400;

    if (distance < closestDistanceAllowed) {
        const scale = 30;
        const moveLocation = new Point(
            (distanceX / distance) * scale,
            (distanceY / distance) * scale
        );

        const maxX = window.innerWidth - element.offsetWidth;
        const maxY = window.innerHeight - element.offsetHeight;
        const newLeft = Math.min(
            Math.max(0, element.offsetLeft + moveLocation.x),
            maxX
        );
        const newTop = Math.min(
            Math.max(0, element.offsetTop + moveLocation.y),
            maxY
        );

        updatePosition(element, new Point(newLeft, newTop));
    }
}

/**
 * @param {MouseEvent} event Evnet for mouse movement - "mousemove" event.
 * @param {HTMLElement} element Element to chase.
 */
function chaseElementWindow(event, element) {
    const mouseLocation = new Point(event.clientX, event.clientY);
    const elementRect = element.getBoundingClientRect();
    const elementLocation = new Point(
        elementRect.left + (elementRect.width / 2),
        elementRect.top + (elementRect.height / 2)
    );
    
    const distanceX = elementLocation.x - mouseLocation.x;
    const distanceY = elementLocation.y - mouseLocation.y;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const closestDistanceAllowed = 150;

    if (distance < closestDistanceAllowed) {
        const scale = 200;
        const moveLocation = new Point(
            (distanceX / distance) * scale,
            (distanceY / distance) * scale
        );

        const maxX = window.innerWidth - element.offsetWidth;
        const maxY = window.innerHeight - element.offsetHeight;
        const newLeft = Math.min(
            Math.max(0, element.offsetLeft + moveLocation.x),
            maxX
        );
        const newTop = Math.min(
            Math.max(0, element.offsetTop + moveLocation.y),
            maxY
        );

        updatePosition(element, new Point(newLeft, newTop));
    }
}

document.addEventListener("DOMContentLoaded", () => {
<<<<<<< Updated upstream
    const button = document.getElementById("booperton");
    // button.addEventListener("mouseover", () => { randomElementLocation(button) });
    // button.addEventListener("mouseover", (event) => { chaseElement(event, button) });
    
    // document.addEventListener("mousemove", (event) => { chaseElementWindow(event, button) });
=======
    const pageLink = window.location.href;
    if (pageLink.endsWith("games.html")) {
        const button = document.getElementById("boop");
        // button.addEventListener("mouseover", () => { randomElementLocation(button) });
        // button.addEventListener("mouseover", (event) => { chaseElement(event, button) });
        
        document.addEventListener("mousemove", (event) => { chaseElementWindow(event, button) });
    }
>>>>>>> Stashed changes
})