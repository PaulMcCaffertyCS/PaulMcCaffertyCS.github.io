function boop() {
    alert("Boop!");
}

function moveButton() {
    const button = document.getElementById("booperton");
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

/**
 * @param {HTMLElement} element Element desired to move.
 */
function randomLocation(element) {

}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("booperton");
    button.addEventListener("mouseover", moveButton);
})