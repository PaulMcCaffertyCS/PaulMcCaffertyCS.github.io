import "./FunctionLRL.css";
import ProjectOption from "../viewmodel/ProjectOption";
import functionLRLCreateEventImage from "../../../assets/images/projects/functionlrl/functionlrl_createevent.png";
import functionLRLMapViewImage from "../../../assets/images/projects/functionlrl/functionlrl_mapview.png";
import functionLRLMapEventViewImage from "../../../assets/images/projects/functionlrl/functionlrl_mapeventview.png";
import functionLRLOverview from "../../../assets/videos/projects/functionlrl/functionlrl_overview_trimmed.mp4";
import functionLRLMapInteraction from "../../../assets/videos/projects/functionlrl/functionlrl_mapinteraction.mp4";
import BackButton from "../../../components/backbutton/BackButton";
import FootnoteImage from "../../../components/footnoteimage/FootnoteImage";
import FootnoteVideo from "../../../components/footnotevideo/FootnoteVideo";

const FunctionLRLUI = () => {
    const projectFunction = ProjectOption.FUNCTION_LRL;
    
    return (
        <div className="page-container">
            <BackButton />
            <div className="page-title-container">
                <h1 id="page-title" className="page-title gradient-text">Function: LRL</h1>
                <p className="page-title-intro">{projectFunction.brief}</p>
            </div>
            <div className="page-body">
                <div className="project-overview">
                    <h2 className="project-video-title">Videos</h2>
                    <div id="project-videos">
                        <FootnoteVideo className="project-video-tall"
                            video={functionLRLOverview}
                            videoType="video/mp4"
                            videoWidth={null}
                            videoHeight={null}
                            footnote="April 2022"
                            footnoteSize={null} />
                        <FootnoteVideo className="project-video-tall"
                            video={functionLRLMapInteraction}
                            videoType="video/mp4"
                            videoWidth={null}
                            videoHeight={null}
                            footnote="February 2022"
                            footnoteSize={null} />
                    </div>
                    <div className="divider-horizontal" />
                    <h2 className="project-about-title">Images</h2>
                    <div id="project-images">
                        <FootnoteImage className="project-image"
                            image={functionLRLCreateEventImage}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="February 2022"
                            footnoteSize={null} />
                        <FootnoteImage className="project-image"
                            image={functionLRLMapViewImage}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="February 2022"
                            footnoteSize={null} />
                        <FootnoteImage className="project-image"
                            image={functionLRLMapEventViewImage}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="March 2022"
                            footnoteSize={null} />
                    </div>
                    <div className="divider-horizontal" />
                    <h2 className="project-about-title">About</h2>
                    <p className="project-about">
                        {`Developed using JavaScript, React Native, Expo and Firebase, this app was a multi-year project that got up to approximately 300 users a few months after release and settled at 506 users. Available on both the Google Play Store and Apple App Store, we maintained a 5-star review while active.\n
                        Utilizing asynchronous data fetching from Firebase, without any app-slowdown, was an important focus and acheivement. Through the proper use of Firebase listener management and effective data fetching, we were able to retrieve the data when appropriate and display when needed.\n
                        Animations were a key part of drawing the user's attention. Dynamic map marker rings draw the user's attention to view more events, while highlighting the selected event.\n
                        Targeting the 18-35 age range, this app was built for people seeking real life social interactions. Boasting the ability to support hundreds of thousands of users and events, the best way to plan your next event was at your fingertips.`}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FunctionLRLUI;