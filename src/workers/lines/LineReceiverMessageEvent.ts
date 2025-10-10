import type WorkerActionType from "../../utils/workers/WorkerActionType"
import type WorkerDrawCommand from "../../utils/workers/WorkerDrawCommand"

interface LineReceiverMessageEvent extends MessageEvent {
    data: {
        type: WorkerActionType,
        drawCommand: WorkerDrawCommand
    }
}

export type { LineReceiverMessageEvent };