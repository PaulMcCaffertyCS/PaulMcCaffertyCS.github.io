import type { FC } from "react";
import type JezzBallGridProps from "../viewmodel/JezzBallGridProps";
import JezzBallSquare from "./JezzBallSquare";
import "./JezzBallGrid.css";

const JezzBallGrid: FC<JezzBallGridProps> = ({ ref, width, height, getSquareProps }) => {
    const squares = [];

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const props = getSquareProps(x, y);
            squares.push(<JezzBallSquare key={`${x}, ${y}`} {...props} />);
        }
    }
    
    return (
        <div ref={ref} className="jezzball-grid" style={{ gridTemplateColumns: `repeat(${width}, 1fr)`}}>
            {squares}
        </div>
    );
}

export default JezzBallGrid;