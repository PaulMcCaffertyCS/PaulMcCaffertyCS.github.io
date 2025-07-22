import type { FC, JSX, MouseEvent } from "react";
import type JezzBallSquareProps from "../viewmodel/JezzBallSquareProps";
import { onSquareClicked } from "../viewmodel/JezzBallViewModel";
import "./JezzBallSquare.css";

const JezzBallSquare: FC<JezzBallSquareProps> = ({ id }): JSX.Element => {
    return (
        <div id={id} className="box" onClick={(event: MouseEvent) => onSquareClicked(id, event)}/>
    )
}

export default JezzBallSquare;