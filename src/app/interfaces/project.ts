import { DemoType } from "./enums/demo-type";
import { ProjectDetail } from "./project-details";



export interface Project {
    demo: string;
    description: string;
    name: string;
    title: string;
    technologies: string[];
    demo_type: DemoType;
    link: string;
    details_id: string;
    status: ProjectStatus;
}

export enum ProjectStatus {
    ONGOING = 'in progress',
    COMPLETED = 'completed',
    PAUSED = 'paused',
    DEPLOYED = 'deployed',
}
