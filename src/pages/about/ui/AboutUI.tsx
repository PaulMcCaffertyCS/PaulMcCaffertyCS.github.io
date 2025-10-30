import "./About.css";
import { getTimeOfDayGreeting } from "../viewmodel/AboutViewModel";
import paulMcCaffertyProfile from "../../../assets/images/PaulMcCafferty.jpg";

const AboutUI = () => {
    const resumeFileName = "Paul_McCafferty_Resume_August2025.pdf";

    return (
        <div className="page-container">
            <div className="page-title-container">
                <h1 id="page-title" className="page-title gradient-text">About</h1>
                <div className="side-by-side">
                    <div className="image-wrapper">
                        <img id="profile-picture" src={paulMcCaffertyProfile} />
                    </div>
                    <p id="profile-intro" className="page-title-intro">
                        {`Good ${getTimeOfDayGreeting()}! I hope this "About" section finds you in good health.\n
                        I am a full-stack developer based out of Myrtle Beach, SC, USA. I have 5+ years of professional experience, and 2.5 years of University in Computer Science, leading to a 3.38 GPA and a Bachelor's of Science in Computer Science.\n
                        I took my first coding class back in 2012 using JavaScript and Node.js. A few years later in Running Start, I took Java, C++ and Python classes. I proceeded to go to Central Washington University, where I studied a plethora of languages, including: JavaScript, Java, Python, Assembly, Prolog, SQL, C++ and C.\n
                        While at University, I focused in Mobile Development. Specifically, cross-platform. I did some Android development, no iOS, but worked on two apps in JavaScript, React Native and Expo.`}
                    </p>
                </div>
            </div>
            <div className="page-body">
                <p className="paragraph">
                    {`You can find both of the above listed applications here on my website under "Projects." Aside from those projects, there are many personal projects I've done.\n
                    Included in those would be the following:\n
                    - "Jarvis" with Python: Got a fully functioning voice recognition, facial recognition (trained on images of my face) and basic voice interaction working.\n
                    - "Parking Assistant" with JavaScript, React Native, Expo, Firebase and Python: Similar to my Capstone project, I went on to get the vehicle recognition working even more accurately, and enhance the experience overall.\n
                    - "Discord Bot" with Python: I developed a fun, interactive, and moderating bot for Discord servers. This bot could have filter words added, generate hangman games, sentence guessing, and many other word-based games. It also had a "server sleep" function I built in to mute everyone for certain lengths of time.\n
                    - "Rocket League Stats" with HTML, CSS and JavaScript: As a huge gamer and gaming fan, I watched a lot of Rocket League. I created a website generator that would pull the data of the players and their history from the octane website to generate win-loss likelihoods of player match-ups.\n
                    - "GPU Scraper" with Python and HTML (Generated): Back in 2020 when I was trying to build my second computer, I built a GPU informer (was NOT an actual scraper) that would send me notifications when GPU's came back in stock (I set it to RTX 3060-3090Ti)\n
                    There are many more I could list that I've done, with my latest being this website. Done in TypeScript, React, HTML, CSS and hopefully Firebase soon to come.`}
                </p>
                <p className="hyperlink-text">
                    {`For more specifics on my capabilities and history, please download my resume.\n`}
                    <a className="hyperlink-text-link"
                        href={`../../../../public/documents/${resumeFileName}`}
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