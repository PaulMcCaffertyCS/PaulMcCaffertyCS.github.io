import greenCircuitry from "../../../assets/images/green_circuitry_1200x1200.jpg";

export default class ProjectOption {
    title: string;
    brief: string;
    link: string;
    preview: string;

    constructor(title: string, brief: string, link: string, preview: string) {
        this.title = title;
        this.brief = brief;
        this.link = link;
        this.preview = preview;
    }
    
    static CWU = new ProjectOption(
        "CWU Parking Application",
        "Made as my Capstone Project back in January-March of 2020, this was a prototype to assist peope with parking on campus.",
        "cwu-parking-application",
        greenCircuitry
    );

    static FUNCTION_LRL = new ProjectOption(
        "Function: LRL",
        "I always dreamt of owning a business. That's why when I was still a Senior in University and a business major approached me with an idea for \"bringing the social back to social media,\" I took to development.",
        "function-lrl",
        greenCircuitry
    );
}