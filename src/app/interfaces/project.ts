import { DemoType } from "./enums/demo-type";
import { ProjectDetail } from "./project-details";

export enum ProjectStatus {
    ONGOING = 'in progress',
    COMPLETED = 'completed',
    PAUSED = 'paused',
    DEPLOYED = 'deployed',
}

export enum ProjectFocus {
    BACKEND = "backend",
    FRONTEND = "frontend",
    FULLSTACK = "fullstack",
}

export interface Project {
    demo: string;
    description: string;
    abstract: {intro: string, conclusion: string}
    name: string;
    title: string;
    technologies: string[];
    demo_type: DemoType;
    link: string;
    focus: ProjectFocus;
    codebase: string;
    codebase_fe?: string;
    details_id: string;
    status: ProjectStatus;
}
