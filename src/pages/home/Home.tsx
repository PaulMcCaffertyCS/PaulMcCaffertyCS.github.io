import greenCircuitryImage from "../../assets/images/green_circuitry_1200x1200.jpg";

const Home = () => {
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
            </div>
            <div id="circuit-background"></div>
        </div>
    );
};

export default Home;