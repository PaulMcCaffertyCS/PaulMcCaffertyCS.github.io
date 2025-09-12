import type { FC, MouseEvent } from "react";
import type JezzBallGridProps from "../viewmodel/JezzBallGridProps";
import { useEffect, useRef, useState } from "react";
import JezzBallSquare from "./JezzBallSquare";
import "./JezzBallGrid.css";
import Color from "../../../../utils/color/Color";
import Point from "../../../../utils/javascript/Point";

const JezzBallGrid: FC<JezzBallGridProps> = ({ ref, width, height, getSquareProps }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [leftTopLine, setLeftTopLine] = useState<Point[]>([]);
    const [rightBottomLine, setRightBottomLine] = useState<Point[]>([]);
    const squares = [];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        context.clearRect(0, 0, canvas.width, canvas.height);

        if (leftTopLine.length > 1) {
            context.strokeStyle = Color.RED;
            context.lineWidth = 4;
            context.beginPath();
            for (let i = 0; i < leftTopLine.length - 1; i++) {
                context.moveTo(leftTopLine[i].x, leftTopLine[i].y);
                context.lineTo(leftTopLine[i + 1].x, leftTopLine[i + 1].y);
            }
            context.stroke();
        }

        if (rightBottomLine.length > 1) {
            context.strokeStyle = Color.BLUE;
            context.lineWidth = 4;
            context.beginPath();
            for (let i = 0; i < rightBottomLine.length - 1; i++) {
                context.moveTo(rightBottomLine[i].x, rightBottomLine[i].y);
                context.lineTo(rightBottomLine[i + 1].x, rightBottomLine[i + 1].y);
            }
            context.stroke();
        }
    }, [leftTopLine, rightBottomLine]);

    const handleClick = (event: MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setLeftTopLine((previous) => [...previous, new Point(x, y)]);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const mirroredX = centerX - (x - centerX);
        const mirroredY = centerY - (y - centerY);

        setRightBottomLine((previous) => [...previous, new Point(mirroredX, mirroredY)]);
    }

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const props = getSquareProps(x, y);
            squares.push(<JezzBallSquare key={`${x}, ${y}`} {...props} />);
        }
    }
    
    return (
        <div ref={containerRef} className="jezzball-container" onClick={handleClick} style={{ position: "relative" }}>
            <canvas ref={canvasRef} width={width * 50} height={height * 50} style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}/>
            <div ref={ref} className="jezzball-grid" style={{ gridTemplateColumns: `repeat(${width}, 1fr)`}}>
                {squares}
            </div>
        </div>
    );
}

export default JezzBallGrid;