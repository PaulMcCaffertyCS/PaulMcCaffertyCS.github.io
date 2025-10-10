class WorkerActionType {
    static #INIT = "init";
    static #DRAW = "draw";
    static #DRAW_COMMAND = "drawCommand";
    static #COMPLETE = "complete";
    
    value: string;

    constructor(value: string) {
        this.value = value;
    }

    static INIT = new WorkerActionType(this.#INIT);
    static DRAW = new WorkerActionType(this.#DRAW);
    static DRAW_COMMAND = new WorkerActionType(this.#DRAW_COMMAND);
    static COMPLETE = new WorkerActionType(this.#COMPLETE);
}

export default WorkerActionType;