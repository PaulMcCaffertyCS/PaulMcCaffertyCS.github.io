import type WorkerActionType from "../../utils/workers/WorkerActionType"
import type { BallState } from "./BallState"

interface BallMessageEvent extends MessageEvent {
    data: {
        type: WorkerActionType,
        ballState: BallState
    }
}

export type { BallMessageEvent };