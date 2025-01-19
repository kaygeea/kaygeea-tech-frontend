import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { groupBy, mergeMap, toArray, reduce } from 'rxjs';
import { Skill, GroupedSkills } from '../interfaces/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  groupedSkills: GroupedSkills[] = []

  groupSkills(skills: Skill[], key: keyof Skill): Observable<{ [key: string]: Skill[] }> {
    return of(...skills).pipe(
      // Step 1: Group skills by the specified key
      groupBy(skill => skill[key]),

      // Step 2: Collect items in each group to arrays
      mergeMap(group => group.pipe(toArray())),

      // Step 3: Aggregate grouped arrays into a single object
      reduce((acc, groupedSkills) => {
        const groupKey = groupedSkills[0][key];
        acc[groupKey as string] = groupedSkills;
        return acc;
      }, {} as { [key: string]: Skill[] }) // Initial empty object
    );
  }
  


  constructor() { }
}
