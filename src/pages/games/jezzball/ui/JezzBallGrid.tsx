import type { FC } from "react";
import { useEffect, useRef } from "react";
import "./JezzBallGrid.css";
import type JezzBallGridProps from "../viewmodel/JezzBallGridProps";
import Size from "../../../../utils/typescript/Size";
import PatternCanvas from "../../../../utils/ui/PatternCanvas";
import JezzBallViewModel from "../viewmodel/JezzBallViewModel";
import Logger from "../../../../utils/log/Logger";
import RendererWorker from "../../../../workers/RendererWorker.ts?worker";
import TopLeftLineWorker from "../../../../workers/lines/TopLeftLineWorker.ts?worker";
import BottomRightLineWorker from "../../../../workers/lines/BottomRightLineWorker.ts?worker";

const TAG = "JezzBallGrid";

const JezzBallGrid: FC<JezzBallGridProps> = () => {
    const initRef = useRef(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const patternCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const gameCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const workersRef = useRef<{
        renderer: Worker | null;
        topLeft: Worker | null;
        bottomRight: Worker | null;
    }>({
        renderer: null,
        topLeft: null,
        bottomRight: null
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
        initRef.current = true;

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

        const workerRenderer = new RendererWorker();
        const workerTopLeft = new TopLeftLineWorker();
        const workerBottomRight = new BottomRightLineWorker();     
        
        workersRef.current = { renderer: workerRenderer, topLeft: workerTopLeft, bottomRight: workerBottomRight };

        jezzBallViewModel.init();
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