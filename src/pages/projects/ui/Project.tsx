import type { FC, JSX } from "react";
// import { useNavigate } from "react-router";
import Logger from "../../../utils/log/Logger";
import "./Project.css";
import type ProjectProps from "../viewmodel/ProjectProps";

const Project: FC<ProjectProps> = (props): JSX.Element => {
    const TAG = "Project";
    // const navigate = useNavigate();

    return (
        <div className="project-option" onClick={() => Logger.d(TAG, `Selected ${props.title} project. Navigate to ${props.link}`)}>
            <div className="project-option-overview">
                <h2 className="project-option-text">{props.title}</h2>
                <p className="project-option-brief">{props.brief}</p>
            </div>
            <div className="project-option-divider" />
            <div className="project-option-preview">
                <img className="project-option-image" src={props.preview} alt="Preview" />
            </div>
        </div>
    )
}

export default Project;