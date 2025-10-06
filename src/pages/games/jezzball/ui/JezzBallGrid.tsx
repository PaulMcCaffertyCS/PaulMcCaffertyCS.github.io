import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import "./JezzBallGrid.css";
import type JezzBallGridProps from "../viewmodel/JezzBallGridProps";
import Size from "../../../../utils/javascript/Size";
import Logger from "../../../../utils/log/Logger";
import PatternCanvas from "../../../../utils/ui/PatternCanvas";
import WorkerActionType from "../../../../utils/workers/WorkerActionType";
import JezzBallViewModel from "../viewmodel/JezzBallViewModel";

const TAG = "JezzBallGrid";

const JezzBallGrid: FC<JezzBallGridProps> = () => {
    const initRef = useRef(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const patternCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const gameCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const workersRef = useRef<{
        renderer: Worker | null;
        leftTop: Worker | null;
        rightBottom: Worker | null;
    }>({
        renderer: null,
        leftTop: null,
        rightBottom: null
    });
    const jezzBallViewModel = new JezzBallViewModel(
        containerRef,
        patternCanvasRef,
        gameCanvasRef,
        workersRef
    );
    const GRID_SIZE = new Size(500, 275);

    useEffect(() => {
        if (initRef.current) return;
        initRef.current = true

        const patternCanvas = patternCanvasRef.current;
        if (!patternCanvas) {
            Logger.w(TAG, `PatternCanvas element not found`);
            return;
        }

        const gameCanvas = gameCanvasRef.current;
        if (!gameCanvas || !("OffscreenCanvas" in window)) {
            Logger.w(TAG, `OffscreenCanvas not supported or canvas element not found`);
            return;
        }

        gameCanvas.style.left = `${patternCanvas.getBoundingClientRect().left}px`;
        gameCanvas.style.top = `${patternCanvas.getBoundingClientRect().top}px`;

        const offscreenCanvas = gameCanvas.transferControlToOffscreen();

        const workerRenderer = new Worker(new URL(`../../../../workers/RendererWorker.ts`, import.meta.url), { type: "module" });
        workerRenderer.postMessage({
            type: WorkerActionType.INIT,
            canvas: offscreenCanvas,
            width: gameCanvas.width,
            height: gameCanvas.height
        }, [offscreenCanvas]);

        const workerLeftTop = new Worker(new URL(`../../../../workers/lines/LeftTopLineWorker.ts`, import.meta.url), { type: "module" });
        const workerRightBottom = new Worker(new URL(`../../../../workers/lines/RightBottomLineWorker.ts`, import.meta.url), { type: "module" });        
        workerLeftTop.onmessage = (event) => {
            if (event.data.type.value === WorkerActionType.DRAW_COMMAND.value) {
                workerRenderer.postMessage({
                    type: WorkerActionType.DRAW,
                    command: event.data.drawCommand
                });
            }
        }
        workerRightBottom.onmessage = (event) => {
            if (event.data.type.value === WorkerActionType.DRAW_COMMAND.value) {
                workerRenderer.postMessage({
                    type: WorkerActionType.DRAW,
                    command: event.data.drawCommand
                });
            }
        }

        workersRef.current = { renderer: workerRenderer, leftTop: workerLeftTop, rightBottom: workerRightBottom };
    }, []);

    return (
        <div className="jezzball-container"
            ref={containerRef}
            onContextMenu={jezzBallViewModel.handleContextMenu}
            onMouseOver={jezzBallViewModel.handleMouseOver}
            onMouseDown={jezzBallViewModel.handleMouseDown}
            onMouseUp={jezzBallViewModel.handleMouseUp}>

            <PatternCanvas ref={patternCanvasRef}
                width={GRID_SIZE.width}
                height={GRID_SIZE.height}
                patternItemWidth={15}
                patternItemHeight={12} />

            <canvas id="game-canvas"
                ref={gameCanvasRef}
                width={GRID_SIZE.width}
                height={GRID_SIZE.height}
                style={{
                    position: "absolute"
                }} />

        </div>
    );
}

export default JezzBallGrid;