import "./About.css";
import { getTimeOfDayGreeting } from "../viewmodel/AboutViewModel";
import paulMcCaffertyProfile from "../../../assets/images/PaulMcCafferty.jpg";

const AboutUI = () => {
    const resumeFileName = "Paul_McCafferty_Resume_November2025.pdf";

    return (
        <div className="page-container">
            <div className="page-title-container">
                <h1 id="page-title" className="page-title gradient-text">About</h1>
                <div className="desktop-block">
                    <div className="side-by-side">
                        <div className="image-wrapper">
                            <img id="profile-picture" src={paulMcCaffertyProfile} />
                        </div>
                        <p id="profile-intro" className="page-title-intro">
                            {`Good ${getTimeOfDayGreeting()}! I hope you're having a fantabulous day.\n
                            I am a full-stack developer based out of Myrtle Beach, SC, USA. I have 5+ years of professional experience, and 2.5 years of University in Computer Science, leading to a 3.38 GPA and a Bachelor's of Science in Computer Science.\n
                            My first coding class used JavaScript and Node.js. A few years later in Running Start, I took Java, C++ and Python classes. I proceeded to go to Central Washington University, where I studied a plethora of languages, including: JavaScript, Java, Python, Assembly, Prolog, SQL, C++ and C.\n
                            While at University, I focused in Mobile Development. Specifically, cross-platform. I did some Android development, although my main work was on two apps in JavaScript, React Native and Expo.`}
                        </p>
                    </div>
                </div>
                <div className="mobile-block">
                    <div className="image-wrapper">
                        <img id="profile-picture" src={paulMcCaffertyProfile} />
                    </div>
                    <p id="profile-intro" className="page-title-intro">
                        {`Good ${getTimeOfDayGreeting()}! I hope you're having a fantabulous day.\n
                        I am a full-stack developer based out of Myrtle Beach, SC, USA. I have 5+ years of professional experience, and 2.5 years of University in Computer Science, leading to a 3.38 GPA and a Bachelor's of Science in Computer Science.\n
                        My first coding class used JavaScript and Node.js. A few years later in Running Start, I took Java, C++ and Python classes. I proceeded to go to Central Washington University, where I studied a plethora of languages, including: JavaScript, Java, Python, Assembly, Prolog, SQL, C++ and C.\n
                        While at University, I focused in Mobile Development. Specifically, cross-platform. I did some Android development, although my main work was on two apps in JavaScript, React Native and Expo.`}
                    </p>
                </div>
            </div>
            <div className="page-body">
                <p className="paragraph">
                    {`You can find both of the above listed applications here on my website under "Projects." I have also developed many personal projects.\n
                    Some of those include:\n
                    - "Jarvis" with Python: Fully functioning voice recognition, facial recognition (trained on images of my face) and basic voice interaction.\n
                    - "Parking Assistant" with JavaScript, React Native, Expo, Firebase and Python: I implemented vehicle recognition accuracy, efficient data reading and writing, and overall experience enhancement (similar to my Capstone project).\n
                    - "Discord Bot" with Python: Fun, interactive, and capable of moderation, this bot for Discord servers could have filter words added, generate hangman games, sentence guessing, and many other word-based games. It also had a "server sleep" function built in to mute everyone for certain lengths of time.\n
                    - "Rocket League Stats" with HTML, CSS and JavaScript: Created a website generator that would pull the data of the players and their history from the octane website to generate win-loss likelihoods of player match-ups.\n
                    - "GPU Informer" with Python and HTML (Generated): While building my second computer, I built a GPU informer that would send me notifications when GPU's came back in stock (set to RTX 3060-3090Ti).\n
                    This website was developed in TypeScript, React, HTML, and CSS, with Firebase soon to come.`}
                </p>
                <p className="hyperlink-text">
                    {`For more details on my capabilities and experience, please download my resume.\n`}
                    <a className="hyperlink-text-link"
                        href={`/documents/${resumeFileName}`}
                        download={resumeFileName}>
                        {resumeFileName}
                    </a>
                    {`\nThank you!`}
                </p>
            </div>
        </div>
    );
};

export default AboutUI;