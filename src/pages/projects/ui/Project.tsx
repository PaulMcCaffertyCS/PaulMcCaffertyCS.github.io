import type { FC, JSX } from "react";
// import { useNavigate } from "react-router";
import Logger from "../../../utils/log/Logger";
import "./Project.css";
import type ProjectProps from "../viewmodel/ProjectProps";

const Project: FC<ProjectProps> = ({ title, brief, link, preview }): JSX.Element => {
    const TAG = "Project";
    // const navigate = useNavigate();

    return (
        <div className="project-option" onClick={() => Logger.d(TAG, `Selected ${title} project. Navigate to ${link}`)}>
            <div className="project-option-overview">
                <h2 className="project-option-text">{title}</h2>
                <p className="project-option-brief">{brief}</p>
            </div>
            <div className="project-option-divider" />
            <div className="project-option-preview">
                <img className="project-option-image" src={preview} alt="Preview" />
            </div>
        </div>
    )
}

export default Project;