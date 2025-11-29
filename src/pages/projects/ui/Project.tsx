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
        <div>
            <div className="project-option project-option-desktop" onClick={onClick}>
                <div className="project-option-overview">
                    <h2 style={{ fontSize: "20px" }} className="project-option-text">{title}</h2>
                    <p className="project-option-brief">{brief}</p>
                </div>
                <div className="project-option-divider-vertical" />
                <div className="project-option-preview">
                    <img className="project-option-image" src={preview} alt="Preview" />
                </div>
            </div>
            <div className="project-option project-option-mobile" onClick={onClick}>
                <div className="project-option-title">
                    <h2 style={{ fontSize: "20px" }} className="project-option-text">{title}</h2>
                </div>
                <div className="project-option-divider-horizontal" />
                <div className="project-option-preview">
                    <img className="project-option-image" src={preview} alt="Preview" />
                </div>
                <div className="project-option-divider-horizontal" />
                <div className="project-option-description">
                    <p className="project-option-brief">{brief}</p>
                </div>
            </div>
        </div>
    )
}

export default Project;