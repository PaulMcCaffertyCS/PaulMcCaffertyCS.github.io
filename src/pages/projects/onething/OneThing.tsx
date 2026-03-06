import "./OneThing.css";
import ProjectOption from "../viewmodel/ProjectOption";
import oneThingIOSAiSuggestion from "../../../assets/images/projects/onething/OneThingIOS_UseAISuggestions.png";
import oneThingIOSCommit from "../../../assets/images/projects/onething/OneThingIOS_Commit.png";
import oneThingIOSComplete from "../../../assets/images/projects/onething/OneThingIOS_CompleteYourOneThing.png";
import BackButton from "../../../components/backbutton/BackButton";
import FootnoteImage from "../../../components/footnoteimage/FootnoteImage";

const OneThingUI = () => {
    const projectOneThing = ProjectOption.ONE_THING;
    
    return (
        <div className="page-container">
            <BackButton />
            <div className="page-title-container">
                <h1 id="page-title" className="page-title gradient-text">One Thing</h1>
                <p className="page-title-intro">{projectOneThing.brief}</p>
            </div>
            <div className="page-body">
                <div className="project-overview">
                    <h2 className="project-about-title">Images</h2>
                    <div id="project-images-desktop">
                        <FootnoteImage className="project-image"
                            image={oneThingIOSAiSuggestion}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="March 2026"
                            footnoteSize={null} />
                        <FootnoteImage className="project-image"
                            image={oneThingIOSCommit}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="March 2026"
                            footnoteSize={null} />
                        <FootnoteImage className="project-image"
                            image={oneThingIOSComplete}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="March 2026"
                            footnoteSize={null} />
                    </div>
                    <div id="project-images-mobile">
                        <FootnoteImage className="project-image"
                            image={oneThingIOSAiSuggestion}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="March 2026"
                            footnoteSize={null} />
                        <FootnoteImage className="project-image"
                            image={oneThingIOSCommit}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="March 2026"
                            footnoteSize={null} />
                        <FootnoteImage className="project-image"
                            image={oneThingIOSComplete}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="March 2026"
                            footnoteSize={null} />
                    </div>
                    <div className="divider-horizontal" />
                    <h2 className="project-about-title">About</h2>
                    <p className="project-about">
                        {`Developed using Git, GitHub, Expo, React Native, Firebase and TypeScript, this app is available on both the Google Play Store and the Apple App Store.\n
                        Facing too much overwhelm to feel accomplished is an everyday exeperience for majority of people nowadays. If you could do One Thing to feel accomplished, what would it be?`}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OneThingUI;