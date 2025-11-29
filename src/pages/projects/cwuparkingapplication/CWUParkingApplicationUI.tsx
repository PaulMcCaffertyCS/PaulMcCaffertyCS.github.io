import ProjectOption from "../viewmodel/ProjectOption";
import BackButton from "../../../components/backbutton/BackButton";
import "./CWUParkingApplication.css";

const CWUParkingApplicationUI = () => {
    const projectCWU = ProjectOption.CWU;
    
    return (
        <div className="page-container">
            <BackButton />
            <div className="page-title-container">
                <h1 id="page-title" className="page-title gradient-text">CWU Parking{"\n"}Application</h1>
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
                        {`Developed using JavaScript, React Native, and Expo on the front-end, Python and Firebase on the backend, we utilized the cross-platform capabilities of React Native to reach both Android and iOS users.\n
                        Python came into play for Machine Learning, with TensorFlow, to dynamically calculate how many spaces were occupied using image recognition.\n
                        The data was fed into Firebase, and then read on the front-end. The data was asynchronously fetched to update the relevant values on a timeout. To avoid flooding with requests, we set a 30 second timeout for data fetching.`}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CWUParkingApplicationUI;