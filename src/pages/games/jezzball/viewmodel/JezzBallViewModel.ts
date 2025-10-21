import type { MouseEvent, RefObject } from "react";
import Logger from "../../../../utils/log/Logger";
import Point from "../../../../utils/typescript/Point";
import WorkerActionType from "../../../../utils/workers/WorkerActionType";
import LineDirection from "../../../../workers/line/LineDirection";
import type { LineReceiverMessageEvent } from "../../../../workers/line/LineReceiverMessageEvent";
import WorkerDrawCommand from "../../../../utils/workers/WorkerDrawCommand";
import WorkerDrawCommandKind from "../../../../utils/workers/WorkerDrawCommandKind";
import Color from "../../../../utils/color/Color";
import Size from "../../../../utils/typescript/Size";
import { LINE_WIDTH } from "../helper/JezzBallHelper";
import { keepWithinRange } from "../../../../utils/typescript/MathUtils";

const TAG = "JezzBallViewModel";

class JezzBallViewModel {
    GRID_SIZE = new Size(500, 275);
    PATTERN_ITEM_SIZE = new Size(15, 12);

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
    private grid: number[][];

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
        this.grid = new Array(this.GRID_SIZE.width).fill(0).map(() => new Array(this.GRID_SIZE.height).fill(0));
        Logger.d(TAG, `grid.length=${this.grid.length}, grid[n].length=${this.grid[0].length}`);
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
                    this.workersRef.current.renderer!.postMessage({
                        type: WorkerActionType.DRAW,
                        command: new WorkerDrawCommand(
                            WorkerDrawCommandKind.LINE,
                            Color.BLACK,
                            event.data.startX,
                            event.data.startY,
                            event.data.endX,
                            event.data.endY
                        )
                    });
                    this.addWallSegment(true, event.data.startX, event.data.startY, event.data.endX, event.data.endY);
                    break;
                }
                default: break;
            }
        }

        this.workersRef.current.bottomRight.onmessage = (event: LineReceiverMessageEvent) => {
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
                    this.workersRef.current.renderer!.postMessage({
                        type: WorkerActionType.DRAW,
                        command: new WorkerDrawCommand(
                            WorkerDrawCommandKind.LINE,
                            Color.BLACK,
                            event.data.startX,
                            event.data.startY,
                            event.data.endX,
                            event.data.endY
                        )
                    });
                    this.addWallSegment(false, event.data.startX, event.data.startY, event.data.endX, event.data.endY);
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

    handleMouseOver = (_: MouseEvent) => {
        this.refreshCursor();
    }

    handleMouseUp = (event: MouseEvent) => {
        Logger.d(TAG, `Raw mouse click location: x=${event.clientX}, y=${event.clientY}`);
        if (event.button === 0 && (!this.isDrawingTopLeft || !this.isDrawingBottomRight)) {
            const canvas = this.gameCanvasRef.current;
            if (!canvas || !this.workersRef.current.topLeft || !this.workersRef.current.bottomRight) return;

            const rect = canvas.getBoundingClientRect();
            if (!rect) return;

            const clickPoint = new Point(Math.round(event.clientX - rect.left), Math.round(event.clientY - rect.top));
            if (this.isBlocked(clickPoint.x, clickPoint.y)) {
                Logger.d(TAG, `Blocked: x=${event.clientX}, y=${event.clientY}`);
                return;
            }

            const topLeftEndPoint = this.lineDirection.isVertical() ? new Point(clickPoint.x, 0) : new Point(0, clickPoint.y);
            const bottomRightEndPoint = this.lineDirection.isVertical() ? new Point(clickPoint.x, rect.height) : new Point(rect.width, clickPoint.y);

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

    private addWallSegment(isTopLeftLine: boolean, startX: number, startY: number, endX: number, endY: number) {
        Logger.d(TAG, `startX=${startX}, startY=${startY}, endX=${endX}, endY=${endY}`);

        const isVertical = startX == endX;
        if (isVertical) {
            const wallStartX = keepWithinRange(startX - Math.floor(LINE_WIDTH / 2), this.GRID_SIZE.width);
            const wallEndX = keepWithinRange(endX + Math.floor(LINE_WIDTH / 2), this.GRID_SIZE.width);
            if (isTopLeftLine) {
                for (let x = wallStartX; x <= wallEndX; x++) {
                    this.grid[x].fill(1, endY, startY);
                }
            } else {
                for (let x = wallStartX; x <= wallEndX; x++) {
                    this.grid[x].fill(1, startY, endY);
                }
            }
        } else {
            const wallStartY = keepWithinRange(startY - Math.floor(LINE_WIDTH / 2), this.GRID_SIZE.height);
            const wallEndY = keepWithinRange(endY + Math.floor(LINE_WIDTH / 2), this.GRID_SIZE.height);
            if (isTopLeftLine) {
                for (let x = endX; x <= startX; x++) {
                    this.grid[x].fill(1, wallStartY, wallEndY);
                }
            } else {
                for (let x = startX; x < endX; x++) {
                    this.grid[x].fill(1, wallStartY, wallEndY);
                }
            }
        }
    }

    private isBlocked(x: number, y: number): boolean {
        const isBlocked = this.grid[x][y] === 1;
        Logger.d(TAG, `isBlocked(grid[${x}][${y}])=${isBlocked}`)
        return isBlocked;
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