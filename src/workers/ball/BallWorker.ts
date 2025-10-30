import Logger from "../../utils/log/Logger";
import WorkerActionType from "../../utils/workers/WorkerActionType";
import type { BallMessageEvent } from "./BallMessageEvent";

const TAG = "BallWorker";

self.onmessage = (event: BallMessageEvent) => {
    const { type, ballState } = event.data;

    if (type.value == WorkerActionType.START.value) {
        const moveBall = () => {
            Logger.d(TAG, `ballState=${ballState}`)
            // const nextX = ballState.x + ballState.dx;
            // const nextY = ballState.y + ballState.dy;
        }

        requestAnimationFrame(moveBall);
    }
}