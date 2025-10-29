import { useEffect, useRef } from "react";
import type JezzBallSquareProps from "../viewmodel/JezzBallSquareProps";
import JezzBallGrid from "./JezzBallGrid";
import Logger from "../../../../utils/log/Logger";

const TAG = "JezzBallUI";

const JezzBallUI = () => {
    const gridWidth = 28;
    const gridHeight = 20;
    const getSquareProps = (x: number, y: number): JezzBallSquareProps => ({
        id: `square-${x}-${y}`
    });

    const jezzBallGridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const grid = jezzBallGridRef.current;
        const gridRect = grid?.getBoundingClientRect();
        Logger.d(TAG, `Paul: gridRect=${gridRect}`);
    })

    return (
        <div className="page-container">
            <div className="page-title-container">
                <h1 id="page-title" className="page-title gradient-text">JezzBall</h1>
                <p className="page-title-intro">
                    Do your best!
                </p>
            </div>
            <div className="page-body">
                <div id="game-view">
                    <JezzBallGrid ref={jezzBallGridRef} width={gridWidth} height={gridHeight} getSquareProps={getSquareProps} />
                </div>
            </div>
        </div>
    );
};

export default JezzBallUI;