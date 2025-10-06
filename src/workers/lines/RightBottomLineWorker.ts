import Color from "../../utils/color/Color";
import Logger from "../../utils/log/Logger";
import WorkerActionType from "../../utils/workers/WorkerActionType";
import WorkerDrawCommand from "../../utils/workers/WorkerDrawCommand";
import WorkerDrawCommandKind from "../../utils/workers/WorkerDrawCommandKind";
import LineDirection from "./LineDirection";
import type { LineMessageEvent } from "./LineMessageEvent";

const TAG = "RightBottomLineWorker";

self.onmessage = (event: LineMessageEvent) => {
    const { type, direction, width, height, startX, startY, endX, endY } = event.data;
    const lineDirection = new LineDirection(direction.value);

    if (type.value === WorkerActionType.DRAW.value) {
        let currentY = startY;
        let currentX = startX;
    
        const drawLine = () => {
            if (lineDirection.isVertical()) {
                if (currentY <= endY) {
                    Logger.d(TAG, `Draw RightBottom, currentY=${currentY}`);
                    postMessage({
                        type: WorkerActionType.DRAW_COMMAND,
                        drawCommand: new WorkerDrawCommand(WorkerDrawCommandKind.LINE, Color.BLUE, startX, startY, endX, currentY)
                    });

                    currentY++;
                    requestAnimationFrame(drawLine);
                }
            } else {
                if (currentX <= endX) {
                    Logger.d(TAG, `Draw RightBottom, currentX=${currentX}`);
                    postMessage({
                        type: WorkerActionType.DRAW_COMMAND,
                        drawCommand: new WorkerDrawCommand(WorkerDrawCommandKind.LINE, Color.BLUE, startX, startY, currentX, endY)
                    });

                    currentX++;
                    requestAnimationFrame(drawLine);
                }
            }
        };

        requestAnimationFrame(drawLine);
    }
}