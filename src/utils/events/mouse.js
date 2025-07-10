import Point from "../javascript/point";

/**
 * Definitions:
 * For all the locations, these are the meanings behind the different prefixes:
 * - Client: Indicates the X and Y coordinates of the mouse relative to the viewport (the visible part of the browser window).
 *           Top-left corner is denoted with coordinates (0, 0). These client values remain unchanged when the user scrolls.
 * - Page: Indicates the X and Y coordinates of the mouse relative to the HTML document itself. This means that scrolling
 *         increases the Y coordinate.
 * - Screen: Indicates the X and Y coordinates of the mouse relative to the screen (resolution). These values only will have
 *           overall adjustments if the screen resolution changes (1920x1080 -> 1280x720).
 * 
 * @property {Point} clientLocation Current pointer location of the mouse on-screen, relative to the viewport.
 * @property {Point} pageLocation Current pointer location of the mouse on-screen, relative to the page.
 * @property {Point} screenLocation Current pointer location of the mouse on-screen, relative to the screen.
 */
class Mouse {
    constructor() {
        this.clientLocation = new Point(0, 0);
        this.pageLocation = new Point(0, 0);
        this.screenLocation = new Point(0, 0);
    }

    /**
     * @param {Point} newClientLocation New mouse position in client coordinates.
     */
    setClientLocation(newClientLocation) {
        this.clientLocation = newClientLocation;
    }

    /**
     * @param {Point} newPageLocation New mouse position in page coordinates.
     */
    setPageLocation(newPageLocation) {
        this.pageLocation = newPageLocation;
    }

    /**
     * @param {Point} newScreenLocation New mouse position in screen coordinates.
     */
    setScreenLocation(newScreenLocation) {
        this.screenLocation = newScreenLocation;
    }

    /**
     * @param {Point} newClientLocation
     * @param {Point} newPageLocation 
     * @param {Point} newScreenLocation 
     */
    updateAllLocations(newClientLocation, newPageLocation, newScreenLocation) {
        this.setClientLocation(newClientLocation);
        this.setPageLocation(newPageLocation);
        this.setScreenLocation(newScreenLocation);
    }
}

const mouse = new Mouse();

document.addEventListener("mousemove", (event) => {
    mouse.updateAllLocations(
        new Point(event.clientX, event.clientY),
        new Point(event.pageX, event.pageY),
        new Point(event.screenX, event.screenY)
    );
})

export { mouse, Mouse };