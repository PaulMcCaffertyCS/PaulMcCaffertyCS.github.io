class WorkerActionType {
    static #INIT = "init";
    static #DRAW = "draw";
    static #DRAW_COMMAND = "drawCommand";
    
    value: string;

    constructor(value: string) {
        this.value = value;
    }

    static INIT = new WorkerActionType(this.#INIT);
    static DRAW = new WorkerActionType(this.#DRAW);
    static DRAW_COMMAND = new WorkerActionType(this.#DRAW_COMMAND);
}

export default WorkerActionType;