import Project from "./Project";
import ProjectOption from "../viewmodel/ProjectOption";

const ProjectsUI = () => {
    const projectCWU = ProjectOption.CWU;
    const projectFunction = ProjectOption.FUNCTION_LRL;
    
    return (
        <div className="page-container">
            <div className="page-title-container">
                <h1 id="page-title" className="page-title gradient-text">Projects</h1>
                <p className="page-title-intro">
                    I'll eventually list and link all my projects here. Thank you for your patience.
                </p>
            </div>
            <div className="page-body">
                <div className="project-options">
                    <Project title={projectCWU.title}
                        brief={projectCWU.brief}
                        preview={projectCWU.preview}
                        navLink={projectCWU.navLink}
                        link={projectCWU.link} />
                    <Project title={projectFunction.title}
                        brief={projectFunction.brief}
                        preview={projectFunction.preview}
                        navLink={projectFunction.navLink}
                        link={projectFunction.link} />
                </div>
            </div>
        </div>
    );
};

export default ProjectsUI;