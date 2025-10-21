import type WorkerActionType from "../../utils/workers/WorkerActionType"
import type WorkerDrawCommand from "../../utils/workers/WorkerDrawCommand"

interface LineReceiverMessageEvent extends MessageEvent {
    data: {
        type: WorkerActionType,
        drawCommand: WorkerDrawCommand,
        startX: number,
        startY: number,
        endX: number,
        endY: number
    }
}

export type { LineReceiverMessageEvent };