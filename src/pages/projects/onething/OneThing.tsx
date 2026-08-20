import "./OneThing.css";
import ProjectOption from "../viewmodel/ProjectOption";
import oneThingIosPreviewOpen from "../../../assets/images/projects/onething/OneThing_iOS_Preview1_Open.png";
import oneThingIosPreviewCommit from "../../../assets/images/projects/onething/OneThing_iOS_Preview4_Commit.png";
import oneThingIosPreviewCompleted from "../../../assets/images/projects/onething/OneThing_iOS_Preview6_Completed.png";
import oneThingIosPreviewStreak from "../../../assets/images/projects/onething/OneThing_iOS_Preview8_Streak.png";
import oneThingIosPreviewProfile from "../../../assets/images/projects/onething/OneThing_iOS_Preview9_Profile.png";
import oneThingIosPreviewCalendar from "../../../assets/images/projects/onething/OneThing_iOS_Preview10_Calendar.png";
import oneThingIosPreviewStore from "../../../assets/images/projects/onething/OneThing_iOS_Preview11_Store.png";
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
                            image={oneThingIosPreviewOpen}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="August 2026"
                            footnoteSize={null} />
                        <FootnoteImage className="project-image"
                            image={oneThingIosPreviewCommit}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="August 2026"
                            footnoteSize={null} />
                        <FootnoteImage className="project-image"
                            image={oneThingIosPreviewCompleted}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="August 2026"
                            footnoteSize={null} />
                        <FootnoteImage className="project-image"
                            image={oneThingIosPreviewStreak}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="August 2026"
                            footnoteSize={null} />
                        <FootnoteImage className="project-image"
                            image={oneThingIosPreviewProfile}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="August 2026"
                            footnoteSize={null} />
                        <FootnoteImage className="project-image"
                            image={oneThingIosPreviewCalendar}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="August 2026"
                            footnoteSize={null} />
                        <FootnoteImage className="project-image"
                            image={oneThingIosPreviewStore}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="August 2026"
                            footnoteSize={null} />
                    </div>
                    <div id="project-images-mobile">
                        <FootnoteImage className="project-image"
                            image={oneThingIosPreviewOpen}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="August 2026"
                            footnoteSize={null} />
                        <FootnoteImage className="project-image"
                            image={oneThingIosPreviewCommit}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="August 2026"
                            footnoteSize={null} />
                        <FootnoteImage className="project-image"
                            image={oneThingIosPreviewCompleted}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="August 2026"
                            footnoteSize={null} />
                        <FootnoteImage className="project-image"
                            image={oneThingIosPreviewStreak}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="August 2026"
                            footnoteSize={null} />
                        <FootnoteImage className="project-image"
                            image={oneThingIosPreviewProfile}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="August 2026"
                            footnoteSize={null} />
                        <FootnoteImage className="project-image"
                            image={oneThingIosPreviewCalendar}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="August 2026"
                            footnoteSize={null} />
                        <FootnoteImage className="project-image"
                            image={oneThingIosPreviewStore}
                            imageWidth={null}
                            imageHeight={null}
                            footnote="August 2026"
                            footnoteSize={null} />
                    </div>
                    <div className="divider-horizontal" />
                    <h2 className="project-about-title">About</h2>
                    <p className="project-about">
                        {`Developed using Git, GitHub, Expo, React Native, Firebase and TypeScript, this app will is in review on both the Google Play Store and the Apple App Store.\n
                        Facing too much overwhelm to feel accomplished is an everyday exeperience for the majority of people in today's society. If you could do One Thing to feel accomplished, what would it be?`}
                    </p>
                    <div className="project-about" id="onething-readme">
                        <h1>README: One Thing</h1>
                        <p>
                            Life is full of things that we must do, should do, and want to do. There's <i>laundry, dishes, kids to dress, piano practice,</i> and <i>so much more.</i>{`\n`}
                            With everything that needs to be done, no wonder we live in states of <i>anxiety</i>, <b>overwhelm</b>, <b><i>stress</i></b> and have the inability to track tasks; there's too many!{`\n`}
                            Each and every thing that we do feels like a chip in a boulder rather than success.{`\n`}
                            How about, if you were to pick <b>One Thing</b> to do today to feel accomplished, what would that <b>One Thing</b> be?{`\n`}
                            Remove the mental clutter. Do <b>One Thing</b>.
                        </p>
                        <h2>Development Team</h2>
                        <h3>Paul McCafferty</h3>
                        <p>
                            Sole developer of <b>One Thing</b>.
                        </p>
                        <h2>License</h2>
                        <p>
                            Copyright (c) 2026 Paul McCafferty. All rights reserved.
                        </p>
                        <h2>Tech Stack Summary</h2>
                        <p>
                            - <b>Git</b>: Version control.{`\n`}
                            - <b>GitHub</b>: Code hosting, workflows.{`\n`}
                            - <b>Expo</b>: Build system, native APIs, and app deployment.{`\n`}
                            - <b>Firebase</b>: Database (Firestore), authentication, and serverless backend logic.{`\n`}
                            - <b>React Native</b>: Cross-platform mobile app framework.{`\n`}
                            - <b>TypeScript</b>: Strongly typed language for a safer, scalable, readable codebase.
                        </p>
                        <h2>Tech Stack Detailed</h2>
                        <h3>Git</h3>
                        <h4>Version Control</h4>
                        <p>
                            Git provides organized structure of code and history.{`\n`}{`\n`}
                            - Clean management of code/codebase.{`\n`}
                            - Branching for parallel work.{`\n`}
                            - Should conflicts arrise, merge capabilities are handy.{`\n`}
                            - Rollback, cherry-pick and rebase for smoother inter-dependent or breaking change fixes.
                        </p>
                        <h3>GitHub</h3>
                        <h4>Code Hosting & Workflow Automation</h4>
                        <p>
                            GitHub provides visual management in a centralized, remote collaboration hub with automated workflow control.{`\n`}{`\n`}
                            - Secure cloud-based code storage.{`\n`}
                            - Issue tracking, pull request approach, branch views and more.{`\n`}
                            - GitHub Actions for CI/CD automation.
                        </p>
                        <h3>Expo</h3>
                        <h4>React Native Development Platform & Build System</h4>
                        <p>
                            Expo simplifies React Native development through native configuration handling, builds, and more.{`\n`}{`\n`}
                            - Managed build systems for iOS and Android.{`\n`}
                            - OTA updates.{`\n`}
                            - Simplified handling of app releases to stores.{`\n`}
                            - Access to native APIs through up-to-date libraries, such as:{`\n`}
                                - Notifications{`\n`}
                                - Device information{`\n`}
                                - Secure storage{`\n`}
                                - And more
                        </p>
                        <h3>Firebase</h3>
                        <h4>Backed-as-a-Service (BaaS) Platform</h4>
                        <p>
                            Firebase powers the entirety of the backend infrastructure.{`\n`}{`\n`}
                            - <b>Authentication</b>: Proper data management and secure login.{`\n`}
                            - <b>Database</b>: Cloud-hosted Firestore database for data reading and writing.{`\n`}
                            - <b>Cloud Functions</b>: Serverless backend logic and automation.{`\n`}
                            - <b>Under Evaluation</b>:{`\n`}
                                - <b>Crashlytics</b>: Crash reporting.{`\n`}
                                - <b>Analytics</b>: Usage insights.{`\n`}
                                - <b>expo-insights vs above</b>: Expo provides native insights as well, albeit slightly more limited. Required more evaluation and understanding.
                        </p>
                        <h3>React Native</h3>
                        <h4>Cross-Platform Mobile Framework</h4>
                        <p>
                            React Native is the core application framework, providing the ability to build native iOS and Android apps from a single source of truth.{`\n`}{`\n`}
                            - Component-based architecture.{`\n`}
                            - Native rendering for high performance.{`\n`}
                            - Extensive community of upkept libraries.{`\n`}
                            - Excellent integration with Expo.
                        </p>
                        <h3>TypeScript</h3>
                        <h4>Strongly Typed Superset of JavaScript</h4>
                        <p>
                            TypeScript is an enhancement on JavaScript, providing a much firmer foundational language.{`\n`}{`\n`}
                            - Static typing.{`\n`}
                            - Improved IDE support.{`\n`}
                            - Safer refactoring.{`\n`}
                            - Clear interface, type and data model definitions.{`\n`}
                            - Easier readability.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneThingUI;