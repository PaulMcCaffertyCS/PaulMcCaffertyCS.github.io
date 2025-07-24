import type { FC, MouseEvent } from "react";
import type JezzBallGridProps from "../viewmodel/JezzBallGridProps";
import { useEffect, useRef, useState } from "react";
import JezzBallSquare from "./JezzBallSquare";
import "./JezzBallGrid.css";

const JezzBallGrid: FC<JezzBallGridProps> = ({ ref, width, height, getSquareProps }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [points, setPoints] = useState<{ x: number, y: number }[]>([]);
    const squares = [];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.strokeStyle = "red";
        context.lineWidth = 2;
        context.beginPath();
        for (let i = 0; i < points.length - 1; i++) {
            context.moveTo(points[i].x, points[i].y);
            context.lineTo(points[i + 1].x, points[i + 1].y);
        }
        context.stroke();
    }, [points]);

    const handleClick = (event: MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setPoints((prev) => [...prev, {x, y}]);
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

//     return (
//         <div 
//             ref={containerRef}
//             className="jezzball-container"
//             onClick={handleClick}
//             style={{ position: "relative" }}
//         >
//             <canvas
//                 ref={canvasRef}
//                 width={width * 50}  // Adjust depending on square size
//                 height={height * 50}
//                 style={{ 
//                     position: "absolute", 
//                     top: 0, 
//                     left: 0, 
//                     pointerEvents: "none" // Let clicks pass through to grid
//                 }}
//             />
//             <div 
//                 ref={ref} 
//                 className="jezzball-grid"
//                 style={{ gridTemplateColumns: `repeat(${width}, 1fr)` }}
//             >
//                 {squares}
//             </div>
//         </div>
//     );
// };

// export default JezzBallGrid;