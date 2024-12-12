import { Component, Input, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../interfaces/project';
import { ProjectDetailService } from '../services/project-detail.service';
import { ProjectDetailsNavComponent } from '../project-details-nav/project-details-nav.component';
import { ProjectDetail, ProjectDetailContent } from '../interfaces/project-details';
import { DemoType } from '../interfaces/enums/demo-type';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { DataService } from '../services/data.service';
import { FromKebabPipe } from '../utils/pipes/from-kebab.pipe';


@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [ProjectDetailsNavComponent, UpperCasePipe, TitleCasePipe, FromKebabPipe, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  @Input() public projects!: Project[];
  protected project!: Project;
  protected projectDetail!: ProjectDetail
  protected projectDetailScope!: ProjectDetailContent[];
  protected demoType = DemoType;
  public projectName!: string | null;
  public projectScope!: string | null;
  public sectionTitles!: string[];

  constructor(private projectDetailService: ProjectDetailService, private dataService: DataService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.projectName = param.get("projectName");
      this.projectScope = param.get("projectScope");
      this.project = this.projectDetailService.populateProject(this.projectName, this.projects);
      this.projectDetailService.fetchProjectDetails(this.projectName, this.project.details_id)
      .subscribe(projectDetails => {
        this.projectDetail = projectDetails;
        this.projectDetailScope = this.parseProjectScope(projectDetails, param.get("projectScope"));
        this.sectionTitles = this.dataService.groupProjectDetailsSectionTitles(this.projectDetailScope)
        console.log("Content Parts from project detail component", this.project);
        }
      )
    });
  }

  parseProjectScope(projectDetails: ProjectDetail, scopeKeyword: string | null) : ProjectDetailContent[] {
    return projectDetails?.[scopeKeyword as keyof Pick<ProjectDetail, 'why'  | 'how'>];
  }
}
