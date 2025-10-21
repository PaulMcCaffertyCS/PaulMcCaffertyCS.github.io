import Project from "../projects/ui/Project";
import ProjectOption from "../projects/viewmodel/ProjectOption";

const HomeUI = () => {
    const projectCWU = ProjectOption.CWU;
    const projectFunction = ProjectOption.FUNCTION_LRL;

    return (
        <div id="page-container">
            <div id="page-title">
                <h1 id="page-title-name" className="gradient-text">Paul McCafferty</h1>
                <p id="page-title-intro">
                    A proactive and driven individual, I bring five years of full-stack, professional experience and a focus on curiosity to my projects.
                </p>
            </div>
            <div id="page-body">
                <div id="project-option-section-title">
                    <h2 id="project-option-section-title-text" className="gradient-text">Projects</h2>
                </div>
                <div className="project-options">
                    <Project title={projectCWU.title} brief={projectCWU.brief} link={projectCWU.link} preview={projectCWU.preview} />
                    <Project title={projectFunction.title} brief={projectFunction.brief} link={projectFunction.link} preview={projectFunction.preview} />
                </div>
            </div>
            <div id="circuit-background"></div>
        </div>
    );
};

export default HomeUI;