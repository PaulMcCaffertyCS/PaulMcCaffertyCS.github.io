import type WorkerActionType from "../utils/workers/WorkerActionType";
import type WorkerDrawCommand from "../utils/workers/WorkerDrawCommand";

interface RenderMessageEvent extends MessageEvent {
    data: {
        type: WorkerActionType,
        canvas: OffscreenCanvas,
        width: number,
        height: number,
        command: WorkerDrawCommand
    };
}

export type { RenderMessageEvent };