import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../interfaces/project';
import { ProjectDetail } from '../interfaces/project-details';
import { Observable, of, tap } from 'rxjs';
import { LsCacheService } from './ls-cache.service';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProjectDetailService {
  protected pd_url = environment.railwayProjectDetailApiUrl;

  constructor(
    private readonly http: HttpClient,
    private readonly lsiCacheService: LsCacheService,
  ) {}

  fetchProjectDetails(projectName: string | null, projectDetailId: string | null) : Observable<ProjectDetail> {
    const cachedProjectDetail = this.lsiCacheService.getProjectDetail(projectName as string);

    if(cachedProjectDetail) {
      return of(cachedProjectDetail);
    } else {
      return this.http.get<ProjectDetail>(this.pd_url + projectName + '/' + projectDetailId)
      .pipe(tap(response => {
        this.lsiCacheService.addProjectDetail(projectName as string, response);
      }));
    }
    
  }

  populateProject(projectName: string | null, projects: Project[]) : Project {
    try {
      if (projects && projectName) {
        const foundProject = projects.find(project => project.name === projectName);
  
        if (!foundProject) {
          throw new Error(`Project with name "${projectName}" not found.`);
        }
        return foundProject;
      } else {
        throw new Error(`Incomplete number of arguments. You did not provide "${ projectName === null ? "project name" : "projects" }"`);
      }
    } catch (err) {
      console.error(err);
      throw new Error("Incomplete arguments", { cause: err });
    } 
  }

  private getProjectNames(projects: Project[]): String[] {
    const projectNames: String[] = [];

    for(const project of projects) {
      projectNames.push(project.name)
    }
    return projectNames;
  }
}
