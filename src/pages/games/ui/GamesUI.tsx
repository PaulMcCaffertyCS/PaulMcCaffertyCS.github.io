import BoopButton from "../../../components/boopbutton/BoopButton";
import GameOption from "../viewmodel/GameOption";
import Game from "./Game";
import "./GamesUI.css";

const GamesUI = () => {
    const gameJezzBall = GameOption.JEZZ_BALL;

    return (
        <div className="page-container">
            <div className="page-title-container">
                <h1 id="page-title" className="page-title gradient-text">Games</h1>
                <p className="page-title-intro">
                    Try to catch the button.
                </p>
            </div>
            <div className="page-body">
                <BoopButton />
                <div className="game-options">
                    <Game title={gameJezzBall.title} brief={gameJezzBall.brief} link={gameJezzBall.link} preview={gameJezzBall.preview} />
                </div>
            </div>
        </div>
    );
};

export default GamesUI;