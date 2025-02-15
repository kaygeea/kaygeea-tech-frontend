import { BrandLogo } from "./brand-logo";
import { ContactDetail } from "./contact-detail";
import { Education } from "./education";
import { Project } from "./project";
import { Skill } from "./skill";

export interface About {
    intro: string;
    main_one: string;
    main_two: string;
    conclusion: string;
}

export interface Profile {
    data: {
        _id: string;
        logo: BrandLogo;
        first_name: string;
        other_names: string[];
        last_name: string;
        hero_pic: string;
        title: string[];
        resume: string;
        about: About;
        contacts: ContactDetail;
        skills: Skill[];
        projects: Project[];
        education: Education[];
    }   
}
