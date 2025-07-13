import greenCircuitryImage from "../../assets/images/green_circuitry_1200x1200.jpg";

const Projects = () => {
    return (
        <div id="page-container">
            <div id="page-title">
                <h1 id="page-title-name" className="gradient-text">Projects</h1>
                <p id="page-title-intro">
                    I'll eventually list and link all my projects here. Thank you for your patience.
                </p>
            </div>
            <div id="page-body">
                <div className="project-option">
                    <div className="project-option-overview">
                        <h2 className="project-option-text">CWU Parking Application</h2>
                        <p className="project-option-brief">Made as my Capstone Project back in January-March of 2020, this was a prototype to assist peope with parking on campus.</p>
                    </div>
                    <div className="project-option-divider" />
                    <div className="project-option-preview">
                        <img className="project-option-image" src={greenCircuitryImage} alt="Preview" />
                    </div>
                </div>
                <div className="project-option">
                    <div className="project-option-overview">
                        <h2 className="project-option-text">Function: LRL</h2>
                        <p className="project-option-brief">I always dreamt of owning a business. That's why when I was still a Senior in University and a business major approached me with an idea for "bringing the social back to social media," I took to development.</p>
                    </div>
                    <div className="project-option-divider" />
                    <div className="project-option-preview">
                        <img className="project-option-image" src={greenCircuitryImage} alt="Preview" />
                    </div>
                </div>
            </div>
            <div id="circuit-background"></div>
        </div>
    );
};

export default Projects;