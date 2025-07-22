import type { FC, JSX } from "react";
import { useNavigate } from "react-router-dom";
import Logger from "../../../utils/log/Logger";
import type GameProps from "../viewmodel/GameProps";
import "./Game.css";

const Game: FC<GameProps> = ({ title, link, brief, preview }): JSX.Element => {
    const TAG = "Game";
    const navigate = useNavigate();

    return (
        <div className="game-option" onClick={() => {
            Logger.d(TAG, `Launch ${title} by going to ${link}`);
            navigate(`/games/${link}`);
        }}>
            <div className="game-option-overview">
                <h2 className="game-option-text">{title}</h2>
                <p className="game-option-brief">{brief}</p>
            </div>
            <div className="game-option-divider" />
            <div className="game-option-preview">
                <img className="game-option-image" src={preview} alt="Preview" />
            </div>
        </div>
    )
}

export default Game;



// import type { FC, JSX } from "react";
// // import { useNavigate } from "react-router";
// import Logger from "../../../utils/log/Logger";
// import "./Project.css";
// import greenCircuitryImage from "../../assets/images/green_circuitry_1200x1200.jpg";
// import type ProjectProps from "../viewmodel/ProjectProps";

// const Project: FC<ProjectProps> = (props): JSX.Element => {
//     const TAG = "Project";
//     // const navigate = useNavigate();

//     return (
//         <div className="project-option" onClick={() => Logger.d(TAG, `Selected ${props.title} project`)}>
//             <div className="project-option-overview">
//                 <h2 className="project-option-text">{props.title}</h2>
//                 <p className="project-option-brief">{props.brief}</p>
//             </div>
//             <div className="project-option-divider" />
//             <div className="project-option-preview">
//                 <img className="project-option-image" src={greenCircuitryImage} alt="Preview" />
//             </div>
//         </div>
//     )
// }

// export default Project;