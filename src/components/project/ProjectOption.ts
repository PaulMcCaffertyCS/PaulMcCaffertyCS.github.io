import type ProjectProps from "./ProjectProps";

export default class ProjectOption {
    title: string;
    brief: string;

    constructor(title: string, brief: string) {
        this.title = title;
        this.brief = brief;
    }
    
    static CWU = new ProjectOption(
        "CWU Parking Application",
        "Made as my Capstone Project back in January-March of 2020, this was a prototype to assist peope with parking on campus."
    );

    static FUNCTION_LRL = new ProjectOption(
        "Function: LRL",
        "I always dreamt of owning a business. That's why when I was still a Senior in University and a business major approached me with an idea for \"bringing the social back to social media,\" I took to development."
    );

    toProjectProps(): ProjectProps {
        return { title: this.title, brief: this.brief };
    }
}