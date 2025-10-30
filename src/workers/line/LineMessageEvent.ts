import type WorkerActionType from "../../utils/workers/WorkerActionType"
import type LineDirection from "./LineDirection";

interface LineMessageEvent extends MessageEvent {
    data: {
        type: WorkerActionType,
        direction: LineDirection,
        startX: number,
        startY: number,
        endX: number,
        endY: number
    }
}

export type { LineMessageEvent };