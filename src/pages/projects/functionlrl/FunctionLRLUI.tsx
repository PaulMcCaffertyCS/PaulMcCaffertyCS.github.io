import "./FunctionLRL.css";
import ProjectOption from "../viewmodel/ProjectOption";
import functionLRLCreateEventImage from "../../../../assets/images/projects/functionlrl/functionlrl_createevent.png";
import functionLRLMapViewImage from "../../../../assets/images/projects/functionlrl/functionlrl_mapview.png";
import functionLRLMapEventViewImage from "../../../../assets/images/projects/functionlrl/functionlrl_mapeventview.png";
import functionLRLOverview from "../../../../assets/videos/projects/functionlrl/functionlrl_overview.mp4";
import functionLRLMapInteraction from "../../../../assets/videos/projects/functionlrl/functionlrl_mapinteraction.mp4";
import FootnoteImage from "../../../components/footnoteimage/FootnoteImage";
import FootnoteVideo from "../../../components/footnotevideo/FootnoteVideo";

const FunctionLRLUI = () => {
    const projectFunction = ProjectOption.FUNCTION_LRL;
    
    return (
        <div className="page-container">
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
                        {`Developed using JavaScript, React Native, Expo and Firebase, this app was a multi-year project that got up to around 300 users a few months after release. Available on both the Play Store and App Store, while active, we maintained a 5-star review.\n
                        Utilizing asynchornous data fetching from Firebase, without any app-slowdown, was an important goal and acheived. Through the use of proper Firebase listener management and effective data fetching, we were able to retrieve and display the data we needed when needed.\n
                        Using many animations, including rings that grew and shrunk, were a key part of drawing the user's attention to viewing more events, while being able to know what event they were actively viewing.\n
                        Targeting folks in the 18-35 age range, this app that was my sole side project for a while was built to draw in those that wanted to find social media meaning again. Boasting the ability to support thousands of events and friends, the best way to plan was at your fingertips.`}
                    </p>
                </div>
            </div>
            <div id="circuit-background"></div>
        </div>
    );
};

export default FunctionLRLUI;