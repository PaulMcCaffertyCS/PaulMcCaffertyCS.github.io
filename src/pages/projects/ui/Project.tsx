import { useEffect, type FC, type JSX } from "react";
import { useNavigate } from "react-router";
import Logger from "../../../utils/log/Logger";
import "./Project.css";
import type ProjectProps from "../viewmodel/ProjectProps";

const Project: FC<ProjectProps> = ({ title, brief, preview, navLink, link }): JSX.Element => {
    const TAG = "Project";
    const navigate = useNavigate();

    useEffect(() => {
        // Logger.d("Project", `title=${title}, brief=${brief}, preview=${preview}, navLink=${navLink}, link=${link}`);
    }, [])

    const onClick = () => {
        Logger.d(TAG, `Selected ${title} project.`);
        if (link != null) {
            Logger.d(TAG, `Open new tab and navigate to ${link}`);
            window.open(link, `_blank`);
        } else {
            Logger.d(TAG, `Navigate to ${navLink}`);
            navigate(navLink);
        }
    }

    return (
        <div className="project-option" onClick={onClick}>
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