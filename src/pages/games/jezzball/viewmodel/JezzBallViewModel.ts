import type { MouseEvent } from "react";
import Logger from "../../../../utils/log/Logger";

const TAG = "JezzBallViewModel";

function onSquareClicked(viewId: string, event: MouseEvent) {
    Logger.d(TAG, `Square with id=${viewId} was pressed. Location={ x: ${event.clientX}, y: ${event.clientY} }`);
}

export { onSquareClicked };