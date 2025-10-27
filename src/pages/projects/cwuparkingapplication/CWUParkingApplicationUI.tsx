import ProjectOption from "../viewmodel/ProjectOption";

const CWUParkingApplicationUI = () => {
    const projectCWU = ProjectOption.CWU;
    
    return (
        <div className="page-container">
            <div className="page-title-container">
                <h1 id="page-title" className="page-title gradient-text">CWU Parking Application</h1>
                <p className="page-title-intro">{projectCWU.brief}</p>
            </div>
            <div className="page-body">
                <div className="project-overview">
                    <h2 className="project-video-title">Capstone Presentation - Demo</h2>
                    <iframe className="project-video-wide"
                        id="cwu-parking-application-preview"
                        src="https://www.youtube.com/embed/9jgdhiMOry4?si=oYFdWJC8PFW_xkw8"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                    <div className="divider-horizontal" />
                    <h2 className="project-about-title">About</h2>
                    <p className="project-about">
                        {`Written using JavaScript + React Native + Expo on the front-end, Python + Firebase on the backend, we utilized the cross-platform capabilities of React Native to reach both Android and iOS users.\n
                        We investigated into different cameras we could use outdoors, but nothing ever was quite what we wanted. Instead we just utilized a camera indoors, looking out a window into a parking lot for practice.\n
                        This is where Python came into play because we wanted to use Machine Learning, through TensorFlow, to dynamically calculate how many spaces were occupied.\n
                        This data was fed into Firebase, which was read by the front-end. The data was asynchronously fetched to update the relevant values on a timeout. To avoid flooding with requests, we set a 5s timeout for fetching, so the values would update once each five seconds.`}
                    </p>
                </div>
            </div>
            <div id="circuit-background"></div>
        </div>
    );
};

export default CWUParkingApplicationUI;