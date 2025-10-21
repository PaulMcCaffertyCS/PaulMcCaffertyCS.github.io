import BoopButton from "../../../components/BoopButton";
import GameOption from "../viewmodel/GameOption";
import Game from "./Game";
import "./GamesUI.css";

const GamesUI = () => {
    const gameJezzBall = GameOption.JEZZ_BALL;

    return (
        <div id="page-container">
            <div id="page-title">
                <h1 id="page-title-name" className="gradient-text">Games</h1>
                <p id="page-title-intro">
                    Try to catch the button.
                </p>
            </div>
            <div id="page-body">
                <BoopButton />
                <div className="game-options">
                    <Game title={gameJezzBall.title} brief={gameJezzBall.brief} link={gameJezzBall.link} preview={gameJezzBall.preview} />
                </div>
            </div>
            <div id="circuit-background"></div>
        </div>
    );
};

export default GamesUI;