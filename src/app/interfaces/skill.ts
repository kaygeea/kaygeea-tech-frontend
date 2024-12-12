export interface Skill {
    class: "soft skill" | "technical skill";
    type?: string;
    focus?: string;
    branch?: string;
    detail: string;
}

export interface GroupedSkills {
    key: string;
    values: Skill[];
}