import type { Ref } from "react";
import type JezzBallSquareProps from "./JezzBallSquareProps";

export default interface JezzBallGridProps {
    ref: Ref<HTMLDivElement>,
    width: number,
    height: number,
    getSquareProps: (x: number, y: number) => JezzBallSquareProps
}