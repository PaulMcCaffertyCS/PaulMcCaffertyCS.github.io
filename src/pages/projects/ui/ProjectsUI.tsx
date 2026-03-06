import Project from "./Project";
import ProjectOption from "../viewmodel/ProjectOption";

const ProjectsUI = () => {
    const projectCWU = ProjectOption.CWU;
    const projectFunction = ProjectOption.FUNCTION_LRL;
    const projectOneThing = ProjectOption.ONE_THING;
    
    return (
        <div className="page-container">
            <div className="page-title-container">
                <h1 id="page-title" className="page-title gradient-text">Projects</h1>
                <p className="page-title-intro">
                    {`Below are some projects that I have completed and documented.\n
                    I am continually expanding this section.`}
                </p>
            </div>
            <div className="page-body">
                <div className="project-options">
                    <Project
                        title={projectCWU.title}
                        brief={projectCWU.brief}
                        preview={projectCWU.preview}
                        navLink={projectCWU.navLink}
                        link={projectCWU.link}
                    />
                    <Project
                        title={projectFunction.title}
                        brief={projectFunction.brief}
                        preview={projectFunction.preview}
                        navLink={projectFunction.navLink}
                        link={projectFunction.link}
                    />
                    <Project
                        title={projectOneThing.title}
                        brief={projectOneThing.brief}
                        preview={projectOneThing.preview}
                        navLink={projectOneThing.navLink}
                        link={projectOneThing.link}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectsUI;