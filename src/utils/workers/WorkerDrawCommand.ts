import type WorkerDrawCommandKind from "./WorkerDrawCommandKind";

class WorkerDrawCommand {
    kind: WorkerDrawCommandKind;
    color: string;
    startX: number;
    startY: number;
    endX: number;
    endY: number;

    constructor(kind: WorkerDrawCommandKind, color: string, startX: number, startY: number, endX: number, endY: number) {
        this.kind = kind;
        this.color = color;
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
    }
}

export default WorkerDrawCommand;