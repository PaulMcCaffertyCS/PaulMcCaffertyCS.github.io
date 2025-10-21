class LineDirection {
    #VERTICAL = "vertical";
    #HORIZONTAL = "horizontal";
    static #VERTICAL_DIRECTION = "vertical";
    static #HORIZONTAL_DIRECTION = "horizontal";
    #CURSOR_VERTICAL = "ns-resize";
    #CURSOR_HORIZONTAL = "ew-resize";

    value: string;

    constructor(value: string) {
        this.value = value;
    }

    static VERTICAL = new LineDirection(this.#VERTICAL_DIRECTION);
    static HORIZONTAL = new LineDirection(this.#HORIZONTAL_DIRECTION);

    toggle(): void {
        this.value = this.isVertical() ? this.#HORIZONTAL : this.#VERTICAL;
    }

    toCursorDirection(): string {
        return this.isVertical() ? this.#CURSOR_VERTICAL : this.#CURSOR_HORIZONTAL
    }

    isVertical(): boolean {
        return this.value === this.#VERTICAL;
    }

    isHorizontal(): boolean {
        return this.value === this.#HORIZONTAL;
    }
}

export default LineDirection;