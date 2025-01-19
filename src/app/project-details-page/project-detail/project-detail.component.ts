import { Component, Input, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Project } from '../../interfaces/project';
import { ProjectDetailService } from '../../services/project-detail.service';
import { ProjectDetailsNavComponent } from '../project-details-nav/project-details-nav.component';
import { ProjectDetail, ProjectDetailContent } from '../../interfaces/project-details';
import { DemoType } from '../../interfaces/enums/demo-type';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { DataService } from '../../services/data.service';
import { FromKebabPipe } from '../../utils/pipes/from-kebab.pipe';
import { FooterComponent } from '../../home-page/footer/footer.component';
import { BrandLogo } from '../../interfaces/brand-logo';


@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [ProjectDetailsNavComponent, FooterComponent, UpperCasePipe, TitleCasePipe, FromKebabPipe, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  @Input() public projects!: Project[];
  @Input() public footerLogo!: BrandLogo;
  protected project!: Project;
  protected projectDetail!: ProjectDetail["data"]
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
        this.projectDetail = projectDetails.data;
        this.projectDetailScope = this.parseProjectScope(this.projectDetail, param.get("projectScope"));
        this.sectionTitles = this.dataService.groupProjectDetailsSectionTitles(this.projectDetailScope)
        }
      )
    });
  }

  parseProjectScope(projectDetails: ProjectDetail["data"], scopeKeyword: string | null) : ProjectDetailContent[] {
    return projectDetails?.[scopeKeyword as keyof Pick<ProjectDetail["data"], 'why'  | 'how'>];
  }
}
