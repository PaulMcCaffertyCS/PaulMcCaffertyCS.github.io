import { useEffect, forwardRef } from "react";
import "./PatternCanvas.css";

interface PatternCanvasProps {
    width: number;
    height: number;
    patternItemWidth: number;
    patternItemHeight: number;
}

const PatternCanvas = forwardRef<HTMLCanvasElement, PatternCanvasProps>(
    ({ width, height, patternItemWidth, patternItemHeight }, ref) => {
        useEffect(() => {
            if (!(ref && "current" in ref)) return;

            const canvas = ref.current;
            if (!canvas) return;

            const context = canvas.getContext("2d");
            if (!context) return;

            context.clearRect(0, 0, width, height);

            const offsetX = (width % patternItemWidth) / 2
            const offsetY = (height % patternItemHeight) / 2

            context.fillStyle = "#888";
            context.strokeStyle = "#454";
            context.lineWidth = 1;
            context.beginPath();
            for (let y = -offsetX; y < height; y += patternItemHeight) {
                for (let x = -offsetY; x < width; x += patternItemWidth) {
                    context.roundRect(x, y, patternItemWidth, patternItemHeight, 2)
                }
            }
            context.fill();
            context.stroke();
        }, [ref, width, height, patternItemWidth, patternItemHeight]);

        return (
            <canvas id="pattern-canvas"
                ref={ref}
                width={width}
                height={height}
            />
        )
    }
)

export default PatternCanvas;