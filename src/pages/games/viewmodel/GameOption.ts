import jezzBallPreview from "../../../assets/images/JezzBallPreview.png";
import greenCircuitry from "../../../assets/images/green_circuitry_1200x1200.jpg";

export default class GameOption {
    title: string;
    brief: string;
    link: string;
    preview: string;

    constructor(title: string, brief: string, link: string, preview: string) {
        this.title = title;
        this.brief = brief;
        this.link = link;
        this.preview = preview;
    }

    static JEZZ_BALL = new GameOption(
        "JezzBall",
        "Keep shrinking the space until you move on. How long will you make it?",
        "jezzball",
        jezzBallPreview
    );

    static DUCK_HERDER = new GameOption(
        "Duck Herder",
        "Capture all the ducks before time runs out!",
        "duck-herder",
        greenCircuitry
    );
}