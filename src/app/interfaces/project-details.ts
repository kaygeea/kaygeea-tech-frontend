import { DemoType } from "./enums/demo-type";

export interface ProjectDetail {
    data: {
        id: Object;
        profile_id?: string;
        name: string;
        how: ProjectDetailContent[],
        why: ProjectDetailContent[],
        }
}

export interface ProjectDetailContent {
    title: string;
    content_parts: ContentParts[];
    position: Number;
    gains?: string[];
    links?: { [source: string]: string }[];
    media?: ProjectDetailMedia[];
    features?: string[];
}

export interface ContentParts {
    image?: ProjectDetailMedia;
    intro: string;
    main_one?: string;
    main_two?: string;
    conclusion: string;
    list_items?: ListItem[];
    link?: string;
}

export interface ListItem {
    list_title?: string;
    list_content: string;
}

interface ProjectDetailMedia {
    subject: string;
    alt: string;
    url: string;
    type: DemoType;
}
