import Project from "./Project";
import ProjectOption from "../viewmodel/ProjectOption";

const ProjectsUI = () => {
    const projectCWU = ProjectOption.CWU;
    const projectFunction = ProjectOption.FUNCTION_LRL;
    
    return (
        <div id="page-container">
            <div id="page-title">
                <h1 id="page-title-name" className="gradient-text">Projects</h1>
                <p id="page-title-intro">
                    I'll eventually list and link all my projects here. Thank you for your patience.
                </p>
            </div>
            <div id="page-body">
                <div className="project-options">
                    <Project title={projectCWU.title} brief={projectCWU.brief} link={projectCWU.link} preview={projectCWU.preview} />
                    <Project title={projectFunction.title} brief={projectFunction.brief} link={projectFunction.link} preview={projectFunction.preview} />
                </div>
            </div>
            <div id="circuit-background"></div>
        </div>
    );
};

export default ProjectsUI;