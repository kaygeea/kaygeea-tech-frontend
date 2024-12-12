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
    content_parts: ContentPart[];
    position: Number;
    gains?: string[];
    links?: { [source: string]: string }[];
    media?: ProjectDetailMedia[];
    features?: string[];
}

export interface ContentPart {
    main: string;
    image?: ProjectDetailMedia;
    conclusion?: string;
    list_items?: ListItem[];
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
