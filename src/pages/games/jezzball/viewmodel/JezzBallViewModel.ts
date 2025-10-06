import type { MouseEvent, RefObject } from "react";
import Logger from "../../../../utils/log/Logger";
import Point from "../../../../utils/javascript/Point";
import WorkerActionType from "../../../../utils/workers/WorkerActionType";
import LineDirection from "../../../../workers/lines/LineDirection";

const TAG = "JezzBallViewModel";

class JezzBallViewModel {
    private containerRef: RefObject<HTMLDivElement | null>;
    private patternCanvasRef: RefObject<HTMLCanvasElement | null>;
    private gameCanvasRef: RefObject<HTMLCanvasElement | null>;
    private workersRef: RefObject<{
        renderer: Worker | null;
        leftTop: Worker | null;
        rightBottom: Worker | null;
    }>;
    private lineDirection: LineDirection = LineDirection.VERTICAL;

    constructor(
        containerRef: RefObject<HTMLDivElement | null>, 
        patternCanvasRef: RefObject<HTMLCanvasElement | null>,
        gameCanvasRef: RefObject<HTMLCanvasElement | null>,
        workersRef: RefObject<{
            renderer: Worker | null;
            leftTop: Worker | null;
            rightBottom: Worker | null;
        }>
    ) {
        this.containerRef = containerRef;
        this.patternCanvasRef = patternCanvasRef;
        this.gameCanvasRef = gameCanvasRef;
        this.workersRef = workersRef;
    }

    handleContextMenu = (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
    }

    handleMouseOver = (event: MouseEvent) => {
        this.refreshCursor();
    }

    handleMouseUp = (event: MouseEvent) => {
        if (event.button === 0) {
            const canvas = this.gameCanvasRef.current;
            if (!canvas || !this.workersRef.current.leftTop || !this.workersRef.current.rightBottom) return;

            const rect = canvas.getBoundingClientRect();
            if (!rect) return;

            const clickPoint = new Point(event.clientX - rect.left, event.clientY - rect.top);
            const leftTopEndPoint = this.lineDirection.isVertical() ? new Point(clickPoint.x, 0) : new Point(0, clickPoint.y);
            const rightBottomEndPoint = this.lineDirection.isVertical() ? new Point(clickPoint.x, rect.height) : new Point(rect.width, clickPoint.y);

            this.workersRef.current.leftTop.postMessage({
                type: WorkerActionType.DRAW,
                direction: this.lineDirection,
                width: canvas.width,
                height: canvas.height,
                startX: clickPoint.x,
                startY: clickPoint.y,
                endX: leftTopEndPoint.x,
                endY: leftTopEndPoint.y
            });
            this.workersRef.current.rightBottom.postMessage({
                type: WorkerActionType.DRAW,
                direction: this.lineDirection,
                width: canvas.width,
                height: canvas.height,
                startX: clickPoint.x,
                startY: clickPoint.y,
                endX: rightBottomEndPoint.x,
                endY: rightBottomEndPoint.y
            });
        }
    }

    handleMouseDown = (event: MouseEvent) => {
        switch (event.button) {
            case 0:
                // Left click
                Logger.i(TAG, `Left click`);
                break;
            case 1:
                // Middle click
                Logger.i(TAG, `Middle click`);
                break;
            case 2:
                // Right click
                Logger.i(TAG, `Right click`);
                this.lineDirection.toggle();
                this.refreshCursor();
                break;
            default:
                break;
        }
    }

    private refreshCursor() {
        const jezzballContainer = this.containerRef.current;
        if (!jezzballContainer) {
            Logger.w(TAG, 'Jezzball container not found');
            return;
        }

        jezzballContainer.style.cursor = this.lineDirection.toCursorDirection();
    }
}

export default JezzBallViewModel;