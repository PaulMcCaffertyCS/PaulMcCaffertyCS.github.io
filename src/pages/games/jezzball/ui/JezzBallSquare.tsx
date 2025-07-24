import type { FC, JSX } from "react";
import type JezzBallSquareProps from "../viewmodel/JezzBallSquareProps";
import "./JezzBallSquare.css";

const JezzBallSquare: FC<JezzBallSquareProps> = ({ id }): JSX.Element => {
    return (
        <div id={id} className="box" />
    )
}

export default JezzBallSquare;