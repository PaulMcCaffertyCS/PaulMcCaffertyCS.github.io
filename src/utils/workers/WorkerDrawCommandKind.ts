class WorkerDrawCommandKind {
    static #LINE = "line";

    value: string;

    constructor(value: string) {
        this.value = value;
    }

    static LINE = new WorkerDrawCommandKind(this.#LINE);
}

export default WorkerDrawCommandKind;