import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../interfaces/project';
import { ProjectDetail } from '../interfaces/project-details';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectDetailService {
  protected pd_url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  fetchProjectDetails(projectName: string | null, projectDetailId: string | null) : Observable<ProjectDetail> {  
    return this.http.get<ProjectDetail>(this.pd_url + projectName + '/' + projectDetailId);
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
}
