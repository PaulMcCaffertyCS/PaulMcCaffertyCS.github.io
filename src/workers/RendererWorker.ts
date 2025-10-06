import Logger from "../utils/log/Logger";
import WorkerActionType from "../utils/workers/WorkerActionType";
import type WorkerDrawCommand from "../utils/workers/WorkerDrawCommand";
import WorkerDrawCommandKind from "../utils/workers/WorkerDrawCommandKind";

interface RenderMessageEvent extends MessageEvent {
    data: {
        type: WorkerActionType,
        canvas: OffscreenCanvas,
        width: number,
        height: number,
        command: WorkerDrawCommand
    };
}

const TAG = "RendererWorker";

let context: OffscreenCanvasRenderingContext2D | null = null;

self.onmessage = (event: RenderMessageEvent) => {
    const { type, canvas, width, height, command } = event.data;

    if (type.value === WorkerActionType.INIT.value) {
        context = canvas.getContext("2d");
        if (!context) {
            throw new Error(`Failed to get 2D context from OffscreenCanvas`);
        }
        context.clearRect(0, 0, width, height);
        return;
    }

    if (type.value === WorkerActionType.DRAW.value) {
        if (command?.kind.value === WorkerDrawCommandKind.LINE.value) {
            if (!context) {
                context = canvas.getContext("2d");
            }
            const ctxt = context as OffscreenCanvasRenderingContext2D;
            ctxt.strokeStyle = command.color;
            ctxt.lineWidth = 2;
            ctxt.beginPath();
            ctxt.moveTo(command.startX, command.startY);
            ctxt.lineTo(command.endX, command.endY);
            ctxt.stroke();
        }
    }
};