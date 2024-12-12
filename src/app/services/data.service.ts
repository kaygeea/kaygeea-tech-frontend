import { Injectable } from '@angular/core';
import { GroupedSkills, Skill } from '../interfaces/skill';
import {  Observable, of, map } from 'rxjs';
import { ProjectDetailContent } from '../interfaces/project-details';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  groupSkills(skills: Skill[]): Observable<GroupedSkills[]> {
    return of(skills).pipe(
      map(skillsArray => {
        const grouped = skillsArray.reduce((acc, skill) => {
          const key = skill.class;
          if (!acc[key]) {
            acc[key] = [];
          }
          acc[key].push(skill);
          return acc;
        }, {} as { [key: string]: Skill[] });

        return Object.keys(grouped).map(key => ({
          key,
          values: grouped[key],
        })) as GroupedSkills[];
      })
    );
  };

  groupProjectDetailsSectionTitles(projectDetailContent: ProjectDetailContent[]) : string[] {
    const sectionTitles: string[] = [];
    
    projectDetailContent.forEach((section) => {
      sectionTitles.push(section.title);
    })

    return sectionTitles;
  }

  constructor() { }
}
