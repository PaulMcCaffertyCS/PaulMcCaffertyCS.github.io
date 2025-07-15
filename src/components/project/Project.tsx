import type { FC, JSX } from "react";
import { useNavigate } from "react-router";
import Logger from "../../utils/log/Logger";
import "./Project.css";
import greenCircuitryImage from "../../assets/images/green_circuitry_1200x1200.jpg";
import type ProjectProps from "./ProjectProps";

const Project: FC<ProjectProps> = (props): JSX.Element => {
    const TAG = "Project";
    const navigate = useNavigate();

    return (
        <div className="project-option" onClick={() => Logger.d(TAG, "Project Selected")}>
            <div className="project-option-overview">
                <h2 className="project-option-text">{props.title}</h2>
                <p className="project-option-brief">{props.brief}</p>
            </div>
            <div className="project-option-divider" />
            <div className="project-option-preview">
                <img className="project-option-image" src={greenCircuitryImage} alt="Preview" />
            </div>
        </div>
    )
}

export default Project;