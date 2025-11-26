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
        "My Capstone Project. A prototype to address the parking issue on campus. Assisting campus attendees to be aware of parking options before their arrival.",
        cwuParkingApplicationLogo,
        "cwu-parking-application",
        null
    );

    static FUNCTION_LRL = new ProjectOption(
        "Function: LRL",
        "Function was founded on the idea of \"bringing the 'social' back to social media.\" A business major in my college sought me out to develop his mobile application idea. We co-owned, released and upkept this business for several years. He managed the business side, I developed the product.",
        functionLRLLogo,
        "function-lrl",
        null
    );
}