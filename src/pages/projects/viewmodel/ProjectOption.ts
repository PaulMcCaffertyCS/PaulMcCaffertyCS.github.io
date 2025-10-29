import cwuParkingApplicationLogo from "../../../assets/images/projects/cwuparkingapplication/cwuparkingapplication.png";
import functionLRLLogo from "../../../assets/images/projects/functionlrl/functionlrl_logo.jpg";

export default class ProjectOption {
    title: string;
    brief: string;
    preview: string;
    navLink: string;
    link: string | null;

    constructor(title: string, brief: string, preview: string, navLink: string, link: string | null) {
        this.title = title;
        this.brief = brief;
        this.preview = preview;
        this.navLink = navLink;
        this.link = link;
    }
    
    // link options:
    // - Raw YouTube: https://youtu.be/9jgdhiMOry4?si=37KHr1sKKfh4o2c5
    // - Bitly: https://www.bit.ly/cwuparkingapp
    static CWU = new ProjectOption(
        "CWU Parking Application",
        "Made as my Capstone Project back in January-March of 2020, this was a prototype to address the parking issue on campus and assist campus goers with parking heads up.",
        cwuParkingApplicationLogo,
        "cwu-parking-application",
        null
    );

    static FUNCTION_LRL = new ProjectOption(
        "Function: LRL",
        "I always dreamt of owning a business. That's why while I was still a Senior in University and a business major approached me with an idea for \"bringing the social back to social media,\" I took to development.",
        functionLRLLogo,
        "function-lrl",
        null
    );
}