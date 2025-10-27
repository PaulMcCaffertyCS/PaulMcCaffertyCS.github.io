import Project from "../projects/ui/Project";
import ProjectOption from "../projects/viewmodel/ProjectOption";

const HomeUI = () => {
    const projectCWU = ProjectOption.CWU;
    const projectFunction = ProjectOption.FUNCTION_LRL;

    return (
        <div className="page-container">
            <div className="page-title-container">
                <h1 id="page-title" className="page-title gradient-text">Paul McCafferty</h1>
                <p className="page-title-intro">
                    {`A proactive and driven individual, I bring a focus on curiosity to my projects. I am always seeking to expand my knowledge in the pursuit of the most effective solutions, with consideration for the user experience, efficient development, and clean code.\n  
                    Leveraging knowledge of application development and programming with my troubleshooting skills and positive team collaboration, I am confident I can excel in any software developer role.`}
                </p>
            </div>
            <div className="page-body">
                <div className="project-option-section-title-container">
                    <h2 id="project-option-section-title-text" className="gradient-text">Projects</h2>
                </div>
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

export default HomeUI;