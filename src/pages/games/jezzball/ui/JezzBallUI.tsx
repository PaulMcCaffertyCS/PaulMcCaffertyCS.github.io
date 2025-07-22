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
        <div id="page-container">
            <div id="page-title">
                <h1 id="page-title-name" className="gradient-text">JezzBall</h1>
                <p id="page-title-intro">
                    Do your best!
                </p>
            </div>
            <div id="page-body">
                <div id="game-view">
                    <JezzBallGrid ref={jezzBallGridRef} width={gridWidth} height={gridHeight} getSquareProps={getSquareProps} />
                </div>
            </div>
            <div id="circuit-background"></div>
        </div>
    );
};

export default JezzBallUI;