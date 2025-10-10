import type { MouseEvent, RefObject } from "react";
import Logger from "../../../../utils/log/Logger";
import Point from "../../../../utils/typescript/Point";
import WorkerActionType from "../../../../utils/workers/WorkerActionType";
import LineDirection from "../../../../workers/lines/LineDirection";
import type { LineReceiverMessageEvent } from "../../../../workers/lines/LineReceiverMessageEvent";

const TAG = "JezzBallViewModel";

class JezzBallViewModel {
    private containerRef: RefObject<HTMLDivElement | null>;
    private patternCanvasRef: RefObject<HTMLCanvasElement | null>;
    private gameCanvasRef: RefObject<HTMLCanvasElement | null>;
    private workersRef: RefObject<{
        renderer: Worker | null;
        topLeft: Worker | null;
        bottomRight: Worker | null;
    }>;
    private lineDirection: LineDirection = LineDirection.VERTICAL;
    private isDrawingTopLeft: boolean = false;
    private isDrawingBottomRight: boolean = false;

    constructor(
        containerRef: RefObject<HTMLDivElement | null>, 
        patternCanvasRef: RefObject<HTMLCanvasElement | null>,
        gameCanvasRef: RefObject<HTMLCanvasElement | null>,
        workersRef: RefObject<{
            renderer: Worker | null;
            topLeft: Worker | null;
            bottomRight: Worker | null;
        }>
    ) {
        this.containerRef = containerRef;
        this.patternCanvasRef = patternCanvasRef;
        this.gameCanvasRef = gameCanvasRef;
        this.workersRef = workersRef;
    }

    init() {
        const gameCanvas = this.gameCanvasRef.current;
        if (!gameCanvas || !("OffscreenCanvas" in window)) {
            Logger.w(TAG, `OffscreenCanvas not supported or canvas element not found`);
            return;
        }

        const offscreenCanvas = gameCanvas.transferControlToOffscreen();

        if (!this.workersRef.current.renderer || !this.workersRef.current.topLeft || !this.workersRef.current.bottomRight) {
            Logger.w(TAG, `Failed to have an instantiated ref within workersRef`);
            return;
        }

        this.workersRef.current.renderer.postMessage({
            type: WorkerActionType.INIT,
            canvas: offscreenCanvas,
            width: gameCanvas.width,
            height: gameCanvas.height
        }, [offscreenCanvas]);

        this.workersRef.current.topLeft.onmessage = (event: LineReceiverMessageEvent) => {
            Logger.d(TAG, `Paul: event.data=${event.data}`);
            switch (event.data.type.value) {
                case WorkerActionType.DRAW_COMMAND.value: {
                    this.workersRef.current.renderer!.postMessage({
                        type: WorkerActionType.DRAW,
                        command: event.data.drawCommand
                    });
                    break;
                }
                case WorkerActionType.COMPLETE.value: {
                    this.isDrawingTopLeft = false;
                    break;
                }
                default: break;
            }
        }

        this.workersRef.current.bottomRight.onmessage = (event: LineReceiverMessageEvent) => {
            Logger.d(TAG, `Paul: event.data=${event.data}`);
            switch (event.data.type.value) {
                case WorkerActionType.DRAW_COMMAND.value: {
                    this.workersRef.current.renderer!.postMessage({
                        type: WorkerActionType.DRAW,
                        command: event.data.drawCommand
                    });
                    break;
                }
                case WorkerActionType.COMPLETE.value: {
                    this.isDrawingBottomRight = false;
                    break;
                }
                default: break;
            }
        }
    }

    handleContextMenu = (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
    }

    handleMouseOver = (event: MouseEvent) => {
        this.refreshCursor();
    }

    handleMouseUp = (event: MouseEvent) => {
        Logger.d(TAG, `isDrawingTopLeft=${this.isDrawingTopLeft}, isDrawingBottomRight=${this.isDrawingBottomRight}`);
        if (event.button === 0 && (!this.isDrawingTopLeft || !this.isDrawingBottomRight)) {
            const canvas = this.gameCanvasRef.current;
            if (!canvas || !this.workersRef.current.topLeft || !this.workersRef.current.bottomRight) return;

            const rect = canvas.getBoundingClientRect();
            if (!rect) return;

            const clickPoint = new Point(event.clientX - rect.left, event.clientY - rect.top);
            const topLeftEndPoint = this.lineDirection.isVertical() ? new Point(clickPoint.x, 0) : new Point(0, clickPoint.y);
            const bottomRightEndPoint = this.lineDirection.isVertical() ? new Point(clickPoint.x, rect.height) : new Point(rect.width, clickPoint.y);

            Logger.d(TAG, `isDrawingTopLeft=${this.isDrawingTopLeft}, isDrawingBottomRight=${this.isDrawingBottomRight}`);
            if (!this.isDrawingTopLeft) {
                this.isDrawingTopLeft = true;
                this.workersRef.current.topLeft.postMessage({
                    type: WorkerActionType.DRAW,
                    direction: this.lineDirection,
                    width: canvas.width,
                    height: canvas.height,
                    startX: clickPoint.x,
                    startY: clickPoint.y,
                    endX: topLeftEndPoint.x,
                    endY: topLeftEndPoint.y
                });
            }

            if (!this.isDrawingBottomRight) {
                this.isDrawingBottomRight = true;
                this.workersRef.current.bottomRight.postMessage({
                    type: WorkerActionType.DRAW,
                    direction: this.lineDirection,
                    width: canvas.width,
                    height: canvas.height,
                    startX: clickPoint.x,
                    startY: clickPoint.y,
                    endX: bottomRightEndPoint.x,
                    endY: bottomRightEndPoint.y
                });
            }
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